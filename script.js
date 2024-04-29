/** Opening button */
function showMessage(id) {
      var element = document.getElementById('message' + id);
      if(element.style.display === 'block') {
          element.style.display = 'none';
      } else {
          element.style.display = 'block';
      }
  }

/** Greeting message */
function personalizedGreeting() {
    const today = new Date();
    const hour = today.getHours();
    let greeting;

    if(hour < 12) {  // 12pm
        greeting = "Good morning, beautiful!";
    } else if(hour < 18) {  // less than 6pm
        greeting = "Good afternoon, beautiful!";
    } else {  // after 6pm
        greeting = "Good evening, beautiful!";
    }

    document.getElementById("personalGreeting").innerText = greeting;
}

document.addEventListener('DOMContentLoaded', function() {
  personalizedGreeting();
  displayQuestion();
});

/** Toggle music */
function toggleMusic() {
    var music = document.getElementById('bgMusic');
    if(music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

/** Volume slider */
function setVolume(value) {
    var music = document.getElementById('bgMusic');
    music.volume = value;
}

/** Quiz */
const questions = [
  {
      question: "Where was our first date?",
      options: ["McDonalds", "Walmart", "Cheesecake Factory", "Starbucks"],
      correctAnswer: 3 
  },
  {
      question: "When was our first kiss?",
      options: ["Feb 15th, 2024", "Jan 21st, 2023", "October 31st, 2022", "Dec 29th, 2022"],
      correctAnswer: 0
  },
  {
      question: "How did we meet?",
      options: ["At a party", "Through mutual friends", "Online dating app", "At work/school"],
      correctAnswer: 1
  },
  {
      question: "Who said 'I love you' first?",
      options: ["Catherine", "Quang", "We said it simultaneously", "It hasn't been said yet"],
      correctAnswer: 0
  },
  {
      question: "What is our favorite meal together?",
      options: ["Panera Bread Mac & Cheese", "Cheesecake Factory Fried Mac & Cheese Balls", "Burger King Whopper", "Grapes"],
      correctAnswer: 1
  },
  {
      question: "Where did I ask you out?",
      options: ["At the ice rink", "At Eastview Mall", "On your driveway", "At school"],
      correctAnswer: 2
  },
  {
      question: "Who usually initiates cuddling between the two of us?",
      options: ["Catherine", "Quang", "It varies", "We both do equally"],
      correctAnswer: 3
  },
  {
      question: "What did we do on our one year anniversary?",
      options: ["Eat at Cheesecake Factory", "Go to Five Below", "Completed a puzzle", "All of the above"],
      correctAnswer: 3
  },
  {
      question: "What's the purple octupus named?",
      options: ["Blooby", "Booby", "Poopy", "Ploopy"],
      correctAnswer: 0
  },
  {
      question: "How many kids would we want?",
      options: ["0", "1", "2", "3+"],
      correctAnswer: 2
  },
  {
      question: "What was our third date?",
      options: ["Movie theatre", "Ice skating", "The beach", "Eastview Mall"],
      correctAnswer: 3 
  },
  {
      question: "Where did I lose my keys on our second date?",
      options: ["It was in my pocket", "Under the bench", "Under the ice", "It was stolen"],
      correctAnswer: 1
  },
  {
      question: "What surrounded our base in Minecraft?",
      options: ["Trees", "Water", "Mushrooms", "Lava"],
      correctAnswer: 2
  },
  {
      question: "What's our favorite series to binge-watch?",
      options: ["Grey's Anatomy", "Stranger Things", "Game of Thrones", "The Office"],
      correctAnswer: 0
  },
  {
      question: "What’s the first thing we cooked together?",
      options: ["Chicken pasta", "Spaghetti", "Chicken curry", "Vegetable stir fry"],
      correctAnswer: 0
  },
  {
      question: "Which of us is the early bird?",
      options: ["Catherine", "Quang", "Both of us", "Neither of us"],
      correctAnswer: 1
  },
  {
      question: "Who is more likely to deal with a spider in the house?",
      options: ["Catherine", "Quang", "We both avoid it", "We call someone else to deal with it"],
      correctAnswer: 1
  },
  {
      question: "Who has the better memory?",
      options: ["Catherine", "Quang", "Both of us", "We both have bad memory"],
      correctAnswer: 0
  },
  {
      question: "Which of us is better at keeping secrets to each other?",
      options: ["Catherine", "Quang", "Both of us", "Neither of us"],
      correctAnswer: 3
  },
  {
      question: "Who takes longer to get ready?",
      options: ["Catherine", "Quang", "We take the same amount of time", "We don't keep track"],
      correctAnswer: 0
  },
  {
      question: "Where do we see ourselves in 10 years?",
      options: ["Traveling the world", "Starting a family", "Running our own business", "Living in a different country"],
      correctAnswer: 1
  },
  {
      question: "What park did we first visit togther?",
      options: ["Cobb's Hill", "Memorial Park", "Lion's Park", "Martin Luther King Jr Memorial Park"],
      correctAnswer: 3
  },
  {
      question: "What did we do in Buffalo?",
      options: ["Try to find a Starbucks glass tumbler", "Eat at Cheesecake Factory", "Get Dior Lip Oil", "All of the above"],
      correctAnswer: 3
  },
  {
      question: "What was our theme for halloween last year?",
      options: ["Joe Goldberg & Love Quinn", "Ladybug & Cat Noir", "Derek Shephard & Meredith Grey", "We weren't in costume"],
      correctAnswer: 0
  },
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const currentQ = questions[currentQuestion];

    questionElement.textContent = currentQ.question;
    optionsElement.innerHTML = "";

    currentQ.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("quiz-button"); 
        button.onclick = () => checkAnswer(index);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const optionsElement = document.getElementById("options");
    const buttons = optionsElement.getElementsByTagName("button");

    if (selectedIndex === questions[currentQuestion].correctAnswer) {
        buttons[selectedIndex].classList.add("correct-answer");
        score++;
    } else {
        buttons[selectedIndex].classList.add("wrong-answer");
        buttons[questions[currentQuestion].correctAnswer].classList.add("correct-answer");
    }

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
}

function nextQuestion() {
    currentQuestion++;
    if(currentQuestion < questions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}

function displayResult() {
    const quizElement = document.getElementById("quiz");
    quizElement.style.display = "none";

    const resultElement = document.getElementById("result");
    resultElement.textContent = `You scored ${score} out of ${questions.length}!`;
}

/** Spinny wheel */
const canvas = document.getElementById('wheelCanvas');
const ctx = canvas.getContext('2d');
const activities = ["Go to the park", "Movie night", "Cooking together", "Board games", "Visit a museum", "Go hiking", "Picnic", "Beach day", "Bike ride", "Coffee date"];
const wheelColors = ['#FFDDC1', '#FBBFAC', '#FFA6C1', '#FA99AC', '#FFB6C1', '#FFABCD', '#FFCCCC', '#FFB3BA', '#FF9999', '#FF6666'];

function drawWheel() {
    const slice = Math.PI * 2 / activities.length;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    activities.forEach((activity, index) => {
        ctx.beginPath();
        ctx.fillStyle = wheelColors[index];
        ctx.moveTo(250, 250);
        ctx.arc(250, 250, 250, slice * index, slice * (index + 1));
        ctx.lineTo(250, 250);
        ctx.fill();
        ctx.stroke();
        ctx.save();
        ctx.translate(250, 250);
        ctx.rotate(slice * index + slice / 2);
        ctx.textAlign = 'right';
        ctx.fillStyle = '#000';
        ctx.font = '16px Arial';
        ctx.fillText(activity, 230, 10);
        ctx.restore();
    });
}

function spinWheel() {
    const spinTo = Math.floor(Math.random() * 360) + 720; // Ensures a good spin
    const duration = 3000; // 3 seconds
    let start = null;
    function rotateWheel(timestamp) {
        if (!start) start = timestamp;
        const progress = (timestamp - start) / duration;
        const angle = easing(progress) * spinTo;
        ctx.save();
        ctx.translate(250, 250);
        ctx.rotate(angle * Math.PI / 180);
        ctx.translate(-250, -250);
        drawWheel();
        ctx.restore();
        if (progress < 1) {
            requestAnimationFrame(rotateWheel);
        } else {
            const degrees = (angle % 360);
            const sliceDegree = 360 / activities.length;
            const selected = Math.floor((360 - degrees) / sliceDegree) % activities.length;
            document.getElementById('wheelResult').textContent = "Result: " + activities[selected];
        }
    }
    requestAnimationFrame(rotateWheel);
}

function easing(t) {
    return (--t) * t * t * t + 1;
}

document.getElementById('spinButton').addEventListener('click', spinWheel);
drawWheel();
