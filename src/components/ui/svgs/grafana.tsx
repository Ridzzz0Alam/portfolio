import type { SVGProps } from "react";

const Grafana = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32">
    <defs>
      <linearGradient id="grafanaGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F5A623" />
        <stop offset="100%" stopColor="#F05A28" />
      </linearGradient>
    </defs>
    <path
      fill="url(#grafanaGrad)"
      d="M16 3c5 2 9 6 9 12 0 7-5 13-9 14-4-1-9-7-9-14 0-3 1.5-5.5 3.5-7-.5 2-.2 3.7 1 4.7-1-3 .5-6.5 3.5-8.2-1 2-.5 4 1 5C14.5 7.5 15 5 16 3z"
    />
    <circle cx="16" cy="19" r="3.2" fill="#fff" />
  </svg>
);

export { Grafana };