import type { SVGProps } from "react";

const Grpc = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="15" fill="#4285F4" />
    <path
      fill="#fff"
      d="M11 10h10a3 3 0 0 1 0 6h-6v2h4l3 4h-4l-2.5-3.3H15v3.3h-4z"
    />
  </svg>
);

export { Grpc };