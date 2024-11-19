document.addEventListener('DOMContentLoaded', function() {
    const navigationFrame = document.querySelector('.navigation-frame');
    const navigationPlaceholder = document.querySelector('.navigation-placeholder');
    const navItems = document.querySelectorAll('.nav-item');
    let lastScrollTop = 0;
    
    // 检查是否是移动设备
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    
    // 滚动处理函数
    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const mainFrame = document.querySelector('#main-frame');
        const profileFrame = document.querySelector('.profile-frame');
        const navigationTop = mainFrame.offsetTop + profileFrame.offsetHeight;
        
        // 通用行为：当滚动超过导航栏位置时固定导航栏
        if (scrollTop >= navigationTop) {
            navigationFrame.style.position = 'fixed';
            navigationFrame.style.top = '0';
            navigationFrame.style.zIndex = '1000';
            navigationPlaceholder.style.display = 'block';
            
            if (isMobile) {
                navigationFrame.style.width = '100%';
                // 移动端特有的向下滚动隐藏，向上滚动显示
                if (scrollTop > lastScrollTop) {
                    navigationFrame.style.transform = 'translateY(-100%)';
                } else {
                    navigationFrame.style.transform = 'translateY(0)';
                }
            } else {
                // 桌面端固定宽度
                navigationFrame.style.width = '80%';
                navigationFrame.style.left = '50%';
                navigationFrame.style.transform = 'translateX(-50%)';
            }
        } else {
            // 恢复原始状态
            navigationFrame.style.position = 'relative';
            navigationFrame.style.transform = 'none';
            navigationFrame.style.width = '100%';
            navigationFrame.style.left = 'auto';
            navigationPlaceholder.style.display = 'none';
        }
        
        lastScrollTop = scrollTop;
    }

    // 添加滚动事件监听
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 点击导航项处理函数
    function handleNavClick(event) {
        const targetText = event.target.textContent.toLowerCase();
        let targetSection;
        
        switch(targetText) {
            case 'about':
                targetSection = document.querySelector('.frame1');
                break;
            case 'content':
                targetSection = document.querySelector('.frame2');
                break;
            case 'work experience':
                targetSection = document.querySelector('.frame3');
                break;
            case 'review':
                targetSection = document.querySelector('.frame4');
                break;
            case 'contact':
                targetSection = document.querySelector('.frame5');
                break;
            case 'follow me':
                targetSection = document.querySelector('.frame6');
                break;
        }
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // 为每个导航项添加点击事件
    navItems.forEach(item => {
        item.addEventListener('click', handleNavClick);
    });
}); 