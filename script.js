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

    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.position = 'absolute';
        heart.style.top = `${Math.random() * (gameArea.clientHeight - 30)}px`;
        heart.style.left = `${Math.random() * (gameArea.clientWidth - 30)}px`;
        heart.style.width = '30px';
        heart.style.height = '30px';
        heart.style.backgroundColor = '#d92027';
        heart.style.borderRadius = '50%';
        heart.style.cursor = 'pointer';
        heart.addEventListener('click', () => {
            if (!gameActive) return;
            score++;
            heart.remove();
        });
        gameArea.appendChild(heart);
    }

    setTimeout(() => {
        gameActive = false;
        gameArea.innerHTML = '';
        gameScore.textContent = `Você clicou em ${score} corações!`;
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
