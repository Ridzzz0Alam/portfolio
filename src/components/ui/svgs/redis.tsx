import type { SVGProps } from "react";

const Redis = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32">
    <g fill="#DC382D">
      <path d="M16 4 4 9l12 5 12-5z" />
      <path d="M16 13 4 18l12 5 12-5z" opacity=".85" />
      <path d="M16 22 4 27l12 5 12-5z" opacity=".7" />
    </g>
  </svg>
);

export { Redis };