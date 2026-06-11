// @meta {"title":"中号按钮 Button/Medium"}
import * as React from "react";
import { cn } from "../lib/utils";
import "./button-medium.css";

/** Figma: Button/Medium — style × icon × state（共 12 变体）*/
export type ButtonMediumVariant = "primary" | "secondary" | "ghost";
export type ButtonMediumIcon = "none" | "leading" | "only";

export interface ButtonMediumProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 视觉样式。primary=白底深字 / secondary=深灰 / ghost=危险红按钮 */
  variant?: ButtonMediumVariant;
  /** 图标位置：无 / 前置 / 仅图标 */
  iconPlacement?: ButtonMediumIcon;
  /** 图标节点（leading / only 时渲染）*/
  icon?: React.ReactNode;
}

export const ButtonMedium = React.forwardRef<
  HTMLButtonElement,
  ButtonMediumProps
>(function ButtonMedium(
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
      className={cn("wui-btn-md", className)}
      data-variant={variant}
      data-icon={iconPlacement}
      {...props}
    >
      {(iconPlacement === "leading" || iconPlacement === "only") && (
        <span className="wui-btn-md__icon" aria-hidden="true">
          {icon}
        </span>
      )}
      {iconPlacement !== "only" && (
        <span className="wui-btn-md__label">{children}</span>
      )}
    </button>
  );
});
