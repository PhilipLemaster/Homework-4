// Variables for Quiz
let score = 0

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answers = document.getElementById('answers')

let shuffledQuestions, currentQuestionIndex

var body = document.querySelector('body')
var quiz = document.getElementById('quiz')
var replayButton = document.createElement('button')


// STYLING

body.style.padding = '0';
body.style.margin = '0';
body.style.display = 'flex';
body.style.width = '100vw';
body.style.height = '100vh';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';
body.style.backgroundImage = 'url("assets/image.jpg")'

quiz.style.width = '800px';
quiz.style.maxWidth = '700%';
quiz.style.backgroundColor = 'lightblue'
quiz.style.borderWidth = '5px';
quiz.style.padding = '15px';
quiz.style.boxShadow = '5px 10px 10px 0';

replayButton.style.width = '300px';
replayButton.textContent = 'REPLAY';
replayButton.style.height = '100px';


// Timer Variables and Functions
var header = document.createElement('header')
body.prepend(header)
var timer = document.createElement('p');
header.appendChild(timer);

var secondsLeft = 0

function setTime() {
  timer.style.visibility = 'visible'
  secondsLeft = 90;
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft + " seconds remaining.";
    
    if(secondsLeft <= 0) {
      clearInterval(timerInterval);
      gameOver();
    }

  }, 1000);
}

// QUIZ FUNCTIONALITY

// Question Database

const questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false }
    ]
  },
  {
    question: 'Who is the best YouTuber?',
    answers: [
      { text: 'Web Dev Simplified', correct: true },
      { text: 'Traversy Media', correct: true },
      { text: 'Dev Ed', correct: true },
      { text: 'Fun Fun Function', correct: true }
    ]
  },
  {
    question: 'Is web development fun?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'What is 4 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true }
    ]
  }
]

// Start of quiz

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  quiz.style.display = 'inline block'
  replayButton.style.visibility = 'hidden'
  startButton.classList.add('hide')
  questionContainerElement.style.visibility = 'visible'
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
  setTime()
}

// Question cycle function

function setNextQuestion() {
  resetState()
  display(shuffledQuestions[currentQuestionIndex])
}

// Question display function

function display(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answers.appendChild(button)
  })

}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answers.firstChild) {
    answers.removeChild(answers.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answers.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Try Again'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

var scoreboard = document.createElement('div');
body.appendChild(scoreboard);

function gameOver() {
 timer.style.visibility = 'hidden'
 scoreboard.style.display = 'block'
 replayButton.style.display = 'visible'
 quiz.style.display = 'none'
}

// Scoreboard layout and styling

scoreboard.style.display = 'none';
scoreboard.style.width = '30%';
scoreboard.style.height = '80%';
scoreboard.style.backgroundColor = 'lightblue'
scoreboard.style.borderWidth = '5px';
scoreboard.style.padding = '15px';
scoreboard.style.boxShadow = '5px 10px 10px 0';

var scorekeeper = document.createElement('div')
body.appendChild(scorekeeper)
scorekeeper.textContent = ('Score: ' + score)

scorekeeper.style.position = 'sticky';
scorekeeper.style.top = '600px';
scorekeeper.style.right = '1200px'
scorekeeper.style.color = 'white';
scorekeeper.style.textAlign = 'center';
scorekeeper.style.fontSize = '40px';

// Styling for timer

timer.style.color = 'white';

