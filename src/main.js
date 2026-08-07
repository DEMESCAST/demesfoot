import './style.css';
import { countries, clubs, getClubsByDivision, getTransferMarket, formatMoney, formatMoneyShort, reputationText, fanText } from './data.js';
import { League } from './league.js';

const $ = s => document.querySelector(s);

class App {
  constructor() {
    this.el = $('#app');
    this.history = [];
    this.current = null;
    this.league = null;
    this.userClubId = null;
    this.season = 1;
    this.finance = { matchRevenue: 500000, sponsorRevenue: 2000000, wageBill: 0 };
    this.formation = '4-3-3';
    this.injuries = [];
    this.cupResults = [];
    this.trainingHistory = [];
    this.musicOn = false;
    this.audio = null;
    this.news = [];
  }

  addNews(type, headline, icon, importance = 'normal') {
    this.news.unshift({ type, headline, icon, importance, round: this.league?.currentRound || 0, season: this.season, ts: Date.now() });
    if (this.news.length > 50) this.news.length = 50;
  }

  generateNewsAfterRound(results, userClub) {
    if (!results || !results.length || !userClub) return;
    const clubResults = results.filter(r => r.home === userClub.id || r.away === userClub.id);
    for (const r of clubResults) {
      const isHome = r.home === userClub.id;
      const userGoals = isHome ? r.homeGoals : r.awayGoals;
      const opponentGoals = isHome ? r.awayGoals : r.homeGoals;
      const opponent = clubs.find(c => c.id === (isHome ? r.away : r.home));
      if (userGoals > opponentGoals) {
        if (userGoals >= 4) this.addNews('victory', `${userClub.name} goleia ${opponent?.name || 'rival'} por ${userGoals}-${opponentGoals}! Vitória esmagadora!`, '⚽', 'high');
        else if (userGoals - opponentGoals >= 2) this.addNews('victory', `${userClub.name} vence ${opponent?.name || 'rival'} por ${userGoals}-${opponentGoals}. Boa atuação do time!`, '⚽', 'normal');
        else this.addNews('victory', `${userClub.name} goleia ${opponent?.name || 'rival'} com gols no final.`, '⚽', 'normal');
      } else if (userGoals < opponentGoals) {
        if (opponentGoals >= 4) this.addNews('defeat', `${userClub.name} é goleado por ${opponent?.name || 'rival'}: ${userGoals}-${opponentGoals}. Derrota humilhante!`, '💔', 'high');
        else this.addNews('defeat', `${userClub.name} perde para ${opponent?.name || 'rival'} por ${userGoals}-${opponentGoals}.`, '💔', 'normal');
      } else {
        this.addNews('draw', `${userClub.name} empata com ${opponent?.name || 'rival'}: ${userGoals}-${opponentGoals}.`, '🤝', 'low');
      }
    }
    if (clubResults.length === 0 && results.length > 0) {
      const other = results[Math.floor(Math.random() * results.length)];
      const home = clubs.find(c => c.id === other.home);
      const away = clubs.find(c => c.id === other.away);
      if (home && away && other.homeGoals !== other.awayGoals) {
        this.addNews('general', `${home.name} vence ${away.name} por ${other.homeGoals}-${other.awayGoals} na rodada.`, '📰', 'low');
      }
    }
  }

  generateTransferNews(player, fromClub, toClub, isBuy) {
    if (isBuy) {
      if (player.ovr >= 80) this.addNews('transfer', `CONTRATAÇÃO! ${toClub.name} contrata ${player.name} (${player.ovr} OVR) por ${formatMoney(player.value, toClub.currency || 'R$')}!`, '🌟', 'high');
      else this.addNews('transfer', `${toClub.name} contrata ${player.name} (${player.pos}) por ${formatMoney(player.value, toClub.currency || 'R$')}.`, '📝', 'normal');
    } else {
      if (player.ovr >= 75) this.addNews('transfer', `SAÍDA! ${player.name} (${player.ovr} OVR) deixa ${fromClub.name} por ${formatMoney(player.value * 0.8, fromClub.currency || 'R$')}.`, '📤', 'high');
      else this.addNews('transfer', `${player.name} é vendido por ${fromClub.name} por ${formatMoney(player.value * 0.8, fromClub.currency || 'R$')}.`, '📤', 'low');
    }
  }

  generateInjuryNews(player, club) {
    if (player.injured >= 6) this.addNews('injury', `LESÃO GRAVE! ${player.name} (${club.name}) fica fora por ${player.injured} semanas.`, '🩹', 'high');
    else if (player.injured >= 3) this.addNews('injury', `${player.name} (${club.name}) se machuca e fica fora por ${player.injured} semanas.`, '🩹', 'normal');
    else this.addNews('injury', `${player.name} (${club.name}) sente desconforto e fica fora por ${player.injured} semana(s).`, '🩹', 'low');
  }

  generateFinancialNews(club, budget) {
    if (budget < 500000) this.addNews('financial', `CRISE! ${club.name} enfrenta dificuldades financeiras. Saldo: ${formatMoney(budget, club.currency || 'R$')}.`, '💰', 'high');
    else if (budget < 2000000) this.addNews('financial', `${club.name} avalia investimentos. Saldo atual: ${formatMoney(budget, club.currency || 'R$')}.`, '💰', 'low');
  }

  render(screen, params = {}) {
    if (this.current) this.history.push({ name: this.current, params: this.lastParams });
    this.current = screen;
    this.lastParams = params;
    this.el.innerHTML = '';
    const html = screens[screen](this, params);
    this.el.innerHTML = html;
    this.el.firstChild?.classList.add('screen');
  }

  go(name, params = {}) {
    this.render(name, params);
  }

  back() {
    if (!this.history.length) return;
    const prev = this.history.pop();
    this.current = prev.name;
    this.el.innerHTML = '';
    const html = screens[prev.name](this, prev.params);
    this.el.innerHTML = html;
    this.el.firstChild?.classList.add('screen');
  }

  startCareer(country, division, club) {
    this.userClubId = club.id;
    this.league = new League(country.id, division.id);
    this.season = 1;
    this.formation = '4-3-3';
    this.injuries = [];
    this.cupResults = [];
    this.trainingHistory = [];
    this.news = [];
    this.calculateWages(club);
    this.league.initCup();
    this.addNews('general', `Bem-vindo ao ${club.name}! Sua carreira como técnico começa agora.`, '🏟️', 'high');
    this.go('career', { country, division, club });
  }

  calculateWages(club) {
    this.finance.wageBill = club.squad.reduce((sum, p) => sum + p.salary, 0) * 12;
  }

