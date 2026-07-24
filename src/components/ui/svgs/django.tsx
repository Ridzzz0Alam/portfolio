import type { SVGProps } from "react";

const Django = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32">
    <defs>
      <linearGradient id="djangoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0C4B33" />
        <stop offset="100%" stopColor="#092E20" />
      </linearGradient>
    </defs>
    <rect width="32" height="32" rx="6" fill="url(#djangoGrad)" />
    <path
      fill="#44B78B"
      d="M13.2 6h4.1v14.4c-2.1.4-3.6.5-5.3.5-5 0-7.6-2.3-7.6-6.6 0-4.2 2.8-6.9 7.1-6.9.6 0 1.1 0 1.7.1zm0 4.9c-.5-.1-.9-.2-1.4-.2-2 0-3.2 1.2-3.2 3.4 0 2.1 1.1 3.3 3.1 3.3.5 0 .9 0 1.5-.1z"
    />
    <path
      fill="#44B78B"
      d="M25.6 9.1v9.7c0 3.3-.2 4.9-1 6.3-.7 1.3-1.7 2.1-3.7 3l-3.8-1.8c2-.9 3-1.7 3.6-2.8.7-1.3.9-2.8.9-6.7v-7.7z"
    />
    <circle cx="21.5" cy="6" r="2.2" fill="#44B78B" />
  </svg>
);

export { Django };