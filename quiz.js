const quizData = [
    {
        question: "1. What song did Rose Quartz sing to express her love for Earth in 'The Answer'?",
        options: shuffle(["What Can I Do (For You)", "Love Like You", "Tower of Mistakes", "Stronger Than You"]),
        answer: "What Can I Do (For You)"
    },
    {
        question: "2. What is the name of the first fusion Steven meets that isn’t a Crystal Gem?",
        options: shuffle(["Rhodonite", "Sugilite", "Malachite", "Opal"]),
        answer: "Malachite"
    },
    {
        question: "3. What would Garnet most likely say about 'future vision'?",
        options: shuffle(["It shows the exact future.", "It shows potential futures.", "It doesn’t always work.", "It’s only for combat."]),
        answer: "It shows potential futures."
    },
    {
        question: "4. What does Steven’s Cheeseburger Backpack hold in its first use?",
        options: shuffle(["Glow stick", "Fire salt", "Bagel sandwich", "Miniature raft"]),
        answer: "Glow stick"
    },
    {
        question: "5. What is Lapis Lazuli’s strongest power?",
        options: shuffle(["Water manipulation", "Shapeshifting", "Telepathy", "Speed"]),
        answer: "Water manipulation"
    },
    {
        question: "6. Which fusion sings the song 'Here Comes a Thought'?",
        options: shuffle(["Stevonnie", "Garnet", "Opal", "Sardonyx"]),
        answer: "Garnet"
    },
    {
        question: "7. Who is the Off-Color fusion seen in 'Lars of the Stars'?",
        options: shuffle(["Rhodonite", "Fluorite", "Padparadscha", "Topaz"]),
        answer: "Rhodonite"
    },
    {
        question: "8. What was Peridot’s initial role on Earth?",
        options: shuffle(["Terraforming Earth", "Observing the Cluster", "Capturing the Crystal Gems", "Helping Jasper"]),
        answer: "Observing the Cluster"
    },
    {
        question: "9. What song does Steven sing to calm Jasper during her redemption arc?",
        options: shuffle(["Change Your Mind", "Being Human", "Stronger Than You", "Peace and Love"]),
        answer: "Being Human"
    },
    {
        question: "10. What is the name of the Kindergarten where Amethyst was born?",
        options: shuffle(["Prime Kindergarten", "Beta Kindergarten", "Omega Kindergarten", "Alpha Kindergarten"]),
        answer: "Beta Kindergarten"
    },
    {
        question: "11. What rare fusion between Pearl and Amethyst is first seen in 'Giant Woman'?",
        options: shuffle(["Opal", "Rainbow Quartz", "Sugilite", "Alexandrite"]),
        answer: "Opal"
    },
    {
        question: "12. What is the name of the episode where Peridot finally joins the Crystal Gems?",
        options: shuffle(["Message Received", "Log Date 7 15 2", "Too Short to Ride", "Barn Mates"]),
        answer: "Log Date 7 15 2"
    },
    {
        question: "13. In 'Change Your Mind,' what weapon does Pink Steven summon that surprises White Diamond?",
        options: shuffle(["A shield", "A sword", "A giant fist", "A scythe"]),
        answer: "A giant fist"
    },
    {
        question: "14. What is the name of the homeworld Gem that attacked Greg in the episode 'The Return'?",
        options: shuffle(["Jasper", "Aquamarine", "Topaz", "Bismuth"]),
        answer: "Jasper"
    },
    {
        question: "15. What is the full name of the convenience store in Beach City?",
        options: shuffle(["Beach City Mart", "Beach City Mini-Mart", "Beach City General", "Beach City Shop"]),
        answer: "Beach City Mini-Mart"
    },
    {
        question: "16. What is the name of the alien language visible on signs and technology throughout the series?",
        options: shuffle(["Gem Glyphs", "Gem Language", "Gem Runic", "Gem Script"]),
        answer: "Gem Glyphs"
    },
    {
        question: "17. What was the exact *fake* name that Steven gave for Garnet, Amethyst, and Pearl when introducing them to Connie's parents?",
        options: shuffle(["Sisters", "Cousins", "Roommates", "Bandmates"]),
        answer: "Roommates"
    },
    {
        question: "18. In the *Steven Universe Future* episode 'Together Forever,' what meal did Steven cook for Connie before proposing?",
        options: shuffle(["Pasta", "Sandwiches", "Pizza", "Stew"]),
        answer: "Pasta"
    },
    {
        question: "19. What specific item did Rose Quartz leave behind in Lion’s mane that ultimately helped Steven find the Gem base on the moon?",
        options: shuffle(["A key", "A sword scabbard", "A moon base map", "A photo of Pink Diamond"]),
        answer: "A moon base map"
    },
    {
        question: "20. What rare, one-off character appeared in the background of the song 'Do It For Her' and is still debated by fans?",
        options: shuffle(["A corrupted Gem", "A watermelon Steven", "A human toddler", "An unidentified Diamond"]),
        answer: "A corrupted Gem"
    }
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");
let currentQuestion = 0;
let score = 0;

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

    if (score === quizData.length) {
        message = "NERRRRRD.";
    } else if (score >= 15) {
        message = "wow im totally impressed.";
    } else if (score >= 10) {
        message = "Not bad, but not good enough.";
    } else {
        message = "Did you even watch Steven Universe?";
    }

    questionElement.innerHTML = "omg you completed the quiz congrats omg omg omg (if u wanna restart just refresh the page im too stupid to figure out how to implement a retry button lmao)";
    optionsElement.innerHTML = `<p>Your score: ${score}/${quizData.length}</p><p>${message}</p>`;

    const nextButton = document.getElementById("next-challenge");
    nextButton.style.display = "block";
    nextButton.style.margin = "0 auto";
    document.getElementById("next-challenge").addEventListener("click", function() {
        window.location.href = "typing.html"; 
    });
    
}
showQuestion();
