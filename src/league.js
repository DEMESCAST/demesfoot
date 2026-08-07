import { clubs, getClubsByDivision } from './data.js';

export class League {
  constructor(country, division) {
    this.countryId = country;
    this.divisionId = division;
    this.teams = getClubsByDivision(country, division);
    this.fixtures = [];
    this.results = [];
    this.table = [];
    this.currentRound = 0;
    this.totalRounds = (this.teams.length - 1) * 2;
    this.season = 1;
    this.cup = null;
    this.generateFixtures();
    this.initTable();
  }

  generateFixtures() {
    const n = this.teams.length;
    const ids = this.teams.map(t => t.id);
    const rounds = [];

    for (let r = 0; r < n - 1; r++) {
      const round = [];
      for (let i = 0; i < n / 2; i++) {
        const home = ids[i];
        const away = ids[n - 1 - i];
        round.push({ home, away, played: false, homeGoals: 0, awayGoals: 0, events: [] });
      }
      rounds.push(round);
      const last = ids.pop();
      ids.splice(1, 0, last);
    }

    const turno = [...rounds];
    for (const round of turno) {
      const returnRound = round.map(m => ({
        home: m.away, away: m.home, played: false, homeGoals: 0, awayGoals: 0, events: []
      }));
      rounds.push(returnRound);
    }

    this.fixtures = rounds;
  }

  initTable() {
    this.table = this.teams.map(t => ({
      id: t.id, name: t.name, abbr: t.abbr, colors: t.colors,
      played: 0, won: 0, drawn: 0, lost: 0,
      goalsFor: 0, goalsAgainst: 0, goalDiff: 0,
      points: 0, form: []
    }));
  }

  initCup() {
    if (this.cup) return;
    const teamIds = this.teams.map(t => t.id);
    const shuffled = teamIds.sort(() => Math.random() - 0.5);
    const rounds = [];

    const firstRound = [];
    for (let i = 0; i < shuffled.length; i += 2) {
      if (i + 1 < shuffled.length) {
        firstRound.push({ home: shuffled[i], away: shuffled[i + 1], played: false, homeGoals: 0, awayGoals: 0, events: [] });
      } else {
        firstRound.push({ home: shuffled[i], away: null, played: false, homeGoals: 3, awayGoals: 0, events: [], bye: true });
      }
    }
    rounds.push(firstRound);

    let current = firstRound;
    while (current.length > 1) {
      const winners = current.map(m => m.bye ? m.home : (m.homeGoals >= m.awayGoals ? m.home : m.away));
      const next = [];
      for (let i = 0; i < winners.length; i += 2) {
        if (i + 1 < winners.length) {
          next.push({ home: winners[i], away: winners[i + 1], played: false, homeGoals: 0, awayGoals: 0, events: [] });
        } else {
          next.push({ home: winners[i], away: null, played: false, homeGoals: 3, awayGoals: 0, events: [], bye: true });
        }
      }
      rounds.push(next);
      current = next;
    }

    this.cup = { rounds, currentRound: 0, winner: null };
  }

  simulateCupRound() {
    if (!this.cup || this.cup.winner) return null;
    const round = this.cup.rounds[this.cup.currentRound];
    if (!round) return null;

    const results = [];
    for (const match of round) {
      if (match.bye) {
        match.played = true;
        results.push({ ...match });
        continue;
      }
      if (!match.away) {
        match.played = true;
        match.homeGoals = 3;
        match.awayGoals = 0;
        results.push({ ...match, homeGoals: 3, awayGoals: 0, events: [], stats: {} });
        continue;
      }
      const result = this.simulateMatch(match.home, match.away, true);
      match.homeGoals = result.homeGoals;
      match.awayGoals = result.awayGoals;
      match.events = result.events;
      match.stats = result.stats;
      match.extraTime = result.extraTime;
      match.penalties = result.penalties;
      match.penaltyResult = result.penaltyResult;
      match.played = true;
      this.updatePlayerStats(match);
      results.push({ ...match, events: [...result.events] });
    }

    const winners = round.map(m => {
      if (m.bye) return m.home;
      if (m.penaltyResult) {
        return m.penaltyResult.homeScore > m.penaltyResult.awayScore ? m.home : m.away;
      }
      return m.homeGoals >= m.awayGoals ? m.home : m.away;
    });
    this.cup.currentRound++;

    if (winners.length === 1) {
      this.cup.winner = winners[0];
    } else {
      const next = [];
      for (let i = 0; i < winners.length; i += 2) {
        if (i + 1 < winners.length) {
          next.push({ home: winners[i], away: winners[i + 1], played: false, homeGoals: 0, awayGoals: 0, events: [] });
        } else {
          next.push({ home: winners[i], away: null, played: false, homeGoals: 3, awayGoals: 0, events: [], bye: true });
        }
      }
      this.cup.rounds.push(next);
    }

    return results;
  }