  simulateRound() {
    if (!this.league) return;
    const results = this.league.simulateRound();
    const userClub = clubs.find(c => c.id === this.userClubId);
    if (userClub) {
      this.generateNewsAfterRound(results, userClub);
      const newInjuries = this.league.generateInjuries(userClub);
      this.injuries = [...this.injuries, ...newInjuries].filter(i => i.type === 'injury');
      for (const inj of newInjuries) {
        const player = userClub.squad.find(p => p.id === inj.playerId);
        if (player) this.generateInjuryNews(player, userClub);
      }
      this.generateFinancialNews(userClub, userClub.budget);
    }
    return results;
  }

  simulateCup() {
    if (!this.league) return null;
    return this.league.simulateCupRound();
  }

  trainPlayers(focus) {
    const userClub = clubs.find(c => c.id === this.userClubId);
    if (!userClub) return [];
    const results = this.league.applyTraining(userClub, focus);
    this.trainingHistory.push({ round: this.league.currentRound, focus, results });
    return results;
  }

  buyPlayer(player, clubId) {
    const userClub = clubs.find(c => c.id === this.userClubId);
    const sellerClub = clubs.find(c => c.id === clubId);
    if (!userClub || !sellerClub || userClub.budget < player.value) return false;

    const playerIdx = sellerClub.squad.findIndex(p => p.id === player.id);
    if (playerIdx === -1) return false;

    const removed = sellerClub.squad.splice(playerIdx, 1)[0];
    removed.injured = 0;
    userClub.squad.push(removed);
    userClub.budget -= player.value;
    this.calculateWages(userClub);
    this.generateTransferNews(removed, sellerClub, userClub, true);
    return true;
  }

  sellPlayer(player, targetClubId) {
    const userClub = clubs.find(c => c.id === this.userClubId);
    if (!userClub || !targetClubId) return false;

    const playerIdx = userClub.squad.findIndex(p => p.id === player.id);
    if (playerIdx === -1) return false;

    const targetClub = clubs.find(c => c.id === targetClubId);
    if (!targetClub) return false;

    const removed = userClub.squad.splice(playerIdx, 1)[0];
    removed.injured = 0;
    targetClub.squad.push(removed);
    userClub.budget += Math.floor(player.value * 0.8);
    this.calculateWages(userClub);
    this.generateTransferNews(removed, userClub, targetClub, false);
    return true;
  }

  changeFormation(f) {
    this.formation = f;
  }

  nextSeason() {
    this.season++;
    const countryId = this.league.countryId;
    const divisionId = this.league.divisionId;
    const userClub = clubs.find(c => c.id === this.userClubId);

    for (const club of clubs) {
      for (const p of club.squad) {
        p.age++;
        if (p.age < 28) { p.ovr = Math.min(99, p.ovr + Math.floor(Math.random() * 2)); }
        else if (p.age < 33) { /* peak */ }
        else { p.ovr = Math.max(40, p.ovr - Math.floor(Math.random() * 3)); }
        p.goals = 0; p.assists = 0; p.yellowCards = 0; p.redCards = 0; p.appearances = 0;
        p.injured = 0;
      }
    }

    this.league = new League(countryId, divisionId);
    this.league.initCup();
    this.injuries = [];
    this.cupResults = [];
    this.trainingHistory = [];
    this.calculateWages(userClub);
    this.go('career', { country: countries.find(c => c.id === countryId), division: countries.find(c => c.id === countryId).divisions.find(d => d.id === divisionId), club: userClub });
  }

  saveGame() {
    const data = {
      userClubId: this.userClubId,
      season: this.season,
      formation: this.formation,
      countryId: this.league?.countryId,
      divisionId: this.league?.divisionId,
      currentRound: this.league?.currentRound,
      table: this.league?.table,
      fixtures: this.league?.fixtures,
      results: this.league?.results,
      cup: this.league?.cup,
      news: this.news,
      timestamp: Date.now()
    };
    localStorage.setItem('demesfoot_save', JSON.stringify(data));
    return true;
  }

  loadGame() {
    const raw = localStorage.getItem('demesfoot_save');
    if (!raw) return false;
    try {
      const data = JSON.parse(raw);
      this.userClubId = data.userClubId;
      this.season = data.season;
      this.formation = data.formation;
      this.league = new League(data.countryId, data.divisionId);
      this.league.currentRound = data.currentRound;
      this.league.table = data.table;
      this.league.fixtures = data.fixtures;
      this.league.results = data.results;
      this.league.cup = data.cup;
      this.news = data.news || [];
      this.injuries = [];
      this.cupResults = [];
      this.trainingHistory = [];
      const userClub = clubs.find(c => c.id === this.userClubId);
      this.calculateWages(userClub);
      const country = countries.find(c => c.id === data.countryId);
      const division = country.divisions.find(d => d.id === data.divisionId);
      this.go('career', { country, division, club: userClub });
      return true;
    } catch {
      return false;
    }
  }

  hasSave() {
    return !!localStorage.getItem('demesfoot_save');
  }

  deleteSave() {
    localStorage.removeItem('demesfoot_save');
  }

  toggleMusic() {
    this.musicOn = !this.musicOn;
    if (this.musicOn) {
      if (!this.audio) {
        this.audio = new Audio('data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=');
        this.audio.loop = true;
        this.audio.volume = 0.15;
      }
      this.audio.play().catch(() => {});
    } else {
      if (this.audio) this.audio.pause();
    }
    if (this.current === 'menu') this.go('menu');
  }
}

function getCurrency(countryId) { const c = countries.find(x => x.id === countryId); return c ? c.currency : 'R$'; }
function posClass(p) { return p === 'GK' ? 'gk' : p === 'DEF' ? 'def' : p === 'MID' ? 'mid' : 'fwd'; }
function posLabel(p) { return p === 'GK' ? 'GOL' : p === 'DEF' ? 'DEF' : p === 'MID' ? 'MEI' : 'ATA'; }
function formBadge(f) { return f.map(r => `<span class="form-${r.toLowerCase()}">${r}</span>`).join(''); }
function posColor(p) { return p === 'GK' ? '#e65100' : p === 'DEF' ? '#1565c0' : p === 'MID' ? '#2e7d32' : '#c62828'; }
function medalFor(i) { return i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : ''; }

