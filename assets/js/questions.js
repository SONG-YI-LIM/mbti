import { questions } from './data.js'

const progressValueEl = document.querySelector('.progress .value')
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question')
const chioce1El = document.querySelector('.choice1')
const chioce2El = document.querySelector('.choice2')

let currentNumber = 0
let mbti = ''

function renderQuestion() {
    const question = questions[currentNumber] // N번째 질문
    numberEl.innerHTML = question.number
    questionEl.innerHTML = question.question
    chioce1El.innerHTML = question.choices[0].text
    chioce2El.innerHTML = question.choices[1].text
    progressValueEl.style.width = (currentNumber + 1) * 10 + '%' // 1번째 질문부터 시작
}
function nextQuestion(chioceNumber) {
    // if(currentNumber === 9){ // 10번째 질문
    if(currentNumber === 9){ // 10번째 질문
        showResultPage()
        return
    }
    const question = questions[currentNumber] // N번째 질문
    mbti = mbti + question.choices[chioceNumber].value
    // mbti = '' + 'i'
    // mbti = 'i' 첫 번째 질문
    // mbti = 'in' 두 번째 질문
    // mbti = 'inf' 세 번째 질문
    // mbti = 'infj' 네 번째 질문
    currentNumber = currentNumber + 1
    renderQuestion()
}
function showResultPage(){
    // 주소에 정보를 담아서 전달 (쿼리스트링)
    location.href = '/results.html?mbti=' + mbti
}

chioce1El.addEventListener('click', function(){
    nextQuestion(0)
})
chioce2El.addEventListener('click', function(){
    nextQuestion(1)
})

renderQuestion()