"use client";

const PhaseBlock = ({ label, exercises, color, t, pendingRoutine }) => (
  <div className="mb-[22px]">
    <div className="flex items-center gap-3 mb-2.5">
      <div className="h-px flex-1 bg-[#0d0d0d]" />
      <span
        className="text-[9px] tracking-[4px] font-oswald font-bold"
        style={{ color }}
      >
        {label}
      </span>
      <div className="h-px flex-1 bg-[#0d0d0d]" />
    </div>
    {exercises.map((ex, i) => (
      <div
        key={i}
        className="flex items-center gap-3 py-2.5 border-b border-[#080808] animate-[slideUp_.3s_ease_both]"
        style={{ animationDelay: `${i * 0.055}s` }}
      >
        <span
          className="btn-clip-sm flex-shrink-0 w-[26px] h-[26px] flex items-center justify-center font-oswald text-[10px] text-[#b3b3b3] font-bold"
          style={{ border: `1px solid ${color}18` }}
        >
          {String(pendingRoutine.indexOf(ex) + 1).padStart(2, "0")}
        </span>
        <div className="flex-1 min-w-0">
          <p className="font-oswald text-sm font-bold text-[#e5e5e5] uppercase tracking-[0.5px] leading-[1.1] truncate">
            {ex.name}
          </p>
          {ex.tip && (
            <p className="text-[10px] text-[#9ca3af] font-oswald mt-0.5 italic truncate">
              {ex.tip}
            </p>
          )}
        </div>
        <div className="flex-shrink-0 flex gap-1.5 items-center">
          <span className="bg-[rgba(15,23,42,0.6)] border border-[rgba(148,163,184,0.4)] py-1 px-1.5 text-[10px] font-oswald text-[#e5e7eb] tracking-[0.5px] rounded-full">
            {ex.duration}
            {t.secs}
          </span>
          {ex.rest > 0 && (
            <span className="bg-transparent border border-dashed border-[rgba(148,163,184,0.4)] py-1 px-1.5 text-[10px] font-oswald text-[#9ca3af] tracking-[0.5px] rounded-full">
              +{ex.rest}
              {t.secs}
            </span>
          )}
        </div>
      </div>
    ))}
  </div>
);

export function PreviewScreen({
  t,
  lang,
  params,
  pendingRoutine,
  pendingRounds,
  onBack,
  onStartCircuit,
}) {
  const warmupEx = pendingRoutine.filter((e) => e.phase === "warmup");
  const seenMain = new Set();
  const mainEx = pendingRoutine.filter((e) => {
    if (e.phase !== "main") return false;
    const base = e.name.replace(/ · R\d+$/, "");
    if (seenMain.has(base)) return false;
    seenMain.add(base);
    return true;
  });
  const coolEx = pendingRoutine.filter((e) => e.phase === "cooldown");
  const selectedMins = parseInt(params.time || "30", 10);

  return (
    <div className="max-w-[420px] mx-auto px-[18px] pb-[110px] min-h-screen">
      <div className="flex justify-between items-center pt-[18px] pb-3 mb-3">
        <div>
          <span className="font-oswald text-[13px] font-bold text-slate-50 tracking-[3px]">
            PT PARDO
          </span>
        </div>
        <button
          type="button"
          onClick={onBack}
          className="btn-glass py-2 px-4 text-[9px] tracking-[2px] font-oswald uppercase"
        >
          {t.previewBack}
        </button>
      </div>

      <div className="mb-5">
        <p className="text-[10px] tracking-[4px] text-[#9ca3af] font-oswald uppercase mb-1.5">
          {t.previewSub}
        </p>
        <h1 className="font-oswald font-extrabold text-[clamp(32px,9vw,46px)] leading-[0.9] bg-gradient-to-br from-[#f9fafb] to-[#e5e7eb] bg-clip-text text-transparent">
          {t.previewTitle}
        </h1>
      </div>

      <div className="glass-dark flex mb-[26px] rounded-[18px] overflow-hidden border border-[rgba(148,163,184,0.35)]">
        {[
          { label: t.totalDuration, value: `${selectedMins} min` },
          { label: t.roundsLabel, value: `×${pendingRounds}` },
          {
            label: t.totalExercises,
            value: String(mainEx.length + warmupEx.length + coolEx.length),
          },
          {
            label: lang === "es" ? "Tipo" : "Type",
            value: (params.type?.[0] || "—").substring(0, 10),
          },
        ].map((s, i) => (
          <div
            key={i}
            className={`flex-1 py-3 px-2 text-center ${
              i < 3 ? "border-r border-[rgba(31,41,55,0.85)]" : ""
            }`}
          >
            <p className="text-[8px] tracking-[2px] text-[#9ca3af] font-oswald uppercase mb-1">
              {s.label}
            </p>
            <p className="text-[15px] font-bold text-[#f9fafb] font-oswald tracking-[0.5px] uppercase leading-none">
              {s.value}
            </p>
          </div>
        ))}
      </div>

      {warmupEx.length > 0 && (
        <PhaseBlock
          label={t.phaseWarmup}
          exercises={warmupEx}
          color="#f97316"
          t={t}
          pendingRoutine={pendingRoutine}
        />
      )}
      {mainEx.length > 0 && (
        <PhaseBlock
          label={
            pendingRounds > 1
              ? `${t.phaseMain} · ${pendingRounds}×`
              : t.phaseMain
          }
          exercises={mainEx}
          color="#e5e7eb"
          t={t}
          pendingRoutine={pendingRoutine}
        />
      )}
      {coolEx.length > 0 && (
        <PhaseBlock
          label={t.phaseCooldown}
          exercises={coolEx}
          color="#60a5fa"
          t={t}
          pendingRoutine={pendingRoutine}
        />
      )}

      <div className="flex gap-4 py-2.5 pt-2.5 border-t border-[rgba(31,41,55,0.9)] mb-2">
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-0.5 bg-[rgba(248,250,252,0.9)] rounded-full" />
          <span className="text-[8px] text-[#e5e7eb] tracking-[2px] font-oswald">
            {lang === "es" ? "seg trabajo" : "sec work"}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <div
            className="w-4 h-0.5 rounded-full"
            style={{
              background:
                "repeating-linear-gradient(90deg,transparent 0,transparent 2px,rgba(148,163,184,0.8) 2px,rgba(148,163,184,0.8) 4px)",
            }}
          />
          <span className="text-[8px] text-[#9ca3af] tracking-[2px] font-oswald">
            {lang === "es" ? "seg descanso" : "sec rest"}
          </span>
        </div>
      </div>

      <div
        className="fixed bottom-0 left-0 right-0 py-3.5 px-5 pb-8"
        style={{
          background:
            "linear-gradient(to top, rgba(3,7,18,0.98) 70%, transparent)",
        }}
      >
        <div className="max-w-[420px] mx-auto">
          <button
            type="button"
            onClick={() => onStartCircuit(pendingRoutine)}
            className="btn-premium glow-accent w-full py-[15px] text-xs tracking-[6px] font-oswald font-extrabold uppercase"
          >
            {t.previewStart} ▶
          </button>
        </div>
      </div>
    </div>
  );
}
