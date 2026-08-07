import { clubs, getClubsByDivision } from './data.js';

export class League {
  constructor(country, division) {
    this.teams = getClubsByDivision(country, division);
    this.fixtures = [];
    this.results = [];
    this.table = [];
    this.currentRound = 0;
    this.totalRounds = (this.teams.length - 1) * 2;
    this.generateFixtures();
    this.initTable();
  }

  generateFixtures() {
    const n = this.teams.length;
    const ids = this.teams.map(t => t.id);
    const rounds = [];

    // Round-robin (turno)
    for (let r = 0; r < n - 1; r++) {
      const round = [];
      for (let i = 0; i < n / 2; i++) {
        const home = ids[i];
        const away = ids[n - 1 - i];
        round.push({ home, away, played: false, homeGoals: 0, awayGoals: 0 });
      }
      rounds.push(round);
      // Rotate (keep first fixed)
      const last = ids.pop();
      ids.splice(1, 0, last);
    }

    // Return (returno) - swap home/away
    const turno = [...rounds];
    for (const round of turno) {
      const returnRound = round.map(m => ({
        home: m.away, away: m.home, played: false, homeGoals: 0, awayGoals: 0
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
    if (!home || !away) return { homeGoals: 0, awayGoals: 0 };

    // Strength based on overall + home advantage
    const homeStr = home.performance.overall * 1.1 + Math.random() * 15;
    const awayStr = away.performance.overall + Math.random() * 15;

    // Goals based on strength difference
    const homeGoals = Math.max(0, Math.round((homeStr - awayStr + 40) / 15 * (0.5 + Math.random())));
    const awayGoals = Math.max(0, Math.round((awayStr - homeStr + 40) / 15 * (0.5 + Math.random())));

    return { homeGoals, awayGoals };
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
        match.played = true;
        this.updateTable(match);
        roundResults.push({ ...match });
      }
    }

    this.results.push(roundResults);
    this.currentRound++;
    return roundResults;
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

    // Keep only last 5 form
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
}
