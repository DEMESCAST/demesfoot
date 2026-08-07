import './style.css';
import { countries, clubs, getClubsByDivision, formatMoney, reputationText, fanText } from './data.js';
import { League } from './league.js';

const $ = s => document.querySelector(s);
const svg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>`;
const backSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>`;

class App {
  constructor() {
    this.el = $('#app');
    this.history = [];
    this.current = null;
    this.league = null;
    this.userClubId = null;
  }

  render(screen, params = {}) {
    if (this.current) this.history.push(this.current);
    this.current = screen;
    this.el.innerHTML = '';
    const html = screens[screen](this, params);
    this.el.innerHTML = html;
    this.el.firstChild?.classList.add('screen');
  }

  go(name, params = {}) {
    this.render(name, params);
  }

  startCareer(country, division, club) {
    this.userClubId = club.id;
    this.league = new League(country.id, division.id);
    this.go('career', { country, division, club });
  }

  simulateRound() {
    if (!this.league) return;
    return this.league.simulateRound();
  }
}

// ─── MENU ───
function menuScreen(app) {
  return `
  <div class="menu">
    <div class="logo"><h1>DEMESFOOT</h1><p>Football Manager</p></div>
    <nav>
      <button class="menu-btn primary" onclick="window._app.go('country')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>
        Novo Jogo
      </button>
      <button class="menu-btn" onclick="alert('Em breve!')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        Continuar
      </button>
      <button class="menu-btn" onclick="alert('Em breve!')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>
        Carregar
      </button>
      <button class="menu-btn" onclick="alert('Em breve!')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 003.09 15H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.09V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
        Configurações
      </button>
    </nav>
    <div class="menu-footer">DEMESFOOT v1.0 © 2026</div>
  </div>`;
}

// ─── COUNTRY ───
function countryScreen(app) {
  const steps = `<div class="steps"><span class="step active">1</span><span class="step-line"></span><span class="step">2</span><span class="step-line"></span><span class="step">3</span></div>`;
  const cards = countries.map(c => `
    <div class="card" onclick="window._app.go('division',{country:window._data.countries.find(x=>x.id==='${c.id}')})">
      <span class="flag">${c.flag}</span>
      <div class="info"><h3>${c.name}</h3><p>${c.divisions.length} divisões</p></div>
      <span class="arrow">${svg}</span>
    </div>`).join('');
  return `<div class="ng"><div class="ng-head"><button class="back-btn" onclick="window._app.go('menu')">${backSvg}</button>${steps}<h2>Escolha o País</h2></div><div class="ng-body"><div class="card-grid">${cards}</div></div><div class="ng-foot">Selecione o país para continuar</div></div>`;
}

// ─── DIVISION ───
function divisionScreen(app, { country }) {
  const steps = `<div class="steps"><span class="step done">✓</span><span class="step-line done"></span><span class="step active">2</span><span class="step-line"></span><span class="step">3</span></div>`;
  const cards = country.divisions.map(d => `
    <div class="card ${d.available ? '' : 'disabled'}" onclick="${d.available ? `window._app.go('club-select',{country:window._data.countries.find(x=>x.id==='${country.id}'),division:window._data.countries.find(x=>x.id==='${country.id}').divisions.find(x=>x.id==='${d.id}')})` : ''}">
      <span class="tier">${d.tier}ª</span>
      <div class="info"><h3>${d.name}</h3>${d.available ? '' : '<p>Em breve</p>'}</div>
      ${d.available ? `<span class="arrow">${svg}</span>` : ''}
    </div>`).join('');
  return `<div class="ng"><div class="ng-head"><button class="back-btn" onclick="window._app.go('country')">${backSvg}</button>${steps}<h2>Escolha a Divisão</h2><span style="margin-left:8px;color:var(--text2)">${country.flag} ${country.name}</span></div><div class="ng-body"><div class="card-grid">${cards}</div></div><div class="ng-foot">Selecione a divisão do campeonato</div></div>`;
}

// ─── CLUB SELECT ───
function clubSelectScreen(app, { country, division }) {
  const clubList = getClubsByDivision(country.id, division.id);
  const steps = `<div class="steps"><span class="step done">✓</span><span class="step-line done"></span><span class="step done">✓</span><span class="step-line done"></span><span class="step active">3</span></div>`;
  const cards = clubList.map(c => `
    <div class="card" onclick="window._app.go('club-info',{country:window._data.countries.find(x=>x.id==='${country.id}'),division:window._data.countries.find(x=>x.id==='${country.id}').divisions.find(x=>x.id==='${division.id}'),club:window._data.clubs.find(x=>x.id==='${c.id}')})">
      <div class="club-badge" style="background:${c.colors.primary};color:${c.colors.secondary}">${c.abbr[0]}</div>
      <div class="info"><h3>${c.name}</h3><p>${c.city}</p></div>
      <span class="arrow">${svg}</span>
    </div>`).join('');
  return `<div class="ng"><div class="ng-head"><button class="back-btn" onclick="window._app.go('division',{country:window._data.countries.find(x=>x.id==='${country.id}')})">${backSvg}</button>${steps}<h2>Escolha seu Clube</h2><span style="margin-left:8px;color:var(--text2)">${country.flag} ${division.name}</span></div><div class="ng-body"><div class="card-grid">${cards}</div></div><div class="ng-foot">Selecione o clube para gerenciar</div></div>`;
}

