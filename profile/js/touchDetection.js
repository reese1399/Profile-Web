function initTouchDetection() {
    // 检测是否为触摸设备
    if ('ontouchstart' in document.documentElement) {
        document.body.classList.add('touch-enabled');
    }
    
    // 禁用双指缩放
    document.addEventListener('touchstart', function(event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    }, { passive: false });

    // 禁用双击缩放
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(event) {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, { passive: false });

    // 禁用手势缩放
    document.addEventListener('gesturestart', function(event) {
        event.preventDefault();
    });

    // 禁用鼠标滚轮缩放
    document.addEventListener('wheel', function(event) {
        if (event.ctrlKey) {
            event.preventDefault();
        }
    }, { passive: false });

    // 记录触摸起始位置
    let startX = null;
    let startY = null;

    // 监听触摸开始
    document.addEventListener('touchstart', function(event) {
        startX = event.touches[0].clientX;
        startY = event.touches[0].clientY;
    }, { passive: true });

    // 监听触摸移动
    document.addEventListener('touchmove', function(event) {
        if (!startX || !startY) {
            return;
        }

        let moveX = event.touches[0].clientX;
        let moveY = event.touches[0].clientY;
        let diffX = Math.abs(moveX - startX);
        let diffY = Math.abs(moveY - startY);

        // 如果水平移动距离大于垂直移动距离，则阻止默认行为
        if (diffX > diffY) {
            event.preventDefault();
        }
    }, { passive: false });

    // 监听触摸结束
    document.addEventListener('touchend', function() {
        startX = null;
        startY = null;
    }, { passive: true });
}

// 页面加载时初始化
window.addEventListener('load', initTouchDetection); 