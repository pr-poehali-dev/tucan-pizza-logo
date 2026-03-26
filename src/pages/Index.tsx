import { useState, useEffect } from "react";

const LOGO_URL = "https://cdn.poehali.dev/projects/b1c2d86e-d177-4b8b-a9bc-303b99d73eb3/files/c4fa33d5-95c4-4c11-a208-8337dc2ced27.jpg";
const LOGO_SIMPLE_URL = "https://cdn.poehali.dev/projects/b1c2d86e-d177-4b8b-a9bc-303b99d73eb3/files/1350b041-113c-482f-ade7-b84e64b2c483.jpg";
const LOGO_CHIBI_URL = "https://cdn.poehali.dev/projects/b1c2d86e-d177-4b8b-a9bc-303b99d73eb3/files/6a0bda4f-99b3-4022-90b4-174aea6d411a.jpg";
const LOGO_CHEF_URL = "https://cdn.poehali.dev/projects/b1c2d86e-d177-4b8b-a9bc-303b99d73eb3/files/5a6037ec-5e91-4785-a24d-1c182d8fc976.jpg";
const LOGO_TOUCAN_PIZZA_URL = "https://cdn.poehali.dev/projects/b1c2d86e-d177-4b8b-a9bc-303b99d73eb3/files/e0603f2b-de29-4ecb-807b-55374a6b686c.jpg";
const LOGO_CUTE_URL = "https://cdn.poehali.dev/projects/b1c2d86e-d177-4b8b-a9bc-303b99d73eb3/files/eb08db7e-fb5e-492c-a4c5-0c5d7f2d8324.jpg";

const CONFETTI_COLORS = ["#E8211A", "#FF6B35", "#FFD700", "#2ECC40", "#FF69B4", "#00BFFF"];

function ConfettiPiece({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute rounded-sm pointer-events-none"
      style={{ width: 10, height: 10, ...style }}
    />
  );
}

