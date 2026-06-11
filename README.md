# wanaka.world 公司官网

Wanaka World 官网重写版：信息丰富的公司主页，视觉语言与 Wanaka Studio 编辑器同源（基于 [wanaka-ui-kit](https://ui.bowie.top) 的 design tokens 与组件）。

## 技术栈

- Vite + React 18 + TypeScript + react-router-dom
- 无 UI 框架依赖：`src/ui/` 与 `src/tokens.css` 直接来自 wanaka-ui-kit registry（零依赖 React + 纯 CSS），`src/site.css` 为站点级布局样式
- 字体：Google Fonts 的 Poppins + Press Start 2P（品牌像素字）

## 页面

| 路由 | 内容 |
| --- | --- |
| `/` | 主页：Hero / About / Products / Technology / How it works / Community / FAQ / CTA |
| `/privacy-policy` | 隐私政策（文案与旧站一致） |
| `/terms-of-service` | 服务条款（文案与旧站一致） |
| `*` | 404 |

全部外链（wanaka.fun、App Store、Discord、Instagram、TikTok）集中在 `src/links.ts`。

## 本地开发

```bash
npm install
npm run dev        # 开发服务器
npm run build      # 产出 dist/
npm run preview    # 本地预览 dist/
```

## 部署说明（给运维同学）

纯静态站点，`npm run build` 后把 `dist/` 放到任意静态服务器即可。

**唯一注意点：SPA 路由需要 fallback** —— 所有未命中的路径要回退到 `index.html`，否则直接访问 `/privacy-policy` 会 404。

Nginx 示例：

```nginx
location / {
  root /path/to/dist;
  try_files $uri $uri/ /index.html;
}
```

无任何后端 / 环境变量依赖。
