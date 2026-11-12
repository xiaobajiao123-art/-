# 詹新雨 · 视觉设计作品集

个人作品网站，包含 15 个项目、鼠标图片跟随动效、左右交替排列的瀑布流，以及项目图文与视频详情。

## 目录

- `dist/`：可直接发布的静态网站，包含页面、样式、交互脚本、图片及本地视频。
- `.github/workflows/deploy-pages.yml`：推送 `main` 后发布至 GitHub Pages。

## 本地预览

无需安装依赖或构建。在仓库根目录运行：

```sh
python3 -m http.server 8000 --directory dist
```

然后打开 <http://localhost:8000/>。

## GitHub Pages

在仓库的 **Settings → Pages → Build and deployment → Source** 中选择 **GitHub Actions**，然后运行 **Deploy portfolio to GitHub Pages** 工作流。后续对 `main` 的推送会自动发布。

默认 Pages 地址：<https://xiaobajiao123-art.github.io/-/>。仅工作流成功后该地址才代表已部署的网站。

## 修改内容

- 项目顺序、标题和封面：`dist/app.js` 中的 `projects`。
- 项目详情：`dist/project-*.html`。
- 首页布局和四张静止图片：`dist/index.html`、`dist/layouts.css`。
- 两列瀑布流排列：`dist/project-grid.js`。
- 项目详情公共宽度和样式：`dist/case.css`。
- 项目媒体：`dist/assets/projects/`。

所有站内链接及资源均使用相对路径，可部署到仓库子路径。YouTube 视频及 Google Fonts 需要网络访问。

作品与个人信息归作者所有。
