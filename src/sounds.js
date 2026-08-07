let audioCtx = null;
function getCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

function playTone(freq, duration, type = 'sine', volume = 0.15) {
  try {
    const ctx = getCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(volume, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch {}
}

export function playClick() { playTone(800, 0.08, 'sine', 0.12); }
export function playHover() { playTone(1200, 0.05, 'sine', 0.06); }
export function playConfirm() { playTone(600, 0.06, 'sine', 0.1); setTimeout(() => playTone(900, 0.1, 'sine', 0.12), 60); }
export function playCancel() { playTone(400, 0.12, 'triangle', 0.1); }

export function playGoal() {
  try {
    const ctx = getCtx();
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((f, i) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, ctx.currentTime + i * 0.12);
      g.gain.setValueAtTime(0.2, ctx.currentTime + i * 0.12);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.12 + 0.3);
      osc.connect(g);
      g.connect(ctx.destination);
      osc.start(ctx.currentTime + i * 0.12);
      osc.stop(ctx.currentTime + i * 0.12 + 0.3);
    });
    setTimeout(() => {
      [1046.5, 1174.66, 1318.51, 1567.98].forEach((f, i) => {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, ctx.currentTime + i * 0.1);
        g.gain.setValueAtTime(0.18, ctx.currentTime + i * 0.1);
        g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.1 + 0.25);
        osc.connect(g);
        g.connect(ctx.destination);
        osc.start(ctx.currentTime + i * 0.1);
        osc.stop(ctx.currentTime + i * 0.1 + 0.25);
      });
    }, 500);
  } catch {}
}

export function playYellowCard() {
  playTone(880, 0.15, 'square', 0.12);
  setTimeout(() => playTone(660, 0.2, 'square', 0.1), 100);
}

export function playRedCard() {
  playTone(440, 0.2, 'sawtooth', 0.15);
  setTimeout(() => playTone(330, 0.3, 'sawtooth', 0.12), 150);
  setTimeout(() => playTone(220, 0.4, 'sawtooth', 0.1), 350);
}

export function playSubstitution() {
  playTone(523.25, 0.1, 'triangle', 0.12);
  setTimeout(() => playTone(659.25, 0.1, 'triangle', 0.12), 100);
  setTimeout(() => playTone(783.99, 0.15, 'triangle', 0.12), 200);
}

export function playWhistle() {
  try {
    const ctx = getCtx();
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(2000, ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(1500, ctx.currentTime + 0.15);
    osc.frequency.linearRampToValueAtTime(2200, ctx.currentTime + 0.3);
    g.gain.setValueAtTime(0.15, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
    osc.connect(g);
    g.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.5);
  } catch {}
}

export function playCrowdCheer() {
  try {
    const ctx = getCtx();
    for (let i = 0; i < 20; i++) {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = 'sawtooth';
      const baseFreq = 200 + Math.random() * 800;
      osc.frequency.setValueAtTime(baseFreq, ctx.currentTime + i * 0.05);
      g.gain.setValueAtTime(0.02, ctx.currentTime + i * 0.05);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.05 + 0.3);
      osc.connect(g);
      g.connect(ctx.destination);
      osc.start(ctx.currentTime + i * 0.05);
      osc.stop(ctx.currentTime + i * 0.05 + 0.3);
    }
  } catch {}
}

let ambientOsc = null;
let ambientGain = null;
let ambientPlaying = false;

export function startAmbient() {
  if (ambientPlaying) return;
  try {
    const ctx = getCtx();
    ambientGain = ctx.createGain();
    ambientGain.gain.setValueAtTime(0, ctx.currentTime);
    ambientGain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 2);
    ambientGain.connect(ctx.destination);

    const notes = [220, 261.63, 329.63, 293.66];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      const noteGain = ctx.createGain();
      noteGain.gain.setValueAtTime(0.3, ctx.currentTime);
      noteGain.gain.linearRampToValueAtTime(0, ctx.currentTime + 3 + i * 0.5);
      osc.connect(noteGain);
      noteGain.connect(ambientGain);
      osc.start(ctx.currentTime + i * 0.8);
      osc.stop(ctx.currentTime + 4 + i * 0.5);
    });

    ambientPlaying = true;
    setTimeout(() => { ambientPlaying = false; }, 5000);
  } catch {}
}

export function stopAmbient() {
  if (ambientGain) {
    try {
      const ctx = getCtx();
      ambientGain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.5);
    } catch {}
    ambientPlaying = false;
  }
}

let musicOscillators = [];
let musicGain = null;
let musicPlaying = false;
let musicInterval = null;

export function startMusic() {
  if (musicPlaying) return;
  try {
    const ctx = getCtx();
    musicGain = ctx.createGain();
    musicGain.gain.setValueAtTime(0.035, ctx.currentTime);
    musicGain.connect(ctx.destination);

    const melody = [
      { f: 261.63, d: 0.8 }, { f: 329.63, d: 0.8 }, { f: 392, d: 0.8 }, { f: 523.25, d: 1.2 },
      { f: 493.88, d: 0.8 }, { f: 440, d: 0.8 }, { f: 392, d: 0.8 }, { f: 329.63, d: 1.2 },
      { f: 349.23, d: 0.8 }, { f: 440, d: 0.8 }, { f: 523.25, d: 0.8 }, { f: 659.25, d: 1.2 },
      { f: 587.33, d: 0.8 }, { f: 493.88, d: 0.8 }, { f: 440, d: 0.8 }, { f: 392, d: 1.2 }
    ];
    let noteIndex = 0;
    let time = 0;

    function playNote() {
      if (!musicPlaying) return;
      const note = melody[noteIndex % melody.length];
      const osc = ctx.createOscillator();
      const nGain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(note.f, ctx.currentTime + time);
      nGain.gain.setValueAtTime(0, ctx.currentTime + time);
      nGain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + time + 0.05);
      nGain.gain.linearRampToValueAtTime(0, ctx.currentTime + time + note.d * 0.9);
      osc.connect(nGain);
      nGain.connect(musicGain);
      osc.start(ctx.currentTime + time);
      osc.stop(ctx.currentTime + time + note.d);
      musicOscillators.push(osc);
      time += note.d;
      noteIndex++;
    }

    for (let i = 0; i < melody.length; i++) playNote();
    musicPlaying = true;

    musicInterval = setInterval(() => {
      if (!musicPlaying) { clearInterval(musicInterval); return; }
      time = 0;
      noteIndex = 0;
      for (let i = 0; i < melody.length; i++) playNote();
    }, melody.reduce((s, n) => s + n.d, 0) * 1000);
  } catch {}
}

export function stopMusic() {
  musicPlaying = false;
  if (musicInterval) clearInterval(musicInterval);
  if (musicGain) {
    try {
      const ctx = getCtx();
      musicGain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.5);
    } catch {}
  }
  musicOscillators.forEach(o => { try { o.stop(); } catch {} });
  musicOscillators = [];
}

export function isMusicPlaying() { return musicPlaying; }
