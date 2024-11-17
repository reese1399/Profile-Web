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

    // 可选：禁用鼠标滚轮缩放
    document.addEventListener('wheel', function(event) {
        if (event.ctrlKey) {
            event.preventDefault();
        }
    }, { passive: false });
} 