interface ToucanPizzaLogoProps {
  size?: number;
  className?: string;
  variant?: "color" | "black" | "white";
}

export default function ToucanPizzaLogo({ size = 200, className = "", variant = "color" }: ToucanPizzaLogoProps) {
  const black = variant === "white" ? "#FFFFFF" : "#1A0A00";
  const white = variant === "white" ? "#1A0A00" : "#FFFFFF";
  const beakTop = variant === "black" ? "#1A0A00" : variant === "white" ? "#FFFFFF" : "#FFA600";
  const beakBottom = variant === "black" ? "#1A0A00" : variant === "white" ? "#FFFFFF" : "#FF6B35";
  const beakTip = variant === "black" ? "#1A0A00" : variant === "white" ? "#FFFFFF" : "#E8211A";
  const eye = variant === "white" ? "#1A0A00" : "#FFFFFF";
  const eyePupil = variant === "white" ? "#FFFFFF" : "#1A0A00";
  const pizzaBase = variant === "black" ? "#1A0A00" : variant === "white" ? "#FFFFFF" : "#FFD700";
  const pizzaCrust = variant === "black" ? "#1A0A00" : variant === "white" ? "#FFFFFF" : "#E8A317";
  const pepperoni = variant === "black" ? (variant === "black" ? "#555" : "#1A0A00") : variant === "white" ? "rgba(255,255,255,0.5)" : "#E8211A";

  return (
    <svg
      viewBox="0 0 300 300"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Тело тукана — большой чёрный полукруг/капля */}
      <ellipse cx="130" cy="165" rx="75" ry="95" fill={black} />

      {/* Белое «брюшко» — вырез */}
      <ellipse cx="138" cy="140" rx="38" ry="52" fill={white} />

      {/* Голова — чёрный круг сверху */}
      <circle cx="150" cy="90" r="52" fill={black} />

      {/* Белая маска на лице */}
      <ellipse cx="155" cy="100" rx="28" ry="32" fill={white} />

      {/* Клюв — три секции из простых фигур */}
      {/* Верхняя часть клюва — жёлто-оранжевая */}
      <path
        d="M 175 85 Q 230 78 255 95 Q 245 88 175 95 Z"
        fill={beakTop}
      />
      {/* Средняя часть клюва */}
      <path
        d="M 175 95 Q 245 88 255 95 Q 248 100 175 103 Z"
        fill={beakBottom}
      />
      {/* Кончик клюва */}
      <path
        d="M 248 90 Q 260 95 248 100 Z"
        fill={beakTip}
      />

      {/* Глаз */}
      <circle cx="162" cy="93" r="9" fill={eye} />
      <circle cx="164" cy="91" r="4.5" fill={eyePupil} />
      {variant === "color" && <circle cx="166" cy="89" r="1.8" fill="#FFFFFF" />}

      {/* Крыло — вытянутый эллипс */}
      <ellipse cx="105" cy="190" rx="28" ry="50" fill={black} transform="rotate(-15 105 190)" />

      {/* Хвост — простой треугольник */}
      <path
        d="M 90 245 L 70 280 L 110 275 Z"
        fill={black}
      />

      {/* Лапки */}
      <rect x="118" y="252" width="8" height="18" rx="4" fill={black} />
      <rect x="138" y="255" width="8" height="15" rx="4" fill={black} />

      {/* === ПИЦЦА — треугольный кусок снизу-справа === */}
      <g transform="translate(190, 195) rotate(-15)">
        {/* Тень от пиццы */}
        {variant === "color" && (
          <ellipse cx="35" cy="75" rx="32" ry="6" fill="rgba(0,0,0,0.08)" />
        )}
        {/* Основа — треугольник */}
        <path
          d="M 35 5 L 5 75 L 65 75 Z"
          fill={pizzaBase}
        />
        {/* Корочка */}
        <path
          d="M 5 75 Q 35 82 65 75 L 65 68 Q 35 75 5 68 Z"
          fill={pizzaCrust}
        />
        {/* Пепперони — кружочки */}
        <circle cx="30" cy="40" r="6" fill={pepperoni} />
        <circle cx="42" cy="58" r="5" fill={pepperoni} />
        <circle cx="22" cy="60" r="4.5" fill={pepperoni} />
      </g>
    </svg>
  );
}
