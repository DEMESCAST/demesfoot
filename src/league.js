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

  simulateMatch(homeId, awayId) {
    const home = clubs.find(c => c.id === homeId);
    const away = clubs.find(c => c.id === awayId);
    if (!home || !away) return { homeGoals: 0, awayGoals: 0, events: [] };

    const homeStr = home.performance.overall * 1.1 + Math.random() * 15;
    const awayStr = away.performance.overall + Math.random() * 15;

    const homeGoals = Math.max(0, Math.round((homeStr - awayStr + 40) / 15 * (0.5 + Math.random())));
    const awayGoals = Math.max(0, Math.round((awayStr - homeStr + 40) / 15 * (0.5 + Math.random())));

    const events = [];

    // Generate goal scorers
    for (let i = 0; i < homeGoals; i++) {
      const scorer = this.pickScorer(home);
      const assister = Math.random() > 0.4 ? this.pickAssister(home, scorer) : null;
      const minute = Math.floor(Math.random() * 90) + 1;
      events.push({ type: 'goal', team: 'home', player: scorer.name, playerId: scorer.id, assist: assister ? assister.name : null, assistId: assister ? assister.id : null, minute });
    }
    for (let i = 0; i < awayGoals; i++) {
      const scorer = this.pickScorer(away);
      const assister = Math.random() > 0.4 ? this.pickAssister(away, scorer) : null;
      const minute = Math.floor(Math.random() * 90) + 1;
      events.push({ type: 'goal', team: 'away', player: scorer.name, playerId: scorer.id, assist: assister ? assister.name : null, assistId: assister ? assister.id : null, minute });
    }

    // Generate cards
    const homeCards = Math.floor(Math.random() * 3);
    const awayCards = Math.floor(Math.random() * 3);
    for (let i = 0; i < homeCards; i++) {
      const player = this.pickRandomPlayer(home);
      const isRed = Math.random() < 0.08;
      const minute = Math.floor(Math.random() * 90) + 1;
      events.push({ type: isRed ? 'red' : 'yellow', team: 'home', player: player.name, playerId: player.id, minute });
    }
    for (let i = 0; i < awayCards; i++) {
      const player = this.pickRandomPlayer(away);
      const isRed = Math.random() < 0.08;
      const minute = Math.floor(Math.random() * 90) + 1;
      events.push({ type: isRed ? 'red' : 'yellow', team: 'away', player: player.name, playerId: player.id, minute });
    }

    events.sort((a, b) => a.minute - b.minute);

    return { homeGoals, awayGoals, events };
  }

  pickScorer(club) {
    const attackers = club.squad.filter(p => p.pos === 'FWD');
    const midfielders = club.squad.filter(p => p.pos === 'MID');
    const defenders = club.squad.filter(p => p.pos === 'DEF');
    const r = Math.random();
    if (r < 0.55 && attackers.length) return attackers[Math.floor(Math.random() * attackers.length)];
    if (r < 0.80 && midfielders.length) return midfielders[Math.floor(Math.random() * midfielders.length)];
    if (defenders.length) return defenders[Math.floor(Math.random() * defenders.length)];
    return club.squad[Math.floor(Math.random() * club.squad.length)];
  }

  pickAssister(club, scorer) {
    const eligible = club.squad.filter(p => p.id !== scorer.id && p.pos !== 'GK');
    if (!eligible.length) return null;
    return eligible[Math.floor(Math.random() * eligible.length)];
  }

  pickRandomPlayer(club) {
    return club.squad[Math.floor(Math.random() * club.squad.length)];
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

    // Increment appearances for starting players (all squad members for simplicity)
    home.squad.forEach(p => p.appearances++);
    away.squad.forEach(p => p.appearances++);

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
