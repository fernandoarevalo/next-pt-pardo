"use client";

const W = 160;
const H = 140;

const SK = {
  stroke: "#e8e8e8",
  strokeWidth: 2.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  fill: "none",
};

const SKD = {
  stroke: "#222",
  strokeWidth: 2.2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  fill: "none",
};

const Ground = () => <line x1="10" y1="126" x2="150" y2="126" {...SKD} />;

const PushupSVG = () => (
  <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
    <Ground />
    <g
      style={{
        animation: "bob 1.2s ease-in-out infinite",
        transformOrigin: "80px 104px",
      }}
    >
      <line x1="30" y1="98" x2="118" y2="98" {...SK} />
      <circle cx="128" cy="94" r="9" {...SK} />
      <line x1="50" y1="98" x2="44" y2="124" {...SK} />
      <line x1="72" y1="98" x2="66" y2="124" {...SK} />
      <circle cx="44" cy="125" r="3" fill="#e8e8e8" />
      <circle cx="66" cy="125" r="3" fill="#e8e8e8" />
      <line x1="30" y1="98" x2="24" y2="124" {...SK} />
      <circle cx="24" cy="125" r="3" fill="#e8e8e8" />
    </g>
    <line
      x1="58"
      y1="74"
      x2="58"
      y2="86"
      stroke="#1a1a1a"
      strokeWidth="1.5"
      strokeDasharray="3 3"
    />
    <line
      x1="68"
      y1="71"
      x2="68"
      y2="83"
      stroke="#1a1a1a"
      strokeWidth="1.5"
      strokeDasharray="3 3"
    />
  </svg>
);

const SquatSVG = () => (
  <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
    <Ground />
    <g
      style={{
        animation: "squat 1.3s ease-in-out infinite",
        transformOrigin: "80px 85px",
      }}
    >
      <circle cx="80" cy="32" r="10" {...SK} />
      <line x1="80" y1="42" x2="80" y2="76" {...SK} />
      <line x1="80" y1="54" x2="52" y2="68" {...SK} />
      <line x1="80" y1="54" x2="108" y2="68" {...SK} />
      <line x1="80" y1="76" x2="56" y2="100" {...SK} />
      <line x1="80" y1="76" x2="104" y2="100" {...SK} />
      <line x1="56" y1="100" x2="52" y2="124" {...SK} />
      <line x1="104" y1="100" x2="108" y2="124" {...SK} />
      <line x1="44" y1="124" x2="58" y2="124" {...SK} />
      <line x1="100" y1="124" x2="114" y2="124" {...SK} />
    </g>
  </svg>
);

const BurpeeSVG = () => (
  <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
    <Ground />
    <g
      style={{
        animation: "burpeeAnim 1.6s ease-in-out infinite",
        transformOrigin: "80px 75px",
      }}
    >
      <circle cx="80" cy="24" r="10" {...SK} />
      <line x1="80" y1="34" x2="80" y2="70" {...SK} />
      <line x1="80" y1="46" x2="56" y2="30" {...SK} />
      <line x1="80" y1="46" x2="104" y2="30" {...SK} />
      <line x1="80" y1="70" x2="60" y2="96" {...SK} />
      <line x1="80" y1="70" x2="100" y2="96" {...SK} />
      <line x1="60" y1="96" x2="56" y2="124" {...SK} />
      <line x1="100" y1="96" x2="104" y2="124" {...SK} />
      <line x1="48" y1="124" x2="62" y2="124" {...SK} />
      <line x1="96" y1="124" x2="110" y2="124" {...SK} />
    </g>
    <line x1="20" y1="42" x2="40" y2="42" stroke="#111" strokeWidth="1.5" />
    <line x1="120" y1="42" x2="140" y2="42" stroke="#111" strokeWidth="1.5" />
  </svg>
);

const MountainSVG = () => (
  <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
    <Ground />
    <circle cx="124" cy="64" r="9" {...SK} />
    <line x1="40" y1="82" x2="116" y2="70" {...SK} />
    <line x1="52" y1="80" x2="46" y2="98" {...SK} />
    <line x1="46" y1="98" x2="42" y2="124" {...SK} />
    <line x1="68" y1="77" x2="62" y2="96" {...SK} />
    <line x1="62" y1="96" x2="58" y2="124" {...SK} />
    <g
      style={{
        animation: "mountainAnim .65s ease-in-out infinite",
        transformOrigin: "40px 82px",
      }}
    >
      <line x1="40" y1="82" x2="56" y2="106" {...SK} />
      <line x1="56" y1="106" x2="52" y2="124" {...SK} />
    </g>
    <g
      style={{
        animation: "mountainAnimR .65s ease-in-out infinite",
        transformOrigin: "60px 80px",
      }}
    >
      <line x1="60" y1="80" x2="74" y2="102" {...SK} />
      <line x1="74" y1="102" x2="70" y2="124" {...SK} />
    </g>
  </svg>
);

