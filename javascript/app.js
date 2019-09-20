
//Show buttons//
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffleQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion() 
})



//Start game
function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}
//Show next question
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {

    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
            (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
    nextButton.classList.remove('hide')

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

const questions = [
    {
        question: "What color is the sky?",
        answers: [
            { text: 'blue', correct: true },
            { text: 'plaid', correct: false },
            { text: 'paisley', correct: false },
            { text: 'polkadot', correct: false }
        ]
    },


    {
        question: "Which of the following can be solid, liquid, or gas?",
        answers: [
            { text: 'puppy', correct: false },
            { text: 'desk', correct: false },
            { text: 'water', correct: true },
            { text: 'music', correct: false }
        ]
    },

    {
        question: "What time is noon?",
        answers: [
            { text: '0200 hours', correct: false },
            { text: '0600', correct: false },
            { text: '1800', correct: false },
            { text: '1200', correct: true }
        ]
    },

    {
        question: "Which piece of furniture is found mainly in a living room?",
        answers: [
            { text: 'toilet', correct: false },
            { text: 'sink', correct: false },
            { text: 'couch', correct: true },
            { text: 'bed', correct: false }
        ]
    },
    {
        question: "What drink is consumed black or with creamer?",
        answers: [
            { text: 'lemonade', correct: false },
            { text: 'milk', correct: false },
            { text: 'beer', correct: false },
            { text: 'coffee', correct: true }

        ]
    }]









