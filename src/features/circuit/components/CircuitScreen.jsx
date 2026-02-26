"use client";

import { getIllustration, BreatheSVG } from "../illustrations";

export function CircuitScreen({
  t,
  lang,
  cur,
  nxt,
  timeLeft,
  elapsed,
  pct,
  isRest,
  phase,
  phaseTag,
  running,
  fmt,
  onRestartEx,
  onToggleRunning,
  onSkip,
}) {
  const nextBlockIsRest =
    phase === "work" && cur.rest > 0;

  return (
    <div className="max-w-[420px] mx-auto py-5 px-5 pb-[100px] min-h-screen">
      <div className="glass-card scale-in p-[22px]">
        <div className="bg-[rgba(20,20,20,0.6)] h-1.5 rounded overflow-hidden mb-[18px]">
          <div
            className="h-full rounded bg-gradient-to-r from-[#e63946] to-[#ff6b6b] shadow-[0_0_10px_rgba(230,57,70,0.6)] transition-[width_.5s]"
            style={{ width: `${pct}%` }}
          />
        </div>

        <div className="flex gap-[10px] mb-[22px]">
          {[
            { label: t.exerciseOf, value: `${cur.indexLabel}` },
            { label: "Tiempo", value: fmt(elapsed) },
            {
              label: phaseTag,
              value: isRest ? t.rest : t.work,
              color: isRest ? "#3b82f6" : "#e63946",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="glass-dark flex-1 py-3.5 px-2.5 text-center rounded-[14px]"
            >
              <p className="text-[9px] tracking-[1.5px] text-white/50 font-oswald uppercase mb-1">
                {s.label}
              </p>
              <p
                className="text-lg font-bold font-oswald"
                style={{ color: s.color || "#e8e8e8" }}
              >
                {s.value}
              </p>
            </div>
          ))}
        </div>

        <div
          key={`vis-${cur.index}-${phase}`}
          className="fade-in h-[280px] rounded-[20px] flex items-center justify-center mb-[26px] border border-white/[0.08] relative overflow-hidden bg-gradient-to-br from-[rgba(30,30,30,0.9)] to-[rgba(15,15,15,0.95)]"
          style={isRest ? { background: "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(59,130,246,0.05))" } : undefined}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.4)_100%)]" />
          <div className="relative z-10 scale-125">
            {isRest ? <BreatheSVG /> : getIllustration(cur.name)}
          </div>
        </div>

        <h2
          className={`slide-up font-oswald font-black text-[clamp(26px,7vw,40px)] tracking-[-1px] leading-[1.1] text-center uppercase mb-2.5 bg-clip-text text-transparent [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] ${
            isRest
              ? "bg-gradient-to-br from-[#3b82f6] to-[#60a5fa]"
              : "bg-gradient-to-br from-white to-[#a8a8a8]"
          }`}
          key={`name-${cur.index}-${phase}`}
        >
          {isRest ? (lang === "es" ? "DESCANSA" : "REST") : cur.name}
        </h2>

        {!isRest && cur.tip && (
          <p className="text-[13px] text-white/60 text-center font-oswald mb-[26px] italic">
            {cur.tip}
          </p>
        )}

        <div className="flex items-center justify-center my-[30px] relative">
          <div
            className={`w-[200px] h-[200px] rounded-full flex items-center justify-center animate-[glow-pulse_2s_ease-in-out_infinite] bg-gradient-to-br from-white/5 to-white/[0.01] ${
              isRest
                ? "border-[3px] border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.4),inset_0_0_30px_rgba(59,130,246,0.2)]"
                : "border-[3px] border-[rgba(230,57,70,0.3)] shadow-[0_0_30px_rgba(230,57,70,0.4),inset_0_0_30px_rgba(230,57,70,0.2)]"
            }`}
          >
            <div
              className={`font-oswald font-black tracking-[-3px] ${
                timeLeft >= 100 ? "text-[60px]" : "text-[76px]"
              } ${isRest ? "text-[#60a5fa]" : "text-[#ff6b6b]"}`}
            >
              {String(timeLeft)}
            </div>
          </div>
        </div>

        {nxt && (
          <div
            className={`slide-up rounded-2xl py-3.5 px-4 mb-[24px] backdrop-blur-[16px] ${
              nextBlockIsRest
                ? "bg-gradient-to-br from-blue-500/15 to-blue-500/5 border border-blue-500/30"
                : "bg-gradient-to-br from-[rgba(230,57,70,0.15)] to-[rgba(230,57,70,0.05)] border border-[rgba(230,57,70,0.3)]"
            }`}
          >
            <p
              className={`text-[10px] tracking-[2px] font-oswald uppercase mb-1.5 ${
                nextBlockIsRest
                  ? "text-[rgba(59,130,246,0.8)]"
                  : "text-[rgba(230,57,70,0.8)]"
              }`}
            >
              {t.nextUp}
            </p>
            <p className="text-base font-bold text-white/90 font-oswald">
              {nextBlockIsRest
                ? `${t.rest} · ${cur.rest}s`
                : nxt.name}
            </p>
          </div>
        )}

        <div className="flex gap-[10px]">
          <button
            type="button"
            onClick={onRestartEx}
            className="btn-glass w-12 h-12 flex items-center justify-center text-lg p-0"
          >
            ↺
          </button>
          <button
            type="button"
            onClick={onToggleRunning}
            className={`flex-1 h-12 text-xs tracking-[4px] font-oswald font-bold uppercase ${
              running ? "btn-glass" : "btn-premium glow-accent"
            }`}
          >
            {running ? t.pause : t.resume}
          </button>
          <button
            type="button"
            onClick={onSkip}
            className="btn-glass w-[72px] h-12 text-[11px] tracking-[2px] font-oswald font-bold uppercase"
          >
            {t.skip}
          </button>
        </div>
      </div>
    </div>
  );
}
