"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { useGlobalStyles } from "./hooks/useGlobalStyles";
import { TRANSLATIONS } from "./translations";
import { buildRoutine } from "./routineBuilder";
import { HomeScreen } from "./components/HomeScreen";
import { RoutineScreen } from "./components/RoutineScreen";
import { PreviewScreen } from "./components/PreviewScreen";
import { CircuitScreen } from "./components/CircuitScreen";

export function CircuitApp() {
  useGlobalStyles();
  const [lang, setLang] = useState("es");
  const t = TRANSLATIONS[lang];

  const [screen, setScreen] = useState("home");
  const [pendingRoutine, setPendingRoutine] = useState([]);
  const [pendingRounds, setPendingRounds] = useState(1);
  const [pendingPool, setPendingPool] = useState([]);
  const [step, setStep] = useState(1);
  const [params, setParams] = useState({
    time: "",
    equipment: [],
    limitations: [],
    type: [],
    level: "",
    goal: "",
  });
  const [routine, setRoutine] = useState([]);
  const [exIdx, setExIdx] = useState(0);
  const [phase, setPhase] = useState("work");
  const [timeLeft, setTimeLeft] = useState(0);
  const [totalSec, setTotalSec] = useState(0);
  const [running, setRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [bgFlash, setBgFlash] = useState(false);

  const timerRef = useRef(null);
  const elapsedRef = useRef(null);

  const cur = routine[exIdx];
  const nxt = routine[exIdx + 1];
  const isRest = phase === "rest";

  const flash = useCallback(() => {
    setBgFlash(true);
    setTimeout(() => setBgFlash(false), 500);
  }, []);

  const advance = useCallback(() => {
    flash();
    if (!cur) return;

    if (phase === "work") {
      if (cur.rest > 0) {
        setPhase("rest");
        setTimeLeft(cur.rest);
        setTotalSec(cur.rest);
      } else if (exIdx < routine.length - 1) {
        const next = routine[exIdx + 1];
        setExIdx((i) => i + 1);
        setPhase("work");
        setTimeLeft(next.duration);
        setTotalSec(next.duration);
      } else {
        setRunning(false);
        setScreen("done");
      }
    } else if (exIdx < routine.length - 1) {
      const next = routine[exIdx + 1];
      setExIdx((i) => i + 1);
      setPhase("work");
      setTimeLeft(next.duration);
      setTotalSec(next.duration);
    } else {
      setRunning(false);
      setScreen("done");
    }
  }, [phase, cur, exIdx, routine, flash]);

  useEffect(() => {
    if (running && timeLeft > 0) {
      timerRef.current = setTimeout(
        () => setTimeLeft((tLeft) => tLeft - 1),
        1000
      );
    } else if (running && timeLeft === 0) {
      advance();
    }
    return () => clearTimeout(timerRef.current);
  }, [running, timeLeft, advance]);

  useEffect(() => {
    if (running) {
      elapsedRef.current = setInterval(() => setElapsed((e) => e + 1), 1000);
    } else {
      clearInterval(elapsedRef.current);
    }
    return () => clearInterval(elapsedRef.current);
  }, [running]);

  const startCircuit = (r) => {
    setRoutine(r);
    setExIdx(0);
    setPhase("work");
    const firstDuration = r[0]?.duration || 30;
    setTimeLeft(firstDuration);
    setTotalSec(firstDuration);
    setElapsed(0);
    setRunning(true);
    setScreen("circuit");
  };

  const generate = () => {
    setScreen("generating");
    setTimeout(() => {
      const { routine: r, rounds: rds, pool: pl } = buildRoutine(params, lang);
      setPendingRoutine(r);
      setPendingRounds(rds);
      setPendingPool(pl);
      setScreen("preview");
    }, 1500);
  };

  const skip = () => {
    clearTimeout(timerRef.current);
    advance();
  };

  const restartEx = () => {
    const duration = isRest ? cur?.rest || 20 : cur?.duration || 30;
    setTimeLeft(duration);
    setTotalSec(duration);
  };

  const fmt = (s) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(
      2,
      "0"
    )}`;

  const pct = routine.length
    ? Math.round(((exIdx + (isRest ? 0.5 : 0)) / routine.length) * 100)
    : 0;

  const phaseTag =
    cur?.phase === "warmup"
      ? t.warmupTag
      : cur?.phase === "cooldown"
      ? t.cooldownTag
      : t.mainTag;

  return (
    <div
      className={`min-h-screen transition-[background_.35s] text-[#e8e8e8] font-oswald ${
        bgFlash ? "bg-[#0a0000]" : "bg-[#030303]"
      }`}
    >
      {screen === "home" && (
        <HomeScreen
          t={t}
          onStart={() => {
            setScreen("form");
            setStep(1);
          }}
          onToggleLang={() => setLang((l) => (l === "es" ? "en" : "es"))}
        />
      )}

      {screen === "form" && (
        <RoutineScreen
          step={step}
          params={params}
          setParams={setParams}
          t={t}
          lang={lang}
          setLang={setLang}
          onNext={() => {
            if (step < 4) setStep((s) => s + 1);
            else if (params.time && params.type.length) generate();
          }}
          onBack={() => setStep((s) => s - 1)}
        />
      )}

      {screen === "generating" && (
        <div className="min-h-screen flex flex-col items-center justify-center gap-[22px]">
          <div className="w-[42px] h-[42px] border border-[#0a0a0a] border-t-[#e8e8e8] rounded-full animate-[spin_.9s_linear_infinite]" />
          <p className="text-[9px] tracking-[5px] text-[#1a1a1a] font-oswald">
            {t.generating}
          </p>
        </div>
      )}

      {screen === "preview" && (
        <PreviewScreen
          t={t}
          lang={lang}
          params={params}
          pendingRoutine={pendingRoutine}
          pendingRounds={pendingRounds}
          onBack={() => setScreen("form")}
          onStartCircuit={startCircuit}
        />
      )}

      {screen === "circuit" && cur && (
        <CircuitScreen
          t={t}
          lang={lang}
          cur={{
            ...cur,
            index: exIdx,
            indexLabel: `${exIdx + 1}/${routine.length}`,
          }}
          nxt={nxt}
          timeLeft={timeLeft}
          elapsed={elapsed}
          pct={pct}
          isRest={isRest}
          phase={phase}
          phaseTag={phaseTag}
          running={running}
          fmt={fmt}
          onRestartEx={restartEx}
          onToggleRunning={() => setRunning((r) => !r)}
          onSkip={skip}
        />
      )}

      {screen === "done" && (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
          <p className="text-[8px] tracking-[7px] text-[#0e0e0e] mb-5 font-oswald">
            PT PARDO
          </p>
          <h1 className="font-oswald font-bold text-[clamp(52px,14vw,96px)] leading-[0.85] whitespace-pre-line text-[#e8e8e8]">
            {t.circuitDone}
          </h1>
          <div className="w-6 h-px bg-[#0d0d0d] my-[22px] mx-auto" />
          <div className="flex gap-10 justify-center">
            <div className="text-center">
              <p className="text-[8px] tracking-[3px] text-[#0e0e0e] font-oswald mb-1">
                {t.totalTime}
              </p>
              <p className="font-oswald text-2xl font-bold text-[#e8e8e8]">
                {fmt(elapsed)}
              </p>
            </div>
            <div className="text-center">
              <p className="text-[8px] tracking-[3px] text-[#0e0e0e] font-oswald mb-1">
                {t.exercisesDone}
              </p>
              <p className="font-oswald text-2xl font-bold text-[#e8e8e8]">
                {routine.length}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              setScreen("home");
              setStep(1);
              setParams({
                time: "",
                equipment: [],
                limitations: [],
                type: [],
                level: "",
                goal: "",
              });
              setElapsed(0);
            }}
            className="btn-clip mt-11 py-3.5 px-[52px] text-xs tracking-[5px] font-oswald font-bold uppercase border border-[#e8e8e8] bg-[#e8e8e8] text-black cursor-pointer transition-all duration-200"
          >
            {t.restart}
          </button>
        </div>
      )}
    </div>
  );
}

export default CircuitApp;