// ─── CLUB INFO ───
function clubInfoScreen(app, { country, division, club }) {
  const stats = `
    <div class="info-grid">
      <div class="info-box"><div class="label">Fundação</div><div class="value">${club.founded}</div></div>
      <div class="info-box"><div class="label">Divisão</div><div class="value">${division.name}</div></div>
      <div class="info-box"><div class="label">Estádio</div><div class="value">${club.stadium.name}</div></div>
      <div class="info-box"><div class="label">Capacidade</div><div class="value">${club.stadium.capacity.toLocaleString('pt-BR')}</div></div>
      <div class="info-box"><div class="label">Saldo</div><div class="value money">${formatMoney(club.budget)}</div></div>
      <div class="info-box"><div class="label">Reputação</div><div class="value">${club.reputation} · ${reputationText(club.reputation)}</div></div>
      <div class="info-box"><div class="label">Torcida</div><div class="value">${fanText(club.fanLevel)}</div></div>
      <div class="info-box"><div class="label">Objetivo</div><div class="value">${club.objective}</div></div>
    </div>`;
  return `<div class="ng"><div class="ng-head"><button class="back-btn" onclick="window._app.go('club-select',{country:window._data.countries.find(x=>x.id==='${country.id}'),division:window._data.countries.find(x=>x.id==='${country.id}').divisions.find(x=>x.id==='${division.id}')})">${backSvg}</button><h2>Confirme sua Escolha</h2></div><div class="ng-body"><div class="club-info-card"><div class="club-info-top"><div class="club-badge" style="background:${club.colors.primary};color:${club.colors.secondary};width:72px;height:72px;font-size:1.5rem;border-radius:16px;display:flex;align-items:center;justify-content:center;font-family:var(--font-logo);font-weight:900">${club.abbr[0]}</div><div><h1>${club.name}</h1><p>${club.city} · ${country.flag} ${country.name}</p></div></div>${stats}<div class="actions"><button class="btn btn-secondary" onclick="window._app.go('club-select',{country:window._data.countries.find(x=>x.id==='${country.id}'),division:window._data.countries.find(x=>x.id==='${country.id}').divisions.find(x=>x.id==='${division.id}')})">Trocar Clube</button><button class="btn btn-primary" onclick="window._app.startCareer(window._data.countries.find(x=>x.id==='${country.id}'),window._data.countries.find(x=>x.id==='${country.id}').divisions.find(x=>x.id==='${division.id}'),window._data.clubs.find(x=>x.id==='${club.id}'))">Iniciar Carreira</button></div></div></div></div>`;
}

// ─── FORM HELPERS ───
function formBadge(f) {
  return f.map(r => `<span class="form-${r.toLowerCase()}">${r}</span>`).join('');
}
function posClass(p) { return p === 'GK' ? 'gk' : p === 'DEF' ? 'def' : p === 'MID' ? 'mid' : 'fwd'; }
function posLabel(p) { return p === 'GK' ? 'GOL' : p === 'DEF' ? 'DEF' : p === 'MID' ? 'MEI' : 'ATA'; }