const PlankSVG = () => (
  <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
    <Ground />
    <g
      style={{
        animation: "plankPulse 2s ease-in-out infinite",
        transformOrigin: "80px 98px",
      }}
    >
      <line x1="24" y1="100" x2="118" y2="94" {...SK} />
      <circle cx="128" cy="90" r="9" {...SK} />
      <line x1="44" y1="99" x2="40" y2="118" {...SK} />
      <line x1="62" y1="97" x2="58" y2="118" {...SK} />
      <line x1="24" y1="100" x2="20" y2="118" {...SK} />
      <line x1="30" y1="100" x2="26" y2="118" {...SK} />
      <line
        x1="68"
        y1="97"
        x2="86"
        y2="96"
        stroke="#2a2a2a"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
    </g>
  </svg>
);

const PullupSVG = () => (
  <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
    <line x1="24" y1="20" x2="136" y2="20" {...SK} />
    <line x1="24" y1="14" x2="24" y2="26" {...SK} />
    <line x1="136" y1="14" x2="136" y2="26" {...SK} />
    <g
      style={{
        animation: "pullAnim 1.4s ease-in-out infinite",
        transformOrigin: "80px 38px",
      }}
    >
      <circle cx="62" cy="20" r="4" fill="#e8e8e8" />
      <circle cx="98" cy="20" r="4" fill="#e8e8e8" />
      <line x1="62" y1="20" x2="68" y2="44" {...SK} />
      <line x1="98" y1="20" x2="92" y2="44" {...SK} />
      <circle cx="80" cy="54" r="10" {...SK} />
      <line x1="80" y1="64" x2="80" y2="100" {...SK} />
      <line x1="80" y1="76" x2="62" y2="90" {...SK} />
      <line x1="80" y1="76" x2="98" y2="90" {...SK} />
      <line x1="80" y1="100" x2="68" y2="124" {...SK} />
      <line x1="80" y1="100" x2="92" y2="124" {...SK} />
    </g>
  </svg>
);

const DipsSVG = () => (
  <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
    <line x1="24" y1="54" x2="54" y2="54" {...SK} />
    <line x1="106" y1="54" x2="136" y2="54" {...SK} />
    <line x1="24" y1="54" x2="24" y2="130" {...SKD} />
    <line x1="136" y1="54" x2="136" y2="130" {...SKD} />
    <g
      style={{
        animation: "pullAnim 1.3s ease-in-out infinite",
        transformOrigin: "80px 66px",
      }}
    >
      <circle cx="80" cy="32" r="10" {...SK} />
      <line x1="80" y1="42" x2="80" y2="78" {...SK} />
      <line x1="80" y1="58" x2="30" y2="54" {...SK} />
      <line x1="80" y1="58" x2="130" y2="54" {...SK} />
      <line x1="80" y1="78" x2="68" y2="106" {...SK} />
      <line x1="80" y1="78" x2="92" y2="106" {...SK} />
      <line x1="68" y1="106" x2="66" y2="124" {...SK} />
      <line x1="92" y1="106" x2="94" y2="124" {...SK} />
    </g>
  </svg>
);

const LungeSVG = () => (
  <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
    <Ground />
    <g
      style={{
        animation: "splayAnim 1.2s ease-in-out infinite",
        transformOrigin: "80px 75px",
      }}
    >
      <circle cx="80" cy="28" r="10" {...SK} />
      <line x1="80" y1="38" x2="80" y2="74" {...SK} />
      <line x1="80" y1="52" x2="56" y2="66" {...SK} />
      <line x1="80" y1="52" x2="104" y2="66" {...SK} />
      <line x1="80" y1="74" x2="102" y2="98" {...SK} />
      <line x1="102" y1="98" x2="106" y2="124" {...SK} />
      <line x1="98" y1="124" x2="112" y2="124" {...SK} />
      <line x1="80" y1="74" x2="60" y2="98" {...SK} />
      <line x1="60" y1="98" x2="56" y2="124" {...SK} />
      <line x1="48" y1="124" x2="62" y2="124" {...SK} />
    </g>
  </svg>
);

