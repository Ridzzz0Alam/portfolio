import type { SVGProps } from "react";

const Graphql = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32">
    <g stroke="#E10098" strokeWidth="1.5" fill="none">
      <path d="M16 4 27 10.5v11L16 28 5 21.5v-11z" />
      <path d="M16 4v24M5 10.5l22 11M27 10.5l-22 11" />
    </g>
    <g fill="#E10098">
      <circle cx="16" cy="4" r="2.2" />
      <circle cx="16" cy="28" r="2.2" />
      <circle cx="27" cy="10.5" r="2.2" />
      <circle cx="27" cy="21.5" r="2.2" />
      <circle cx="5" cy="10.5" r="2.2" />
      <circle cx="5" cy="21.5" r="2.2" />
      <circle cx="16" cy="16" r="2.2" />
    </g>
  </svg>
);

export { Graphql };