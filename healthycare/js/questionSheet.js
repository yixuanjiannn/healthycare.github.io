// JavaScript Document

function submitQuiz() {
    const serviceItems = document.querySelectorAll('.service-item');
    let userAnswers = [];
	const correctSound = document.getElementById('correct-sound');
	const wrongSound = document.getElementById('wrong-sound');
	
    serviceItems.forEach(item => {
        if (item.classList.contains('selected')) {
            userAnswers.push(item.getAttribute('data-answer')); // 假設每個 service-item 有 data-answer 屬性標識答案
        }
    });

    // 檢查用戶選擇的答案是否完全符合正確答案，並且沒有選到錯誤選項
    const hasIncorrectAnswer = userAnswers.some(answer => !correctAnswers.includes(answer));
    const isCorrect = !hasIncorrectAnswer &&
                      userAnswers.length === correctAnswers.length &&
                      userAnswers.every(answer => correctAnswers.includes(answer));

    // 顯示圖片根據結果
    const resultContainer = document.getElementById('result-image');
    if (isCorrect) {
        resultContainer.innerHTML = '<img src="../../images/correct.png" alt="Correct result" />';
		
		correctSound.play();
    } else {
        resultContainer.innerHTML = '<img src="../../images/incorrect.png" alt="Incorrect result" />';
		document.getElementById("submitButton").classList.add("submitted");
		wrongSound.play();
    }
	
	// 顯示"顯示詳解"按鈕
	document.getElementById("show-explanation").style.display = "inline";
	document.getElementById("submitButton").style.display = "none";
	
	localStorage.setItem(questionId, 'completed');
}



function toggleDivSelection(divElement) {
    const selectedAnswer = divElement.getAttribute('data-answer');
	const correctSound = document.getElementById('correct-sound');
	const wrongSound = document.getElementById('wrong-sound');
	
    // 切換選中狀態
    if (divElement.classList.contains('selected')) {
        divElement.classList.remove('selected', 'correct', 'incorrect'); // 移除選中及顏色類別
    } else {
        divElement.classList.add('selected'); // 添加選中類別

        // 判斷是否為正確答案，並添加對應顏色
		
		 if (correctAnswers.includes(selectedAnswer)) {

            divElement.classList.add('correct'); // 正確答案添加綠色

			correctSound.play();	

        } else {

            divElement.classList.add('incorrect'); // 錯誤答案添加紅色

			wrongSound.play();

        }

    }
    }