const BridgeSVG = () => (
  <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
    <Ground />
    <line x1="20" y1="110" x2="68" y2="110" {...SK} />
    <circle cx="14" cy="106" r="9" {...SK} />
    <g
      style={{
        animation: "bridgeAnim 1.4s ease-in-out infinite",
        transformOrigin: "80px 90px",
      }}
    >
      <line x1="68" y1="110" x2="86" y2="82" {...SK} />
      <line x1="86" y1="82" x2="110" y2="98" {...SK} />
      <line x1="110" y1="98" x2="112" y2="124" {...SK} />
      <line x1="68" y1="110" x2="78" y2="80" {...SK} />
      <line x1="78" y1="80" x2="102" y2="96" {...SK} />
      <line x1="102" y1="96" x2="104" y2="124" {...SK} />
      <path d="M76 86 Q86 80 94 86" {...SK} strokeWidth={1.5} stroke="#555" />
    </g>
  </svg>
);

const RowSVG = () => (
  <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
    <Ground />
    <g
      style={{
        animation: "rowAnim 1.1s ease-in-out infinite",
        transformOrigin: "82px 88px",
      }}
    >
      <circle cx="42" cy="64" r="9" {...SK} />
      <line x1="50" y1="68" x2="100" y2="80" {...SK} />
      <line x1="100" y1="80" x2="106" y2="104" {...SK} />
      <line x1="106" y1="104" x2="108" y2="124" {...SK} />
      <line x1="100" y1="80" x2="94" y2="104" {...SK} />
      <line x1="94" y1="104" x2="96" y2="124" {...SK} />
      <line x1="70" y1="72" x2="64" y2="90" {...SK} />
      <line x1="64" y1="90" x2="60" y2="106" {...SK} />
      <line x1="70" y1="72" x2="74" y2="90" {...SK} />
      <line x1="74" y1="90" x2="76" y2="110" {...SK} />
      <rect
        x="68"
        y="110"
        width="14"
        height="5"
        rx="2"
        fill="#1a1a1a"
        stroke="#444"
        strokeWidth="1.5"
      />
    </g>
  </svg>
);

const PressSVG = () => (
  <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
    <Ground />
    <g
      style={{
        animation: "pressAnim 1.2s ease-in-out infinite",
        transformOrigin: "80px 60px",
      }}
    >
      <circle cx="80" cy="28" r="10" {...SK} />
      <line x1="80" y1="38" x2="80" y2="80" {...SK} />
      <line x1="80" y1="52" x2="52" y2="34" {...SK} />
      <line x1="80" y1="52" x2="108" y2="34" {...SK} />
      <line x1="36" y1="32" x2="124" y2="32" {...SK} strokeWidth={3.5} />
      <rect
        x="34"
        y="27"
        width="8"
        height="9"
        rx="2"
        fill="#1a1a1a"
        stroke="#444"
        strokeWidth="1.5"
      />
      <rect
        x="118"
        y="27"
        width="8"
        height="9"
        rx="2"
        fill="#1a1a1a"
        stroke="#444"
        strokeWidth="1.5"
      />
      <line x1="80" y1="80" x2="66" y2="106" {...SK} />
      <line x1="80" y1="80" x2="94" y2="106" {...SK} />
      <line x1="66" y1="106" x2="62" y2="124" {...SK} />
      <line x1="94" y1="106" x2="98" y2="124" {...SK} />
      <line x1="54" y1="124" x2="68" y2="124" {...SK} />
      <line x1="90" y1="124" x2="104" y2="124" {...SK} />
    </g>
  </svg>
);

const CurlSVG = () => (
  <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
    <Ground />
    <circle cx="80" cy="28" r="10" {...SK} />
    <line x1="80" y1="38" x2="80" y2="80" {...SK} />
    <line x1="80" y1="80" x2="66" y2="106" {...SK} />
    <line x1="80" y1="80" x2="94" y2="106" {...SK} />
    <line x1="66" y1="106" x2="62" y2="124" {...SK} />
    <line x1="94" y1="106" x2="98" y2="124" {...SK} />
    <line x1="54" y1="124" x2="68" y2="124" {...SK} />
    <line x1="90" y1="124" x2="104" y2="124" {...SK} />
    <line x1="80" y1="54" x2="58" y2="66" {...SK} />
    <line x1="58" y1="66" x2="54" y2="86" {...SK} />
    <rect
      x="48"
      y="86"
      width="12"
      height="6"
      rx="2"
      fill="#1a1a1a"
      stroke="#444"
      strokeWidth="1.5"
    />
    <g
      style={{
        animation: "curlAnim 0.9s ease-in-out infinite",
        transformOrigin: "102px 66px",
      }}
    >
      <line x1="80" y1="54" x2="102" y2="66" {...SK} />
      <line x1="102" y1="66" x2="104" y2="52" {...SK} />
      <rect
        x="100"
        y="46"
        width="12"
        height="6"
        rx="2"
        fill="#1a1a1a"
        stroke="#444"
        strokeWidth="1.5"
      />
    </g>
  </svg>
);

