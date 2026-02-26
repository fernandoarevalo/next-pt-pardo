"use client";

import { useEffect } from "react";

export const useGlobalStyles = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=Roboto+Condensed:ital,wght@0,400;1,400&display=swap";
    document.head.appendChild(link);

    const style = document.createElement("style");
    style.textContent = `

      body{
        min-height:100vh;
        background:#050505;
        background-image:
          radial-gradient(ellipse 800px 600px at 50% -20%, rgba(180,40,40,0.2) 0%, transparent 50%),
          radial-gradient(ellipse 1000px 800px at 80% 120%, rgba(40,20,20,0.25) 0%, transparent 60%),
          linear-gradient(180deg, #050505 0%, #0a0505 50%, #050505 100%);
        background-attachment:fixed;
        overflow-x:hidden;
        overscroll-behavior:none;
        position:relative;
      }

      body::before{
        content:'';
        position:fixed;
        inset:0;
        background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
        opacity:0.5;
        pointer-events:none;
        z-index:1;
      }

      html,body{height:100%}
      .safe-bottom{padding-bottom:env(safe-area-inset-bottom,0px)}

      .glass-card{
        background:linear-gradient(
          135deg,
          rgba(255,255,255,0.08) 0%,
          rgba(255,255,255,0.02) 100%
        );
        backdrop-filter:blur(24px) saturate(180%);
        -webkit-backdrop-filter:blur(24px) saturate(180%);
        border:1px solid rgba(255,255,255,0.18);
        border-radius:24px;
        box-shadow:
          0 8px 32px 0 rgba(0,0,0,0.5),
          inset 0 1px 0 0 rgba(255,255,255,0.15),
          inset 0 -1px 0 0 rgba(0,0,0,0.4);
        position:relative;
        overflow:hidden;
      }

      .glass-card::before{
        content:'';
        position:absolute;
        top:0;
        left:-100%;
        width:100%;
        height:100%;
        background:linear-gradient(
          90deg,
          transparent 0%,
          rgba(255,255,255,0.12) 50%,
          transparent 100%
        );
        transform:skewX(-15deg);
        transition:left 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .glass-card:hover::before{left:200%}

      .glass-dark{
        background:linear-gradient(
          135deg,
          rgba(20,20,20,0.85) 0%,
          rgba(10,10,10,0.9) 100%
        );
        backdrop-filter:blur(20px) saturate(120%);
        -webkit-backdrop-filter:blur(20px) saturate(120%);
        border:1px solid rgba(255,255,255,0.1);
        border-radius:20px;
        box-shadow:
          0 8px 32px rgba(0,0,0,0.6),
          inset 0 1px 0 rgba(255,255,255,0.08);
      }

      .btn-glass{
        background:linear-gradient(
          135deg,
          rgba(255,255,255,0.1) 0%,
          rgba(255,255,255,0.05) 100%
        );
        backdrop-filter:blur(16px);
        -webkit-backdrop-filter:blur(16px);
        border:1px solid rgba(255,255,255,0.15);
        border-radius:16px;
        color:#e8e8e8;
        cursor:pointer;
        transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        position:relative;
        overflow:hidden;
      }
      .btn-glass::after{
        content:'';
        position:absolute;
        inset:-2px;
        background:linear-gradient(135deg, rgba(255,255,255,0.2), transparent);
        opacity:0;
        transition:opacity 0.3s;
        border-radius:16px;
        z-index:-1;
      }
      .btn-glass:hover{
        transform:translateY(-2px);
        box-shadow:0 12px 24px rgba(0,0,0,0.4);
        border-color:rgba(255,255,255,0.25);
      }
      .btn-glass:hover::after{opacity:1}
      .btn-glass:active{transform:translateY(0)}

      .btn-premium{
        background:linear-gradient(135deg, #e63946 0%, #a41623 100%);
        border:1px solid rgba(230,57,70,0.5);
        border-radius:18px;
        color:#fff;
        cursor:pointer;
        position:relative;
        overflow:hidden;
        box-shadow:
          0 0 0 1px rgba(230,57,70,0.3),
          0 8px 24px rgba(230,57,70,0.35),
          inset 0 1px 0 rgba(255,255,255,0.3);
        transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .btn-premium::before{
        content:'';
        position:absolute;
        inset:0;
        background:linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 60%);
        opacity:0;
        transition:opacity 0.3s;
      }
      .btn-premium:hover{
        transform:translateY(-3px);
        box-shadow:
          0 0 0 1px rgba(230,57,70,0.5),
          0 12px 32px rgba(230,57,70,0.5),
          inset 0 1px 0 rgba(255,255,255,0.4);
      }
      .btn-premium:hover::before{opacity:1}
      .btn-premium:active{transform:translateY(-1px)}

      .glow-accent{animation:glow-pulse 2s ease-in-out infinite}
      @keyframes glow-pulse{
        0%,100%{box-shadow:0 0 20px rgba(230,57,70,0.4)}
        50%{box-shadow:0 0 40px rgba(230,57,70,0.6)}
      }

      @keyframes fadeIn{from{opacity:0}to{opacity:1}}
      @keyframes slideUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
      @keyframes scaleIn{from{opacity:0;transform:scale(0.92)}to{opacity:1;transform:scale(1)}}
      @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
      @keyframes spin{to{transform:rotate(360deg)}}
      @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.6}}

      @keyframes breathe{0%,100%{transform:scale(1)}50%{transform:scale(1.03)}}
      @keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(10px)}}
      @keyframes squat{0%,100%{transform:translateY(0)}50%{transform:translateY(10px)}}
      @keyframes burpeeAnim{0%,100%{transform:translateY(0)}50%{transform:translateY(10px)}}
      @keyframes plankPulse{0%,100%{transform:translateY(0)}50%{transform:translateY(4px)}}
      @keyframes pullAnim{0%,100%{transform:translateY(0)}50%{transform:translateY(10px)}}
      @keyframes splayAnim{0%,100%{transform:rotate(0deg)}50%{transform:rotate(5deg)}}
      @keyframes bridgeAnim{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
      @keyframes rowAnim{0%,100%{transform:translateY(0)}50%{transform:translateY(8px)}}
      @keyframes pressAnim{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
      @keyframes curlAnim{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-20deg)}}
      @keyframes run{0%,100%{transform:rotate(0deg)}50%{transform:rotate(12deg)}}
      @keyframes hingeAnim{0%,100%{transform:rotate(0deg)}50%{transform:rotate(8deg)}}
      @keyframes mountainAnim{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
      @keyframes mountainAnimR{0%,100%{transform:translateY(-6px)}50%{transform:translateY(0)}}

      .fade-in{animation:fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) both}
      .slide-up{animation:slideUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) both}
      .scale-in{animation:scaleIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) both}

      .text-glass{
        background:linear-gradient(135deg, #ffffff 0%, #a8a8a8 100%);
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
        background-clip:text;
        position:relative;
      }
      .text-glass::after{
        content:attr(data-text);
        position:absolute;
        left:0;
        top:2px;
        z-index:-1;
        background:linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 100%);
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
        background-clip:text;
        filter:blur(4px);
      }

      .sr-only{
        position:absolute;
        width:1px;
        height:1px;
        padding:0;
        margin:-1px;
        overflow:hidden;
        clip:rect(0,0,0,0);
        white-space:nowrap;
        border:0;
      }

      @supports (backdrop-filter: blur(1px)){
        .glass-card,.glass-dark,.btn-glass{
          backdrop-filter:blur(24px) saturate(180%);
        }
      }
      @supports not (backdrop-filter: blur(1px)){
        .glass-card,.glass-dark,.btn-glass{
          background:rgba(20,20,20,0.95);
        }
      }
    `;

    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
      document.head.removeChild(link);
    };
  }, []);
};

