import type { SVGProps } from "react";

const NestJS = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32">
    <defs>
      <linearGradient id="nestGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EA2845" />
        <stop offset="100%" stopColor="#A91344" />
      </linearGradient>
    </defs>
    <path
      fill="url(#nestGrad)"
      d="M16 3c-1 1.6-.6 3.6.9 4.7-2.4-.3-4.9.8-6.2 3-1.6 2.7-1.1 6 1 8.1-2-.2-4-1.5-5.1-3.5C4.4 10.9 6.6 5.4 11.9 4c1.4-.4 2.8-.5 4.1-1z"
    />
    <path
      fill="url(#nestGrad)"
      d="M16 3c1 1.6.6 3.6-.9 4.7 2.4-.3 4.9.8 6.2 3 1.6 2.7 1.1 6-1 8.1 2-.2 4-1.5 5.1-3.5C27.6 10.9 25.4 5.4 20.1 4 18.7 3.6 17.3 3.5 16 3z"
    />
    <path
      fill="url(#nestGrad)"
      d="M13.5 12.2c1.4 0 2.6.6 3.4 1.6.9-1 2.1-1.6 3.5-1.6 2.7 0 4.9 2.3 4.9 5.1 0 3.4-2.8 6.1-7.1 8.9l-1.3.8-1.3-.8c-4.3-2.8-7.1-5.5-7.1-8.9 0-2.8 2.2-5.1 5-5.1z"
    />
  </svg>
);

export { NestJS };