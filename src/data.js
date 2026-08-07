export const countries = [
  { id: 'brazil', name: 'Brasil', flag: '🇧🇷', currency: 'R$', divisions: [
    { id: 'serie_a', name: 'Série A', tier: 1, available: true },
    { id: 'serie_b', name: 'Série B', tier: 2, available: false }
  ]},
  { id: 'argentina', name: 'Argentina', flag: '🇦🇷', currency: 'AR$', divisions: [
    { id: 'liga_profesional', name: 'Liga Profesional', tier: 1, available: true },
    { id: 'primera_nacional', name: 'Primera Nacional', tier: 2, available: false }
  ]},
  { id: 'portugal', name: 'Portugal', flag: '🇵🇹', currency: '€', divisions: [
    { id: 'primeira_liga', name: 'Primeira Liga', tier: 1, available: true },
    { id: 'liga_portugal_2', name: 'Liga Portugal 2', tier: 2, available: false }
  ]}
];

let _pid = 100;
function pid() { return _pid++; }

export const clubs = [
  // ═══════════════════ BRASIL ═══════════════════
  {
    id: 'aurora_fc', name: 'Aurora FC', abbr: 'AUR', city: 'Porto Aurora', state: 'PR',
    founded: 1945, country: 'brazil', division: 'serie_a',
    colors: { primary: '#2ecc71', secondary: '#fff' },
    stadium: { name: 'Estádio Aurora', capacity: 42000 },
    reputation: 68, budget: 15000000, fanLevel: 75, objective: 'G4',
    performance: { overall: 72, attack: 74, midfield: 70, defense: 71, fitness: 82, morale: 75 },
    squad: [
      { id: pid(), name: 'Marcos Aurélio', pos: 'GK', age: 32, ovr: 74, salary: 85000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 2000000 },
      { id: pid(), name: 'Pedro Santos', pos: 'DEF', age: 28, ovr: 73, salary: 72000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 3500000 },
      { id: pid(), name: 'Lucas Ferreira', pos: 'DEF', age: 25, ovr: 71, salary: 65000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 3000000 },
      { id: pid(), name: 'Carlos Mendes', pos: 'DEF', age: 30, ovr: 70, salary: 68000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 2200000 },
      { id: pid(), name: 'Fernando Alves', pos: 'DEF', age: 27, ovr: 72, salary: 70000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 3200000 },
      { id: pid(), name: 'João Pereira', pos: 'MID', age: 26, ovr: 73, salary: 75000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 4000000 },
      { id: pid(), name: 'Ricardo Lima', pos: 'MID', age: 24, ovr: 70, salary: 55000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 2800000 },
      { id: pid(), name: 'Paulo Henrique', pos: 'MID', age: 29, ovr: 71, salary: 68000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 2500000 },
      { id: pid(), name: 'Thiago Almeida', pos: 'FWD', age: 23, ovr: 75, salary: 80000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 5000000 },
      { id: pid(), name: 'Robson Carlos', pos: 'FWD', age: 28, ovr: 74, salary: 82000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 4500000 },
      { id: pid(), name: 'Pedro Henrique', pos: 'FWD', age: 21, ovr: 68, salary: 45000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 2000000 }
    ],
    rivals: { main: 'vila_esporte', derbies: ['Clássico Verde-Branco'] },
    titles: ['Série A 2018', 'Copa do Brasil 2020', 'Paranaense 2023'],
    records: { biggestWin: '7-0 vs União Nacional', topScorer: 'Robson Carlos (156 gols)' }
  },
  {
    id: 'estrela_azul', name: 'Estrela Azul', abbr: 'EST', city: 'São Paulo', state: 'SP',
    founded: 1932, country: 'brazil', division: 'serie_a',
    colors: { primary: '#3498db', secondary: '#fff' },
    stadium: { name: 'Estrela Arena', capacity: 55000 },
    reputation: 88, budget: 45000000, fanLevel: 82, objective: 'Título',
    performance: { overall: 78, attack: 80, midfield: 76, defense: 75, fitness: 85, morale: 80 },
    squad: [
      { id: pid(), name: 'Carlos Eduardo', pos: 'GK', age: 29, ovr: 78, salary: 120000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 8000000 },
      { id: pid(), name: 'André Silva', pos: 'DEF', age: 27, ovr: 77, salary: 110000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 7000000 },
      { id: pid(), name: 'Gabriel Costa', pos: 'DEF', age: 25, ovr: 76, salary: 95000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 6000000 },
      { id: pid(), name: 'Rafael Santos', pos: 'DEF', age: 30, ovr: 75, salary: 100000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 5000000 },
      { id: pid(), name: 'Bruno Almeida', pos: 'DEF', age: 24, ovr: 74, salary: 85000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 5500000 },
      { id: pid(), name: 'Lucas Paquetá', pos: 'MID', age: 26, ovr: 80, salary: 150000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 15000000 },
      { id: pid(), name: 'Matheus Pereira', pos: 'MID', age: 25, ovr: 78, salary: 130000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 12000000 },
      { id: pid(), name: 'Vinícius Júnior', pos: 'MID', age: 23, ovr: 79, salary: 140000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 14000000 },
      { id: pid(), name: 'Ricardo Kaká', pos: 'FWD', age: 27, ovr: 82, salary: 180000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 20000000 },
      { id: pid(), name: 'Robinho Santos', pos: 'FWD', age: 30, ovr: 78, salary: 135000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 10000000 },
      { id: pid(), name: 'Endrick Felipe', pos: 'FWD', age: 19, ovr: 72, salary: 60000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 8000000 }
    ],
    rivals: { main: 'real_capital', derbies: ['Clássico das Estrelas'] },
    titles: ['Série A 2015/2019/2022', 'Copa do Brasil 2018/2021', 'Libertadores 2020'],
    records: { biggestWin: '8-1 vs Vila Esporte', topScorer: 'Ricardo Kaká (210 gols)' }
  },
  {
    id: 'uniao_nacional', name: 'União Nacional', abbr: 'UNI', city: 'Brasília', state: 'DF',
    founded: 1958, country: 'brazil', division: 'serie_a',
    colors: { primary: '#e74c3c', secondary: '#f1c40f' },
    stadium: { name: 'Arena Nacional', capacity: 48000 },
    reputation: 58, budget: 8000000, fanLevel: 65, objective: 'Mid-table',
    performance: { overall: 65, attack: 63, midfield: 66, defense: 64, fitness: 78, morale: 60 },
    squad: [
      { id: pid(), name: 'Gilmar Rinaldi', pos: 'GK', age: 34, ovr: 67, salary: 50000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 800000 },
      { id: pid(), name: 'Carlos Alberto', pos: 'DEF', age: 31, ovr: 66, salary: 48000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 1200000 },
      { id: pid(), name: 'Roberto Nascimento', pos: 'DEF', age: 29, ovr: 65, salary: 45000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 1000000 },
      { id: pid(), name: 'Antônio Carlos', pos: 'DEF', age: 27, ovr: 64, salary: 42000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 900000 },
      { id: pid(), name: 'Marcos Oliveira', pos: 'DEF', age: 26, ovr: 63, salary: 40000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 800000 },
      { id: pid(), name: 'Jorge de Souza', pos: 'MID', age: 28, ovr: 67, salary: 52000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 1500000 },
      { id: pid(), name: 'Fernando Costa', pos: 'MID', age: 25, ovr: 65, salary: 44000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 1100000 },
      { id: pid(), name: 'Pedro Paulo', pos: 'MID', age: 24, ovr: 64, salary: 40000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 900000 },
      { id: pid(), name: 'Matheus Pereira', pos: 'FWD', age: 26, ovr: 68, salary: 55000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 2000000 },
      { id: pid(), name: 'Ruan Ribeiro', pos: 'FWD', age: 23, ovr: 64, salary: 38000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 1000000 },
      { id: pid(), name: 'Pedro Henrique', pos: 'FWD', age: 21, ovr: 60, salary: 28000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 600000 }
    ],
    rivals: { main: 'atletico_central', derbies: ['Clássico Centro-Oeste'] },
    titles: ['Copa do Brasil 2016', 'Brasiliense 2023'],
    records: { biggestWin: '6-0 vs Vila Esporte', topScorer: 'Jorge de Souza (95 gols)' }
  },
  {
    id: 'atletico_central', name: 'Atlético Central', abbr: 'ATC', city: 'Belo Horizonte', state: 'MG',
    founded: 1908, country: 'brazil', division: 'serie_a',
    colors: { primary: '#2c3e50', secondary: '#000' },
    stadium: { name: 'Central Stadium', capacity: 62000 },
    reputation: 82, budget: 35000000, fanLevel: 80, objective: 'G4',
    performance: { overall: 76, attack: 78, midfield: 74, defense: 73, fitness: 84, morale: 78 },
    squad: [
      { id: pid(), name: 'Fábio Devecchi', pos: 'GK', age: 31, ovr: 75, salary: 95000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 5000000 },
      { id: pid(), name: 'Réver', pos: 'DEF', age: 33, ovr: 76, salary: 100000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 4000000 },
      { id: pid(), name: 'Léo Silva', pos: 'DEF', age: 29, ovr: 74, salary: 88000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 5000000 },
      { id: pid(), name: 'Edcarlos', pos: 'DEF', age: 27, ovr: 73, salary: 80000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 4500000 },
      { id: pid(), name: 'Mancio', pos: 'DEF', age: 25, ovr: 72, salary: 75000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 4000000 },
      { id: pid(), name: 'Diego Tardelli', pos: 'MID', age: 28, ovr: 77, salary: 110000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 8000000 },
      { id: pid(), name: 'José Welison', pos: 'MID', age: 26, ovr: 74, salary: 85000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 5000000 },
      { id: pid(), name: 'Alan Kardec', pos: 'MID', age: 25, ovr: 73, salary: 78000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 4500000 },
      { id: pid(), name: 'Fred', pos: 'FWD', age: 32, ovr: 78, salary: 130000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 6000000 },
      { id: pid(), name: 'Savio', pos: 'FWD', age: 22, ovr: 74, salary: 70000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 7000000 },
      { id: pid(), name: 'Paulinho', pos: 'FWD', age: 24, ovr: 72, salary: 65000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 4000000 }
    ],
    rivals: { main: 'aurora_fc', derbies: ['Clássico Mineiro'] },
    titles: ['Série A 2014/2021', 'Copa do Brasil 2017', 'Libertadores 2016'],
    records: { biggestWin: '7-1 vs Vila Esporte', topScorer: 'Fred (185 gols)' }
  },
  {
    id: 'real_capital', name: 'Real Capital', abbr: 'RCP', city: 'Rio de Janeiro', state: 'RJ',
    founded: 1920, country: 'brazil', division: 'serie_a',
    colors: { primary: '#f39c12', secondary: '#2c3e50' },
    stadium: { name: 'Real Arena', capacity: 70000 },
    reputation: 95, budget: 80000000, fanLevel: 88, objective: 'Título',
    performance: { overall: 82, attack: 85, midfield: 80, defense: 78, fitness: 88, morale: 85 },
    squad: [
      { id: pid(), name: 'Marcos Serrano', pos: 'GK', age: 30, ovr: 80, salary: 150000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 12000000 },
      { id: pid(), name: 'Thiago Silva', pos: 'DEF', age: 33, ovr: 82, salary: 200000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 10000000 },
      { id: pid(), name: 'Marcelo', pos: 'DEF', age: 31, ovr: 80, salary: 180000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 12000000 },
      { id: pid(), name: 'David Luiz', pos: 'DEF', age: 29, ovr: 79, salary: 160000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 10000000 },
      { id: pid(), name: 'Fágner', pos: 'DEF', age: 28, ovr: 78, salary: 140000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 9000000 },
      { id: pid(), name: 'Casemiro', pos: 'MID', age: 27, ovr: 83, salary: 220000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 25000000 },
      { id: pid(), name: 'Philippe Coutinho', pos: 'MID', age: 26, ovr: 81, salary: 190000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 18000000 },
      { id: pid(), name: 'Lucas Paquetá', pos: 'MID', age: 24, ovr: 80, salary: 170000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 16000000 },
      { id: pid(), name: 'Neymar Jr', pos: 'FWD', age: 28, ovr: 88, salary: 350000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 50000000 },
      { id: pid(), name: 'Vinícius Júnior', pos: 'FWD', age: 23, ovr: 84, salary: 250000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 30000000 },
      { id: pid(), name: 'Endrick', pos: 'FWD', age: 18, ovr: 76, salary: 80000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 15000000 }
    ],
    rivals: { main: 'estrela_azul', derbies: ['Clássico das Multidões'] },
    titles: ['Série A 2016/2018/2020/2023', 'Libertadores 2017/2019/2021', 'Mundial 2017/2019'],
    records: { biggestWin: '9-0 vs Vila Esporte', topScorer: 'Neymar Jr (180 gols)' }
  },
  {
    id: 'vila_esporte', name: 'Vila Esporte', abbr: 'VES', city: 'Curitiba', state: 'PR',
    founded: 1971, country: 'brazil', division: 'serie_a',
    colors: { primary: '#1abc9c', secondary: '#ecf0f1' },
    stadium: { name: 'Vila Arena', capacity: 35000 },
    reputation: 42, budget: 3000000, fanLevel: 55, objective: 'Evitar rebaixamento',
    performance: { overall: 58, attack: 55, midfield: 58, defense: 60, fitness: 72, morale: 50 },
    squad: [
      { id: pid(), name: 'André Luis', pos: 'GK', age: 33, ovr: 58, salary: 25000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 500000 },
      { id: pid(), name: 'Marcos Vinícius', pos: 'DEF', age: 29, ovr: 60, salary: 28000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 600000 },
      { id: pid(), name: 'Ruan Pablo', pos: 'DEF', age: 25, ovr: 58, salary: 22000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 500000 },
      { id: pid(), name: 'Cléber Carlos', pos: 'DEF', age: 27, ovr: 57, salary: 20000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 400000 },
      { id: pid(), name: 'Fernando', pos: 'DEF', age: 26, ovr: 56, salary: 18000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 350000 },
      { id: pid(), name: 'Wellington Paulista', pos: 'MID', age: 30, ovr: 60, salary: 30000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 700000 },
      { id: pid(), name: 'Ricardo Gomes', pos: 'MID', age: 27, ovr: 58, salary: 24000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 500000 },
      { id: pid(), name: 'André Luiz', pos: 'MID', age: 31, ovr: 57, salary: 22000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 400000 },
      { id: pid(), name: 'Pedro Raul', pos: 'FWD', age: 24, ovr: 59, salary: 26000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 600000 },
      { id: pid(), name: 'Paulo Sérgio', pos: 'FWD', age: 22, ovr: 55, salary: 15000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 300000 },
      { id: pid(), name: 'Ruan Torres', pos: 'FWD', age: 20, ovr: 52, salary: 12000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 200000 }
    ],
    rivals: { main: 'aurora_fc', derbies: ['Clássico Paranaense'] },
    titles: ['Série B 2010', 'Paranaense 2015'],
    records: { biggestWin: '5-0 vs União Nacional', topScorer: 'Cléber Carlos (65 gols)' }
  },

  // ═══════════════════ ARGENTINA ═══════════════════
  {
    id: 'boca_juniors', name: 'Boca Juniors', abbr: 'BOC', city: 'Buenos Aires', state: 'CABA',
    founded: 1905, country: 'argentina', division: 'liga_profesional',
    colors: { primary: '#003DA5', secondary: '#F5D100' },
    stadium: { name: 'La Bombonera', capacity: 54000 },
    reputation: 92, budget: 50000000, fanLevel: 95, objective: 'Título',
    performance: { overall: 80, attack: 82, midfield: 78, defense: 77, fitness: 85, morale: 82 },
    squad: [
      { id: pid(), name: 'Sergio Romero', pos: 'GK', age: 35, ovr: 76, salary: 80000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 3000000 },
      { id: pid(), name: 'Luis Advíncula', pos: 'DEF', age: 32, ovr: 75, salary: 70000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 3500000 },
      { id: pid(), name: 'Carlos Zambrano', pos: 'DEF', age: 33, ovr: 74, salary: 65000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 2500000 },
      { id: pid(), name: 'Jorge Figal', pos: 'DEF', age: 28, ovr: 73, salary: 60000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 4000000 },
      { id: pid(), name: 'Marcelo Saracchi', pos: 'DEF', age: 24, ovr: 72, salary: 55000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 3500000 },
      { id: pid(), name: 'Guilherme Núñez', pos: 'MID', age: 27, ovr: 76, salary: 75000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 5000000 },
      { id: pid(), name: 'Alan Varela', pos: 'MID', age: 25, ovr: 74, salary: 65000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 6000000 },
      { id: pid(), name: 'Pol Fernández', pos: 'MID', age: 31, ovr: 73, salary: 60000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 3000000 },
      { id: pid(), name: 'Dario Benedetto', pos: 'FWD', age: 32, ovr: 78, salary: 90000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 5000000 },
      { id: pid(), name: 'Norberto Briasco', pos: 'FWD', age: 26, ovr: 72, salary: 55000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 3000000 },
      { id: pid(), name: 'Eduard Salvio', pos: 'FWD', age: 28, ovr: 75, salary: 70000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 4500000 }
    ],
    rivals: { main: 'river_plate', derbies: ['Superclásico'] },
    titles: ['Liga 2020', 'Libertadores 2020', 'Copa Argentina 2021'],
    records: { biggestWin: '6-0 vs Vélez', topScorer: 'Carlos Tevez (250 gols)' }
  },
  {
    id: 'river_plate', name: 'River Plate', abbr: 'RIV', city: 'Buenos Aires', state: 'CABA',
    founded: 1901, country: 'argentina', division: 'liga_profesional',
    colors: { primary: '#fff', secondary: '#D4171E' },
    stadium: { name: 'Monumental', capacity: 72000 },
    reputation: 93, budget: 55000000, fanLevel: 90, objective: 'Título',
    performance: { overall: 81, attack: 83, midfield: 79, defense: 76, fitness: 86, morale: 83 },
    squad: [
      { id: pid(), name: 'Franco Armani', pos: 'GK', age: 36, ovr: 77, salary: 85000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 2000000 },
      { id: pid(), name: 'Gonzalo Montiel', pos: 'DEF', age: 26, ovr: 76, salary: 70000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 8000000 },
      { id: pid(), name: 'David Martínez', pos: 'DEF', age: 25, ovr: 74, salary: 60000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 5000000 },
      { id: pid(), name: 'Paulo Díaz', pos: 'DEF', age: 28, ovr: 75, salary: 65000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 6000000 },
      { id: pid(), name: 'Elias Gómez', pos: 'DEF', age: 24, ovr: 72, salary: 50000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 4000000 },
      { id: pid(), name: 'Enzo Fernández', pos: 'MID', age: 22, ovr: 80, salary: 90000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 20000000 },
      { id: pid(), name: 'Nicolás De la Cruz', pos: 'MID', age: 25, ovr: 77, salary: 75000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 10000000 },
      { id: pid(), name: 'Bruno Zuculini', pos: 'MID', age: 30, ovr: 73, salary: 60000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 3000000 },
      { id: pid(), name: 'Julián Álvarez', pos: 'FWD', age: 23, ovr: 82, salary: 100000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 30000000 },
      { id: pid(), name: 'Miguel Borja', pos: 'FWD', age: 30, ovr: 76, salary: 80000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 5000000 },
      { id: pid(), name: 'Pablo Solari', pos: 'FWD', age: 22, ovr: 73, salary: 45000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 6000000 }
    ],
    rivals: { main: 'boca_juniors', derbies: ['Superclásico'] },
    titles: ['Liga 2021/2022', 'Libertadores 2018/2019', 'Copa Argentina 2023'],
    records: { biggestWin: '7-0 vs Talleres', topScorer: 'Enzo Francescoli (200 gols)' }
  },
  {
    id: 'racing_club', name: 'Racing Club', abbr: 'RAC', city: 'Avellaneda', state: 'BA',
    founded: 1903, country: 'argentina', division: 'liga_profesional',
    colors: { primary: '#87CEEB', secondary: '#fff' },
    stadium: { name: 'Cilindro de Avellaneda', capacity: 55000 },
    reputation: 80, budget: 25000000, fanLevel: 75, objective: 'G6',
    performance: { overall: 74, attack: 76, midfield: 73, defense: 72, fitness: 80, morale: 72 },
    squad: [
      { id: pid(), name: 'Gabriel Arias', pos: 'GK', age: 35, ovr: 74, salary: 60000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 2000000 },
      { id: pid(), name: 'Ivan Pillud', pos: 'DEF', age: 34, ovr: 72, salary: 50000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 1500000 },
      { id: pid(), name: 'Emiliano Insúa', pos: 'DEF', age: 34, ovr: 73, salary: 55000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 1800000 },
      { id: pid(), name: 'Nicolás Caprarich', pos: 'DEF', age: 27, ovr: 71, salary: 45000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 2500000 },
      { id: pid(), name: 'Facundo Mura', pos: 'DEF', age: 24, ovr: 70, salary: 40000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 2000000 },
      { id: pid(), name: 'Leonardo Sigali', pos: 'MID', age: 35, ovr: 73, salary: 55000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 1500000 },
      { id: pid(), name: 'Maximiliano Moralez', pos: 'MID', age: 36, ovr: 74, salary: 65000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 1200000 },
      { id: pid(), name: 'Aníbal Moreno', pos: 'MID', age: 24, ovr: 72, salary: 50000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 4000000 },
      { id: pid(), name: 'Gabriel Hauche', pos: 'FWD', age: 36, ovr: 73, salary: 55000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 1000000 },
      { id: pid(), name: 'Lisandro López', pos: 'FWD', age: 40, ovr: 70, salary: 50000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 500000 },
      { id: pid(), name: 'Tomás Chancalay', pos: 'FWD', age: 24, ovr: 72, salary: 45000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 3500000 }
    ],
    rivals: { main: 'independiente', derbies: ['Clásico de Avellaneda'] },
    titles: ['Liga 2014', 'Copa Sudamericana 2023'],
    records: { biggestWin: '7-1 vs San Martín', topScorer: 'Claudio Borghi (160 gols)' }
  },
  {
    id: 'independiente', name: 'Independiente', abbr: 'IND', city: 'Avellaneda', state: 'BA',
    founded: 1905, country: 'argentina', division: 'liga_profesional',
    colors: { primary: '#D4171E', secondary: '#fff' },
    stadium: { name: 'Libertadores de América', capacity: 48000 },
    reputation: 78, budget: 20000000, fanLevel: 72, objective: 'G6',
    performance: { overall: 72, attack: 74, midfield: 71, defense: 70, fitness: 78, morale: 68 },
    squad: [
      { id: pid(), name: 'Milton Álvarez', pos: 'GK', age: 30, ovr: 72, salary: 50000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 2000000 },
      { id: pid(), name: 'Francisco Ácrico', pos: 'DEF', age: 28, ovr: 70, salary: 45000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 2500000 },
      { id: pid(), name: 'Joaquín Laso', pos: 'DEF', age: 27, ovr: 71, salary: 48000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 2800000 },
      { id: pid(), name: 'Dylan Boyle', pos: 'DEF', age: 24, ovr: 68, salary: 38000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 2000000 },
      { id: pid(), name: 'Gonzalo Asis', pos: 'DEF', age: 26, ovr: 69, salary: 42000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 2200000 },
      { id: pid(), name: 'Rodrigo Álzate', pos: 'MID', age: 29, ovr: 71, salary: 48000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 2500000 },
      { id: pid(), name: 'Lucas González', pos: 'MID', age: 23, ovr: 70, salary: 40000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 3000000 },
      { id: pid(), name: 'César Pérez', pos: 'MID', age: 25, ovr: 69, salary: 42000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 2500000 },
      { id: pid(), name: 'Leandro Benegas', pos: 'FWD', age: 34, ovr: 72, salary: 55000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 1000000 },
      { id: pid(), name: 'Gabriel Ávalos', pos: 'FWD', age: 32, ovr: 71, salary: 50000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 1200000 },
      { id: pid(), name: 'Santiago Hidalgo', pos: 'FWD', age: 21, ovr: 68, salary: 30000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 2500000 }
    ],
    rivals: { main: 'racing_club', derbies: ['Clásico de Avellaneda'] },
    titles: ['Liga 2002', 'Libertadores 1984', 'Copa Sudamericana 2017'],
    records: { biggestWin: '6-0 vs Unión', topScorer: 'Antonio Casagrande (180 gols)' }
  },
  {
    id: 'san_lorenzo', name: 'San Lorenzo', abbr: 'SLO', city: 'Buenos Aires', state: 'CABA',
    founded: 1908, country: 'argentina', division: 'liga_profesional',
    colors: { primary: '#003DA5', secondary: '#D4171E' },
    stadium: { name: 'Pedro Bidegain', capacity: 47000 },
    reputation: 76, budget: 18000000, fanLevel: 70, objective: 'G8',
    performance: { overall: 70, attack: 71, midfield: 70, defense: 69, fitness: 77, morale: 65 },
    squad: [
      { id: pid(), name: 'José Devecchi', pos: 'GK', age: 33, ovr: 71, salary: 45000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 1500000 },
      { id: pid(), name: 'Gastón Campi', pos: 'DEF', age: 30, ovr: 70, salary: 42000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 2000000 },
      { id: pid(), name: 'Carlos Zambrano', pos: 'DEF', age: 33, ovr: 72, salary: 50000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 2000000 },
      { id: pid(), name: 'Federico Gattoni', pos: 'DEF', age: 24, ovr: 69, salary: 38000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 3000000 },
      { id: pid(), name: 'Agustín Giay', pos: 'DEF', age: 20, ovr: 67, salary: 28000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 2500000 },
      { id: pid(), name: 'Diego Martínez', pos: 'MID', age: 28, ovr: 70, salary: 42000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 2200000 },
      { id: pid(), name: 'Giuliano Galoppo', pos: 'MID', age: 24, ovr: 71, salary: 45000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 3500000 },
      { id: pid(), name: 'Ivan Leguizamón', pos: 'MID', age: 25, ovr: 69, salary: 40000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 2500000 },
      { id: pid(), name: 'Alexis Cuello', pos: 'FWD', age: 23, ovr: 72, salary: 50000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 4000000 },
      { id: pid(), name: 'Ezequiel Cerutti', pos: 'FWD', age: 31, ovr: 70, salary: 45000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 1800000 },
      { id: pid(), name: 'Adam Bareiro', pos: 'FWD', age: 26, ovr: 71, salary: 48000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 3000000 }
    ],
    rivals: { main: 'boca_juniors', derbies: ['Clásico del Sur'] },
    titles: ['Liga 2013', 'Copa Libertadores 2014'],
    records: { biggestWin: '5-0 vs Olimpo', topScorer: 'Oscar Ruggeri (120 gols)' }
  },
  {
    id: 'estudiantes', name: 'Estudiantes', abbr: 'ESTU', city: 'La Plata', state: 'BA',
    founded: 1905, country: 'argentina', division: 'liga_profesional',
    colors: { primary: '#D4171E', secondary: '#fff' },
    stadium: { name: 'Estadio Jorge Luis Hirschi', capacity: 32000 },
    reputation: 79, budget: 22000000, fanLevel: 68, objective: 'G6',
    performance: { overall: 73, attack: 74, midfield: 72, defense: 72, fitness: 80, morale: 70 },
    squad: [
      { id: pid(), name: 'Mariano Andújar', pos: 'GK', age: 39, ovr: 70, salary: 40000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 500000 },
      { id: pid(), name: 'Juan Foyth', pos: 'DEF', age: 25, ovr: 76, salary: 70000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 8000000 },
      { id: pid(), name: 'Lucas Agnelli', pos: 'DEF', age: 28, ovr: 71, salary: 45000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 2500000 },
      { id: pid(), name: 'Fernando Tobio', pos: 'DEF', age: 33, ovr: 72, salary: 48000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 1800000 },
      { id: pid(), name: 'Eduardo Salvio', pos: 'DEF', age: 27, ovr: 70, salary: 42000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 2800000 },
      { id: pid(), name: 'Manuel Castro', pos: 'MID', age: 27, ovr: 72, salary: 48000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 3000000 },
      { id: pid(), name: 'Fernando Zuqui', pos: 'MID', age: 26, ovr: 71, salary: 45000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 3200000 },
      { id: pid(), name: 'Joaquín Pickel', pos: 'MID', age: 25, ovr: 70, salary: 42000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 2800000 },
      { id: pid(), name: 'Mauro Boselli', pos: 'FWD', age: 38, ovr: 71, salary: 50000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 500000 },
      { id: pid(), name: 'Leandro Díaz', pos: 'FWD', age: 29, ovr: 73, salary: 55000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 3500000 },
      { id: pid(), name: 'Santiago Castro', pos: 'FWD', age: 19, ovr: 68, salary: 25000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 4000000 }
    ],
    rivals: { main: 'gimnasia_lp', derbies: ['Clásico Platense'] },
    titles: ['Liga 2006', 'Libertadores 2009'],
    records: { biggestWin: '5-0 vs Godoy Cruz', topScorer: 'Carlos Bilardo (120 gols)' }
  },

  // ═══════════════════ PORTUGAL ═══════════════════
  {
    id: 'benfica', name: 'Benfica', abbr: 'BEN', city: 'Lisboa', state: 'Lisboa',
    founded: 1904, country: 'portugal', division: 'primeira_liga',
    colors: { primary: '#D4171E', secondary: '#fff' },
    stadium: { name: 'Estádio da Luz', capacity: 65000 },
    reputation: 90, budget: 80000000, fanLevel: 92, objective: 'Título',
    performance: { overall: 82, attack: 84, midfield: 81, defense: 78, fitness: 86, morale: 84 },
    squad: [
      { id: pid(), name: 'Odysseas Vlachodimos', pos: 'GK', age: 29, ovr: 80, salary: 90000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 12000000 },
      { id: pid(), name: 'Alexander Bah', pos: 'DEF', age: 25, ovr: 77, salary: 70000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 8000000 },
      { id: pid(), name: 'Nicolás Otamendi', pos: 'DEF', age: 35, ovr: 79, salary: 85000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 5000000 },
      { id: pid(), name: 'Jan Vertonghen', pos: 'DEF', age: 36, ovr: 77, salary: 80000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 3000000 },
      { id: pid(), name: 'Álex Grimaldo', pos: 'DEF', age: 27, ovr: 78, salary: 75000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 10000000 },
      { id: pid(), name: 'Florentino Luís', pos: 'MID', age: 24, ovr: 78, salary: 80000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 12000000 },
      { id: pid(), name: 'Rafa Silva', pos: 'MID', age: 30, ovr: 80, salary: 95000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 8000000 },
      { id: pid(), name: 'Oricola', pos: 'MID', age: 26, ovr: 77, salary: 70000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 9000000 },
      { id: pid(), name: 'Gonçalo Ramos', pos: 'FWD', age: 22, ovr: 82, salary: 100000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 25000000 },
      { id: pid(), name: 'Ángel Di María', pos: 'FWD', age: 35, ovr: 81, salary: 110000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 6000000 },
      { id: pid(), name: 'Arthur Cabral', pos: 'FWD', age: 25, ovr: 78, salary: 80000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 10000000 }
    ],
    rivals: { main: 'porto', derbies: ['O Clássico'] },
    titles: ['Liga 2023', 'Copa 2023', 'Libertadores (antiga)'],
    records: { biggestWin: '8-0 vs Marítimo', topScorer: 'Eusébio (473 gols)' }
  },
  {
    id: 'porto', name: 'FC Porto', abbr: 'POR', city: 'Porto', state: 'Porto',
    founded: 1893, country: 'portugal', division: 'primeira_liga',
    colors: { primary: '#003DA5', secondary: '#fff' },
    stadium: { name: 'Estádio do Dragão', capacity: 52000 },
    reputation: 89, budget: 70000000, fanLevel: 88, objective: 'Título',
    performance: { overall: 81, attack: 82, midfield: 80, defense: 79, fitness: 85, morale: 82 },
    squad: [
      { id: pid(), name: 'Diogo Costa', pos: 'GK', age: 24, ovr: 82, salary: 80000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 18000000 },
      { id: pid(), name: 'João Mário', pos: 'DEF', age: 23, ovr: 76, salary: 65000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 8000000 },
      { id: pid(), name: 'Pepe', pos: 'DEF', age: 40, ovr: 78, salary: 90000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 2000000 },
      { id: pid(), name: 'Iván Marcano', pos: 'DEF', age: 35, ovr: 76, salary: 70000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 2000000 },
      { id: pid(), name: 'Zaidu Sanusi', pos: 'DEF', age: 26, ovr: 75, salary: 60000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 6000000 },
      { id: pid(), name: 'Otávio', pos: 'MID', age: 28, ovr: 80, salary: 90000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 12000000 },
      { id: pid(), name: 'Mateus Uribe', pos: 'MID', age: 32, ovr: 77, salary: 75000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 5000000 },
      { id: pid(), name: 'Stephen Eustáquio', pos: 'MID', age: 26, ovr: 78, salary: 70000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 10000000 },
      { id: pid(), name: 'Mehdi Taremi', pos: 'FWD', age: 30, ovr: 82, salary: 100000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 15000000 },
      { id: pid(), name: 'Evanilson', pos: 'FWD', age: 24, ovr: 79, salary: 80000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 12000000 },
      { id: pid(), name: 'Gabri Veiga', pos: 'FWD', age: 21, ovr: 76, salary: 55000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 10000000 }
    ],
    rivals: { main: 'benfica', derbies: ['O Clássico'] },
    titles: ['Liga 2022/2023', 'Champions League 2004'],
    records: { biggestWin: '7-0 vs Belenenses', topScorer: 'Fernando Gomes (350 gols)' }
  },
  {
    id: 'sporting', name: 'Sporting CP', abbr: 'SCP', city: 'Lisboa', state: 'Lisboa',
    founded: 1906, country: 'portugal', division: 'primeira_liga',
    colors: { primary: '#2ecc71', secondary: '#fff' },
    stadium: { name: 'Estádio José Alvalade', capacity: 50000 },
    reputation: 85, budget: 55000000, fanLevel: 80, objective: 'Título',
    performance: { overall: 79, attack: 80, midfield: 78, defense: 77, fitness: 84, morale: 80 },
    squad: [
      { id: pid(), name: 'António Adán', pos: 'GK', age: 36, ovr: 77, salary: 65000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 2000000 },
      { id: pid(), name: 'Pedro Porro', pos: 'DEF', age: 23, ovr: 78, salary: 70000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 12000000 },
      { id: pid(), name: 'Sebastián Coates', pos: 'DEF', age: 32, ovr: 78, salary: 75000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 5000000 },
      { id: pid(), name: 'Gonçalo Inácio', pos: 'DEF', age: 22, ovr: 76, salary: 55000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 10000000 },
      { id: pid(), name: 'Nuno Santos', pos: 'DEF', age: 28, ovr: 74, salary: 55000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 5000000 },
      { id: pid(), name: 'Manuel Ugarte', pos: 'MID', age: 22, ovr: 79, salary: 65000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 15000000 },
      { id: pid(), name: 'Marcus Edwards', pos: 'MID', age: 24, ovr: 77, salary: 60000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 8000000 },
      { id: pid(), name: 'Hidemasa Morita', pos: 'MID', age: 28, ovr: 76, salary: 55000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 6000000 },
      { id: pid(), name: 'Pedro Gonçalves', pos: 'FWD', age: 25, ovr: 80, salary: 80000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 18000000 },
      { id: pid(), name: 'Viktor Gyökeres', pos: 'FWD', age: 25, ovr: 81, salary: 85000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 20000000 },
      { id: pid(), name: 'Francisco Trincão', pos: 'FWD', age: 23, ovr: 77, salary: 65000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 10000000 }
    ],
    rivals: { main: 'benfica', derbies: ['Dérby de Lisboa'] },
    titles: ['Liga 2021/2024', 'Copa 2022'],
    records: { biggestWin: '7-0 vs Belenenses', topScorer: 'Mário Coluna (300 gols)' }
  },
  {
    id: 'braga', name: 'SC Braga', abbr: 'BRA', city: 'Braga', state: 'Braga',
    founded: 1921, country: 'portugal', division: 'primeira_liga',
    colors: { primary: '#D4171E', secondary: '#fff' },
    stadium: { name: 'Estádio Municipal de Braga', capacity: 30000 },
    reputation: 75, budget: 20000000, fanLevel: 60, objective: 'G4',
    performance: { overall: 74, attack: 75, midfield: 73, defense: 73, fitness: 80, morale: 72 },
    squad: [
      { id: pid(), name: 'Matheus', pos: 'GK', age: 30, ovr: 74, salary: 45000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 3000000 },
      { id: pid(), name: 'Víctor Gómez', pos: 'DEF', age: 27, ovr: 72, salary: 40000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 3500000 },
      { id: pid(), name: 'Paulo Oliveira', pos: 'DEF', age: 31, ovr: 73, salary: 45000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 2500000 },
      { id: pid(), name: 'Sergio Oliveira', pos: 'DEF', age: 26, ovr: 71, salary: 38000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 3000000 },
      { id: pid(), name: 'Nuno Sequeira', pos: 'DEF', age: 30, ovr: 70, salary: 35000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 2000000 },
      { id: pid(), name: 'André Horta', pos: 'MID', age: 26, ovr: 73, salary: 42000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 4000000 },
      { id: pid(), name: 'El_mut El-Amine', pos: 'MID', age: 25, ovr: 72, salary: 40000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 3500000 },
      { id: pid(), name: 'Lucas Mineiro', pos: 'MID', age: 26, ovr: 71, salary: 38000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 3000000 },
      { id: pid(), name: 'Abel Ruiz', pos: 'FWD', age: 23, ovr: 74, salary: 45000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 5000000 },
      { id: pid(), name: 'Ricardo Horta', pos: 'FWD', age: 28, ovr: 76, salary: 55000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 6000000 },
      { id: pid(), name: 'Simon Banza', pos: 'FWD', age: 26, ovr: 73, salary: 42000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 4000000 }
    ],
    rivals: { main: 'porto', derbies: ['Derby do Minho'] },
    titles: ['Copa 2016/2021', 'Taça da Liga 2023'],
    records: { biggestWin: '5-0 vs Marítimo', topScorer: 'Ricardo Horta (120 gols)' }
  },
  {
    id: 'gil_vicente', name: 'Gil Vicente', abbr: 'GIL', city: 'Barcelos', state: 'Braga',
    founded: 1924, country: 'portugal', division: 'primeira_liga',
    colors: { primary: '#D4171E', secondary: '#003DA5' },
    stadium: { name: 'Estádio Cidade de Barcelos', capacity: 12500 },
    reputation: 60, budget: 8000000, fanLevel: 40, objective: 'Mid-table',
    performance: { overall: 66, attack: 67, midfield: 65, defense: 65, fitness: 74, morale: 62 },
    squad: [
      { id: pid(), name: 'Andrew', pos: 'GK', age: 28, ovr: 68, salary: 20000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 1000000 },
      { id: pid(), name: 'Zé Carlos', pos: 'DEF', age: 27, ovr: 66, salary: 18000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 800000 },
      { id: pid(), name: 'Rúben Fernandes', pos: 'DEF', age: 30, ovr: 67, salary: 20000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 700000 },
      { id: pid(), name: 'Yves Baraye', pos: 'DEF', age: 26, ovr: 65, salary: 16000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 600000 },
      { id: pid(), name: 'Marlon', pos: 'DEF', age: 24, ovr: 64, salary: 14000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 500000 },
      { id: pid(), name: 'Pedrinho', pos: 'MID', age: 25, ovr: 66, salary: 18000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 800000 },
      { id: pid(), name: 'Fujimoto', pos: 'MID', age: 28, ovr: 67, salary: 20000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 900000 },
      { id: pid(), name: 'Marlos', pos: 'MID', age: 24, ovr: 65, salary: 15000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 600000 },
      { id: pid(), name: 'Murilo', pos: 'FWD', age: 23, ovr: 67, salary: 18000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 1000000 },
      { id: pid(), name: 'Baila Sissé', pos: 'FWD', age: 22, ovr: 65, salary: 14000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 700000 },
      { id: pid(), name: 'Depú', pos: 'FWD', age: 24, ovr: 66, salary: 16000, goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, injured: 0, value: 800000 }
    ],
    rivals: { main: 'braga', derbies: ['Derby do Minho'] },
    titles: ['Copa 2011'],
    records: { biggestWin: '4-0 vs Oliveirense', topScorer: 'Pedro Mota (80 gols)' }
  }
];

export function getClub(id) { return clubs.find(c => c.id === id); }
export function getClubsByDivision(country, division) { return clubs.filter(c => c.country === country && c.division === division); }
export function getTransferMarket(country) { return clubs.filter(c => c.country === country).flatMap(c => c.squad.map(p => ({ ...p, clubId: c.id, clubName: c.name, clubAbbr: c.abbr, clubColors: c.colors }))); }
export function formatMoney(v, currency) { const c = currency || 'R$'; return v >= 1e6 ? `${c} ${(v/1e6).toFixed(1)}M` : `${c} ${v.toLocaleString('pt-BR')}`; }
export function formatMoneyShort(v) { return v >= 1e6 ? `${(v/1e6).toFixed(1)}M` : `${(v/1000).toFixed(0)}K`; }
export function reputationText(v) { return v >= 85 ? 'Muito Alta' : v >= 70 ? 'Alta' : v >= 55 ? 'Média' : 'Baixa'; }
export function fanText(v) { return v >= 85 ? 'Paixão Total' : v >= 70 ? 'Grande Torcida' : v >= 55 ? 'Torcida Fiel' : 'Torcida Moderada'; }
