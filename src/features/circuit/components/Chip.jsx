"use client";

export const Chip = ({ label, active, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`py-3.5 px-5 text-[11px] font-semibold tracking-[2px] font-oswald uppercase transition-all duration-300 ease-out ${
      active ? "btn-premium" : "btn-glass"
    }`}
  >
    {label}
  </button>
);