const JoggingSVG = () => (
  <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
    <Ground />
    <circle cx="80" cy="24" r="10" {...SK} />
    <line x1="80" y1="34" x2="82" y2="78" {...SK} />
    <g style={{ animation: "run .55s ease-in-out infinite", transformOrigin: "80px 56px" }}>
      <line x1="80" y1="52" x2="58" y2="40" {...SK} />
    </g>
    <g
      style={{
        animation: "run .55s ease-in-out infinite reverse",
        transformOrigin: "80px 56px",
      }}
    >
      <line x1="80" y1="52" x2="102" y2="40" {...SK} />
    </g>
    <g style={{ animation: "run .55s ease-in-out infinite", transformOrigin: "82px 78px" }}>
      <line x1="82" y1="78" x2="66" y2="102" {...SK} />
      <line x1="66" y1="102" x2="60" y2="124" {...SK} />
    </g>
    <g
      style={{
        animation: "run .55s ease-in-out infinite reverse",
        transformOrigin: "82px 78px",
      }}
    >
      <line x1="82" y1="78" x2="98" y2="102" {...SK} />
      <line x1="98" y1="102" x2="104" y2="124" {...SK} />
    </g>
    <line x1="10" y1="68" x2="34" y2="68" stroke="#111" strokeWidth="1.5" />
    <line x1="6" y1="80" x2="26" y2="80" stroke="#111" strokeWidth="1.5" />
  </svg>
);

const JacksSVG = () => (
  <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
    <Ground />
    <circle cx="80" cy="24" r="10" {...SK} />
    <line x1="80" y1="34" x2="80" y2="78" {...SK} />
    <g style={{ animation: "splayAnim .65s ease-in-out infinite", transformOrigin: "80px 52px" }}>
      <line x1="80" y1="52" x2="42" y2="33" {...SK} />
      <line x1="80" y1="52" x2="118" y2="33" {...SK} />
    </g>
    <g style={{ animation: "splayAnim .65s ease-in-out infinite", transformOrigin: "80px 78px" }}>
      <line x1="80" y1="78" x2="52" y2="106" {...SK} />
      <line x1="52" y1="106" x2="46" y2="124" {...SK} />
      <line x1="80" y1="78" x2="108" y2="106" {...SK} />
      <line x1="108" y1="106" x2="114" y2="124" {...SK} />
    </g>
  </svg>
);

const BearSVG = () => (
  <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
    <Ground />
    <g style={{ animation: "rowAnim .7s ease-in-out infinite", transformOrigin: "80px 92px" }}>
      <circle cx="124" cy="76" r="9" {...SK} />
      <line x1="40" y1="86" x2="114" y2="78" {...SK} />
      <line x1="96" y1="80" x2="92" y2="98" {...SK} />
      <line x1="92" y1="98" x2="90" y2="118" {...SK} />
      <line x1="84" y1="81" x2="80" y2="100" {...SK} />
      <line x1="80" y1="100" x2="78" y2="118" {...SK} />
      <line x1="40" y1="86" x2="38" y2="106" {...SK} />
      <line x1="38" y1="106" x2="36" y2="118" {...SK} />
      <line x1="50" y1="85" x2="48" y2="106" {...SK} />
      <line x1="48" y1="106" x2="46" y2="118" {...SK} />
    </g>
  </svg>
);

const PigeonSVG = () => (
  <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
    <Ground />
    <g style={{ animation: "breathe 2.5s ease-in-out infinite", transformOrigin: "80px 80px" }}>
      <circle cx="80" cy="34" r="10" {...SK} />
      <line x1="80" y1="44" x2="80" y2="80" {...SK} />
      <line x1="80" y1="58" x2="54" y2="72" {...SK} />
      <line x1="80" y1="58" x2="106" y2="72" {...SK} />
      <line x1="80" y1="80" x2="58" y2="96" {...SK} />
      <line x1="58" y1="96" x2="48" y2="110" {...SK} />
      <line x1="48" y1="110" x2="66" y2="122" {...SK} />
      <line x1="80" y1="80" x2="110" y2="98" {...SK} />
      <line x1="110" y1="98" x2="128" y2="122" {...SK} />
    </g>
  </svg>
);

