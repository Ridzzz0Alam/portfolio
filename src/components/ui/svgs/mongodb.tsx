import type { SVGProps } from "react";

const MongoDB = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32">
    <path
      fill="#47A248"
      d="M16 2c3 5 6 10 6 16 0 6-2.7 10-6 12-3.3-2-6-6-6-12 0-6 3-11 6-16z"
    />
    <path fill="#3E9A3E" d="M16 2c1.5 5 2.5 10 2.5 16 0 6-1 10-2.5 12z" />
    <rect x="15.2" y="26" width="1.6" height="6" fill="#47A248" />
  </svg>
);

export { MongoDB };