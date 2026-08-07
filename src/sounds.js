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
