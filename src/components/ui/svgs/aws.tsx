import type { SVGProps } from "react";

const Aws = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32">
    <rect width="32" height="32" rx="4" fill="#232F3E" />
    <path
      fill="#FF9900"
      d="M9 20c3 2 11 2 14 0v-1.5c-3 1.6-11 1.6-14 0z"
    />
    <path fill="#FF9900" d="M22 19.5 25 21l-3-4z" />
    <text
      x="7"
      y="15"
      fill="#fff"
      fontSize="9"
      fontFamily="Arial, sans-serif"
      fontWeight="bold"
    >
      aws
    </text>
  </svg>
);

export { Aws };