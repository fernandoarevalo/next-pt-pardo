"use client";

export function HomeScreen({ t, onStart, onToggleLang }) {
  return (
    <div className="min-h-screen flex justify-center py-12">
      {/* <div
        className="absolute top-[15%] -left-[5%] w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none animate-[float_8s_ease-in-out_infinite]"
        style={{
          background:
            "radial-gradient(circle, rgba(230,57,70,0.25) 0%, transparent 70%)",
        }}
      /> */}
      {/* <div
        className="absolute bottom-[20%] -right-[8%] w-[350px] h-[350px] rounded-full blur-[120px] pointer-events-none animate-[float_10s_ease-in-out_infinite]"
        style={{
          animationDelay: "2s",
          background:
            "radial-gradient(circle, rgba(139,0,0,0.2) 0%, transparent 70%)",
        }}
      /> */}
      <div className="glass-card scale-in py-16 px-9 max-w-[340px] w-full text-center relative z-[2]">
        <div className="flex flex-col h-full justify-space-between">
          <div className="flex flex-col h-full justify-center">
            <h1 className="text-glass font-oswald font-black text-[clamp(56px,15vw,96px)] leading-[0.9] mb-5 tracking-[-4px]" data-text="PT PARDO">
              {/* <span className="sr-only">PT PARDO</span> */}
              <img
                src="/logo/logo.png"
                alt="PT PARDO"
                className="w-[250px] h-auto"
                onError={(e) => {
                  e.currentTarget.classList.add("!hidden");
                  const next = e.currentTarget.nextElementSibling;
                  if (next) next.classList.remove("hidden");
                }}
              />
              {/* <span aria-hidden="true" className="hidden mt-2.5 block font-oswald font-black text-[clamp(56px,15vw,96px)] leading-[0.9] tracking-[-4px]">
                PT PARDO
              </span> */}
            </h1>
          </div>

          <div>
            <div className="flex items-center gap-5 justify-center mt-8 mb-6">
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <p className="text-[10px] tracking-[3px] text-white/60 uppercase">
              {t.circMode}
            </p>
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </div>

          <button
            type="button"
            onClick={onStart}
            className="btn-premium glow-accent w-full py-4 px-14 text-sm tracking-widest font-bold uppercase"
          >
            {t.start}
          </button>

          <button
            type="button"
            onClick={onToggleLang}
            className="btn-glass mt-4 py-2.5 px-6 text-[10px] tracking-[2px] font-oswald uppercase"
          >
            {t.langBtn}
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
