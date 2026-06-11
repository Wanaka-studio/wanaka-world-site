// @meta {"title":"小号按钮 Button/Small"}
import * as React from "react";
import { cn } from "../lib/utils";
import "./button-small.css";

/** Figma: Button/Small — style × icon × state（1:721）。半透明深底 + 背景模糊药丸。*/
export type ButtonSmallVariant = "primary";
export type ButtonSmallIcon = "none" | "leading";

export interface ButtonSmallProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 视觉样式（Figma 仅 primary）*/
  variant?: ButtonSmallVariant;
  /** 图标位置：无 / 前置 */
  iconPlacement?: ButtonSmallIcon;
  /** 前置图标节点（16×16，leading 时渲染）*/
  icon?: React.ReactNode;
}

export const ButtonSmall = React.forwardRef<
  HTMLButtonElement,
  ButtonSmallProps
>(function ButtonSmall(
  {
    variant = "primary",
    iconPlacement = "none",
    icon,
    className,
    children,
    ...props
  },
  ref
) {
  return (
    <button
      ref={ref}
      className={cn("wui-btn-sm", className)}
      data-variant={variant}
      data-icon={iconPlacement}
      {...props}
    >
      <span className="wui-btn-sm__inner">
        {iconPlacement === "leading" && (
          <span className="wui-btn-sm__icon" aria-hidden="true">
            {icon}
          </span>
        )}
        <span className="wui-btn-sm__label">{children}</span>
      </span>
    </button>
  );
});
