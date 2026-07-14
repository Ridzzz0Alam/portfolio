import type { SVGProps } from "react";

const Linux = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32">
    <ellipse cx="16" cy="12" rx="6" ry="7" fill="#000" />
    <ellipse cx="13.2" cy="11" rx="1.4" ry="1.8" fill="#fff" />
    <ellipse cx="18.8" cy="11" rx="1.4" ry="1.8" fill="#fff" />
    <circle cx="13.2" cy="11.3" r=".6" fill="#000" />
    <circle cx="18.8" cy="11.3" r=".6" fill="#000" />
    <path fill="#F2A900" d="M14.5 14.5h3l-1.5 2z" />
    <path
      fill="#000"
      d="M10 16c-2 3-3 8-2 12 1-1 2-2 3-2 .5 2 2.5 3 5 3s4.5-1 5-3c1 0 2 1 3 2 1-4 0-9-2-12-1 2-2.5 3-6 3s-5-1-6-3z"
    />
    <path fill="#F2A900" d="M12 27c0 1.5 1.8 2.5 4 2.5s4-1 4-2.5-1.5-2-4-2-4 .5-4 2z" />
  </svg>
);

export { Linux };