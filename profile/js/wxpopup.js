// 微信弹窗功能相关脚本

// 打开微信弹窗
function openWeChatPopup() {
    document.getElementById('wechat-popup').style.display = 'flex';
    // 禁用背景滚动
    document.body.style.overflow = 'hidden';
}

// 关闭微信弹窗
function closeWeChatPopup() {
    document.getElementById('wechat-popup').style.display = 'none';
    // 恢复背景滚动
    document.body.style.overflow = 'auto';
}

// 初始化微信弹窗功能
function initWeChatPopup() {
    // 点击弹窗外部区域关闭弹窗
    window.onclick = function(event) {
        const popup = document.getElementById('wechat-popup');
        if (event.target === popup) {
            closeWeChatPopup();
        }
    }
}

// 初始化弹窗相关的事件监听器
function initPopupHandlers() {
    // 初始化弹窗相关的事件监听器
    window.openWeChatPopup = function() {
        document.getElementById('wechat-popup').style.display = 'flex';
        document.body.style.overflow = 'hidden';
    };

    window.closeWeChatPopup = function() {
        document.getElementById('wechat-popup').style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    // 点击弹窗外部区域关闭弹窗
    window.onclick = function(event) {
        const popup = document.getElementById('wechat-popup');
        if (event.target === popup) {
            closeWeChatPopup();
        }
    };
}

// 当文档加载完成时初始化所有弹窗功能
document.addEventListener('DOMContentLoaded', function() {
    initWeChatPopup();
    initPopupHandlers();
}); 