import React from "react";
import { useTheme } from "emotion-theming";

function SvgMoon({ scale = 1, ...rest }) {
  const theme = useTheme();
  return (
    <svg viewBox="0 0 100 100" transform={`scale(${scale})`} {...rest}>
      <filter id="noise" >
        <feTurbulence result="a" baseFrequency="1.6" />
        <feBlend in="a" in2="SourceGraphic" mode="multiply" result="b" />
        <feComposite operator="in" in="b" in2="SourceGraphic" result="c" />
        <feGaussianBlur in="c" stdDeviation="0.24" />
      </filter>
      <linearGradient id="grad" gradientTransform="rotate(0)">
        <stop offset="20%" stopColor={theme.colors.gray[100]} />
        <stop offset="95%" stopColor={theme.colors.blue[900]} />
      </linearGradient>
      <circle cx="50" cy="50" r="40" fill="url('#grad')" filter="url('#noise')" />
    </svg>
  );
}

export default SvgMoon;

