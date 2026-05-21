"use client";

import { useEffect, useState } from "react";

const companies = [
  { name: "Trane Technologies", logo: "/trane-logo.png" },
  { name: "Y Combinator", logo: "/yc-logo.png" },
  { name: "NUI Galway", logo: "/nuig-logo.png" },
  { name: "The Bridge", logo: "/bridge-logo.png" },
];

export default function LogoWheel() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.2) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const radius = 120; // Distance from center to logos
  const wheelSize = radius * 2;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none"
      style={{
        width: `${radius}px`,
        height: "50vh",
        zIndex: 10,
        overflow: "visible",
      }}
    >
      {/* The wheel center is at the left edge, vertically centered in header */}
      <div
        className="absolute"
        style={{
          width: `${wheelSize}px`,
          height: `${wheelSize}px`,
          left: `-${radius}px`,
          top: `calc(25vh - ${radius}px)`,
          transform: `rotate(${rotation}deg)`,
          transition: "transform 0.05s linear",
        }}
      >
        {/* Invisible wheel track for debugging */}
        <div
          className="absolute inset-0 rounded-full border-2 border-dashed border-muted opacity-20"
          style={{ borderWidth: "1px" }}
        />

        {/* Logo positions around the wheel */}
        {companies.map((company, index) => {
          const angle = (index / companies.length) * 360;
          const angleRad = (angle * Math.PI) / 180;
          const x = Math.cos(angleRad) * radius;
          const y = Math.sin(angleRad) * radius;

          return (
            <div
              key={company.name}
              className="absolute pointer-events-auto"
              style={{
                left: `${radius + x - 40}px`,
                top: `${radius + y - 40}px`,
                width: "80px",
                height: "80px",
                transform: `rotate(${-rotation}deg)`, // Counter-rotate to keep logos upright
              }}
            >
              <div className="w-full h-full rounded-full bg-background border-2 border-border shadow-lg flex items-center justify-center p-2 hover:scale-110 transition-transform">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback to text if image doesn't load
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextElementSibling?.classList.remove(
                      "hidden"
                    );
                  }}
                />
                <span className="hidden text-xs font-bold text-center">
                  {company.name.split(" ")[0]}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
