/**
 * cn — 轻量 className 拼接（零依赖，过滤 falsy）。
 * Wanaka UI Kit 组件不引 tailwind/clsx，样式走配套 .css + tokens.css 变量。
 */
export function cn(
  ...parts: Array<string | false | null | undefined>
): string {
  return parts.filter(Boolean).join(" ");
}
