

export default function VeterinaryLoader({
  text = "Caring for Pets, Poultry & Cattle",
  variant = "default",
  size = "md",
  showText = true,
  fullScreen = false,
}) {
  const animationStyles = `
    @keyframes veterinary-pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.7; transform: scale(1.1); }
    }
    @keyframes veterinary-rotate {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    @keyframes veterinary-bounce {
      0%, 100% { transform: translateY(0); opacity: 1; }
      50% { transform: translateY(-12px); opacity: 0.7; }
    }
    @keyframes veterinary-bounce-delayed-1 {
      0%, 100% { transform: translateY(0); opacity: 1; }
      50% { transform: translateY(-12px); opacity: 0.7; }
    }
    @keyframes veterinary-bounce-delayed-2 {
      0%, 100% { transform: translateY(0); opacity: 1; }
      50% { transform: translateY(-12px); opacity: 0.7; }
    }
    @keyframes veterinary-bounce-delayed-3 {
      0%, 100% { transform: translateY(0); opacity: 1; }
      50% { transform: translateY(-12px); opacity: 0.7; }
    }
    @keyframes veterinary-dot-fade {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 1; }
    }
    .loader-pulse { animation: veterinary-pulse 1.5s ease-in-out infinite; }
    .loader-rotate { animation: veterinary-rotate 2s linear infinite; }
    .loader-bounce { animation: veterinary-bounce-delayed-1 0.8s ease-in-out infinite; }
    .loader-bounce-1 { animation: veterinary-bounce-delayed-1 0.8s ease-in-out infinite; animation-delay: 0s; }
    .loader-bounce-2 { animation: veterinary-bounce-delayed-2 0.8s ease-in-out infinite; animation-delay: 0.15s; }
    .loader-bounce-3 { animation: veterinary-bounce-delayed-3 0.8s ease-in-out infinite; animation-delay: 0.3s; }
    .dot-fade-1 { animation: veterinary-dot-fade 1.4s ease-in-out infinite; }
    .dot-fade-2 { animation: veterinary-dot-fade 1.4s ease-in-out infinite; animation-delay: 0.2s; }
    .dot-fade-3 { animation: veterinary-dot-fade 1.4s ease-in-out infinite; animation-delay: 0.4s; }
  `

  const containerClasses = fullScreen
    ? "fixed inset-0 bg-[#2d5016] flex items-center justify-center z-50"
    : "flex items-center justify-center"

  const iconSize = {
    sm: "w-12 h-12",
    md: "w-20 h-20",
    lg: "w-32 h-32",
  }[size]

  const textSize = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  }[size]

  return (
    <>
      <style>{animationStyles}</style>
      <div className={containerClasses}>
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Variant: Default - Pulsing Leaf with Circle */}
          {variant === "default" && (
            <div className="relative">
              <svg className={`${iconSize} loader-pulse`} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                {/* Circle Border */}
                <circle cx="50" cy="50" r="45" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.3" />

                {/* Leaf Shape */}
                <g fill="#ffffff">
                  <ellipse cx="50" cy="40" rx="12" ry="20" transform="rotate(-20 50 40)" />
                  <path d="M 50 50 Q 55 60, 50 70 Q 45 60, 50 50" />
                </g>

                {/* Paw Accent */}
                <circle cx="35" cy="60" r="3" fill="#ffffff" opacity="0.8" />
                <circle cx="65" cy="60" r="3" fill="#ffffff" opacity="0.8" />
              </svg>
            </div>
          )}

          {/* Variant: Pulse - Heart + Paw */}
          {variant === "pulse" && (
            <div className={`${iconSize} loader-pulse flex items-center justify-center`}>
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Heart */}
                <g fill="#ffffff">
                  <path d="M 50 85 L 30 65 Q 20 55, 20 45 Q 20 35, 28 35 Q 36 35, 50 48 Q 64 35, 72 35 Q 80 35, 80 45 Q 80 55, 60 75 Z" />
                </g>

                {/* Paw pad */}
                <circle cx="50" cy="55" r="4" fill="#ffffff" opacity="0.7" />
                <circle cx="40" cy="65" r="3" fill="#ffffff" opacity="0.7" />
                <circle cx="60" cy="65" r="3" fill="#ffffff" opacity="0.7" />
              </svg>
            </div>
          )}

          {/* Variant: Rotating - Leaf Circle */}
          {variant === "rotating" && (
            <div className={`${iconSize} loader-rotate`}>
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Three leaves in circle */}
                <g fill="#ffffff">
                  <ellipse cx="50" cy="20" rx="8" ry="14" transform="rotate(0 50 50)" opacity="0.9" />
                  <ellipse cx="50" cy="20" rx="8" ry="14" transform="rotate(120 50 50)" opacity="0.6" />
                  <ellipse cx="50" cy="20" rx="8" ry="14" transform="rotate(240 50 50)" opacity="0.3" />
                </g>

                {/* Center circle */}
                <circle cx="50" cy="50" r="6" fill="#ffffff" />
              </svg>
            </div>
          )}

          {/* Variant: Bounce - Medicine Pills */}
          {variant === "bounce" && (
            <div className="flex gap-3 items-end h-20">
              <div className={`${iconSize} loader-bounce-1`}>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <g fill="#ffffff">
                    <rect x="20" y="35" width="25" height="35" rx="5" />
                    <ellipse cx="32.5" cy="42" rx="8" ry="4" fill="#2d5016" />
                  </g>
                </svg>
              </div>
              <div className={`${iconSize} loader-bounce-2`}>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <g fill="#ffffff">
                    <rect x="20" y="35" width="25" height="35" rx="5" />
                    <ellipse cx="32.5" cy="42" rx="8" ry="4" fill="#2d5016" />
                  </g>
                </svg>
              </div>
              <div className={`${iconSize} loader-bounce-3`}>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <g fill="#ffffff">
                    <rect x="20" y="35" width="25" height="35" rx="5" />
                    <ellipse cx="32.5" cy="42" rx="8" ry="4" fill="#2d5016" />
                  </g>
                </svg>
              </div>
            </div>
          )}

          {/* Variant: Dots - Loading Dots */}
          {variant === "dots" && (
            <div className="flex gap-2 items-center">
              <div className="dot-fade-1 w-3 h-3 rounded-full bg-white"></div>
              <div className="dot-fade-2 w-3 h-3 rounded-full bg-white"></div>
              <div className="dot-fade-3 w-3 h-3 rounded-full bg-white"></div>
            </div>
          )}

          {/* Loading Text */}
          {showText && <p className={`${textSize} text-white text-center font-medium tracking-wide`}>{text}</p>}
        </div>
      </div>
    </>
  )
}
