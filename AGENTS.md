# AGENTS.md

## Cursor Cloud specific instructions

### 项目概述

这是一个静态 HTML5 测试页面集合（`hy2012/h5test`），用于测试移动端 WebView 的各种功能。通过 GitHub Pages + Jekyll 托管，线上地址为 `https://hy2012.github.io/h5test/`。

### 快速启动

```bash
python3 -m http.server 8080
```

访问 `http://localhost:8080/` 查看所有测试页面。无需安装任何依赖。

### 测试页面索引

| 路径 | 功能 | 可在桌面浏览器测试 |
|------|------|:------------------:|
| `mmp/geo.html` | Geolocation API（获取设备位置） | ✅ |
| `mmp/webview.html` | 文件上传、拨打电话、百度 Swan SDK、视频播放 | 部分（文件上传/视频可测） |
| `pay/pay.html` | 应用跳转（知乎 scheme）、支付宝链接、APK 下载、文本选择 | 部分（链接跳转/文本选择可测） |
| `test/load.html` | 页面加载时间测试（DOMContentLoaded / onload） | ✅ |
| `test/selection.html` | 文本选择 API（`window.getSelection`） | ✅ |
| `test/test-open.html` | iframe URL scheme 拦截测试（京东/微信/美团/拼多多等） | ⚠️ 仅验证渲染 |
| `videodemo/video_autoplay.html` | 视频自动播放入口页 | ✅ |
| `videodemo/video_p1.html` ~ `video_p5.html` | 不同 autoplay / x5-playsinline 组合测试 | 部分（autoplay 行为因浏览器而异） |

### 开发工作流

1. **新增测试页**：在对应目录下创建 `.html` 文件即可，无需修改配置。
2. **验证修改**：启动本地服务器后在浏览器中打开对应路径，使用 DevTools 查看控制台输出。
3. **提交部署**：推送到 `master` 分支后 GitHub Pages 自动部署。

### 调试技巧

- 打开 Chrome DevTools 的 Console 面板可查看 `test/load.html` 的加载时间日志。
- `mmp/geo.html` 需要 HTTPS 或 localhost 才能触发浏览器的地理位置权限弹窗。
- `test/test-open.html` 中的 iframe URL scheme 在桌面浏览器中不会跳转，但可以通过 Network 面板观察请求。
- 视频自动播放在桌面 Chrome 中可能被策略阻止（需用户交互），这是正常的浏览器行为。

### 注意事项

- **无构建系统**：没有 `package.json`、`Makefile`、`Dockerfile` 或任何依赖管理文件。
- 部分页面引用外部 CDN（Element UI、百度静态资源），断网时降级但不影响核心 HTML 渲染。
- `swan.makePhoneCall()` 等百度小程序 API 仅在百度 App WebView 内生效。
- Jekyll 仅用于 GitHub Pages 渲染 `README.md`，本地开发无需安装。
- `videodemo/movie/movie.mp4` 是本地测试视频文件（约 318KB），被 `video_p1~p5.html` 引用。
