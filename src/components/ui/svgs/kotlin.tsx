import type { SVGProps } from "react";

const Kotlin = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24">
    <defs>
      <linearGradient id="kotlinGrad" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#E44857" />
        <stop offset="50%" stopColor="#C711E1" />
        <stop offset="100%" stopColor="#7F52FF" />
      </linearGradient>
    </defs>
    <path fill="url(#kotlinGrad)" d="M24 24H0V0h24L12 12Z" />
  </svg>
);

export { Kotlin };