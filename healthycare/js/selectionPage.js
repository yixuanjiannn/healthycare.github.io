// 選單頁面的 JS 代碼


document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.feature-item');

    menuItems.forEach((item, index) => {
        // 假設每個選項對應的 ID 是 "question1", "question2", ...
        const questionId = `question${index + 1}`; // 根據題目頁面設置不同的 ID
        
        if (localStorage.getItem(questionId) === 'completed') {
            // 更新背景顏色
            item.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        }
    });
});
