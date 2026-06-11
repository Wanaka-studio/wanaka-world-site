// @meta {"title":"品牌识别资产 Brand/IdentityAsset"}
import * as React from "react";
import { cn } from "../lib/utils";
import "./brand-identityasset.css";

/** Figma: Brand/IdentityAsset 1:244 — asset 维度（3 变体）
 *  - logoMark   品牌图标：28px 亮绿圆角方块 + 像素 "W"
 *  - logoLockup 图标字标组合：logoMark + WANAKA 字标
 *  - backIcon   返回图标：透明容器 + 白色左箭头线
 */
export type BrandIdentityAssetAsset = "logoMark" | "logoLockup" | "backIcon";

export interface BrandIdentityAssetProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** 资产类型 */
  asset?: BrandIdentityAssetAsset;
}

const LogoMark = () => (
  <span className="wui-brand__mark" aria-hidden="true">
    <span className="wui-brand__mark-letter">W</span>
  </span>
);

const Wordmark = () => (
  <svg
    className="wui-brand__wordmark"
    viewBox="0 0 103.45 17.84"
    fill="none"
    aria-hidden="true"
  >
    <text
      x="0"
      y="14.5"
      className="wui-brand__wordmark-text"
      fontFamily="var(--font-family-base)"
    >
      WANAKA
    </text>
  </svg>
);

const BackArrow = () => (
  <svg
    className="wui-brand__arrow"
    viewBox="0 0 18.2 14.16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M7.08 0.5 0.7 7.08 7.08 13.66M0.7 7.08H18.2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const BrandIdentityAsset = React.forwardRef<
  HTMLDivElement,
  BrandIdentityAssetProps
>(function BrandIdentityAsset(
  { asset = "logoMark", className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn("wui-brand", className)}
      data-asset={asset}
      role="img"
      {...props}
    >
      {asset === "logoMark" && <LogoMark />}
      {asset === "logoLockup" && (
        <>
          <LogoMark />
          <Wordmark />
        </>
      )}
      {asset === "backIcon" && <BackArrow />}
    </div>
  );
});
