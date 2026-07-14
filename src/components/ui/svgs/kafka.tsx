import type { SVGProps } from "react";

const Kafka = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32">
    <g fill="#000">
      <circle cx="8" cy="8" r="2.2" />
      <circle cx="8" cy="16" r="2.6" />
      <circle cx="8" cy="24" r="2.2" />
      <circle cx="24" cy="8" r="2.2" />
      <circle cx="24" cy="16" r="2.6" />
      <circle cx="24" cy="24" r="2.2" />
    </g>
    <g stroke="#000" strokeWidth="1.5">
      <line x1="8" y1="8" x2="8" y2="24" />
      <line x1="24" y1="8" x2="24" y2="24" />
      <line x1="8" y1="8" x2="24" y2="8" />
      <line x1="8" y1="16" x2="24" y2="16" />
      <line x1="8" y1="24" x2="24" y2="24" />
    </g>
  </svg>
);

export { Kafka };