  getCupWinner() {
    if (!this.cup || !this.cup.winner) return null;
    return clubs.find(c => c.id === this.cup.winner);
  }

  simulateMatch(homeId, awayId, isCup = false) {
    const home = clubs.find(c => c.id === homeId);
    const away = clubs.find(c => c.id === awayId);
    if (!home || !away) return { homeGoals: 0, awayGoals: 0, events: [], stats: {}, extraTime: false, penalties: false };

    const homeOvr = home.performance.overall * 1.08 + home.performance.fitness * 0.1;
    const awayOvr = away.performance.overall + away.performance.fitness * 0.1;

    const homePossBase = 45 + (homeOvr - awayOvr) * 0.8 + (Math.random() - 0.5) * 12;
    const homePoss = Math.round(Math.max(30, Math.min(70, homePossBase)));
    const awayPoss = 100 - homePoss;

    const homeAttack = home.performance.attack * 0.4 + home.performance.midfield * 0.3 + homeOvr * 0.3;
    const awayAttack = away.performance.attack * 0.4 + away.performance.midfield * 0.3 + awayOvr * 0.3;

    const homeShots = Math.max(2, Math.round(homeAttack / 8 + Math.random() * 8 + (homePoss / 10)));
    const awayShots = Math.max(2, Math.round(awayAttack / 8 + Math.random() * 8 + (awayPoss / 10)));
    const homeOnTarget = Math.max(1, Math.round(homeShots * (0.3 + Math.random() * 0.3)));
    const awayOnTarget = Math.max(1, Math.round(awayShots * (0.3 + Math.random() * 0.3)));

    const homeCorners = Math.max(0, Math.round(homeShots * 0.35 + Math.random() * 4));
    const awayCorners = Math.max(0, Math.round(awayShots * 0.35 + Math.random() * 4));

    const homeFouls = Math.max(3, Math.round(10 + Math.random() * 10 - (homePoss > 55 ? 3 : 0)));
    const awayFouls = Math.max(3, Math.round(10 + Math.random() * 10 - (awayPoss > 55 ? 3 : 0)));

    const homeGoalChance = homeOnTarget * 0.35 + (homeOvr / 100) * 1.5;
    const awayGoalChance = awayOnTarget * 0.35 + (awayOvr / 100) * 1.5;
    let homeGoals = Math.max(0, Math.min(7, Math.round(homeGoalChance * (0.4 + Math.random() * 0.8))));
    let awayGoals = Math.max(0, Math.min(7, Math.round(awayGoalChance * (0.4 + Math.random() * 0.8))));

    const events = [];
    const homeLineup = home.squad.filter(p => p.injured === 0).sort((a, b) => b.ovr - a.ovr);
    const awayLineup = away.squad.filter(p => p.injured === 0).sort((a, b) => b.ovr - a.ovr);
    const homePlaying = homeLineup.slice(0, 11);
    const awayPlaying = awayLineup.slice(0, 11);
    const homeBench = homeLineup.slice(11, 16);
    const awayBench = awayLineup.slice(11, 16);

    for (let i = 0; i < homeGoals; i++) {
      const scorer = this.pickScorerFromLineup(homePlaying);
      const assister = Math.random() > 0.4 ? this.pickAssisterFromLineup(homePlaying, scorer) : null;
      const minute = Math.floor(Math.random() * 90) + 1;
      events.push({ type: 'goal', team: 'home', player: scorer.name, playerId: scorer.id, assist: assister?.name || null, assistId: assister?.id || null, minute });
    }
    for (let i = 0; i < awayGoals; i++) {
      const scorer = this.pickScorerFromLineup(awayPlaying);
      const assister = Math.random() > 0.4 ? this.pickAssisterFromLineup(awayPlaying, scorer) : null;
      const minute = Math.floor(Math.random() * 90) + 1;
      events.push({ type: 'goal', team: 'away', player: scorer.name, playerId: scorer.id, assist: assister?.name || null, assistId: assister?.id || null, minute });
    }

    const homeYellowCount = Math.floor(Math.random() * 3) + (homeFouls > 14 ? 1 : 0);
    const awayYellowCount = Math.floor(Math.random() * 3) + (awayFouls > 14 ? 1 : 0);
    for (let i = 0; i < homeYellowCount; i++) {
      const player = this.pickRandomFromLineup(homePlaying);
      const minute = Math.floor(Math.random() * 90) + 1;
      events.push({ type: 'yellow', team: 'home', player: player.name, playerId: player.id, minute });
    }
    for (let i = 0; i < awayYellowCount; i++) {
      const player = this.pickRandomFromLineup(awayPlaying);
      const minute = Math.floor(Math.random() * 90) + 1;
      events.push({ type: 'yellow', team: 'away', player: player.name, playerId: player.id, minute });
    }

    if (Math.random() < 0.12) {
      const team = Math.random() < 0.5 ? 'home' : 'away';
      const lineup = team === 'home' ? homePlaying : awayPlaying;
      const player = this.pickRandomFromLineup(lineup);
      const minute = Math.floor(Math.random() * 90) + 1;
      events.push({ type: 'red', team, player: player.name, playerId: player.id, minute });
    }

    const homeSubs = [];
    const awaySubs = [];
    for (let i = 0; i < 3 && i < homeBench.length; i++) {
      const minute = 45 + Math.floor(Math.random() * 45);
      const eligible = homePlaying.filter(p => !homeSubs.find(s => s.outId === p.id));
      const outPlayer = this.pickRandomFromLineup(eligible);
      const inPlayer = homeBench[i];
      homeSubs.push({ minute, out: outPlayer.name, outId: outPlayer.id, in: inPlayer.name, inId: inPlayer.id });
      events.push({ type: 'sub', team: 'home', player: `${inPlayer.name} ↓ ${outPlayer.name}`, minute });
    }
    for (let i = 0; i < 3 && i < awayBench.length; i++) {
      const minute = 45 + Math.floor(Math.random() * 45);
      const eligible = awayPlaying.filter(p => !awaySubs.find(s => s.outId === p.id));
      const outPlayer = this.pickRandomFromLineup(eligible);
      const inPlayer = awayBench[i];
      awaySubs.push({ minute, out: outPlayer.name, outId: outPlayer.id, in: inPlayer.name, inId: inPlayer.id });
      events.push({ type: 'sub', team: 'away', player: `${inPlayer.name} ↓ ${outPlayer.name}`, minute });
    }

    events.sort((a, b) => a.minute - b.minute);

    let extraTime = false;
    let penalties = false;
    let penaltyResult = null;

    if (isCup && homeGoals === awayGoals) {
      extraTime = true;
      const homeET = Math.round(homeGoalChance * 0.3 * (0.5 + Math.random()));
      const awayET = Math.round(awayGoalChance * 0.3 * (0.5 + Math.random()));
      homeGoals += homeET;
      awayGoals += awayET;
      for (let i = 0; i < homeET; i++) {
        const scorer = this.pickScorerFromLineup(homePlaying);
        events.push({ type: 'goal', team: 'home', player: scorer.name, playerId: scorer.id, assist: null, assistId: null, minute: 90 + Math.floor(Math.random() * 30) + 1 });
      }
      for (let i = 0; i < awayET; i++) {
        const scorer = this.pickScorerFromLineup(awayPlaying);
        events.push({ type: 'goal', team: 'away', player: scorer.name, playerId: scorer.id, assist: null, assistId: null, minute: 90 + Math.floor(Math.random() * 30) + 1 });
      }
      events.sort((a, b) => a.minute - b.minute);
      if (homeGoals === awayGoals) {
        penalties = true;
        const homePenSkill = homeOvr * 0.6 + 40;
        const awayPenSkill = awayOvr * 0.6 + 40;
        let hScore = 0, aScore = 0;
        const penEvents = [];
        for (let i = 0; i < 5; i++) {
          if (Math.random() * 100 < homePenSkill) { hScore++; penEvents.push({ team: 'home', scored: true }); } else { penEvents.push({ team: 'home', scored: false }); }
          if (Math.random() * 100 < awayPenSkill) { aScore++; penEvents.push({ team: 'away', scored: true }); } else { penEvents.push({ team: 'away', scored: false }); }
          if (hScore > aScore + (5 - i) || aScore > hScore + (5 - i)) break;
        }
        while (hScore === aScore && penEvents.length < 10) {
          if (Math.random() * 100 < homePenSkill) { hScore++; penEvents.push({ team: 'home', scored: true }); } else { penEvents.push({ team: 'home', scored: false }); }
          if (hScore !== aScore) break;
          if (Math.random() * 100 < awayPenSkill) { aScore++; penEvents.push({ team: 'away', scored: true }); } else { penEvents.push({ team: 'away', scored: false }); }
        }
        penaltyResult = { homeScore: hScore, awayScore: aScore, events: penEvents };
        if (hScore > aScore) homeGoals++; else awayGoals++;
      }
    }

    return {
      homeGoals, awayGoals, events,
      stats: {
        possession: { home: homePoss, away: awayPoss },
        shots: { home: homeShots, away: awayShots },
        shotsOnTarget: { home: homeOnTarget, away: awayOnTarget },
        corners: { home: homeCorners, away: awayCorners },
        fouls: { home: homeFouls, away: awayFouls },
        yellowCards: { home: homeYellowCount, away: awayYellowCount },
        redCards: { home: events.filter(e => e.type === 'red' && e.team === 'home').length, away: events.filter(e => e.type === 'red' && e.team === 'away').length },
        substitutions: { home: homeSubs, away: awaySubs }
      },
      extraTime, penalties, penaltyResult
    };
  }

