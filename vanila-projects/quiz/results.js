const correctAnswers = JSON.parse(localStorage.getItem('correctAnswers'));
const wrongAnswers = JSON.parse(localStorage.getItem('wrongAnswers'));

const correctAnsw = document.querySelector('.right_answers');
const wrongAnsw = document.querySelector('.wrong_answers');

correctAnsw.textContent = correctAnswers;
wrongAnsw.textContent = wrongAnswers; 

const startAgainBtn = document.getElementById('start_again_btn');
startAgainBtn.addEventListener('click', () => {
    window.location.href = "index.html";
});