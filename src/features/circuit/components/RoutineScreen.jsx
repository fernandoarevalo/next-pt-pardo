"use client";

import { useRef, useState } from "react";
import { Chip } from "./Chip";

const STEPS = 4;

export function RoutineScreen({
  step,
  params,
  setParams,
  onNext,
  onBack,
  t,
  lang,
  setLang,
}) {
  const fileRef = useRef(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [detected, setDetected] = useState("");
  const [err, setErr] = useState("");

  const toggle = (key, val) =>
    setParams((p) => ({
      ...p,
      [key]: p[key].includes(val)
        ? p[key].filter((x) => x !== val)
        : [...p[key], val],
    }));

  const handlePhoto = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setAnalyzing(true);
    setErr("");
    setDetected("");

    try {
      const b64 = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result).split(",")[1] || "");
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });

      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-5-20250929",
          max_tokens: 60,
          messages: [
            {
              role: "user",
              content: [
                {
                  type: "image",
                  source: {
                    type: "base64",
                    media_type: file.type,
                    data: b64,
                  },
                },
                {
                  type: "text",
                  text:
                    lang === "es"
                      ? "Identifica el equipo de entrenamiento. Solo nombre en español, máx 3 palabras. Si no hay: Sin equipo"
                      : "Identify fitness equipment. Just name in English, max 3 words. If none: No equipment",
                },
              ],
            },
          ],
        }),
      });

      const data = await res.json();
      const txt = data.content?.[0]?.text?.trim() || "";

      if (txt) {
        setDetected(txt);
        setParams((p) => ({
          ...p,
          equipment: [...new Set([...p.equipment, txt])],
        }));
      } else {
        setErr(t.photoErr);
      }
    } catch {
      setErr(t.photoErr);
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <div className="max-w-[420px] mx-auto pt-6 px-[18px] pb-[56px]">
      <div className="flex justify-between items-center mb-[22px]">
        <div>
          <span className="font-oswald text-base font-bold text-[#181818] tracking-[3px]">
            PT PARDO
          </span>
          <span className="text-[8px] tracking-[3px] text-[#101010] block font-oswald">
            CIRCUIT MODE
          </span>
        </div>
        <div className="flex gap-2.5 items-center">
          <span className="text-[9px] text-[#252525] tracking-[2px] font-oswald">
            {step}/{STEPS}
          </span>
          <button
            type="button"
            onClick={() => setLang((l) => (l === "es" ? "en" : "es"))}
            className="py-[3px] px-[9px] border border-[#0f0f0f] bg-transparent text-[#252525] text-[9px] tracking-[2px] cursor-pointer font-oswald"
          >
            {t.langBtn}
          </button>
        </div>
      </div>

      <div className="h-px bg-[#0a0a0a] mb-[22px] relative">
        <div
          className="absolute left-0 top-0 h-full bg-[#e8e8e8] transition-[width_.4s]"
          style={{ width: `${(step / STEPS) * 100}%` }}
        />
      </div>

      {step === 1 && (
        <>
          <h2 className="font-oswald text-[clamp(22px,5.5vw,30px)] font-bold text-[#e8e8e8] mb-4 tracking-[0.5px]">
            {t.s1}
          </h2>
          <div className="grid grid-cols-2 gap-[7px] mb-3.5">
            {t.timeOpts.map((o) => (
              <Chip
                key={o}
                label={o}
                active={params.time === o}
                onClick={() => setParams((p) => ({ ...p, time: o }))}
              />
            ))}
          </div>
          <span className="text-[9px] tracking-[3px] text-[#252525] uppercase font-oswald mb-1.5 block">
            {t.level}
          </span>
          <div className="grid grid-cols-3 gap-[7px] mb-3.5">
            {t.levelOpts.map((o) => (
              <Chip
                key={o}
                label={o}
                active={params.level === o}
                onClick={() => setParams((p) => ({ ...p, level: o }))}
              />
            ))}
          </div>
          <span className="text-[9px] tracking-[3px] text-[#252525] uppercase font-oswald mb-1.5 block">
            {t.goal}
          </span>
          <div className="grid grid-cols-2 gap-[7px]">
            {t.goalOpts.map((o) => (
              <Chip
                key={o}
                label={o}
                active={params.goal === o}
                onClick={() => setParams((p) => ({ ...p, goal: o }))}
              />
            ))}
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <h2 className="font-oswald text-[clamp(22px,5.5vw,30px)] font-bold text-[#e8e8e8] mb-4 tracking-[0.5px]">
            {t.s2}
          </h2>
          <div className="grid grid-cols-2 gap-[7px] mb-3.5">
            {t.equipOpts.map((o) => (
              <Chip
                key={o}
                label={o}
                active={params.equipment.includes(o)}
                onClick={() => toggle("equipment", o)}
              />
            ))}
          </div>

          <div
            onClick={() => fileRef.current?.click()}
            className="border border-dashed border-[#0f0f0f] p-[13px] text-center cursor-pointer mt-1.5"
          >
            <p className="text-[9px] tracking-[3px] text-[#252525] uppercase font-oswald mb-0">
              {t.uploadPhoto}
            </p>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handlePhoto}
            />
          </div>

          {analyzing && (
            <p className="text-[10px] text-[#252525] tracking-[2px] font-oswald mt-2">
              {t.analyzing}
            </p>
          )}
          {detected && (
            <p className="text-xs text-[#aaa] font-oswald mt-2">
              {t.detectedEquip}{" "}
              <strong className="text-[#e8e8e8]">{detected}</strong>
            </p>
          )}
          {err && (
            <p className="text-[10px] text-[#6b2020] font-oswald mt-2">{err}</p>
          )}
        </>
      )}

      {step === 3 && (
        <>
          <h2 className="font-oswald text-[clamp(22px,5.5vw,30px)] font-bold text-[#e8e8e8] mb-4 tracking-[0.5px]">
            {t.s3}
          </h2>
          <div className="grid grid-cols-2 gap-[7px] mb-3.5">
            {t.limitOpts.map((o) => (
              <Chip
                key={o}
                label={o}
                active={params.limitations.includes(o)}
                onClick={() => toggle("limitations", o)}
              />
            ))}
          </div>
        </>
      )}

      {step === 4 && (
        <>
          <h2 className="font-oswald text-[clamp(22px,5.5vw,30px)] font-bold text-[#e8e8e8] mb-4 tracking-[0.5px]">
            {t.s4}
          </h2>
          <div className="grid grid-cols-2 gap-[7px] mb-3.5">
            {t.typeOpts.map((o) => (
              <Chip
                key={o}
                label={o}
                active={params.type.includes(o)}
                onClick={() => toggle("type", o)}
              />
            ))}
          </div>
        </>
      )}

      <div className="flex gap-2 mt-[26px]">
        {step > 1 && (
          <button
            type="button"
            onClick={onBack}
            className="btn-clip flex-1 py-3 border border-[#0f0f0f] bg-transparent text-[#252525] cursor-pointer text-[10px] font-bold tracking-[3px] font-oswald uppercase"
          >
            {t.back}
          </button>
        )}
        <button
          type="button"
          onClick={onNext}
          className="btn-clip flex-[2] py-3 border border-[#e8e8e8] bg-[#e8e8e8] text-black cursor-pointer text-[10px] font-bold tracking-[3px] font-oswald uppercase"
        >
          {step === STEPS ? t.generate : t.next}
        </button>
      </div>
    </div>
  );
}