  pickScorerFromLineup(lineup) {
    if (!lineup.length) return { id: 0, name: '???' };
    const fwds = lineup.filter(p => p.pos === 'FWD');
    const mids = lineup.filter(p => p.pos === 'MID');
    const defs = lineup.filter(p => p.pos === 'DEF');
    const r = Math.random();
    if (r < 0.55 && fwds.length) return fwds[Math.floor(Math.random() * fwds.length)];
    if (r < 0.80 && mids.length) return mids[Math.floor(Math.random() * mids.length)];
    if (defs.length) return defs[Math.floor(Math.random() * defs.length)];
    return lineup[Math.floor(Math.random() * lineup.length)];
  }

  pickAssisterFromLineup(lineup, scorer) {
    const eligible = lineup.filter(p => p.id !== scorer.id && p.pos !== 'GK');
    if (!eligible.length) return null;
    return eligible[Math.floor(Math.random() * eligible.length)];
  }

  pickRandomFromLineup(lineup) {
    if (!lineup.length) return { id: 0, name: '???' };
    return lineup[Math.floor(Math.random() * lineup.length)];
  }

  simulateRound() {
    if (this.currentRound >= this.fixtures.length) return null;

    const round = this.fixtures[this.currentRound];
    const roundResults = [];

    for (const match of round) {
      if (!match.played) {
        const result = this.simulateMatch(match.home, match.away);
        match.homeGoals = result.homeGoals;
        match.awayGoals = result.awayGoals;
        match.events = result.events;
        match.stats = result.stats;
        match.extraTime = result.extraTime;
        match.penalties = result.penalties;
        match.penaltyResult = result.penaltyResult;
        match.played = true;
        this.updateTable(match);
        this.updatePlayerStats(match);
        roundResults.push({ ...match, events: [...result.events] });
      }
    }

    this.results.push(roundResults);
    this.currentRound++;
    return roundResults;
  }