function sidebarNav(country, division, club, active) {
  const items = [
    { id: 'career', icon: '<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>', label: 'Visão Geral' },
    { id: 'squad', icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>', label: 'Elenco' },
    { id: 'tactics', icon: '<rect x="2" y="2" width="20" height="20" rx="2"/><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/>', label: 'Táticas' },
    { id: 'transfers', icon: '<polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 014-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 01-4 4H3"/>', label: 'Transfers' },
    { id: 'training', icon: '<path d="M18 20V10M12 20V4M6 20v-6"/>', label: 'Treino' },
    { id: 'cup', icon: '<path d="M6 9H4.5a2.5 2.5 0 010-5H6M18 9h1.5a2.5 2.5 0 000-5H18M4 22h16M12 6v11"/><path d="M7 2l5 4 5-4"/>', label: 'Copa' },
    { id: 'finances', icon: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>', label: 'Finanças' },
  ];
  const cid = country.id, did = division.id, bid = club.id;
  return items.map(it => `
    <button class="${it.id === active ? 'active' : ''}" onclick="window._app.go('${it.id}',{country:window._data.countries.find(x=>x.id==='${cid}'),division:window._data.countries.find(x=>x.id==='${cid}').divisions.find(x=>x.id==='${did}'),club:window._data.clubs.find(x=>x.id==='${bid}')})">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${it.icon}</svg>
      ${it.label}
    </button>`).join('');
}

function sidebarShell(country, division, club, active, content) {
  return `
  <div class="career screen">
    <aside class="sidebar">
      <div class="club">
        <div class="badge" style="background:${club.colors.primary};color:${club.colors.secondary}">${club.abbr[0]}</div>
        <h2>${club.name}</h2>
        <p>${club.city}</p>
      </div>
      <nav>
        ${sidebarNav(country, division, club, active)}
        <button onclick="window._app.go('menu')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
          Sair
        </button>
      </nav>
    </aside>
    <div class="main">${content}</div>
  </div>`;
}

function menuScreen(app) {
  const hasSave = app.hasSave();
  const musicOn = app.musicOn;
  return `
  <div class="menu">
    <div class="menu-stadium"></div>
    <div class="menu-lights"></div>
    <div class="menu-particles">
      <div class="menu-particle"></div><div class="menu-particle"></div>
      <div class="menu-particle"></div><div class="menu-particle"></div>
      <div class="menu-particle"></div><div class="menu-particle"></div>
      <div class="menu-particle"></div><div class="menu-particle"></div>
    </div>
    <div class="menu-vignette"></div>

    <div class="menu-music">
      <button class="menu-music-btn ${musicOn ? 'playing' : ''}" onclick="window._app.toggleMusic()" title="${musicOn ? 'Desligar música' : 'Ligar música'}">
        ${musicOn
          ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>'
          : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/><line x1="1" y1="1" x2="23" y2="23"/></svg>'}
      </button>
    </div>

    <div class="menu-logo">
      <div class="emblem">
        <div class="emblem-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 2a14.5 14.5 0 000 20 14.5 14.5 0 000-20"/>
            <path d="M2 12h20"/>
            <path d="M12 2c3 3.5 3 8.5 0 12"/>
            <path d="M12 2c-3 3.5-3 8.5 0 12"/>
            <path d="M2 12c3.5-3 8.5-3 12 0"/>
            <path d="M2 12c3.5 3 8.5 3 12 0"/>
          </svg>
        </div>
      </div>
      <h1>DEMESFOOT</h1>
      <div class="tagline">Football Manager</div>
      <div class="version">v1.0 · 2026 · DEMESCAST</div>
    </div>

    <nav class="menu-nav">
      <button class="menu-btn primary" onclick="window._app.go('country')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
        Nova Carreira
      </button>
      <button class="menu-btn ${hasSave ? '' : 'disabled'}" onclick="${hasSave ? 'window._app.loadGame()' : ''}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        Continuar
      </button>
      <button class="menu-btn" onclick="window._app.go('settings')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 003.09 15H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.09V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
        Configurações
      </button>
      <button class="menu-btn" onclick="window._app.go('credits')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
        Créditos
      </button>
    </nav>

    <div class="menu-footer">DEMESFOOT · FOOTBALL MANAGER · DEMESCAST © 2026</div>
  </div>`;
}

function settingsScreen(app) {
  const hasSave = app.hasSave();
  return `
  <div class="menu" style="background:var(--bg)">
    <div class="menu-vignette" style="opacity:.3"></div>
    <div style="position:relative;z-index:10;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px">
      <div class="settings-card" style="animation:logoReveal .6s cubic-bezier(.16,1,.3,1) forwards;opacity:0">
        <h2 style="font-family:var(--font-logo);font-size:1.3rem;font-weight:900;letter-spacing:2px;text-align:center;margin-bottom:24px;background:linear-gradient(135deg,var(--accent),var(--gold));-webkit-background-clip:text;-webkit-text-fill-color:transparent">CONFIGURAÇÕES</h2>
        ${hasSave ? `
          <button class="menu-btn" style="width:100%;margin-bottom:10px;border-color:rgba(255,61,113,.3);color:var(--red)" onclick="if(confirm('Tem certeza? O save atual será apagado!')){window._app.deleteSave();alert('Save apagado!');window._app.go('menu')}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
            Apagar Save
          </button>
        ` : '<p style="color:var(--text4);text-align:center;padding:16px;font-size:.85rem">Nenhum save encontrado.</p>'}
        <button class="menu-btn" style="width:100%" onclick="window._app.go('menu')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Voltar ao Menu
        </button>
      </div>
    </div>
  </div>`;
}

function creditsScreen(app) {
  return `
  <div class="menu" style="background:var(--bg)">
    <div class="menu-vignette" style="opacity:.3"></div>
    <div style="position:relative;z-index:10;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px">
      <div class="credits-card">
        <h1>DEMESFOOT</h1>
        <div class="credit-section">
          <h3>Desenvolvimento</h3>
          <p><strong>DEMESCAST</strong></p>
        </div>
        <div class="credits-divider"></div>
        <div class="credit-section">
          <h3>Game Design</h3>
          <p>Sistema completo de gerenciamento de futebol com ligas, transferências, treinos, copa e finanças.</p>
        </div>
        <div class="credits-divider"></div>
        <div class="credit-section">
          <h3>Tecnologias</h3>
          <p>JavaScript ES6+ · Vite · CSS3 · HTML5</p>
        </div>
        <div class="credits-divider"></div>
        <div class="credit-section">
          <h3>Agradecimentos</h3>
          <p style="font-size:.8rem;color:var(--text3)">Obrigado por jogar DEMESFOOT!</p>
        </div>
        <div class="credits-back">
          <button class="btn btn-primary" style="width:100%" onclick="window._app.go('menu')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Voltar ao Menu
          </button>
        </div>
      </div>
    </div>
  </div>`;
}

function countryScreen(app) {
  const steps = `<div class="steps"><span class="step active">1</span><span class="step-line"></span><span class="step">2</span><span class="step-line"></span><span class="step">3</span></div>`;
  const cards = countries.map(c => `
    <div class="card" onclick="window._app.go('division',{country:window._data.countries.find(x=>x.id==='${c.id}')})">
      <span class="flag">${c.flag}</span>
      <div class="info"><h3>${c.name}</h3><p>${c.divisions.length} divisões</p></div>
      <span class="arrow"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg></span>
    </div>`).join('');
  return `<div class="ng"><div class="ng-head"><button class="back-btn" onclick="window._app.go('menu')"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>${steps}<h2>Escolha o País</h2></div><div class="ng-body"><div class="card-grid">${cards}</div></div><div class="ng-foot">Selecione o país para continuar</div></div>`;
}

function divisionScreen(app, { country }) {
  const steps = `<div class="steps"><span class="step done">✓</span><span class="step-line done"></span><span class="step active">2</span><span class="step-line"></span><span class="step">3</span></div>`;
  const cards = country.divisions.map(d => `
    <div class="card ${d.available ? '' : 'disabled'}" onclick="${d.available ? `window._app.go('club-select',{country:window._data.countries.find(x=>x.id==='${country.id}'),division:window._data.countries.find(x=>x.id==='${country.id}').divisions.find(x=>x.id==='${d.id}')})` : ''}">
      <span class="tier">${d.tier}ª</span>
      <div class="info"><h3>${d.name}</h3>${d.available ? '' : '<p>Em breve</p>'}</div>
      ${d.available ? `<span class="arrow"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg></span>` : ''}
    </div>`).join('');
  return `<div class="ng"><div class="ng-head"><button class="back-btn" onclick="window._app.go('country')"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>${steps}<h2>Escolha a Divisão</h2><span style="margin-left:8px;color:var(--text2)">${country.flag} ${country.name}</span></div><div class="ng-body"><div class="card-grid">${cards}</div></div><div class="ng-foot">Selecione a divisão do campeonato</div></div>`;
}

function clubSelectScreen(app, { country, division }) {
  const clubList = getClubsByDivision(country.id, division.id);
  const steps = `<div class="steps"><span class="step done">✓</span><span class="step-line done"></span><span class="step done">✓</span><span class="step-line done"></span><span class="step active">3</span></div>`;
  const cards = clubList.map(c => `
    <div class="card" onclick="window._app.go('club-info',{country:window._data.countries.find(x=>x.id==='${country.id}'),division:window._data.countries.find(x=>x.id==='${country.id}').divisions.find(x=>x.id==='${division.id}'),club:window._data.clubs.find(x=>x.id==='${c.id}')})">
      <div class="club-badge" style="background:${c.colors.primary};color:${c.colors.secondary}">${c.abbr[0]}</div>
      <div class="info"><h3>${c.name}</h3><p>${c.city}</p></div>
      <span class="arrow"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg></span>
    </div>`).join('');
  return `<div class="ng"><div class="ng-head"><button class="back-btn" onclick="window._app.go('division',{country:window._data.countries.find(x=>x.id==='${country.id}')})"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>${steps}<h2>Escolha seu Clube</h2><span style="margin-left:8px;color:var(--text2)">${country.flag} ${division.name}</span></div><div class="ng-body"><div class="card-grid">${cards}</div></div><div class="ng-foot">Selecione o clube para gerenciar</div></div>`;
}

function clubInfoScreen(app, { country, division, club }) {
  const stats = `
    <div class="info-grid">
      <div class="info-box"><div class="label">Fundação</div><div class="value">${club.founded}</div></div>
      <div class="info-box"><div class="label">Divisão</div><div class="value">${division.name}</div></div>
      <div class="info-box"><div class="label">Estádio</div><div class="value">${club.stadium.name}</div></div>
      <div class="info-box"><div class="label">Capacidade</div><div class="value">${club.stadium.capacity.toLocaleString('pt-BR')}</div></div>
      <div class="info-box"><div class="label">Saldo</div><div class="value money">${formatMoney(club.budget, country.currency)}</div></div>
      <div class="info-box"><div class="label">Reputação</div><div class="value">${club.reputation} · ${reputationText(club.reputation)}</div></div>
      <div class="info-box"><div class="label">Torcida</div><div class="value">${fanText(club.fanLevel)}</div></div>
      <div class="info-box"><div class="label">Objetivo</div><div class="value">${club.objective}</div></div>
    </div>`;
  return `<div class="ng"><div class="ng-head"><button class="back-btn" onclick="window._app.go('club-select',{country:window._data.countries.find(x=>x.id==='${country.id}'),division:window._data.countries.find(x=>x.id==='${country.id}').divisions.find(x=>x.id==='${division.id}')})"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button><h2>Confirme sua Escolha</h2></div><div class="ng-body"><div class="club-info-card"><div class="club-info-top"><div class="club-badge" style="background:${club.colors.primary};color:${club.colors.secondary};width:72px;height:72px;font-size:1.5rem;border-radius:16px;display:flex;align-items:center;justify-content:center;font-family:var(--font-logo);font-weight:900">${club.abbr[0]}</div><div><h1>${club.name}</h1><p>${club.city} · ${country.flag} ${country.name}</p></div></div>${stats}<div class="actions"><button class="btn btn-secondary" onclick="window._app.go('club-select',{country:window._data.countries.find(x=>x.id==='${country.id}'),division:window._data.countries.find(x=>x.id==='${country.id}').divisions.find(x=>x.id==='${division.id}')})">Trocar Clube</button><button class="btn btn-primary" onclick="window._app.startCareer(window._data.countries.find(x=>x.id==='${country.id}'),window._data.countries.find(x=>x.id==='${country.id}').divisions.find(x=>x.id==='${division.id}'),window._data.clubs.find(x=>x.id==='${club.id}'))">Iniciar Carreira</button></div></div></div></div>`;
}

function careerScreen(app, { country, division, club }) {
  const league = app.league;
  if (!league) return sidebarShell(country, division, club, 'career', '<p>Carregando...</p>');

  const nextRound = league.getCurrentRound();
  const lastResults = league.getLastResults();
  const teamStats = league.getTeamStats(club.id);
  const roundNum = league.currentRound;
  const totalRounds = league.totalRounds;
  const isFinished = roundNum >= totalRounds;
  const sorted = league.getSortedTable();
  const userPos = sorted.findIndex(t => t.id === club.id) + 1;

  const injuries = club.squad.filter(p => p.injured > 0);

  let matchDetailBtn = '';
  if (lastResults.length > 0) {
    const last = lastResults[0];
    matchDetailBtn = `<button class="btn-link" onclick="window._app.go('match-detail',{country:window._data.countries.find(x=>x.id==='${country.id}'),division:window._data.countries.find(x=>x.id==='${country.id}').divisions.find(x=>x.id==='${division.id}'),club:window._data.clubs.find(x=>x.id==='${club.id}'),homeId:'${last.home}',awayId:'${last.away}'})">Ver detalhes →</button>`;
  }

  let nextRoundHtml = '';
  if (nextRound && !isFinished) {
    nextRoundHtml = `<div class="match-list">${nextRound.map(m => `
      <div class="match-card">
        <div class="match-team home" style="color:${m.homeColors.primary}"><span class="match-abbr">${m.homeAbbr}</span><span class="match-name">${m.homeName}</span></div>
        <div class="match-vs">vs</div>
        <div class="match-team away" style="color:${m.awayColors.primary}"><span class="match-abbr">${m.awayAbbr}</span><span class="match-name">${m.awayName}</span></div>
      </div>`).join('')}</div>`;
  }

  let lastResultsHtml = '';
  if (lastResults.length > 0) {
    lastResultsHtml = lastResults.map(m => `
      <div class="match-card result">
        <div class="match-team home" style="color:${m.homeColors.primary}"><span class="match-abbr">${m.homeAbbr}</span></div>
        <div class="match-score">${m.homeGoals} - ${m.awayGoals}</div>
        <div class="match-team away" style="color:${m.awayColors.primary}"><span class="match-abbr">${m.awayAbbr}</span></div>
      </div>`).join('');
  }

  const tableHtml = `
    <table class="squad-table league-table">
      <thead><tr><th>#</th><th>Time</th><th>J</th><th>V</th><th>E</th><th>D</th><th>GP</th><th>GC</th><th>SG</th><th>Pts</th><th>Form</th></tr></thead>
      <tbody>${sorted.map((t, i) => `
        <tr class="${t.id === club.id ? 'user-team' : ''}">
          <td>${medalFor(i)}${i + 1}</td>
          <td><span class="table-badge" style="background:${t.colors.primary};color:${t.colors.secondary}">${t.abbr}</span> ${t.name}</td>
          <td>${t.played}</td><td>${t.won}</td><td>${t.drawn}</td><td>${t.lost}</td>
          <td>${t.goalsFor}</td><td>${t.goalsAgainst}</td><td>${t.goalDiff > 0 ? '+' : ''}${t.goalDiff}</td>
          <td class="pts">${t.points}</td>
          <td>${formBadge(t.form)}</td>
        </tr>`).join('')}
      </tbody>
    </table>`;

  const topScorers = league.getTopScorers();
  let scorersHtml = '';
  if (topScorers.length) {
    scorersHtml = `<h3 class="section-title">Artilharia</h3>
      <div class="scorers-grid">${topScorers.map((p, i) => `
        <div class="scorer-item"><span class="scorer-pos">${i + 1}º</span><span class="scorer-name">${p.name}</span><span class="scorer-club" style="color:${p.clubColors.primary}">${p.clubAbbr}</span><span class="scorer-goals">${p.goals} gols</span></div>
      `).join('')}</div>`;
  }

  let injuriesHtml = '';
  if (injuries.length) {
    injuriesHtml = `<h3 class="section-title">Lesões</h3>
      <div class="injury-list">${injuries.map(p => `
        <div class="injury-item"><span class="badge-pos ${posClass(p.pos)}">${posLabel(p.pos)}</span> <strong>${p.name}</strong> <span class="injury-weeks">${p.injured} sem</span></div>
      `).join('')}</div>`;
  }

  let cupWinnerHtml = '';
  if (league.cup?.winner) {
    const winner = clubs.find(c => c.id === league.cup.winner);
    cupWinnerHtml = `<div class="season-end">🏆 Copa: ${winner?.name || '???'}</div>`;
  }

  const content = `
    <div class="career-header">
      <h2>Temporada ${app.season} · ${division.name}</h2>
      <div class="round-info">Rodada ${roundNum} / ${totalRounds}</div>
    </div>
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-label">Posição</div><div class="stat-value green">${userPos}º</div></div>
      <div class="stat-card"><div class="stat-label">Pontos</div><div class="stat-value gold">${teamStats ? teamStats.points : 0}</div></div>
      <div class="stat-card"><div class="stat-label">Saldo de Gols</div><div class="stat-value">${teamStats ? (teamStats.goalDiff > 0 ? '+' : '') + teamStats.goalDiff : 0}</div></div>
      <div class="stat-card"><div class="stat-label">Aproveitamento</div><div class="stat-value">${teamStats && teamStats.played ? Math.round(teamStats.points / (teamStats.played * 3) * 100) : 0}%</div></div>
    </div>
    ${app.news.length > 0 ? `
      <h3 class="section-title">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px"><path d="M4 22h16a2 2 0 002-2V4a2 2 0 00-2-2H8a2 2 0 00-2 2v16a2 2 0 01-2 2zm0 0a2 2 0 01-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8M15 18h-5M10 6h8v4h-8z"/></svg>
        Notícias
      </h3>
      <div class="news-feed">${app.news.slice(0, 12).map(n => `
        <div class="news-item news-${n.type} ${n.importance === 'high' ? 'news-highlight' : ''}">
          <span class="news-icon">${n.icon}</span>
          <div class="news-body">
            <div class="news-headline">${n.headline}</div>
            <div class="news-meta">Rodada ${n.round} · Temporada ${n.season}</div>
          </div>
        </div>`).join('')}</div>
    ` : ''}
    ${lastResults.length > 0 ? `<h3 class="section-title">Última Rodada ${matchDetailBtn}</h3><div class="results-row">${lastResultsHtml}</div>` : ''}
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
    ${isFinished ? `<div class="season-end">Temporada encerrada! · <button class="btn btn-primary" style="display:inline;padding:8px 20px;margin-left:12px" onclick="window._app.nextSeason()">Iniciar Temporada ${app.season + 1}</button></div>` : ''}
    ${cupWinnerHtml}
    ${injuriesHtml}
    <h3 class="section-title">Classificação</h3>
    ${tableHtml}
    ${scorersHtml}`;

  return sidebarShell(country, division, club, 'career', content);
}

function squadScreen(app, { country, division, club }) {
  const squad = club.squad;
  const byPos = { GK: [], DEF: [], MID: [], FWD: [] };
  squad.forEach(p => byPos[p.pos]?.push(p));
  const posOrder = ['GK', 'DEF', 'MID', 'FWD'];

  const rows = posOrder.flatMap(pos => byPos[pos].sort((a, b) => b.ovr - a.ovr).map(p => `
    <tr class="${p.injured > 0 ? 'injured-row' : ''}">
      <td><span class="badge-pos ${posClass(p.pos)}">${posLabel(p.pos)}</span></td>
      <td><strong>${p.name}</strong>${p.injured > 0 ? ` <span class="injury-badge">🩹 ${p.injured}sem</span>` : ''}</td>
      <td>${p.age}</td>
      <td class="pts">${p.ovr}</td>
      <td>${p.goals}</td>
      <td>${p.assists}</td>
      <td>${p.appearances}</td>
      <td><span class="card-y">${p.yellowCards}</span> <span class="card-r">${p.redCards}</span></td>
      <td class="money">${formatMoney(p.salary, getCurrency(country.id))}/mês</td>
      <td class="money">${formatMoney(p.value, getCurrency(country.id))}</td>
    </tr>`)).join('');

  const avgOvr = Math.round(squad.reduce((s, p) => s + p.ovr, 0) / squad.length);
  const totalWages = squad.reduce((s, p) => s + p.salary, 0);

  const content = `
    <div class="career-header"><h2>Elenco</h2></div>
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-label">Jogadores</div><div class="stat-value">${squad.length}</div></div>
      <div class="stat-card"><div class="stat-label">Overall Médio</div><div class="stat-value green">${avgOvr}</div></div>
      <div class="stat-card"><div class="stat-label">Massa Salarial</div><div class="stat-value gold">${formatMoney(totalWages, getCurrency(country.id))}/mês</div></div>
      <div class="stat-card"><div class="stat-label">Valor Total</div><div class="stat-value">${formatMoney(squad.reduce((s, p) => s + p.value, 0), getCurrency(country.id))}</div></div>
    </div>
    <table class="squad-table">
      <thead><tr><th>Pos</th><th>Nome</th><th>Idade</th><th>OVR</th><th>Gols</th><th>Assists</th><th>Jogos</th><th>Cartões</th><th>Salário</th><th>Valor</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>`;

  return sidebarShell(country, division, club, 'squad', content);
}

function tacticsScreen(app, { country, division, club }) {
  const squad = club.squad;
  const formation = app.formation;
  const formations = ['4-3-3', '4-4-2', '3-5-2', '4-2-3-1', '5-3-2', '3-4-3'];

  function parseFormation(f) {
    const parts = f.split('-').map(Number);
    return { def: parts[0], mid: parts[1], fwd: parts[2] };
  }

  const fmt = parseFormation(formation);

  function pickBest(pos, exclude) {
    return squad.filter(p => p.pos === pos && !exclude.includes(p.id) && p.injured === 0).sort((a, b) => b.ovr - a.ovr);
  }

  const gk = pickBest('GK', []);
  const defs = pickBest('DEF', [gk[0]?.id].filter(Boolean));
  const mids = pickBest('MID', [gk[0]?.id, ...defs.slice(0, fmt.def).map(p => p.id)]);
  const fwds = pickBest('FWD', [gk[0]?.id, ...defs.slice(0, fmt.def).map(p => p.id), ...mids.slice(0, fmt.mid).map(p => p.id)]);

  const starters = [gk[0], ...defs.slice(0, fmt.def), ...mids.slice(0, fmt.mid), ...fwds.slice(0, fmt.fwd)].filter(Boolean);
  const bench = squad.filter(p => !starters.find(s => s.id === p.id) && p.injured === 0).slice(0, 5);

  function playerDot(p, x, y) {
    return `<div class="tactic-player" style="left:${x}%;top:${y}%;background:${posColor(p.pos)}"><span class="tactic-ovr">${p.ovr}</span><span class="tactic-name">${p.name.split(' ').pop()}</span></div>`;
  }

  const defSpacing = 100 / (fmt.def + 1);
  const midSpacing = 100 / (fmt.mid + 1);
  const fwdSpacing = 100 / (fmt.fwd + 1);

  let fieldPlayers = '';
  if (starters[0]) fieldPlayers += playerDot(starters[0], 46, 90);
  for (let i = 0; i < fmt.def && starters[i + 1]; i++) {
    fieldPlayers += playerDot(starters[i + 1], defSpacing * (i + 1), 72);
  }
  for (let i = 0; i < fmt.mid && starters[fmt.def + i + 1]; i++) {
    fieldPlayers += playerDot(starters[fmt.def + i + 1], midSpacing * (i + 1), 45);
  }
  for (let i = 0; i < fmt.fwd && starters[fmt.def + fmt.mid + i + 1]; i++) {
    fieldPlayers += playerDot(starters[fmt.def + fmt.mid + i + 1], fwdSpacing * (i + 1), 18);
  }

  const field = `
    <div class="tactic-field">
      <div class="field-lines"></div>
      ${fieldPlayers}
    </div>`;

  const benchHtml = bench.length ? `
    <h3 class="section-title">Banco</h3>
    <div class="bench-list">${bench.map(p => `
      <div class="bench-item"><span class="badge-pos ${posClass(p.pos)}">${posLabel(p.pos)}</span> <strong>${p.name}</strong> <span class="ovr-mini">${p.ovr}</span></div>
    `).join('')}</div>` : '';

  const formationBtns = formations.map(f => `
    <button class="btn ${f === formation ? 'btn-primary' : 'btn-secondary'}" style="flex:1;padding:10px;font-size:.8rem" onclick="window._app.changeFormation('${f}');window._app.go('tactics',{country:window._data.countries.find(x=>x.id==='${country.id}'),division:window._data.countries.find(x=>x.id==='${country.id}').divisions.find(x=>x.id==='${division.id}'),club:window._data.clubs.find(x=>x.id==='${club.id}')})">${f}</button>
  `).join('');

  const content = `
    <div class="career-header"><h2>Táticas</h2><div class="round-info">Formação: ${formation}</div></div>
    <div class="formation-selector">${formationBtns}</div>
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-label">Formação</div><div class="stat-value green">${formation}</div></div>
      <div class="stat-card"><div class="stat-label">Titulares</div><div class="stat-value">${starters.length}</div></div>
      <div class="stat-card"><div class="stat-label">OVR Titulares</div><div class="stat-value gold">${starters.length ? Math.round(starters.reduce((s, p) => s + p.ovr, 0) / starters.length) : 0}</div></div>
    </div>
    ${field}
    <h3 class="section-title">Titulares</h3>
    <table class="squad-table">
      <thead><tr><th>Pos</th><th>Nome</th><th>OVR</th><th>Idade</th></tr></thead>
      <tbody>${starters.map(p => `<tr><td><span class="badge-pos ${posClass(p.pos)}">${posLabel(p.pos)}</span></td><td>${p.name}</td><td class="pts">${p.ovr}</td><td>${p.age}</td></tr>`).join('')}</tbody>
    </table>
    ${benchHtml}`;

  return sidebarShell(country, division, club, 'tactics', content);
}

function transfersScreen(app, { country, division, club }) {
  const market = getTransferMarket(country.id).filter(p => p.clubId !== club.id);
  const userClub = club;
  const budget = userClub.budget;

  const buyable = market.filter(p => p.value <= budget).sort((a, b) => b.ovr - a.ovr).slice(0, 20);
  const sellable = userClub.squad.filter(p => p.injured === 0).sort((a, b) => b.value - a.value).slice(0, 10);

  const buyRows = buyable.map(p => `
    <tr>
      <td><span class="badge-pos ${posClass(p.pos)}">${posLabel(p.pos)}</span></td>
      <td><strong>${p.name}</strong></td>
      <td>${p.age}</td>
      <td class="pts">${p.ovr}</td>
      <td style="color:${p.clubColors.primary}">${p.clubAbbr}</td>
      <td class="money">${formatMoney(p.value, getCurrency(country.id))}</td>
      <td><button class="btn btn-primary" style="padding:6px 12px;font-size:.75rem" onclick="window._app.buyPlayer(window._data.clubs.find(c=>c.id==='${p.clubId}').squad.find(x=>x.id===${p.id}),'${p.clubId}');window._app.go('transfers',{country:window._data.countries.find(x=>x.id==='${country.id}'),division:window._data.countries.find(x=>x.id==='${country.id}').divisions.find(x=>x.id==='${division.id}'),club:window._data.clubs.find(x=>x.id==='${club.id}')})">Comprar</button></td>
    </tr>`).join('');

  const sellRows = sellable.map(p => `
    <tr>
      <td><span class="badge-pos ${posClass(p.pos)}">${posLabel(p.pos)}</span></td>
      <td><strong>${p.name}</strong></td>
      <td>${p.age}</td>
      <td class="pts">${p.ovr}</td>
      <td class="money">${formatMoney(p.value, getCurrency(country.id))}</td>
      <td><button class="btn btn-secondary" style="padding:6px 12px;font-size:.75rem" onclick="window._app.sellPlayer(window._data.clubs.find(c=>c.id==='${club.id}').squad.find(x=>x.id===${p.id}),'${market.find(m=>m.id!==p.id)?.clubId || market[0]?.clubId}');window._app.go('transfers',{country:window._data.countries.find(x=>x.id==='${country.id}'),division:window._data.countries.find(x=>x.id==='${country.id}').divisions.find(x=>x.id==='${division.id}'),club:window._data.clubs.find(x=>x.id==='${club.id}')})">Vender</button></td>
    </tr>`).join('');

  const content = `
    <div class="career-header"><h2>Market</h2><div class="round-info">Orçamento: ${formatMoney(budget, getCurrency(country.id))}</div></div>
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-label">Orçamento</div><div class="stat-value green">${formatMoney(budget, getCurrency(country.id))}</div></div>
      <div class="stat-card"><div class="stat-label">Jogadores</div><div class="stat-value">${userClub.squad.length}</div></div>
      <div class="stat-card"><div class="stat-label">Disponíveis</div><div class="stat-value gold">${buyable.length}</div></div>
    </div>
    <h3 class="section-title">Comprar Jogadores</h3>
    <table class="squad-table">
      <thead><tr><th>Pos</th><th>Nome</th><th>Idade</th><th>OVR</th><th>Clube</th><th>Valor</th><th></th></tr></thead>
      <tbody>${buyRows || '<tr><td colspan="7" style="text-align:center;color:var(--text3)">Nenhum jogador disponível</td></tr>'}</tbody>
    </table>
    <h3 class="section-title">Vender Jogadores</h3>
    <table class="squad-table">
      <thead><tr><th>Pos</th><th>Nome</th><th>Idade</th><th>OVR</th><th>Valor</th><th></th></tr></thead>
      <tbody>${sellRows || '<tr><td colspan="6" style="text-align:center;color:var(--text3)">Nenhum jogador para vender</td></tr>'}</tbody>
    </table>`;

  return sidebarShell(country, division, club, 'transfers', content);
}

function trainingScreen(app, { country, division, club }) {
  const focusOptions = [
    { id: 'attack', label: 'Ataque', desc: 'Foco em atacantes (+OVR ATK)' },
    { id: 'midfield', label: 'Meio-campo', desc: 'Foco em meias (+OVR MID)' },
    { id: 'defense', label: 'Defesa', desc: 'Foco em zagueiros (+OVR DEF)' },
    { id: 'fitness', label: 'Condicionamento', desc: 'Geral (+1 OVR aleatório)' }
  ];

  const focusBtns = focusOptions.map(f => `
    <button class="btn btn-primary" style="flex:1;padding:14px" onclick="window._app.doTraining('${f.id}','${country.id}','${division.id}','${club.id}')">
      <strong>${f.label}</strong><br><small style="opacity:.7">${f.desc}</small>
    </button>
  `).join('');

  const lastTraining = app.trainingHistory.length > 0 ? app.trainingHistory[app.trainingHistory.length - 1] : null;
  let lastResultsHtml = '';
  if (lastTraining) {
    const improved = lastTraining.results.filter(r => r.boost > 0);
    lastResultsHtml = improved.length ? `
      <h3 class="section-title">Último Treino (${lastTraining.focus})</h3>
      <div class="training-results">${improved.map(r => `
        <div class="training-item"><strong>${r.playerName}</strong> <span class="training-boost">+${r.boost} OVR</span></div>
      `).join('')}</div>
    ` : `<h3 class="section-title">Último Treino</h3><p style="color:var(--text3)">Nenhum jogador melhorou.</p>`;
  }

  const content = `
    <div class="career-header"><h2>Treino</h2></div>
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-label">Rodada Atual</div><div class="stat-value">${app.league?.currentRound || 0}</div></div>
      <div class="stat-card"><div class="stat-label">Treinos Realizados</div><div class="stat-value gold">${app.trainingHistory.length}</div></div>
    </div>
    <h3 class="section-title">Foco do Treino</h3>
    <div class="training-grid">${focusBtns}</div>
    <div class="training-info">O treino pode melhorar o OVR de jogadores da posição focada. Jogadores machucados não treinam.</div>
    ${lastResultsHtml}`;

  return sidebarShell(country, division, club, 'training', content);
}

function cupScreen(app, { country, division, club }) {
  const league = app.league;
  if (!league) return sidebarShell(country, division, club, 'cup', '<p>Carregando...</p>');

  if (!league.cup) league.initCup();

  const cup = league.cup;
  const roundNames = ['Oitavas de Final', 'Quartas de Final', 'Semifinal', 'Final'];

  let bracketHtml = '';
  for (let r = 0; r < cup.rounds.length; r++) {
    const round = cup.rounds[r];
    const name = roundNames[r] || `Rodada ${r + 1}`;
    const isCurrent = r === cup.currentRound;

    bracketHtml += `<div class="cup-round ${isCurrent ? 'current' : ''}">
      <h4 class="cup-round-title">${name}</h4>
      <div class="cup-matches">${round.map(m => {
        const home = clubs.find(c => c.id === m.home);
        const away = m.away ? clubs.find(c => c.id === m.away) : null;
        const isBye = m.bye || !m.away;
        return `<div class="cup-match ${m.played ? 'played' : ''}">
          <div class="cup-team" style="color:${home?.colors?.primary || '#999'}">${home?.abbr || '?'}</div>
          <div class="cup-score">${isBye ? 'BYE' : m.played ? `${m.homeGoals} - ${m.awayGoals}` : 'vs'}</div>
          <div class="cup-team" style="color:${away?.colors?.primary || '#999'}">${away?.abbr || 'BYE'}</div>
        </div>`;
      }).join('')}</div>
    </div>`;
  }

  let winnerHtml = '';
  if (cup.winner) {
    const winner = clubs.find(c => c.id === cup.winner);
    winnerHtml = `<div class="cup-winner">🏆 ${winner?.name || '???'} campeão!</div>`;
  }

  const canSimulate = !cup.winner && cup.currentRound < cup.rounds.length;
  const content = `
    <div class="career-header"><h2>Copa</h2></div>
    ${canSimulate ? `
      <div class="round-actions">
        <button class="btn btn-primary simulate-btn" onclick="window._app.simulateCupAndRefresh('${country.id}','${division.id}','${club.id}')">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          Simular Rodada da Copa
        </button>
      </div>
    ` : ''}
    ${winnerHtml}
    <div class="cup-bracket">${bracketHtml}</div>`;

  return sidebarShell(country, division, club, 'cup', content);
}

function financesScreen(app, { country, division, club }) {
  const wageBill = club.squad.reduce((s, p) => s + p.salary, 0);
  const yearlyWages = wageBill * 12;
  const matchIncome = club.stadium.capacity * 0.6 * 50 * (app.league ? app.league.currentRound : 0);
  const sponsorIncome = club.budget * 0.15;
  const totalIncome = matchIncome + sponsorIncome;
  const totalExpenses = yearlyWages;
  const balance = club.budget + totalIncome - totalExpenses;

  const expensive = [...club.squad].sort((a, b) => b.salary - a.salary).slice(0, 5);

  const content = `
    <div class="career-header"><h2>Finanças</h2></div>
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-label">Orçamento</div><div class="stat-value green">${formatMoney(club.budget, getCurrency(country.id))}</div></div>
      <div class="stat-card"><div class="stat-label">Saldo Estimado</div><div class="stat-value ${balance >= 0 ? 'gold' : ''}">${formatMoney(balance, getCurrency(country.id))}</div></div>
      <div class="stat-card"><div class="stat-label">Receitas</div><div class="stat-value green">${formatMoney(totalIncome, getCurrency(country.id))}</div></div>
      <div class="stat-card"><div class="stat-label">Despesas (salários/ano)</div><div class="stat-value">${formatMoney(yearlyWages, getCurrency(country.id))}</div></div>
    </div>
    <h3 class="section-title">Maiores Salários</h3>
    <table class="squad-table">
      <thead><tr><th>Jogador</th><th>Pos</th><th>Salário/Mês</th><th>Salário/Ano</th></tr></thead>
      <tbody>${expensive.map(p => `
        <tr><td><strong>${p.name}</strong></td><td><span class="badge-pos ${posClass(p.pos)}">${posLabel(p.pos)}</span></td><td class="money">${formatMoney(p.salary, getCurrency(country.id))}</td><td>${formatMoney(p.salary * 12, getCurrency(country.id))}</td></tr>
      `).join('')}</tbody>
    </table>
    <h3 class="section-title">Receitas</h3>
    <div class="finance-row"><span>Patrocínios</span><span class="money">+${formatMoney(sponsorIncome, getCurrency(country.id))}</span></div>
    <div class="finance-row"><span>Ingressos (${app.league ? app.league.currentRound : 0} jogos)</span><span class="money">+${formatMoney(matchIncome, getCurrency(country.id))}</span></div>
    <h3 class="section-title">Despesas</h3>
    <div class="finance-row"><span>Massa Salarial Anual</span><span class="money">-${formatMoney(yearlyWages, getCurrency(country.id))}</span></div>`;

  return sidebarShell(country, division, club, 'finances', content);
}

function matchDetailScreen(app, { country, division, club, homeId, awayId }) {
  const match = app.league.getMatchDetails(homeId, awayId);
  if (!match) return sidebarShell(country, division, club, 'career', '<p>Partida não encontrada.</p>');

  const homeEvents = match.events.filter(e => e.team === 'home');
  const awayEvents = match.events.filter(e => e.team === 'away');

  function eventIcon(type) {
    if (type === 'goal') return '⚽';
    if (type === 'yellow') return '🟨';
    if (type === 'red') return '🟥';
    return '';
  }

  function renderEvents(events) {
    return events.map(e => `
      <div class="match-event">
        <span class="event-icon">${eventIcon(e.type)}</span>
        <span class="event-text">${e.type === 'goal' ? `<strong>${e.player}</strong>${e.assist ? ` (assist. ${e.assist})` : ''}` : `<strong>${e.player}</strong> ${e.type === 'yellow' ? 'cartão amarelo' : 'cartão vermelho'}`}</span>
        <span class="event-minute">${e.minute}'</span>
      </div>`).join('');
  }

  const content = `
    <div class="career-header"><h2>Detalhes da Partida</h2></div>
    <div class="match-detail-card">
      <div class="match-detail-teams">
        <div class="match-detail-team" style="color:${match.homeColors.primary}">
          <div class="match-detail-badge" style="background:${match.homeColors.primary};color:${match.homeColors.secondary}">${match.homeAbbr[0]}</div>
          <span>${match.homeName}</span>
        </div>
        <div class="match-detail-score">
          <span class="score-big">${match.homeGoals}</span>
          <span class="score-sep">×</span>
          <span class="score-big">${match.awayGoals}</span>
        </div>
        <div class="match-detail-team" style="color:${match.awayColors.primary}">
          <div class="match-detail-badge" style="background:${match.awayColors.primary};color:${match.awayColors.secondary}">${match.awayAbbr[0]}</div>
          <span>${match.awayName}</span>
        </div>
      </div>
    </div>
    <div class="events-grid">
      <div class="events-col">
        <h4 style="color:${match.homeColors.primary}">${match.homeName}</h4>
        ${homeEvents.length ? renderEvents(homeEvents) : '<p class="text-muted">Nenhum evento</p>'}
      </div>
      <div class="events-col">
        <h4 style="color:${match.awayColors.primary}">${match.awayName}</h4>
        ${awayEvents.length ? renderEvents(awayEvents) : '<p class="text-muted">Nenhum evento</p>'}
      </div>
    </div>`;

  return sidebarShell(country, division, club, 'career', content);
}

const screens = {
  menu: menuScreen,
  settings: settingsScreen,
  credits: creditsScreen,
  country: countryScreen,
  division: divisionScreen,
  'club-select': clubSelectScreen,
  'club-info': clubInfoScreen,
  career: careerScreen,
  squad: squadScreen,
  tactics: tacticsScreen,
  transfers: transfersScreen,
  training: trainingScreen,
  cup: cupScreen,
  finances: financesScreen,
  'match-detail': matchDetailScreen
};

window._data = { countries, clubs };
const app = new App();
window._app = app;
app.go('menu');

window._app.simulateAndRefresh = function(countryId, divisionId, clubId) {
  app.simulateRound();
  const country = countries.find(c => c.id === countryId);
  const division = country.divisions.find(d => d.id === divisionId);
  const club = clubs.find(c => c.id === clubId);
  app.go('career', { country, division, club });
};

window._app.simulateCupAndRefresh = function(countryId, divisionId, clubId) {
  app.simulateCup();
  const country = countries.find(c => c.id === countryId);
  const division = country.divisions.find(d => d.id === divisionId);
  const club = clubs.find(c => c.id === clubId);
  app.go('cup', { country, division, club });
};

window._app.doTraining = function(focus, countryId, divisionId, clubId) {
  app.trainPlayers(focus);
  const country = countries.find(c => c.id === countryId);
  const division = country.divisions.find(d => d.id === divisionId);
  const club = clubs.find(c => c.id === clubId);
  app.go('training', { country, division, club });
};
