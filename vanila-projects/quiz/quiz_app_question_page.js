// get the quiz options object from local storage
const quizOptions = JSON.parse(localStorage.getItem('quizOptions'));

// question heading in appropriate color
const questionCategoryForHeading = quizOptions.category;
const questionHeading = document.querySelector('.question_categorie h2');
questionHeading.textContent = questionCategoryForHeading;

switch (questionCategoryForHeading) {
    case 'Geography':
      questionHeading.style.color = '#22C55E';
      break;
    case 'Music':
      questionHeading.style.color = 'yellow';
      break;
    case 'Science':
      questionHeading.style.color = '#4fb0f2';
      break;
    case 'History':
      questionHeading.style.color = '#EF4444';
      break;
};

// get the quiz options object parameters in lower case
const category = quizOptions.category.toLowerCase();
const difficulty = quizOptions.difficulty.toLowerCase();

// create a dinamic API endpoint
const url = `https://the-trivia-api.com/v2/questions?limit=5&categories=${category}&difficulties=${difficulty}`;

// send a GET request to the API and retrieve the questions
async function fetchQuestion() {
    const response = await fetch(url);
    const questionJsonArray = await response.json();
    const quizContainer = document.querySelector(".quiz_container");
    let currentQuestionIndex = 0;
    let correctAnswers = 0;
    let wrongAnswers = 0;
  
    function displayQuestion() {
      const questionJson = questionJsonArray[currentQuestionIndex];
      const questionContainer = document.createElement("div");
      const questionText = document.createElement("p");
      const answerList = document.createElement("ul");
  
      const questionTextFromUrl = questionJson.question.text;
      const answers = [questionJson.correctAnswer, ...questionJson.incorrectAnswers];
      const shuffledAnswers = shuffleArray(answers);
  
      questionText.textContent = questionTextFromUrl;
  
      shuffledAnswers.forEach(answer => {
        const answerItem = document.createElement("li");
        answerItem.textContent = answer;
        answerList.appendChild(answerItem);
  
        answerItem.addEventListener("click", () => {
          if (answer === questionJson.correctAnswer) {
            answerItem.style.backgroundColor = "#22C55E";
            correctAnswers++;
          } else {
            answerItem.style.backgroundColor = "#EF4444";
            const correctAnswerItem = answerList.querySelector(`li:nth-child(${shuffledAnswers.indexOf(questionJson.correctAnswer) + 1})`);
            correctAnswerItem.style.backgroundColor = "#22C55E";
            wrongAnswers++;
          };
  
          currentQuestionIndex++;
  
          if (currentQuestionIndex < questionJsonArray.length) {
            setTimeout(() => {
              questionContainer.remove();
              displayQuestion();
            }, 1000);
          } else {
            localStorage.setItem("correctAnswers", correctAnswers);
            localStorage.setItem("wrongAnswers", wrongAnswers);
            window.location.href = "results.html";
          };
        });
      });
  
      questionContainer.appendChild(questionText);
      questionContainer.appendChild(answerList);
      quizContainer.appendChild(questionContainer);
  
      questionContainer.classList.add("question_container");
      questionText.classList.add("question_text");
      answerList.classList.add("answer_list");
    };
  
    displayQuestion();
};
  
function shuffleArray(array) {
const shuffledArray = [...array];
for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
};
return shuffledArray;
};

fetchQuestion();