  updatePlayerStats(match) {
    const home = clubs.find(c => c.id === match.home);
    const away = clubs.find(c => c.id === match.away);
    if (!home || !away) return;

    home.squad.filter(p => p.injured === 0).forEach(p => p.appearances++);
    away.squad.filter(p => p.injured === 0).forEach(p => p.appearances++);

    for (const event of match.events) {
      const team = event.team === 'home' ? home : away;
      const player = team.squad.find(p => p.id === event.playerId);
      if (!player) continue;

      if (event.type === 'goal') {
        player.goals++;
      } else if (event.type === 'yellow') {
        player.yellowCards++;
      } else if (event.type === 'red') {
        player.redCards++;
      }

      if (event.assistId) {
        const assister = team.squad.find(p => p.id === event.assistId);
        if (assister) assister.assists++;
      }
    }
  }

  updateTable(match) {
    const home = this.table.find(t => t.id === match.home);
    const away = this.table.find(t => t.id === match.away);
    if (!home || !away) return;

    home.played++;
    away.played++;
    home.goalsFor += match.homeGoals;
    home.goalsAgainst += match.awayGoals;
    away.goalsFor += match.awayGoals;
    away.goalsAgainst += match.homeGoals;

    if (match.homeGoals > match.awayGoals) {
      home.won++; home.points += 3;
      away.lost++;
      home.form.push('W'); away.form.push('L');
    } else if (match.homeGoals < match.awayGoals) {
      away.won++; away.points += 3;
      home.lost++;
      home.form.push('L'); away.form.push('W');
    } else {
      home.drawn++; away.drawn++;
      home.points++; away.points++;
      home.form.push('D'); away.form.push('D');
    }

    home.goalDiff = home.goalsFor - home.goalsAgainst;
    away.goalDiff = away.goalsFor - away.goalsAgainst;

    if (home.form.length > 5) home.form.shift();
    if (away.form.length > 5) away.form.shift();
  }

