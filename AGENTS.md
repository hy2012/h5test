# AGENTS.md

## Cursor Cloud specific instructions

### 项目概述

这是一个静态 HTML5 测试页面集合（`hy2012/h5test`），用于测试移动端 WebView 的各种功能（地理位置、视频自动播放、URL scheme 跳转、页面加载时间等）。通过 GitHub Pages + Jekyll 托管。

### 开发环境

- **无构建系统**：没有 `package.json`、`Makefile`、`Dockerfile` 或任何依赖管理文件。
- **无需安装依赖**：所有页面为纯 HTML/CSS/JS，无需编译或打包。
- **运行方式**：使用任意静态文件服务器即可，推荐：
  ```bash
  python3 -m http.server 8080
  ```
  然后通过浏览器访问 `http://localhost:8080/` 即可查看各测试页面。

### 目录结构

| 目录 | 内容 |
|------|------|
| `mmp/` | 百度小程序 WebView 测试（地理位置、文件上传等） |
| `pay/` | 支付页面及 deep-link 跳转测试 |
| `test/` | 页面加载时间、文本选择、URL scheme 拦截测试 |
| `videodemo/` | 视频自动播放行为测试（x5 内核相关） |

### 注意事项

- 部分页面依赖外部 CDN 资源（Element UI、百度静态资源），如网络不可用会降级但不影响基本功能。
- 部分功能（如 `swan.makePhoneCall()`）只能在百度小程序 WebView 环境中运行。
- Jekyll 仅用于 GitHub Pages 渲染 README.md，本地开发不需要安装 Jekyll。
