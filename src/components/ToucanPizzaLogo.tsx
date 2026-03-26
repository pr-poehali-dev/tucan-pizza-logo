interface ToucanPizzaLogoProps {
  size?: number;
  className?: string;
  variant?: "color" | "black" | "white";
}

export default function ToucanPizzaLogo({ size = 200, className = "", variant = "color" }: ToucanPizzaLogoProps) {
  const isBlack = variant === "black";
  const isWhite = variant === "white";

  const dark = isWhite ? "#FFFFFF" : "#1A0A00";
  const light = isWhite ? "#1A0A00" : "#FFFFFF";
  const orange = isBlack ? dark : isWhite ? light : "#FFA600";
  const magenta = isBlack ? dark : isWhite ? light : "#C2185B";
  const tipCol = isBlack ? dark : isWhite ? light : dark;
  const cheese = isBlack ? dark : isWhite ? light : "#FFD700";
  const crustCol = isBlack ? dark : isWhite ? light : "#D4941A";
  const topping = isBlack ? "#555" : isWhite ? "rgba(255,255,255,0.4)" : "#E8211A";

  return (
    <svg
      viewBox="0 0 200 220"
      width={size}
      height={size * 1.1}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/*
        Минималистичный тукан как на примерах:
        - Крупная С-образная чёрная форма (тело + голова)
        - Негативное белое пространство внутри (грудка/лицо)
        - Массивный клюв из 2 цветных секций
        - Глаз-точка
        - Кусок пиццы в клюве / лапке
      */}

      {/* === ТЕЛО — единая С-образная форма === */}
      <path
        d={`
          M 88 16
          C 48 16, 18 52, 18 98
          C 18 144, 42 172, 66 184
          C 58 190, 54 198, 60 204
          C 66 210, 76 206, 78 198
          L 82 188
          C 92 192, 100 190, 104 182
          C 108 174, 104 162, 92 158
          C 74 152, 56 136, 56 108
          C 56 76, 74 56, 100 56
          L 108 56
          C 132 22, 112 16, 88 16
          Z
        `}
        fill={dark}
      />

      {/* Голова — верх с округлением */}
      <path
        d={`
          M 88 12
          C 120 12, 142 32, 142 64
          C 142 90, 128 108, 106 112
          L 100 112
          L 100 56
          C 74 56, 56 76, 56 108
          C 56 122, 60 132, 68 140
          C 50 130, 40 114, 40 96
          C 40 48, 60 12, 88 12
          Z
        `}
        fill={dark}
      />

      {/* Белое пространство — грудка (негатив) */}
      <path
        d={`
          M 94 52
          C 72 54, 58 74, 58 100
          C 58 126, 72 144, 90 148
          L 82 148
          C 60 142, 44 122, 44 98
          C 44 66, 64 46, 94 44
          Z
        `}
        fill={light}
      />

      {/* Глаз */}
      <circle cx="110" cy="68" r="9" fill={light} />
      <circle cx="113" cy="66" r="4.5" fill={dark} />
      {variant === "color" && <circle cx="115" cy="64" r="1.8" fill="#FFF" />}

      {/* === КЛЮВ — массивный, из 2 секций === */}
      <path
        d={`
          M 126 52
          C 148 42, 174 42, 186 54
          C 178 48, 152 46, 126 60
          Z
        `}
        fill={orange}
      />
      <path
        d={`
          M 126 60
          C 152 46, 178 48, 186 54
          C 182 64, 158 68, 126 72
          Z
        `}
        fill={magenta}
      />
      {/* Кончик */}
      <path
        d="M 182 50 C 192 54, 194 60, 184 66 C 188 60, 188 54, 182 50 Z"
        fill={tipCol}
      />

      {/* Крыло — каплевидное */}
      <ellipse cx="62" cy="130" rx="16" ry="30" fill={dark} transform="rotate(-12 62 130)" />

      {/* Хвост */}
      <path d="M 50 170 L 38 192 L 58 188 Z" fill={dark} />

      {/* Лапки */}
      <rect x="70" y="182" width="6" height="14" rx="3" fill={dark} />
      <rect x="82" y="184" width="6" height="12" rx="3" fill={dark} />

      {/* === ПИЦЦА — кусок в зоне клюва/груди === */}
      <g transform="translate(118, 100) rotate(-22)">
        <path d="M 20 0 L 0 50 L 40 50 Z" fill={cheese} />
        <path d="M 0 50 Q 20 57 40 50 L 40 44 Q 20 51 0 44 Z" fill={crustCol} />
        <circle cx="17" cy="22" r="4.2" fill={topping} />
        <circle cx="27" cy="36" r="3.5" fill={topping} />
        <circle cx="11" cy="38" r="3" fill={topping} />
      </g>
    </svg>
  );
}
