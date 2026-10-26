const monster = document.getElementById('monster');
const bubble = document.getElementById('speech-bubble');
const fire = document.getElementById('fire');
const gameArea = document.getElementById('game-area');

const emotions = ['happy', 'sad', 'angry', 'surprised'];
let currentEmotionIdx = 0;

const phrases = [
    "I love skydiving!",
    "Let's travel the world!",
    "Who wants a hug?",
    "Look at me go!",
    "I'm so happy today!",
    "Wheeeeeeeee!"
];

const colors = ['#a2d149', '#ff6b6b', '#4ecdc4', '#ffe66d', '#9b59b6', '#e67e22'];
let currentColorIdx = 0;

function changeEmotion() {
    monster.classList.remove(...emotions);
    currentEmotionIdx = (currentEmotionIdx + 1) % emotions.length;
    monster.classList.add(emotions[currentEmotionIdx]);
}

function monsterSpeak() {
    const text = phrases[Math.floor(Math.random() * phrases.length)];
    bubble.innerText = text;
    bubble.style.display = 'block';
    setTimeout(() => {
        bubble.style.display = 'none';
    }, 3000);
}

function powerUp() {
    fire.style.height = '120px';
    setTimeout(() => {
        fire.style.height = '0%';
    }, 1000);
}

function changeColor() {
    currentColorIdx = (currentColorIdx + 1) % colors.length;
    document.documentElement.style.setProperty('--monster-color', colors[currentColorIdx]);
}

// Move monster on click
document.body.addEventListener('click', (e) => {
    // Prevent trigger on buttons
    if (e.target.tagName === 'BUTTON') return;

    const x = (Math.random() - 0.5) * 40;
    const y = (Math.random() - 0.5) * 40;
    monster.style.transform = `translate(${x}px, ${y}px) scale(${0.9 + Math.random()*0.2})`;

    // Move arms and legs
    const arms = document.querySelectorAll('.arm');
    arms.forEach(arm => {
        const rotate = (Math.random() - 0.5) * 60;
        arm.style.transform = `rotate(${rotate}deg)`;
    });

    const legs = document.querySelectorAll('.leg');
    legs.forEach(leg => {
        const rotate = (Math.random() - 0.5) * 40;
        leg.style.transform = `rotate(${rotate}deg)`;
    });

    // Animate pupils to follow cursor
    const pupils = document.querySelectorAll('.pupil');
    pupils.forEach(p => {
        const rect = p.getBoundingClientRect();
        const centerX = rect.left + rect.width/2;
        const centerY = rect.top + rect.height/2;
        const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
        const dist = 4;
        p.style.transform = `translate(${Math.cos(angle)*dist}px, ${Math.sin(angle)*dist}px)`;
    });
});
