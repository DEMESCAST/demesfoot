export const countries = [
  { id: 'brazil', name: 'Brasil', flag: '🇧🇷', divisions: [
    { id: 'serie_a', name: 'Série A', tier: 1, available: true },
    { id: 'serie_b', name: 'Série B', tier: 2, available: false }
  ]}
];

export const clubs = [
  {
    id: 'aurora_fc', name: 'Aurora FC', abbr: 'AUR', city: 'Porto Aurora', state: 'PR',
    founded: 1945, country: 'brazil', division: 'serie_a',
    colors: { primary: '#2ecc71', secondary: '#fff' },
    stadium: { name: 'Estádio Aurora', capacity: 42000 },
    reputation: 68, budget: 15000000, fanLevel: 75,
    objective: 'G4',
    performance: { overall: 72, attack: 74, midfield: 70, defense: 71, fitness: 82, morale: 75 },
    squad: [
      { name: 'Marcos Aurélio', pos: 'GK', age: 32, ovr: 74, salary: 85000 },
      { name: 'Pedro Santos', pos: 'DEF', age: 28, ovr: 73, salary: 72000 },
      { name: 'Lucas Ferreira', pos: 'DEF', age: 25, ovr: 71, salary: 65000 },
      { name: 'Carlos Mendes', pos: 'DEF', age: 30, ovr: 70, salary: 68000 },
      { name: 'Fernando Alves', pos: 'DEF', age: 27, ovr: 72, salary: 70000 },
      { name: 'João Pereira', pos: 'MID', age: 26, ovr: 73, salary: 75000 },
      { name: 'Ricardo Lima', pos: 'MID', age: 24, ovr: 70, salary: 55000 },
      { name: 'Paulo Henrique', pos: 'MID', age: 29, ovr: 71, salary: 68000 },
      { name: 'Thiago Almeida', pos: 'FWD', age: 23, ovr: 75, salary: 80000 },
      { name: 'Robson Carlos', pos: 'FWD', age: 28, ovr: 74, salary: 82000 },
      { name: 'Pedro Henrique', pos: 'FWD', age: 21, ovr: 68, salary: 45000 }
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
    reputation: 88, budget: 45000000, fanLevel: 82,
    objective: 'Título',
    performance: { overall: 78, attack: 80, midfield: 76, defense: 75, fitness: 85, morale: 80 },
    squad: [
      { name: 'Carlos Eduardo', pos: 'GK', age: 29, ovr: 78, salary: 120000 },
      { name: 'André Silva', pos: 'DEF', age: 27, ovr: 77, salary: 110000 },
      { name: 'Gabriel Costa', pos: 'DEF', age: 25, ovr: 76, salary: 95000 },
      { name: 'Rafael Santos', pos: 'DEF', age: 30, ovr: 75, salary: 100000 },
      { name: 'Bruno Almeida', pos: 'DEF', age: 24, ovr: 74, salary: 85000 },
      { name: 'Lucas Paquetá', pos: 'MID', age: 26, ovr: 80, salary: 150000 },
      { name: 'Matheus Pereira', pos: 'MID', age: 25, ovr: 78, salary: 130000 },
      { name: 'Vinícius Júnior', pos: 'MID', age: 23, ovr: 79, salary: 140000 },
      { name: 'Ricardo Kaká', pos: 'FWD', age: 27, ovr: 82, salary: 180000 },
      { name: 'Robinho Santos', pos: 'FWD', age: 30, ovr: 78, salary: 135000 },
      { name: 'Endrick Felipe', pos: 'FWD', age: 19, ovr: 72, salary: 60000 }
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
    reputation: 58, budget: 8000000, fanLevel: 65,
    objective: 'Mid-table',
    performance: { overall: 65, attack: 63, midfield: 66, defense: 64, fitness: 78, morale: 60 },
    squad: [
      { name: 'Gilmar Rinaldi', pos: 'GK', age: 34, ovr: 67, salary: 50000 },
      { name: 'Carlos Alberto', pos: 'DEF', age: 31, ovr: 66, salary: 48000 },
      { name: 'Roberto Nascimento', pos: 'DEF', age: 29, ovr: 65, salary: 45000 },
      { name: 'Antônio Carlos', pos: 'DEF', age: 27, ovr: 64, salary: 42000 },
      { name: 'Marcos Oliveira', pos: 'DEF', age: 26, ovr: 63, salary: 40000 },
      { name: 'Jorge de Souza', pos: 'MID', age: 28, ovr: 67, salary: 52000 },
      { name: 'Fernando Costa', pos: 'MID', age: 25, ovr: 65, salary: 44000 },
      { name: 'Pedro Paulo', pos: 'MID', age: 24, ovr: 64, salary: 40000 },
      { name: 'Matheus Pereira', pos: 'FWD', age: 26, ovr: 68, salary: 55000 },
      { name: 'Ruan Ribeiro', pos: 'FWD', age: 23, ovr: 64, salary: 38000 },
      { name: 'Pedro Henrique', pos: 'FWD', age: 21, ovr: 60, salary: 28000 }
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
    reputation: 82, budget: 35000000, fanLevel: 80,
    objective: 'G4',
    performance: { overall: 76, attack: 78, midfield: 74, defense: 73, fitness: 84, morale: 78 },
    squad: [
      { name: 'Fábio Devecchi', pos: 'GK', age: 31, ovr: 75, salary: 95000 },
      { name: 'Réver', pos: 'DEF', age: 33, ovr: 76, salary: 100000 },
      { name: 'Léo Silva', pos: 'DEF', age: 29, ovr: 74, salary: 88000 },
      { name: 'Edcarlos', pos: 'DEF', age: 27, ovr: 73, salary: 80000 },
      { name: 'Mancio', pos: 'DEF', age: 25, ovr: 72, salary: 75000 },
      { name: 'Diego Tardelli', pos: 'MID', age: 28, ovr: 77, salary: 110000 },
      { name: 'José Welison', pos: 'MID', age: 26, ovr: 74, salary: 85000 },
      { name: 'Alan Kardec', pos: 'MID', age: 25, ovr: 73, salary: 78000 },
      { name: 'Fred', pos: 'FWD', age: 32, ovr: 78, salary: 130000 },
      { name: 'Savio', pos: 'FWD', age: 22, ovr: 74, salary: 70000 },
      { name: 'Paulinho', pos: 'FWD', age: 24, ovr: 72, salary: 65000 }
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
    reputation: 95, budget: 80000000, fanLevel: 88,
    objective: 'Título',
    performance: { overall: 82, attack: 85, midfield: 80, defense: 78, fitness: 88, morale: 85 },
    squad: [
      { name: 'Marcos Serrano', pos: 'GK', age: 30, ovr: 80, salary: 150000 },
      { name: 'Thiago Silva', pos: 'DEF', age: 33, ovr: 82, salary: 200000 },
      { name: 'Marcelo', pos: 'DEF', age: 31, ovr: 80, salary: 180000 },
      { name: 'David Luiz', pos: 'DEF', age: 29, ovr: 79, salary: 160000 },
      { name: 'Fágner', pos: 'DEF', age: 28, ovr: 78, salary: 140000 },
      { name: 'Casemiro', pos: 'MID', age: 27, ovr: 83, salary: 220000 },
      { name: 'Philippe Coutinho', pos: 'MID', age: 26, ovr: 81, salary: 190000 },
      { name: 'Lucas Paquetá', pos: 'MID', age: 24, ovr: 80, salary: 170000 },
      { name: 'Neymar Jr', pos: 'FWD', age: 28, ovr: 88, salary: 350000 },
      { name: 'Vinícius Júnior', pos: 'FWD', age: 23, ovr: 84, salary: 250000 },
      { name: 'Endrick', pos: 'FWD', age: 18, ovr: 76, salary: 80000 }
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
    reputation: 42, budget: 3000000, fanLevel: 55,
    objective: 'Evitar rebaixamento',
    performance: { overall: 58, attack: 55, midfield: 58, defense: 60, fitness: 72, morale: 50 },
    squad: [
      { name: 'André Luis', pos: 'GK', age: 33, ovr: 58, salary: 25000 },
      { name: 'Marcos Vinícius', pos: 'DEF', age: 29, ovr: 60, salary: 28000 },
      { name: 'Ruan Pablo', pos: 'DEF', age: 25, ovr: 58, salary: 22000 },
      { name: 'Cléber Carlos', pos: 'DEF', age: 27, ovr: 57, salary: 20000 },
      { name: 'Fernando', pos: 'DEF', age: 26, ovr: 56, salary: 18000 },
      { name: 'Wellington Paulista', pos: 'MID', age: 30, ovr: 60, salary: 30000 },
      { name: 'Ricardo Gomes', pos: 'MID', age: 27, ovr: 58, salary: 24000 },
      { name: 'André Luiz', pos: 'MID', age: 31, ovr: 57, salary: 22000 },
      { name: 'Pedro Raul', pos: 'FWD', age: 24, ovr: 59, salary: 26000 },
      { name: 'Paulo Sérgio', pos: 'FWD', age: 22, ovr: 55, salary: 15000 },
      { name: 'Ruan Pablo', pos: 'FWD', age: 20, ovr: 52, salary: 12000 }
    ],
    rivals: { main: 'aurora_fc', derbies: ['Clássico Paranaense'] },
    titles: ['Série B 2010', 'Paranaense 2015'],
    records: { biggestWin: '5-0 vs União Nacional', topScorer: 'Cléber Carlos (65 gols)' }
  }
];

export function getClub(id) { return clubs.find(c => c.id === id); }
export function getClubsByDivision(country, division) { return clubs.filter(c => c.country === country && c.division === division); }
export function formatMoney(v) { return v >= 1e6 ? `R$ ${(v/1e6).toFixed(0)}M` : `R$ ${v.toLocaleString('pt-BR')}`; }
export function reputationText(v) { return v >= 85 ? 'Muito Alta' : v >= 70 ? 'Alta' : v >= 55 ? 'Média' : 'Baixa'; }
export function fanText(v) { return v >= 85 ? 'Paixão Total' : v >= 70 ? 'Grande Torcida' : v >= 55 ? 'Torcida Fiel' : 'Torcida Moderada'; }
