import type { SVGProps } from "react";

const Angular = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32">
    <defs>
      <linearGradient id="angularGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#DD0031" />
        <stop offset="100%" stopColor="#C3002F" />
      </linearGradient>
    </defs>
    <path
      fill="url(#angularGrad)"
      d="M16 2 3 6.5l2 17L16 30l11-6.5 2-17z"
    />
    <path
      fill="#fff"
      d="M16 6 8 24h3l1.6-4h6.7l1.7 4h3zm2.2 11.5h-4.4L16 11z"
    />
  </svg>
);

export { Angular };