function Confetti() {
  const pieces = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${(i * 37 + 5) % 100}%`,
    top: `${(i * 53 + 10) % 100}%`,
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    rotate: `${(i * 47) % 360}deg`,
    scale: 0.5 + (i % 3) * 0.4,
    opacity: 0.6 + (i % 4) * 0.1,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {pieces.map((p) => (
        <ConfettiPiece
          key={p.id}
          style={{
            left: p.left,
            top: p.top,
            backgroundColor: p.color,
            transform: `rotate(${p.rotate}) scale(${p.scale})`,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
}

function StarBurst({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      {Array.from({ length: 8 }, (_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const x1 = 50 + 48 * Math.cos(angle);
        const y1 = 50 + 48 * Math.sin(angle);
        return (
          <line
            key={i}
            x1="50" y1="50"
            x2={x1} y2={y1}
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        );
      })}
      <circle cx="50" cy="50" r="12" />
    </svg>
  );
}

export default function Index() {
  const [loaded, setLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="min-h-screen font-nunito overflow-hidden relative"
      style={{
        background: "linear-gradient(135deg, #FFF8E7 0%, #FFE4B5 40%, #FFF0D0 100%)",
      }}
    >
      <Confetti />

      <div className="absolute top-[-80px] left-[-80px] w-64 h-64 rounded-full opacity-20 pointer-events-none" style={{ background: "#FF6B35" }} />
      <div className="absolute bottom-[-60px] right-[-60px] w-80 h-80 rounded-full opacity-15 pointer-events-none" style={{ background: "#2ECC40" }} />
      <div className="absolute top-1/2 right-[-40px] w-40 h-40 rounded-full opacity-20 pointer-events-none" style={{ background: "#FFD700" }} />

      <StarBurst className="absolute top-8 right-16 w-12 h-12 text-yellow-400 opacity-60 animate-spin-slow" />
      <StarBurst className="absolute bottom-24 left-12 w-8 h-8 text-orange-400 opacity-70 animate-spin-slow" />
      <StarBurst className="absolute top-1/3 left-8 w-6 h-6 text-red-500 opacity-50 animate-spin-slow" />

      <div className="absolute top-12 left-1/4 text-4xl animate-float" style={{ animationDelay: "0.3s" }}>🍕</div>
      <div className="absolute top-20 right-1/4 text-3xl animate-float" style={{ animationDelay: "1.1s" }}>⭐</div>
      <div className="absolute bottom-32 left-1/3 text-3xl animate-float" style={{ animationDelay: "0.7s" }}>🌶️</div>
      <div className="absolute bottom-16 right-1/3 text-2xl animate-float" style={{ animationDelay: "1.5s" }}>🧀</div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-16">

        <div
          className={`mb-4 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}
          style={{ transitionDelay: "0.1s" }}
        >
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-white text-sm tracking-wide shadow-lg"
            style={{ background: "#E8211A", fontWeight: 900 }}
          >
            🦜 Самая вкусная пиццерия в городе!
          </div>
        </div>

        <div
          className={`transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}
          style={{ transitionDelay: "0.2s" }}
        >
          <h1
            className="font-pacifico text-center leading-tight"
            style={{
              fontSize: "clamp(3rem, 10vw, 7rem)",
              background: "linear-gradient(135deg, #E8211A 0%, #FF6B35 40%, #FFD700 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(3px 3px 0px rgba(0,0,0,0.15))",
            }}
          >
            Тукан Пицца
          </h1>
        </div>

        <div
          className={`relative my-6 transition-all duration-700 ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
          style={{ transitionDelay: "0.4s" }}
        >
          <div
            className="absolute inset-[-8px] rounded-full animate-spin-slow"
            style={{
              background: "conic-gradient(from 0deg, #E8211A, #FF6B35, #FFD700, #2ECC40, #E8211A)",
              zIndex: 0,
            }}
          />
          <div className="absolute inset-[-4px] rounded-full bg-white z-[1]" />

          <div
            className={`relative z-[2] rounded-full overflow-hidden shadow-2xl cursor-pointer transition-transform duration-300 ${clicked ? "scale-110" : "hover:scale-105"} animate-float`}
            style={{
              width: "clamp(220px, 40vw, 320px)",
              height: "clamp(220px, 40vw, 320px)",
            }}
            onClick={() => {
              setClicked(true);
              setTimeout(() => setClicked(false), 600);
            }}
          >
            <img
              src={LOGO_URL}
              alt="Тукан Пицца логотип"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute top-4 left-6 w-12 h-12 rounded-full opacity-40 pointer-events-none"
              style={{ background: "white", filter: "blur(8px)" }}
            />
          </div>

          {(["top-0 right-4", "bottom-0 left-4", "top-1/2 -right-6", "top-1/2 -left-6"] as const).map((pos, i) => (
            <div
              key={i}
              className={`absolute ${pos} text-2xl animate-bounce-slow`}
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              {["⭐", "🌟", "✨", "💫"][i]}
            </div>
          ))}
        </div>

        <div
          className={`transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "0.6s" }}
        >
          <p
            className="font-nunito text-center text-2xl md:text-3xl mt-2"
            style={{ color: "#1A0A00", fontWeight: 700 }}
          >
            Где каждый кусочек — приключение! 🎉
          </p>
          <p
            className="font-nunito text-center mt-2 text-lg"
            style={{ color: "#7B4A1A" }}
          >
            Тропическая пицца с любовью для всей семьи
          </p>
        </div>

        <div
          className={`flex flex-wrap gap-4 justify-center mt-10 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "0.8s" }}
        >
          <button
            className="font-nunito text-white text-lg px-8 py-4 rounded-full shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #E8211A, #FF6B35)",
              fontWeight: 900,
              boxShadow: "0 6px 20px rgba(232,33,26,0.4)",
            }}
          >
            🍕 Заказать пиццу
          </button>
          <button
            className="font-nunito text-white text-lg px-8 py-4 rounded-full shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #2ECC40, #27AE60)",
              fontWeight: 900,
              boxShadow: "0 6px 20px rgba(46,204,64,0.35)",
            }}
          >
            📋 Посмотреть меню
          </button>
        </div>

        <div
          className={`mt-16 w-full max-w-3xl transition-all duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "1s" }}
        >
          <p className="font-nunito text-center text-lg mb-6" style={{ color: "#7B4A1A", fontWeight: 700 }}>
            Детальный логотип
          </p>
          <div className="grid grid-cols-3 gap-4">
            {[
              { bg: "#FFFFFF", label: "Белый фон", border: "2px solid #e5e7eb" },
              { bg: "#E8211A", label: "Красный фон", border: undefined },
              { bg: "#1A0A00", label: "Тёмный фон", border: undefined },
            ].map((v, i) => (
              <div
                key={i}
                className="rounded-2xl p-4 flex flex-col items-center gap-3 shadow-md transition-transform duration-200 hover:scale-105"
                style={{ background: v.bg, border: v.border }}
              >
                <div className="w-16 h-16 rounded-full overflow-hidden shadow">
                  <img src={LOGO_URL} alt="лого" className="w-full h-full object-cover" />
                </div>
                <span
                  className="font-pacifico text-sm"
                  style={{ color: v.bg === "#FFFFFF" ? "#1A0A00" : "#FFFFFF" }}
                >
                  Тукан Пицца
                </span>
                <span
                  className="font-nunito text-xs"
                  style={{ color: v.bg === "#FFFFFF" ? "#7B4A1A" : "rgba(255,255,255,0.7)" }}
                >
                  {v.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Упрощённый вариант */}
        <div
          className={`mt-12 w-full max-w-3xl transition-all duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "1.2s" }}
        >
          <div className="flex items-center gap-3 justify-center mb-6">
            <div className="h-px flex-1 rounded" style={{ background: "#FFD700", maxWidth: 80 }} />
            <p className="font-nunito text-center text-lg" style={{ color: "#7B4A1A", fontWeight: 700 }}>
              Упрощённый логотип
            </p>
            <div className="h-px flex-1 rounded" style={{ background: "#FFD700", maxWidth: 80 }} />
          </div>

          {/* Большой показ */}
          <div className="flex justify-center mb-6">
            <div
              className="rounded-3xl p-6 shadow-xl flex flex-col items-center gap-3 transition-transform duration-200 hover:scale-105"
              style={{ background: "#FFF8E7", border: "3px solid #FFD700", maxWidth: 260 }}
            >
              <div className="w-36 h-36 rounded-2xl overflow-hidden shadow-lg">
                <img src={LOGO_SIMPLE_URL} alt="упрощённый лого" className="w-full h-full object-cover" />
              </div>
              <span className="font-pacifico text-xl" style={{ color: "#E8211A" }}>Тукан Пицца</span>
              <span className="font-nunito text-sm" style={{ color: "#7B4A1A" }}>Flat / Минималистичный</span>
            </div>
          </div>

          {/* Три варианта фона */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { bg: "#FFFFFF", label: "Белый фон", border: "2px solid #e5e7eb" },
              { bg: "#FF6B35", label: "Оранжевый фон", border: undefined },
              { bg: "#FFD700", label: "Жёлтый фон", border: undefined },
            ].map((v, i) => (
              <div
                key={i}
                className="rounded-2xl p-4 flex flex-col items-center gap-3 shadow-md transition-transform duration-200 hover:scale-105"
                style={{ background: v.bg, border: v.border }}
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden shadow">
                  <img src={LOGO_SIMPLE_URL} alt="лого упрощённый" className="w-full h-full object-cover" />
                </div>
                <span
                  className="font-pacifico text-xs"
                  style={{ color: v.bg === "#FFD700" ? "#1A0A00" : v.bg === "#FFFFFF" ? "#E8211A" : "#FFFFFF" }}
                >
                  Тукан Пицца
                </span>
                <span
                  className="font-nunito text-xs"
                  style={{ color: v.bg === "#FFD700" ? "#7B4A1A" : v.bg === "#FFFFFF" ? "#7B4A1A" : "rgba(255,255,255,0.8)" }}
                >
                  {v.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Вариант 2: Чиби — тукан на пицце */}
        <div
          className={`mt-12 w-full max-w-3xl transition-all duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "1.4s" }}
        >
          <div className="flex items-center gap-3 justify-center mb-6">
            <div className="h-px flex-1 rounded" style={{ background: "#2ECC40", maxWidth: 80 }} />
            <p className="font-nunito text-center text-lg" style={{ color: "#7B4A1A", fontWeight: 700 }}>
              Вариант 2 — Тукан на пицце 🍕
            </p>
            <div className="h-px flex-1 rounded" style={{ background: "#2ECC40", maxWidth: 80 }} />
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
            <div
              className="rounded-3xl p-6 shadow-xl flex flex-col items-center gap-3 transition-transform duration-200 hover:scale-105 animate-float"
              style={{ background: "#F0FFF4", border: "3px solid #2ECC40", width: 220 }}
            >
              <div className="w-40 h-40 rounded-2xl overflow-hidden shadow-lg">
                <img src={LOGO_CHIBI_URL} alt="тукан на пицце" className="w-full h-full object-cover" />
              </div>
              <span className="font-pacifico text-lg" style={{ color: "#1A0A00" }}>Тукан Пицца</span>
              <span className="font-nunito text-xs" style={{ color: "#27AE60" }}>Тукан на пицце</span>
            </div>
            <div className="grid grid-cols-2 gap-4 flex-1">
              {[
                { bg: "#FFFFFF", label: "Белый", border: "2px solid #e5e7eb", textColor: "#1A0A00", subColor: "#7B4A1A" },
                { bg: "#2ECC40", label: "Зелёный", border: undefined, textColor: "#FFFFFF", subColor: "rgba(255,255,255,0.8)" },
                { bg: "#1A0A00", label: "Тёмный", border: undefined, textColor: "#FFD700", subColor: "rgba(255,255,255,0.6)" },
                { bg: "#FFD700", label: "Жёлтый", border: undefined, textColor: "#1A0A00", subColor: "#7B4A1A" },
              ].map((v, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-3 flex flex-col items-center gap-2 shadow-md transition-transform duration-200 hover:scale-105"
                  style={{ background: v.bg, border: v.border }}
                >
                  <div className="w-14 h-14 rounded-xl overflow-hidden shadow">
                    <img src={LOGO_CHIBI_URL} alt="лого" className="w-full h-full object-cover" />
                  </div>
                  <span className="font-pacifico text-xs" style={{ color: v.textColor }}>Тукан Пицца</span>
                  <span className="font-nunito text-xs" style={{ color: v.subColor }}>{v.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Вариант 3: Шеф-повар с подмигиванием */}
        <div
          className={`mt-12 mb-8 w-full max-w-3xl transition-all duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "1.6s" }}
        >
          <div className="flex items-center gap-3 justify-center mb-6">
            <div className="h-px flex-1 rounded" style={{ background: "#E8211A", maxWidth: 80 }} />
            <p className="font-nunito text-center text-lg" style={{ color: "#7B4A1A", fontWeight: 700 }}>
              Вариант 3 — Шеф-тукан 👨‍🍳
            </p>
            <div className="h-px flex-1 rounded" style={{ background: "#E8211A", maxWidth: 80 }} />
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
            <div
              className="rounded-3xl p-6 shadow-xl flex flex-col items-center gap-3 transition-transform duration-200 hover:scale-105 animate-float"
              style={{ background: "#FFF5F5", border: "3px solid #E8211A", width: 220, animationDelay: "0.5s" }}
            >
              <div className="w-40 h-40 rounded-2xl overflow-hidden shadow-lg">
                <img src={LOGO_CHEF_URL} alt="тукан шеф" className="w-full h-full object-cover" />
              </div>
              <span className="font-pacifico text-lg" style={{ color: "#E8211A" }}>Тукан Пицца</span>
              <span className="font-nunito text-xs" style={{ color: "#7B4A1A" }}>Шеф-повар</span>
            </div>
            <div className="grid grid-cols-2 gap-4 flex-1">
              {[
                { bg: "#FFFFFF", label: "Белый", border: "2px solid #e5e7eb", textColor: "#E8211A", subColor: "#7B4A1A" },
                { bg: "#E8211A", label: "Красный", border: undefined, textColor: "#FFFFFF", subColor: "rgba(255,255,255,0.8)" },
                { bg: "#FF6B35", label: "Оранжевый", border: undefined, textColor: "#FFFFFF", subColor: "rgba(255,255,255,0.8)" },
                { bg: "#1A0A00", label: "Тёмный", border: undefined, textColor: "#FF6B35", subColor: "rgba(255,255,255,0.6)" },
              ].map((v, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-3 flex flex-col items-center gap-2 shadow-md transition-transform duration-200 hover:scale-105"
                  style={{ background: v.bg, border: v.border }}
                >
                  <div className="w-14 h-14 rounded-xl overflow-hidden shadow">
                    <img src={LOGO_CHEF_URL} alt="лого шеф" className="w-full h-full object-cover" />
                  </div>
                  <span className="font-pacifico text-xs" style={{ color: v.textColor }}>Тукан Пицца</span>
                  <span className="font-nunito text-xs" style={{ color: v.subColor }}>{v.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Новый вариант: Тукан на пицце — детальная иллюстрация */}
        <div
          className={`mt-12 mb-8 w-full max-w-3xl transition-all duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "1.8s" }}
        >
          <div className="flex items-center gap-3 justify-center mb-6">
            <div className="h-px flex-1 rounded" style={{ background: "#FF6B35", maxWidth: 80 }} />
            <p className="font-nunito text-center text-lg" style={{ color: "#7B4A1A", fontWeight: 700 }}>
              Новый — Тукан на пицце 🐦🍕
            </p>
            <div className="h-px flex-1 rounded" style={{ background: "#FF6B35", maxWidth: 80 }} />
          </div>

          {/* Крупный центральный показ */}
          <div className="flex justify-center mb-8">
            <div
              className="relative rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105 animate-float"
              style={{
                width: "clamp(260px, 60vw, 420px)",
                background: "linear-gradient(145deg, #FFF8E7, #FFE4B5)",
                border: "4px solid #FF6B35",
                animationDelay: "0.2s",
              }}
            >
              <img
                src={LOGO_TOUCAN_PIZZA_URL}
                alt="Тукан на пицце"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute bottom-0 left-0 right-0 py-4 px-6 flex flex-col items-center gap-1"
                style={{ background: "linear-gradient(to top, rgba(26,10,0,0.85), transparent)" }}
              >
                <span className="font-pacifico text-2xl" style={{ color: "#FFD700" }}>Тукан Пицца</span>
                <span className="font-nunito text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>Вкусно как в джунглях!</span>
              </div>
            </div>
          </div>

          {/* Варианты на фонах */}
          <div className="grid grid-cols-4 gap-3">
            {[
              { bg: "#FFFFFF", label: "Белый", border: "2px solid #e5e7eb", textColor: "#FF6B35", subColor: "#7B4A1A" },
              { bg: "#E8211A", label: "Красный", border: undefined, textColor: "#FFD700", subColor: "rgba(255,255,255,0.8)" },
              { bg: "#2ECC40", label: "Зелёный", border: undefined, textColor: "#FFFFFF", subColor: "rgba(255,255,255,0.8)" },
              { bg: "#1A0A00", label: "Тёмный", border: undefined, textColor: "#FF6B35", subColor: "rgba(255,255,255,0.6)" },
            ].map((v, i) => (
              <div
                key={i}
                className="rounded-2xl p-3 flex flex-col items-center gap-2 shadow-md transition-transform duration-200 hover:scale-105"
                style={{ background: v.bg, border: v.border }}
              >
                <div className="w-14 h-14 rounded-xl overflow-hidden shadow">
                  <img src={LOGO_TOUCAN_PIZZA_URL} alt="тукан на пицце" className="w-full h-full object-cover" />
                </div>
                <span className="font-pacifico text-xs leading-tight text-center" style={{ color: v.textColor }}>Тукан Пицца</span>
                <span className="font-nunito text-xs" style={{ color: v.subColor }}>{v.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

        {/* Упрощённый милый логотип */}
        <div
          className={`mt-12 mb-12 w-full max-w-3xl transition-all duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "2s" }}
        >
          <div className="flex items-center gap-3 justify-center mb-6">
            <div className="h-px flex-1 rounded" style={{ background: "#FFD700", maxWidth: 80 }} />
            <p className="font-nunito text-center text-lg" style={{ color: "#7B4A1A", fontWeight: 700 }}>
              Упрощённый милый логотип ✨
            </p>
            <div className="h-px flex-1 rounded" style={{ background: "#FFD700", maxWidth: 80 }} />
          </div>

          <div className="flex flex-col items-center gap-8">
            {/* Крупный показ */}
            <div
              className="rounded-[2.5rem] p-8 flex flex-col items-center gap-4 shadow-2xl transition-transform duration-300 hover:scale-105 animate-float"
              style={{
                background: "linear-gradient(145deg, #FFFDE7, #FFF9C4)",
                border: "4px solid #FFD700",
                width: "clamp(240px, 55vw, 360px)",
                animationDelay: "0.4s",
              }}
            >
              <div className="w-52 h-52 rounded-3xl overflow-hidden shadow-xl">
                <img src={LOGO_CUTE_URL} alt="милый тукан логотип" className="w-full h-full object-cover" />
              </div>
              <span className="font-pacifico text-3xl" style={{ color: "#E8211A" }}>Тукан Пицца</span>
              <div className="flex gap-2">
                {["🍕","⭐","🦜"].map((e, i) => (
                  <span key={i} className="text-xl animate-bounce-slow" style={{ animationDelay: `${i * 0.2}s` }}>{e}</span>
                ))}
              </div>
            </div>

            {/* Варианты фонов */}
            <div className="grid grid-cols-4 gap-3 w-full">
              {[
                { bg: "#FFFFFF", label: "Белый", border: "2px solid #e5e7eb", textColor: "#E8211A", subColor: "#7B4A1A" },
                { bg: "#FFD700", label: "Жёлтый", border: undefined, textColor: "#1A0A00", subColor: "rgba(0,0,0,0.5)" },
                { bg: "#E8211A", label: "Красный", border: undefined, textColor: "#FFD700", subColor: "rgba(255,255,255,0.8)" },
                { bg: "#1A0A00", label: "Тёмный", border: undefined, textColor: "#FFD700", subColor: "rgba(255,255,255,0.6)" },
              ].map((v, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-3 flex flex-col items-center gap-2 shadow-md transition-transform duration-200 hover:scale-105 cursor-pointer"
                  style={{ background: v.bg, border: v.border }}
                >
                  <div className="w-14 h-14 rounded-xl overflow-hidden shadow">
                    <img src={LOGO_CUTE_URL} alt="милый тукан" className="w-full h-full object-cover" />
                  </div>
                  <span className="font-pacifico text-xs leading-tight text-center" style={{ color: v.textColor }}>Тукан Пицца</span>
                  <span className="font-nunito text-xs" style={{ color: v.subColor }}>{v.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

    </div>
  );
}