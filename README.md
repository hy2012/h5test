# H5 功能测试页面集合 (h5test)

这是一个用于测试移动端 WebView 各种功能的静态 HTML5 页面集合。

## 快速访问索引

| 测试分类 | 页面路径 | 主要测试功能 |
| :--- | :--- | :--- |
| **核心功能** | [mmp/webview.html](./mmp/webview.html) | 文件上传、拨打电话、百度 Swan SDK、视频播放 |
| **地理位置** | [mmp/geo.html](./mmp/geo.html) | Geolocation API (获取设备经纬度) |
| **支付与跳转** | [pay/pay.html](./pay/pay.html) | URL Scheme 跳转 (知乎)、支付宝链接、APK 下载 |
| **性能测试** | [test/load.html](./test/load.html) | 页面加载时间 (DOMContentLoaded, onload) |
| **文本操作** | [test/selection.html](./test/selection.html) | 文本选择 API (window.getSelection) |
| **拦截测试** | [test/test-open.html](./test/test-open.html) | iframe URL scheme 拦截 (京东、微信、淘宝等) |
| **视频播放** | [videodemo/video_autoplay.html](./videodemo/video_autoplay.html) | 各种 autoplay / x5-playsinline 组合测试 |

## 本地开发与测试

你可以使用任何静态文件服务器运行本项目。例如使用 Python:

```bash
python3 -m http.server 8080
```

访问 `http://localhost:8080/` 即可查看索引。

## 项目重构说明 (2026-05-20)

为了提高代码的可维护性和一致性，本项目进行了以下重构：
1. **提取公共资源**：创建了 `common/` 目录，包含共享的 `style.css`、`utils.js` 和 `nav.js`。
2. **统一导航**：所有页面现在都包含一个自动注入的导航栏，方便在不同测试页间切换。
3. **标准化头部**：统一了所有页面的 `viewport`、`charset` 和 `lang` 设置。
4. **清理冗余代码**：移除了 `pay/pay.html` 等页面中的重复函数定义。
5. **优化 UI**：提升了基础样式，使其在移动端和桌面端都有更好的展示效果。
