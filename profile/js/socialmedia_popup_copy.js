// 定义全局变量来存储原始按钮文本
let originalBtnText = 'Copy';

function copyID() {
    try {
        // 获取ID文本
        const idText = document.querySelector('.popup-description-id').textContent;
        
        // 使用新的 Clipboard API
        navigator.clipboard.writeText(idText).then(() => {
            // 复制成功后的处理
            const copyBtn = document.querySelector('.copy-btn');
            copyBtn.textContent = 'Copied';
            copyBtn.style.backgroundColor = '#e8e8e8';
            
            // 1秒后恢复按钮原始状态
            setTimeout(() => {
                copyBtn.textContent = originalBtnText;
                copyBtn.style.backgroundColor = '#f5f5f5';
            }, 1000);
        }).catch(err => {
            // 如果 Clipboard API 失败，使用传统方法
            fallbackCopy(idText);
        });
    } catch (err) {
        // 如果出现任何错误，使用传统方法
        fallbackCopy(idText);
    }
}

// 传统复制方法作为后备
function fallbackCopy(text) {
    const tempInput = document.createElement('input');
    tempInput.style.position = 'absolute';
    tempInput.style.left = '-9999px';
    document.body.appendChild(tempInput);
    tempInput.value = text;
    tempInput.select();
    
    try {
        document.execCommand('copy');
        const copyBtn = document.querySelector('.copy-btn');
        copyBtn.textContent = 'Copied';
        copyBtn.style.backgroundColor = '#e8e8e8';
        
        setTimeout(() => {
            copyBtn.textContent = originalBtnText;
            copyBtn.style.backgroundColor = '#f5f5f5';
        }, 1000);
    } catch (err) {
        console.error('Copy failed:', err);
    }
    
    document.body.removeChild(tempInput);
} 