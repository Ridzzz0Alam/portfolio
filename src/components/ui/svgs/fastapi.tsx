import type { SVGProps } from "react";

const FastApi = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="15" fill="#009688" />
    <path
      fill="#fff"
      d="M17.5 4 8 18h6.5l-2 10L24 14h-6.5z"
    />
  </svg>
);

export { FastApi };