// ─── CAREER ───
function careerScreen(app, { country, division, club }) {
  const league = app.league;
  const nextRound = league ? league.getCurrentRound() : null;
  const lastResults = league ? league.getLastResults() : [];
  const teamStats = league ? league.getTeamStats(club.id) : null;
  const roundNum = league ? league.currentRound : 0;
  const totalRounds = league ? league.totalRounds : 0;
  const isFinished = league ? roundNum >= totalRounds : false;

  // Next round matches
  let nextRoundHtml = '';
  if (nextRound && !isFinished) {
    nextRoundHtml = `<div class="match-list">${nextRound.map(m => `
      <div class="match-card">
        <div class="match-team home" style="color:${m.homeColors.primary}"><span class="match-abbr">${m.homeAbbr}</span><span class="match-name">${m.homeName}</span></div>
        <div class="match-vs">vs</div>
        <div class="match-team away" style="color:${m.awayColors.primary}"><span class="match-abbr">${m.awayAbbr}</span><span class="match-name">${m.awayName}</span></div>
      </div>`).join('')}</div>`;
  }

  // Last results
  let lastResultsHtml = '';
  if (lastResults.length > 0) {
    lastResultsHtml = lastResults.map(m => `
      <div class="match-card result">
        <div class="match-team home" style="color:${m.homeColors.primary}"><span class="match-abbr">${m.homeAbbr}</span></div>
        <div class="match-score">${m.homeGoals} - ${m.awayGoals}</div>
        <div class="match-team away" style="color:${m.awayColors.primary}"><span class="match-abbr">${m.awayAbbr}</span></div>
      </div>`).join('');
  }

  const sorted = league ? league.getSortedTable() : [];

  // Table preview
  let tableHtml = '';
  if (league) {
    tableHtml = `
      <table class="squad-table league-table">
        <thead><tr><th>#</th><th>Time</th><th>J</th><th>V</th><th>E</th><th>D</th><th>GP</th><th>GC</th><th>SG</th><th>Pts</th><th>Form</th></tr></thead>
        <tbody>${sorted.map((t, i) => `
          <tr class="${t.id === club.id ? 'user-team' : ''}">
            <td>${i + 1}</td>
            <td><span class="table-badge" style="background:${t.colors.primary};color:${t.colors.secondary}">${t.abbr}</span> ${t.name}</td>
            <td>${t.played}</td><td>${t.won}</td><td>${t.drawn}</td><td>${t.lost}</td>
            <td>${t.goalsFor}</td><td>${t.goalsAgainst}</td><td>${t.goalDiff > 0 ? '+' : ''}${t.goalDiff}</td>
            <td class="pts">${t.points}</td>
            <td>${formBadge(t.form)}</td>
          </tr>`).join('')}
        </tbody>
      </table>`;
  }

  // User team stats
  let statsHtml = '';
  if (teamStats) {
    const userPos = sorted.findIndex(t => t.id === club.id) + 1;
    statsHtml = `
      <div class="stat-grid">
        <div class="stat-card"><div class="stat-label">Posição</div><div class="stat-value green">${userPos}º</div></div>
        <div class="stat-card"><div class="stat-label">Pontos</div><div class="stat-value gold">${teamStats.points}</div></div>
        <div class="stat-card"><div class="stat-label">Saldo de Gols</div><div class="stat-value">${teamStats.goalDiff > 0 ? '+' : ''}${teamStats.goalDiff}</div></div>
        <div class="stat-card"><div class="stat-label">Aproveitamento</div><div class="stat-value">${teamStats.played ? Math.round(teamStats.points / (teamStats.played * 3) * 100) : 0}%</div></div>
      </div>`;
  }

  return `
  <div class="career screen">
    <aside class="sidebar">
      <div class="club">
        <div class="badge" style="background:${club.colors.primary};color:${club.colors.secondary}">${club.abbr[0]}</div>
        <h2>${club.name}</h2>
        <p>${club.city}</p>
      </div>
      <nav>
        <button class="active" onclick="window._app.go('career',{country:window._data.countries.find(x=>x.id==='${country.id}'),division:window._data.countries.find(x=>x.id==='${country.id}').divisions.find(x=>x.id==='${division.id}'),club:window._data.clubs.find(x=>x.id==='${club.id}')})">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
          Visão Geral
        </button>
        <button onclick="window._app.go('career',{country:window._data.countries.find(x=>x.id==='${country.id}'),division:window._data.countries.find(x=>x.id==='${country.id}').divisions.find(x=>x.id==='${division.id}'),club:window._data.clubs.find(x=>x.id==='${club.id}')})">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
          Elenco
        </button>
        <button onclick="alert('Em breve!')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          Táticas
        </button>
        <button onclick="alert('Em breve!')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
          Finanças
        </button>
        <button onclick="window._app.go('menu')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
          Sair
        </button>
      </nav>
    </aside>
    <div class="main">
      <div class="career-header">
        <h2>Brasileirão Série A</h2>
        <div class="round-info">Rodada ${roundNum} / ${totalRounds}</div>
      </div>

      ${statsHtml}

      ${lastResults.length > 0 ? `<h3 class="section-title">Última Rodada</h3><div class="results-row">${lastResultsHtml}</div>` : ''}

      ${nextRound && !isFinished ? `
        <div class="round-actions">
          <h3 class="section-title">Próxima Rodada</h3>
          <button class="btn btn-primary simulate-btn" onclick="window._app.simulateAndRefresh('${country.id}','${division.id}','${club.id}')">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            Simular Rodada
          </button>
        </div>
        <div class="match-list upcoming">${nextRoundHtml}</div>
      ` : ''}

      ${isFinished ? '<div class="season-end">Temporada encerrada!</div>' : ''}

      <h3 class="section-title">Classificação</h3>
      ${tableHtml}
    </div>
  </div>`;
}

const screens = { menu: menuScreen, country: countryScreen, division: divisionScreen, 'club-select': clubSelectScreen, 'club-info': clubInfoScreen, career: careerScreen };

window._data = { countries, clubs };
const app = new App();
window._app = app;
app.go('menu');

// Global function for simulation
window._app.simulateAndRefresh = function(countryId, divisionId, clubId) {
  app.simulateRound();
  const country = countries.find(c => c.id === countryId);
  const division = country.divisions.find(d => d.id === divisionId);
  const club = clubs.find(c => c.id === clubId);
  app.go('career', { country, division, club });
};
