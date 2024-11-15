function initTouchDetection() {
    // 检测是否为触摸设备
    if ('ontouchstart' in document.documentElement) {
        document.body.classList.add('touch-enabled');
    }
    
    // 禁用双击缩放
    document.addEventListener('touchstart', function(event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    }, { passive: false });

    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
} 