import type { SVGProps } from "react";

const Prometheus = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32">
    <circle cx="16" cy="18" r="12" fill="#E6522C" />
    <path
      fill="#fff"
      d="M16 8c-4 4-6 7-6 10a6 6 0 0 0 12 0c0-3-2-6-6-10zm0 14a4 4 0 0 1-4-4c0-1.6.9-3 2-4.5-.2 2 1.2 3 2 3s2.2-1 2-3c1.1 1.5 2 2.9 2 4.5a4 4 0 0 1-4 4z"
    />
  </svg>
);

export { Prometheus };