const CatCowSVG = () => (
  <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
    <Ground />
    <g style={{ animation: "bridgeAnim 1.8s ease-in-out infinite", transformOrigin: "80px 90px" }}>
      <circle cx="122" cy="68" r="9" {...SK} />
      <path d="M36 96 Q58 76 80 80 Q102 84 120 76" {...SK} />
      <line x1="50" y1="92" x2="46" y2="118" {...SK} />
      <line x1="66" y1="88" x2="62" y2="118" {...SK} />
      <line x1="36" y1="96" x2="34" y2="118" {...SK} />
      <line x1="44" y1="95" x2="42" y2="118" {...SK} />
    </g>
  </svg>
);

export const BreatheSVG = () => (
  <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
    <g style={{ animation: "breathe 3s ease-in-out infinite" }}>
      <circle cx="80" cy="70" r="50" stroke="#0d0d0d" strokeWidth="1" fill="none" />
    </g>
    <g style={{ animation: "breathe 3s ease-in-out infinite", animationDelay: ".5s" }}>
      <circle cx="80" cy="70" r="36" stroke="#111" strokeWidth="1.5" fill="none" />
    </g>
    <g style={{ animation: "breathe 3s ease-in-out infinite", animationDelay: "1s" }}>
      <circle cx="80" cy="70" r="20" stroke="#1a1a1a" strokeWidth="2" fill="none" />
    </g>
    <circle cx="80" cy="38" r="9" {...SK} />
    <line x1="80" y1="47" x2="80" y2="78" {...SK} />
    <line x1="80" y1="60" x2="62" y2="70" {...SK} />
    <line x1="80" y1="60" x2="98" y2="70" {...SK} />
    <line x1="80" y1="78" x2="64" y2="96" {...SK} />
    <line x1="80" y1="78" x2="96" y2="96" {...SK} />
    <line x1="64" y1="96" x2="50" y2="96" {...SK} />
    <line x1="96" y1="96" x2="110" y2="96" {...SK} />
  </svg>
);

const DeadliftSVG = () => (
  <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
    <Ground />
    <g style={{ animation: "hingeAnim 1.4s ease-in-out infinite", transformOrigin: "80px 74px" }}>
      <circle cx="80" cy="26" r="10" {...SK} />
      <line x1="80" y1="36" x2="64" y2="74" {...SK} />
      <line x1="72" y1="54" x2="68" y2="82" {...SK} />
      <line x1="64" y1="58" x2="60" y2="86" {...SK} />
      <rect
        x="56"
        y="86"
        width="14"
        height="5"
        rx="2"
        fill="#1a1a1a"
        stroke="#444"
        strokeWidth="1.5"
      />
      <line x1="64" y1="74" x2="60" y2="102" {...SK} />
      <line x1="60" y1="102" x2="58" y2="124" {...SK} />
      <line x1="64" y1="74" x2="70" y2="102" {...SK} />
      <line x1="70" y1="102" x2="68" y2="124" {...SK} />
      <line x1="50" y1="124" x2="64" y2="124" {...SK} />
      <line x1="62" y1="124" x2="76" y2="124" {...SK} />
    </g>
  </svg>
);

const ChildPoseSVG = () => (
  <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
    <Ground />
    <g style={{ animation: "breathe 3.5s ease-in-out infinite", transformOrigin: "80px 100px" }}>
      <path d="M38 110 Q62 80 92 82 Q112 84 132 100" {...SK} />
      <circle cx="132" cy="108" r="9" {...SK} />
      <line x1="38" y1="110" x2="18" y2="100" {...SK} />
      <line x1="44" y1="108" x2="24" y2="98" {...SK} />
      <line x1="58" y1="107" x2="54" y2="124" {...SK} />
      <line x1="66" y1="105" x2="62" y2="124" {...SK} />
    </g>
  </svg>
);

