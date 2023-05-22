const startBtn = document.getElementById('start_btn');
const categories = document.querySelectorAll('.categories li');
const difficulty = document.querySelectorAll('.difficulty li');

startBtn.addEventListener('click', () => {
  // get the selected category and difficulty level values
  const category = document.querySelector('.categories li.selected').textContent;
  const difficultyLevel = document.querySelector('.difficulty li.selected').textContent;

  // create an object that contains the category and difficulty level values
  const quizOptions = {
    category: category,
    difficulty: difficultyLevel
  };

  // store the object in local storage
  localStorage.setItem('quizOptions', JSON.stringify(quizOptions));

  // redirect the user to the quiz.html page
  window.location.href = 'quiz_app_question_page.html';
});

// add event listeners to the categories and difficulty levels
categories.forEach((category) => {
    category.addEventListener('click', () => {
      // remove the 'selected' class from all categories
      categories.forEach((category) => {
        category.classList.remove('selected');
      });
  
      // add the 'selected' class to the clicked category
      category.classList.add('selected');
    });
  });
  
difficulty.forEach((level) => {
  level.addEventListener('click', () => {
    // remove the 'selected' class from all difficulty levels
    difficulty.forEach((level) => {
      level.classList.remove('selected');
    });

    // add the 'selected' class to the clicked difficulty level
    level.classList.add('selected');
  });
});