const DB = {
  warmup: {
    es: [
      { name: "Rotación de cuello", duration: 20, rest: 5, tip: "Lento, sin forzar" },
      { name: "Trote en el lugar", duration: 45, rest: 10, tip: "Rodillas al pecho, activa" },
      { name: "Jumping jacks", duration: 40, rest: 10, tip: "Ritmo moderado, respira" },
      { name: "Círculos de brazos", duration: 25, rest: 5, tip: "Amplitud máxima" },
    ],
    en: [
      { name: "Neck rotations", duration: 20, rest: 5, tip: "Slow, no forcing" },
      { name: "Jogging in place", duration: 45, rest: 10, tip: "Knees up, arms active" },
      { name: "Jumping jacks", duration: 40, rest: 10, tip: "Moderate pace, breathe" },
      { name: "Arm circles", duration: 25, rest: 5, tip: "Full range of motion" },
    ],
  },
  hiit: {
    es: [
      { name: "Burpees", duration: 40, rest: 20, tip: "Explosivo y completo" },
      { name: "Mountain climbers", duration: 40, rest: 20, tip: "Cadera baja y constante" },
      { name: "Sentadilla con salto", duration: 35, rest: 25, tip: "Aterrizaje suave" },
      { name: "Sprint en el lugar", duration: 30, rest: 30, tip: "Máxima velocidad" },
      { name: "Jumping jacks", duration: 40, rest: 20, tip: "Brazos coordinados" },
      { name: "Bear crawl", duration: 35, rest: 25, tip: "Rodillas 2cm del suelo" },
    ],
    en: [
      { name: "Burpees", duration: 40, rest: 20, tip: "Explosive full movement" },
      { name: "Mountain climbers", duration: 40, rest: 20, tip: "Hips low and steady" },
      { name: "Jump squats", duration: 35, rest: 25, tip: "Soft landing" },
      { name: "High knees", duration: 30, rest: 30, tip: "Max speed" },
      { name: "Jumping jacks", duration: 40, rest: 20, tip: "Arms coordinated" },
      { name: "Bear crawl", duration: 35, rest: 25, tip: "Knees 2cm off floor" },
    ],
  },
  strength: {
    bodyweight: {
      es: [
        { name: "Flexiones estándar", duration: 35, rest: 25, tip: "Cuerpo recto, codos 45°" },
        { name: "Sentadilla sumo", duration: 35, rest: 20, tip: "Pies a 45°, profundo" },
        { name: "Fondos en silla", duration: 30, rest: 25, tip: "Codos atrás, no afuera" },
        { name: "Puente de glúteos", duration: 35, rest: 20, tip: "Contrae 2 seg arriba" },
        { name: "Plancha frontal", duration: 30, rest: 20, tip: "Core apretado siempre" },
        { name: "Zancadas alternas", duration: 35, rest: 20, tip: "Rodilla trasera al suelo" },
      ],
      en: [
        { name: "Push-ups", duration: 35, rest: 25, tip: "Straight body, elbows 45°" },
        { name: "Sumo squat", duration: 35, rest: 20, tip: "Feet at 45°, go deep" },
        { name: "Chair dips", duration: 30, rest: 25, tip: "Elbows back, not out" },
        { name: "Glute bridge", duration: 35, rest: 20, tip: "Squeeze 2 sec at top" },
        { name: "Front plank", duration: 30, rest: 20, tip: "Core always tight" },
        { name: "Alternating lunges", duration: 35, rest: 20, tip: "Back knee to floor" },
      ],
    },
    dumbbells: {
      es: [
        { name: "Press de pecho mancuernas", duration: 40, rest: 25, tip: "3s bajar, explosivo subir" },
        { name: "Sentadilla goblet", duration: 35, rest: 20, tip: "Talones en suelo, pecho alto" },
        { name: "Remo inclinado", duration: 35, rest: 25, tip: "Codos pegados, aprieta" },
        { name: "Press militar de pie", duration: 35, rest: 25, tip: "Core firme, sin arquear" },
        { name: "Peso muerto rumano", duration: 40, rest: 25, tip: "Cadera atrás, espalda neutral" },
        { name: "Curl de bíceps", duration: 30, rest: 20, tip: "Sin balanceo del torso" },
      ],
      en: [
        { name: "DB chest press", duration: 40, rest: 25, tip: "3s down, explosive up" },
        { name: "Goblet squat", duration: 35, rest: 20, tip: "Heels down, chest tall" },
        { name: "Bent-over row", duration: 35, rest: 25, tip: "Elbows close, squeeze back" },
        { name: "Overhead press", duration: 35, rest: 25, tip: "Core tight, no arch" },
        { name: "Romanian deadlift", duration: 40, rest: 25, tip: "Hips back, neutral spine" },
        { name: "Bicep curl", duration: 30, rest: 20, tip: "No torso swinging" },
      ],
    },
  },
  mobility: {
    es: [
      { name: "Paloma de yoga", duration: 50, rest: 10, tip: "Respira profundo c/lado" },
      { name: "Apertura 90/90 cadera", duration: 50, rest: 10, tip: "Espalda neutral" },
      { name: "Gato-camello", duration: 40, rest: 10, tip: "Sincroniza con respiración" },
      { name: "Flexión hacia adelante", duration: 35, rest: 10, tip: "Rodillas levemente dobladas" },
    ],
    en: [
      { name: "Pigeon pose", duration: 50, rest: 10, tip: "Breathe deep each side" },
      { name: "90/90 hip stretch", duration: 50, rest: 10, tip: "Neutral spine" },
      { name: "Cat-cow", duration: 40, rest: 10, tip: "Sync with breath" },
      { name: "Forward fold", duration: 35, rest: 10, tip: "Slight knee bend" },
    ],
  },
  calisthenics: {
    es: [
      { name: "Dominadas", duration: 35, rest: 30, tip: "Muerto → barbilla barra" },
      { name: "Fondos en paralelas", duration: 35, rest: 25, tip: "Inclinación leve al frente" },
      { name: "Flexiones diamante", duration: 30, rest: 25, tip: "Manos en diamante" },
      { name: "Sentadilla pistola asistida", duration: 35, rest: 30, tip: "Apoyo para balance" },
      { name: "Plancha frontal", duration: 30, rest: 20, tip: "Core apretado siempre" },
    ],
    en: [
      { name: "Pull-ups", duration: 35, rest: 30, tip: "Dead hang → chin over bar" },
      { name: "Parallel bar dips", duration: 35, rest: 25, tip: "Slight forward lean" },
      { name: "Diamond push-ups", duration: 30, rest: 25, tip: "Hands in diamond" },
      { name: "Assisted pistol squat", duration: 35, rest: 30, tip: "Hold for balance" },
      { name: "Front plank", duration: 30, rest: 20, tip: "Core always tight" },
    ],
  },
  cooldown: {
    es: [
      {
        name: "Respiración 4-7-8",
        duration: 60,
        rest: 5,
        tip: "Inhala 4s, aguanta 7s, exhala 8s",
      },
      {
        name: "Estiramiento de cuádriceps",
        duration: 35,
        rest: 5,
        tip: "20s c/lado",
      },
      { name: "Estiramiento de isquiotibiales", duration: 35, rest: 5, tip: "Sin rebotar" },
      { name: "Postura del niño", duration: 60, rest: 0, tip: "Relaja completamente" },
    ],
    en: [
      {
        name: "4-7-8 breathing",
        duration: 60,
        rest: 5,
        tip: "Inhale 4s, hold 7s, exhale 8s",
      },
      { name: "Quad stretch", duration: 35, rest: 5, tip: "20 sec each side" },
      { name: "Hamstring stretch", duration: 35, rest: 5, tip: "No bouncing" },
      { name: "Child's pose", duration: 60, rest: 0, tip: "Fully relax" },
    ],
  },
};