const FoldSVG = () => (
  <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
    <Ground />
    <g style={{ animation: "breathe 2.5s ease-in-out infinite", transformOrigin: "80px 90px" }}>
      <line x1="80" y1="106" x2="80" y2="66" {...SK} />
      <circle cx="80" cy="57" r="9" {...SK} />
      <line x1="80" y1="80" x2="66" y2="98" {...SK} />
      <line x1="80" y1="80" x2="94" y2="98" {...SK} />
      <line x1="80" y1="106" x2="66" y2="124" {...SK} />
      <line x1="80" y1="106" x2="94" y2="124" {...SK} />
      <line x1="58" y1="124" x2="72" y2="124" {...SK} />
      <line x1="88" y1="124" x2="102" y2="124" {...SK} />
    </g>
  </svg>
);

const DiamondPushSVG = () => (
  <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
    <Ground />
    <g style={{ animation: "bob 1.2s ease-in-out infinite", transformOrigin: "80px 100px" }}>
      <line x1="30" y1="96" x2="120" y2="96" {...SK} />
      <circle cx="130" cy="92" r="9" {...SK} />
      <line x1="60" y1="96" x2="68" y2="116" {...SK} />
      <line x1="80" y1="96" x2="68" y2="116" {...SK} />
      <circle cx="68" cy="117" r="3" fill="#e8e8e8" />
      <polygon
        points="68,104 76,112 68,120 60,112"
        stroke="#e8e8e8"
        strokeWidth="1.5"
        fill="none"
        opacity=".4"
      />
      <line x1="30" y1="96" x2="24" y2="124" {...SK} />
      <circle cx="24" cy="125" r="3" fill="#e8e8e8" />
    </g>
  </svg>
);

const NeckSVG = () => (
  <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
    <Ground />
    <g style={{ animation: "splayAnim 1.5s ease-in-out infinite", transformOrigin: "80px 36px" }}>
      <circle cx="80" cy="32" r="12" {...SK} />
      <path d="M68 28 Q80 20 92 28" stroke="#444" strokeWidth="1.5" fill="none" />
    </g>
    <line x1="80" y1="44" x2="80" y2="82" {...SK} />
    <line x1="80" y1="58" x2="56" y2="70" {...SK} />
    <line x1="80" y1="58" x2="104" y2="70" {...SK} />
    <line x1="80" y1="82" x2="66" y2="106" {...SK} />
    <line x1="80" y1="82" x2="94" y2="106" {...SK} />
    <line x1="66" y1="106" x2="62" y2="124" {...SK} />
    <line x1="94" y1="106" x2="98" y2="124" {...SK} />
    <line x1="54" y1="124" x2="68" y2="124" {...SK} />
    <line x1="90" y1="124" x2="104" y2="124" {...SK} />
  </svg>
);

export const getIllustration = (name = "") => {
  const n = name.toLowerCase();
  if (/neck|cuello/.test(n)) return <NeckSVG />;
  if (/push.?up|flexion|press.*pecho|chest/.test(n)) return <PushupSVG />;
  if (/diamond|diamante/.test(n)) return <DiamondPushSVG />;
  if (/squat|sentadilla|goblet/.test(n)) return <SquatSVG />;
  if (/burpee/.test(n)) return <BurpeeSVG />;
  if (/mountain|escalador/.test(n)) return <MountainSVG />;
  if (/plank|plancha/.test(n)) return <PlankSVG />;
  if (/pull.?up|dominada/.test(n)) return <PullupSVG />;
  if (/dip|fondo/.test(n)) return <DipsSVG />;
  if (/lunge|zancada/.test(n)) return <LungeSVG />;
  if (/bridge|glut|puente/.test(n)) return <BridgeSVG />;
  if (/row|remo/.test(n)) return <RowSVG />;
  if (/press|militar|overhead/.test(n)) return <PressSVG />;
  if (/curl|bícep|bicep/.test(n)) return <CurlSVG />;
  if (/jog|trote|sprint|high knee|rodilla/.test(n)) return <JoggingSVG />;
  if (/jack|tijera|jumping/.test(n)) return <JacksSVG />;
  if (/bear|crawl/.test(n)) return <BearSVG />;
  if (/pigeon|paloma/.test(n)) return <PigeonSVG />;
  if (/cat.?cow|gato|camello/.test(n)) return <CatCowSVG />;
  if (/breath|respira|4-7-8/.test(n)) return <BreatheSVG />;
  if (/deadlift|muerto/.test(n)) return <DeadliftSVG />;
  if (/child|niño/.test(n)) return <ChildPoseSVG />;
  if (/fold|flexión.*adelant|hamstring|isquio|quad|cuádr/.test(n)) return <FoldSVG />;
  return <BreatheSVG />;
};