  getSortedTable() {
    return [...this.table].sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      if (b.goalDiff !== a.goalDiff) return b.goalDiff - a.goalDiff;
      return b.goalsFor - a.goalsFor;
    });
  }

  getCurrentRound() {
    if (this.currentRound >= this.fixtures.length) return null;
    return this.fixtures[this.currentRound].map(m => {
      const home = clubs.find(c => c.id === m.home);
      const away = clubs.find(c => c.id === m.away);
      return {
        ...m,
        homeName: home?.name || m.home,
        homeAbbr: home?.abbr || '?',
        homeColors: home?.colors || { primary: '#333', secondary: '#fff' },
        awayName: away?.name || m.away,
        awayAbbr: away?.abbr || '?',
        awayColors: away?.colors || { primary: '#333', secondary: '#fff' }
      };
    });
  }

  getLastResults() {
    if (this.results.length === 0) return [];
    return this.results[this.results.length - 1].map(m => {
      const home = clubs.find(c => c.id === m.home);
      const away = clubs.find(c => c.id === m.away);
      return {
        ...m,
        homeName: home?.name || m.home,
        homeAbbr: home?.abbr || '?',
        homeColors: home?.colors || { primary: '#333', secondary: '#fff' },
        awayName: away?.name || m.away,
        awayAbbr: away?.abbr || '?',
        awayColors: away?.colors || { primary: '#333', secondary: '#fff' }
      };
    });
  }

  getTeamStats(teamId) {
    return this.table.find(t => t.id === teamId) || null;
  }

  getTopScorers() {
    const all = [];
    for (const club of this.teams) {
      for (const p of club.squad) {
        if (p.goals > 0) all.push({ ...p, clubName: club.name, clubAbbr: club.abbr, clubColors: club.colors });
      }
    }
    return all.sort((a, b) => b.goals - a.goals).slice(0, 10);
  }

  getMatchDetails(homeId, awayId) {
    for (const round of this.results) {
      for (const m of round) {
        if (m.home === homeId && m.away === awayId) {
          const home = clubs.find(c => c.id === m.home);
          const away = clubs.find(c => c.id === m.away);
          return {
            ...m,
            homeName: home?.name || m.home,
            homeAbbr: home?.abbr || '?',
            homeColors: home?.colors || { primary: '#333', secondary: '#fff' },
            awayName: away?.name || m.away,
            awayAbbr: away?.abbr || '?',
            awayColors: away?.colors || { primary: '#333', secondary: '#fff' }
          };
        }
      }
    }
    return null;
  }
}
