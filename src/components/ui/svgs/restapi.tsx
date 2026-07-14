import type { SVGProps } from "react";

const RestApi = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32">
    <rect width="32" height="32" rx="6" fill="#009688" />
    <text
      x="16"
      y="20"
      fill="#fff"
      fontSize="9"
      fontFamily="Arial, sans-serif"
      fontWeight="bold"
      textAnchor="middle"
    >
      API
    </text>
  </svg>
);

export { RestApi };