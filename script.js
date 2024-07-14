function openEnvelope() {
    const flap = document.querySelector('.flap');
    const letter = document.querySelector('.letter');
    const seal = document.getElementById('seal');
    const celebrateButton = document.getElementById('celebrateButton');
    
    seal.style.opacity = '0';
    setTimeout(() => {
        seal.style.display = 'none';
        flap.style.transform = 'rotateX(-180deg)';
        setTimeout(() => {
            letter.style.opacity = '1';
            celebrateButton.style.display = 'block';
        }, 500);
    }, 300);
}

function startCelebration() {
    const emojiContainer = document.getElementById('emojiContainer');
    const emojis = ["💞", "♥", "💓", "💕", "💑", "💖", "💗", "💘"];

    setInterval(() => {
        const emoji = document.createElement('div');
        emoji.classList.add('emoji');
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.top = Math.random() * 100 + 'vh'; // Añadido para posicionar emojis en cualquier lugar de la página
        emoji.style.animationDuration = Math.random() * 3 + 2 + 's';
        emojiContainer.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 5000);
    }, 300);
}
