/** 站点装饰用线性图标 — 16/24 网格手绘，stroke 走 currentColor */
import type { SVGProps } from "react";

const base: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export const IconSpark = () => (
  <svg {...base}>
    <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
    <path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16z" />
  </svg>
);

export const IconGpu = () => (
  <svg {...base}>
    <rect x="3" y="6" width="18" height="12" rx="2" />
    <rect x="7" y="10" width="6" height="4" rx="1" />
    <path d="M16 10v4M3 9H1.5M3 15H1.5M22.5 9H21M22.5 15H21" />
  </svg>
);

export const IconPhysics = () => (
  <svg {...base}>
    <circle cx="9" cy="15" r="5" />
    <path d="M14.5 4.5l5 5M17 3l4 4" />
    <path d="M13 11l4-4" />
  </svg>
);

export const IconNetwork = () => (
  <svg {...base}>
    <circle cx="12" cy="5" r="2.5" />
    <circle cx="5" cy="18" r="2.5" />
    <circle cx="19" cy="18" r="2.5" />
    <path d="M10.8 7.2L6.4 15.8M13.2 7.2l4.4 8.6M7.5 18h9" />
  </svg>
);

export const IconDevices = () => (
  <svg {...base}>
    <rect x="2" y="5" width="14" height="10" rx="2" />
    <path d="M6 19h6M9 15v4" />
    <rect x="17" y="9" width="5" height="10" rx="1.5" />
  </svg>
);

export const IconLibrary = () => (
  <svg {...base}>
    <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
    <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" />
  </svg>
);

export const IconChat = () => (
  <svg {...base}>
    <path d="M21 12a8 8 0 0 1-8 8H4l2-3.2A8 8 0 1 1 21 12z" />
    <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" />
  </svg>
);

export const IconCamera = () => (
  <svg {...base}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <path d="M17.2 6.8h.01" />
  </svg>
);

export const IconNote = () => (
  <svg {...base}>
    <path d="M14 4v11.5" />
    <circle cx="10.5" cy="15.5" r="3.5" />
    <path d="M14 4c.5 2.8 2.2 4.5 5 5" />
  </svg>
);

export const TECH_ICONS = [
  IconSpark,
  IconGpu,
  IconPhysics,
  IconNetwork,
  IconDevices,
  IconLibrary,
];
