import type { SVGProps } from "react";

const Javascript = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 128 128">
    <rect width="128" height="128" fill="#F7DF1E" />
    <text
      x="64"
      y="86"
      textAnchor="middle"
      fontFamily="Arial, Helvetica, sans-serif"
      fontWeight="bold"
      fontSize="48"
      fill="#000"
    >
      JS
    </text>
  </svg>
);

export { Javascript };