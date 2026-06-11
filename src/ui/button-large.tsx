// @meta {"title":"大号按钮 Button/Large"}
import * as React from "react";
import { cn } from "../lib/utils";
import "./button-large.css";

/** Figma: Button/Large — style × state（1:704）。实测各变体含图标 + 文字。*/
export type ButtonLargeVariant = "primary" | "secondary";

export interface ButtonLargeProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 视觉样式。primary=白底深字 / secondary=深灰 */
  variant?: ButtonLargeVariant;
  /** 前置图标节点（16×16）*/
  icon?: React.ReactNode;
}

export const ButtonLarge = React.forwardRef<
  HTMLButtonElement,
  ButtonLargeProps
>(function ButtonLarge(
  { variant = "primary", icon, className, children, ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className={cn("wui-btn-lg", className)}
      data-variant={variant}
      {...props}
    >
      <span className="wui-btn-lg__inner">
        {icon != null && (
          <span className="wui-btn-lg__icon" aria-hidden="true">
            {icon}
          </span>
        )}
        {children != null && (
          <span className="wui-btn-lg__label">{children}</span>
        )}
      </span>
    </button>
  );
});
