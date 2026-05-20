/**
 * Shared utility functions for H5 test pages
 */

function getSelectionText() {
    console.log('getSelectionText called');
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    console.log("Selected text: " + text);
    if (!text) {
        alert('请先选择文本');
    } else {
        alert(text);
    }
    return text;
}

function getEnv() {
    if (typeof swan !== 'undefined' && swan.webView && swan.webView.getEnv) {
        swan.webView.getEnv(function (res) {
            alert(JSON.stringify(res));
            console.log('Swan Environment:', res.smartprogram);
        });
    } else {
        console.warn('Swan SDK not loaded or not in Swan environment');
        alert('Swan SDK 未加载或不在百度小程序环境中');
    }
}

function sleep(ms) {
    var start = Date.now();
    while (Date.now() - start < ms);
}

function logLoadTime(tag, startDate) {
    var time = Date.now();
    var dur = time - startDate;
    console.log("Load [" + tag + "] time: " + time + " duration: " + dur + "ms");
}
