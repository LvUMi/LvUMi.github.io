let score = 0;
let gameActive = false;
const gameDuration = 10000; // 10 seconds
const gameArea = document.getElementById('game-area');
const startGameBtn = document.getElementById('start-game-btn');
const gameScore = document.getElementById('game-score');
const surpriseBtn = document.getElementById('surprise-btn');

function startGame() {
    if (gameActive) return;
    gameActive = true;
    score = 0;
    gameScore.textContent = '';
    gameArea.innerHTML = '';

    let tomatesLeft = 20;
    for (let i = 0; i < 20; i++) {
        const tomateImg = document.createElement('img');
        tomateImg.src = 'tomate.png';
        tomateImg.alt = 'Tomate';
        tomateImg.className = 'tomate-img';
        tomateImg.style.position = 'absolute';
        tomateImg.style.top = `${Math.random() * (gameArea.clientHeight - 30)}px`;
        tomateImg.style.left = `${Math.random() * (gameArea.clientWidth - 30)}px`;
        tomateImg.style.width = '30px';
        tomateImg.style.height = '30px';
        tomateImg.style.cursor = 'pointer';
        tomateImg.addEventListener('click', () => {
            if (!gameActive) return;
            score++;
            tomatesLeft--;
            tomateImg.remove();
            if (tomatesLeft === 0) {
                gameActive = false;
                gameArea.innerHTML = '';
                gameScore.textContent = 'Parabéns, você acabou de ganhar um chocolatinho🥳🥳🥳';
            }
        });
        gameArea.appendChild(tomateImg);
    }

    setTimeout(() => {
        if (gameActive) {
            gameActive = false;
            gameArea.innerHTML = '';
            gameScore.textContent = `Você clicou em ${score} tomates!`;
        }
    }, gameDuration);
}

function showSurprise() {
    // Create modal elements
    const modalOverlay = document.createElement('div');
    modalOverlay.style.position = 'fixed';
    modalOverlay.style.top = '0';
    modalOverlay.style.left = '0';
    modalOverlay.style.width = '100%';
    modalOverlay.style.height = '100%';
    modalOverlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    modalOverlay.style.display = 'flex';
    modalOverlay.style.justifyContent = 'center';
    modalOverlay.style.alignItems = 'center';
    modalOverlay.style.zIndex = '1000';

    const modalBox = document.createElement('div');
    modalBox.style.backgroundColor = '#fff';
    modalBox.style.padding = '20px';
    modalBox.style.borderRadius = '10px';
    modalBox.style.textAlign = 'center';
    modalBox.style.maxWidth = '300px';
    modalBox.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';

    const question = document.createElement('p');
    question.textContent = 'Vamos fazer uma aposta?';

    const btnYes = document.createElement('button');
    btnYes.textContent = 'Sim';
    btnYes.style.margin = '10px';
    btnYes.style.padding = '10px 20px';
    btnYes.style.backgroundColor = '#d92027';
    btnYes.style.color = '#fff';
    btnYes.style.border = 'none';
    btnYes.style.borderRadius = '5px';
    btnYes.style.cursor = 'pointer';

    const btnNo = document.createElement('button');
    btnNo.textContent = 'Não';
    btnNo.style.margin = '10px';
    btnNo.style.padding = '10px 20px';
    btnNo.style.backgroundColor = '#555';
    btnNo.style.color = '#fff';
    btnNo.style.border = 'none';
    btnNo.style.borderRadius = '5px';
    btnNo.style.cursor = 'pointer';

    const message = document.createElement('p');
    message.style.marginTop = '20px';
    message.style.fontWeight = 'bold';


    btnYes.onclick = () => {
        message.textContent = 'Eu DUVIDO voce me aguentar por mais um ano';
        btnYes.style.display = 'none';
        btnNo.style.display = 'none';
        // Adiciona imagem de surpresa
        const img = document.createElement('img');
        img.src = 'foto9.jpg'; // Troque para a imagem que quiser
        img.alt = 'Eu agora';
        img.style.marginTop = '15px';
        img.style.maxWidth = '100%';
        img.style.borderRadius = '10px';
        modalBox.appendChild(img);
    };

    btnNo.onclick = () => {
        message.textContent = 'fica com o jungkook ent >:(';
        btnYes.style.display = 'none';
        btnNo.style.display = 'none';
    };

    modalBox.appendChild(question);
    modalBox.appendChild(btnYes);
    modalBox.appendChild(btnNo);
    modalBox.appendChild(message);
    modalOverlay.appendChild(modalBox);
    document.body.appendChild(modalOverlay);

    // Remove modal when clicking outside the box
    modalOverlay.onclick = (e) => {
        if (e.target === modalOverlay) {
            document.body.removeChild(modalOverlay);
        }
    };
}

startGameBtn.addEventListener('click', startGame);
surpriseBtn.addEventListener('click', showSurprise);

// Tomates subindo no fundo
const heartsBg = document.querySelector('.hearts-bg');
function createTomate() {
    if (!heartsBg) return;
    const tomateImg = document.createElement('img');
    tomateImg.src = 'tomate.png';
    tomateImg.alt = 'Tomate';
    tomateImg.className = 'tomate-img heart-anim';
    const size = Math.random() * 30 + 20; // 20px a 50px
    tomateImg.style.left = `${Math.random() * 100}%`;
    tomateImg.style.width = `${size}px`;
    tomateImg.style.height = `${size}px`;
    tomateImg.style.animationDuration = `${Math.random() * 2 + 4}s`; // 4s a 6s
    tomateImg.style.position = 'absolute';
    tomateImg.style.pointerEvents = 'none';
    tomateImg.style.userSelect = 'none';
    tomateImg.style.animationName = 'floatUp, sway' + (Math.floor(Math.random() * 2) + 1);
    heartsBg.appendChild(tomateImg);
    setTimeout(() => {
        tomateImg.remove();
    }, 7000);
}

// Cria tomates continuamente
setInterval(createTomate, 600);

// Oscilação extra
const swayKeyframes = `
@keyframes sway1 {
    0% { transform: translateX(0) rotate(-10deg);}
    25% { transform: translateX(-10px) rotate(-5deg);}
    50% { transform: translateX(10px) rotate(5deg);}
    75% { transform: translateX(-10px) rotate(-5deg);}
    100% { transform: translateX(0) rotate(10deg);}
}
@keyframes sway2 {
    0% { transform: translateX(0) rotate(10deg);}
    20% { transform: translateX(12px) rotate(0deg);}
    50% { transform: translateX(-12px) rotate(-10deg);}
    80% { transform: translateX(12px) rotate(0deg);}
    100% { transform: translateX(0) rotate(-10deg);}
}
`;
const style = document.createElement('style');
style.innerHTML = swayKeyframes;
document.head.appendChild(style);

// Cria corações continuamente
setInterval(createHeart, 600);
