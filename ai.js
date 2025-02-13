const quizData = [
    {
        question: "1. What would I do if Mr. Beast came to my house?",
        options: shuffle(["Beg for money", "Offer him food", "Ask for a Tesla", "Politely decline his offer"]),
        answer: "Beg for money"
    },
    {
        question: "2. What would I do if YOU (YES YOU) were to send me a feet pic?",
        options: shuffle(["Freak out and fantasize about it", "Ignore it", "Report you to the authorities", "Send one back"]),
        answer: "Freak out and fantasize about it"
    },
    {
        question: "3. What would I do if I received 200 dollars for making this magnificent project?",
        options: shuffle(["Use those 200 dollars for a brand new laptop", "Save it", "Spend it on food", "Donate it"]),
        answer: "Use those 200 dollars for a brand new laptop"
    },
    {
        question: "4. What would I do if I became a girl all of a sudden?",
        options: shuffle(["Masturbate", "Cry", "Embrace it", "Change my name"]),
        answer: "Masturbate"
    },
    {
        question: "5. What would I do if a hot twink were to approach me?",
        options: shuffle(["Be a gentleman and act like a normal person", "Flirt aggressively", "Run away", "Ask for their number"]),
        answer: "Be a gentleman and act like a normal person"
    },
    {
        question: "6. What would I do if I liked women?",
        options: shuffle(["Become gay", "Question my existence", "Accept it", "Suppress my feelings"]),
        answer: "Become gay"
    },
    {
        question: "7. What would my name be if I became trans?",
        options: shuffle(["Maja", "Hanimaru", "Jasmine", "Elizabeth"]),
        answer: "Maja"
    },
    {
        question: "8. Do I hate myself?",
        options: shuffle(["Yes", "No", "Sometimes", "I'm unsure"]),
        answer: "Yes"
    },
    {
        question: "9. Do I love you?",
        options: shuffle(["Yes", "No", "Maybe", "I don't know"]),
        answer: "Yes"
    },
    {
        question: "10. What if I (Maja) suddenly became a millionaire because I didn’t stop gambling away? What would I do in that hypothetical situation?",
        options: shuffle([
            "Buy Bibblekitty OnlyFans, buy so many maid outfits for all my boyfriends, rent out Milkyray so we can play Fortnite (nothing weird is happening I swear) and buy a Bugatti or something idk",
            "Invest wisely",
            "Buy a mansion",
            "Travel the world"
        ]),
        answer: "Buy Bibblekitty OnlyFans, buy so many maid outfits for all my boyfriends, rent out Milkyray so we can play Fortnite (nothing weird is happening I swear) and buy a Bugatti or something idk"
    }
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
let currentQuestion = 0;
let score = 0;

const nextButton = document.createElement("button");
nextButton.textContent = "Next Challenge";
nextButton.id = "next-challenge";
nextButton.style.display = "none";
nextButton.onclick = () => {
    window.location.href = "quiz.html";
};
document.body.appendChild(nextButton);

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerHTML = question.question;
    optionsElement.innerHTML = "";
    
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option-button");
        optionsElement.appendChild(button);
        button.addEventListener("click", selectAnswer);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
    
    if (selectedButton.innerText === answer) {
        score++;
    }
    
    currentQuestion++;
    
    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    let message = "";
    if (score === 10) {
        message = "Bro you actually know me so well, I'm impressed. You get a feet pic (jk).";
        nextButton.style.display = "block";
    } else if (score >= 7) {
        message = "Not bad, not bad. You're like, 75% inside my brain. Respectable.";
    } else if (score >= 5) {
        message = "Meh. You could do better. I expected more from you ngl.";
    } else {
        message = "Are you even paying attention to me??? Smh I thought we were closer than this.";
    }
    
    questionElement.innerHTML = "Trivia Completed!";
    optionsElement.innerHTML = `<p>Your score: ${score}/${quizData.length}</p><p>${message}</p>`;
}

showQuestion();
