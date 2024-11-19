document.addEventListener('DOMContentLoaded', function() {
    // 检查是否是移动设备
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    
    // 获取导航栏元素
    const navigationFrame = document.querySelector('.navigation-frame');
    const navigationPlaceholder = document.querySelector('.navigation-placeholder');
    
    // 如果不是移动设备，才初始化滚动处理
    if (!isMobile) {
        initScrollHandler();
    }
    
    // 滚动处理函数
    function initScrollHandler() {
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const navigationTop = navigationFrame.getBoundingClientRect().top + window.pageYOffset;
            
            if (scrollTop > navigationTop) {
                navigationFrame.classList.add('sticky');
                navigationPlaceholder.classList.add('active');
            } else {
                navigationFrame.classList.remove('sticky');
                navigationPlaceholder.classList.remove('active');
            }
        });
    }
    
    // 监听窗口大小变化
    window.addEventListener('resize', function() {
        const isNowMobile = window.matchMedia("(max-width: 767px)").matches;
        
        // 如果设备类型改变，刷新页面
        if (isNowMobile !== isMobile) {
            window.location.reload();
        }
    });
}); 