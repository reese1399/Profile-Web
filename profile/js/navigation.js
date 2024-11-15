// 初始化滚动处理函数
function initScrollHandler() {
    // 获取导航栏和占位符元素
    const nav = document.querySelector('.navigation-frame');
    const placeholder = document.querySelector('.navigation-placeholder');
    // 获取导航栏原始位置的顶部偏移量
    const navOffset = nav.offsetTop;

    // 处理滚动事件的函数
    function handleScroll() {
        // 判断页面滚动位置是否超过导航栏原始位置
        if (window.pageYOffset >= navOffset) {
            // 超过则添加固定定位类
            nav.classList.add('sticky');
            // 显示占位符防止页面跳动
            placeholder.classList.add('active');
        } else {
            // 未超过则移除固定定位类
            nav.classList.remove('sticky');
            // 隐藏占位符
            placeholder.classList.remove('active');
        }
    }

    // 监听窗口滚动事件
    window.addEventListener('scroll', handleScroll);
}

// 初始化导航点击功能
function initNavigation() {
    // 获取所有导航项
    const navItems = document.querySelectorAll('.nav-item');
    
    // 定义导航项与对应部分的映射
    const sections = {
        'ABOUT': '.frame1',
        'CONTENT': '.frame2',
        'WORK EXPERIENCE': '.frame3',
        'REVIEW': '.frame4',
        'CONTACT': '.frame5',
        'FOLLOW ME': '.frame6'
    };

    // 为每个导航项添加点击事件
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // 获取对应部分的选择器
            const sectionSelector = sections[this.textContent];
            // 获取对应部分的元素
            const section = document.querySelector(sectionSelector);
            
            if (section) {
                // 获取导航栏高度
                const navHeight = document.querySelector('.navigation-frame').offsetHeight;
                
                // 计算目标位置
                const targetPosition = section.offsetTop - navHeight;
                
                // 平滑滚动到目标位置
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 当文档加载完成时初始化所有功能
document.addEventListener('DOMContentLoaded', function() {
    initScrollHandler();
    initNavigation();
}); 