export function buildRoutine(params, lang) {
  const mins = parseInt(params.time || "30", 10);
  const targetSecs = mins * 60;

  const warmupCount = mins <= 15 ? 2 : mins <= 30 ? 3 : 4;
  const cooldownCount = mins <= 15 ? 2 : 3;

  const warmupExs = DB.warmup[lang]
    .slice(0, warmupCount)
    .map((e) => ({ ...e, phase: "warmup" }));

  const cooldownExs = DB.cooldown[lang]
    .slice(0, cooldownCount)
    .map((e) => ({ ...e, phase: "cooldown" }));

  const edgeSecs = [...warmupExs, ...cooldownExs].reduce(
    (acc, e) => acc + (e.duration || 30) + (e.rest || 0),
    0
  );

  const mainTargetSecs = Math.max(targetSecs - edgeSecs, 60);

  const hasDB = (params.equipment || []).some((e) => /mancuerna|dumbbell/i.test(e));
  const type = (params.type || [])[0] || "";

  let pool = [];
  if (/fuerza|strength/i.test(type)) {
    pool = hasDB ? DB.strength.dumbbells[lang] : DB.strength.bodyweight[lang];
  } else if (/cardio|hiit/i.test(type)) {
    pool = DB.hiit[lang];
  } else if (/movilidad|mobility/i.test(type)) {
    pool = DB.mobility[lang];
  } else {
    pool = DB.calisthenics[lang];
  }

  const limitations = params.limitations || [];
  if (!limitations.some((l) => /sin|no/i.test(l))) {
    pool = pool.filter((ex) => {
      const n = ex.name.toLowerCase();
      if (limitations.some((l) => /rodilla|knee/i.test(l))) {
        if (/squat|sentadilla|jump|salto|pistol|lunge|zancada/i.test(n)) return false;
      }
      if (limitations.some((l) => /hombro|shoulder/i.test(l))) {
        if (/press|pike|fondo|dip|overhead/i.test(n)) return false;
      }
      if (limitations.some((l) => /espalda|back/i.test(l))) {
        if (/muerto|deadlift|remo|row/i.test(n)) return false;
      }
      return true;
    });
  }

  if (pool.length === 0) pool = DB.strength.bodyweight[lang];

  const secsPerRound = pool.reduce((acc, e) => acc + (e.duration || 30) + (e.rest || 0), 0);
  const rounds = Math.max(1, Math.round(mainTargetSecs / secsPerRound));

  const main = [];
  for (let r = 0; r < rounds; r += 1) {
    pool.forEach((ex) => {
      main.push({
        ...ex,
        phase: "main",
        name: ex.name,
        round: r + 1,
      });
    });
  }

  return {
    routine: [...warmupExs, ...main, ...cooldownExs],
    rounds,
    pool,
  };
}

