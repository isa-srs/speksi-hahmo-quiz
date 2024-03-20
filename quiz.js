const questions = [
    {
        question: "Kysymys 1: HOIJAA",
        options: {
            a: "HEIJAA",
            b: "HUIJAA",
        },
    },
    {
        question: "Kysymys 2: Valitse sun toteemi...speksiesine?",
        options: {
            a: "pussy bucket hat",
            b: "piirtovihko",
            c: "backup lasit",
            d: "piiska",
            e: "viikate, jolla on leikattu deltan perskarvat",
        },
    },
]

let currentQuestion = 0;

document.getElementById('start').addEventListener('click', function() {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
    currentQuestion = 0;
    showQuestion();
});

function showQuestion() {
    const quizElement = document.getElementById('quiz');
    const question = questions[currentQuestion];
    if (question) {
        let html = `<h2>${question.question}</h2>`;
        for (const option in question.options) {
            html += `<button class="button" value="${option}">${question.options[option]}</button><br>`;
        }
        quizElement.innerHTML = html;
        attachButtonClickHandlers();
    } else {

    }
}

function attachButtonClickHandlers() {
    const choiceButtons = document.querySelectorAll('button');
    choiceButtons.forEach((button) => {
        button.addEventListener('click', handleAnswer);
    });
}

function handleAnswer() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        console.log(currentQuestion)
        showQuestion();
    } else {

    }
}

function showResult() {
    const resultElement = document.getElementById('result');
}