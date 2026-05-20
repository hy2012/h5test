(function() {
    // Determine the relative path to the root based on current location
    var path = window.location.pathname;
    var depth = (path.match(/\//g) || []).length;
    // If it's served from /h5test/ on GitHub Pages, we need to adjust
    var isGitHubPages = path.indexOf('/h5test/') !== -1;
    var base = isGitHubPages ? '/h5test/' : '/';
    
    var navHtml = `
        <div class="nav">
            <a href="${base}">首页</a>
            <a href="${base}mmp/webview.html">WebView</a>
            <a href="${base}mmp/geo.html">地理位置</a>
            <a href="${base}pay/pay.html">支付/跳转</a>
            <a href="${base}test/load.html">加载测试</a>
            <a href="${base}test/selection.html">文本选择</a>
            <a href="${base}test/test-open.html">拦截测试</a>
            <a href="${base}videodemo/video_autoplay.html">视频播放</a>
        </div>
    `;
    
    function injectNav() {
        var container = document.createElement('div');
        container.innerHTML = navHtml;
        document.body.insertBefore(container, document.body.firstChild);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectNav);
    } else {
        injectNav();
    }
})();
