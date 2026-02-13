const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const message = document.getElementById('message');
const questionContainer = document.getElementById('question-container');
const successContainer = document.getElementById('success-container');

const noMessages = [
    '¿Estás segura? 🥺',
    'Piénsalo mejor... 💭',
    '¡Vamos, di que sí! 🌷',
    'No seas así... 😢',
    '¡Por favor! 🙏',
    'Una oportunidad más... 💕'
];

let noClickCount = 0;

// Comportamiento del botón "No"
noBtn.addEventListener('click', () => {
    noClickCount++;
    
    if (noClickCount < noMessages.length) {
        message.textContent = noMessages[noClickCount - 1];
        
        // El botón "No" se hace más pequeño
        const newSize = Math.max(0.5, 1 - (noClickCount * 0.15));
        noBtn.style.transform = `scale(${newSize})`;
        
        // El botón "Yes" se hace más grande
        const yesSize = 1 + (noClickCount * 0.15);
        yesBtn.style.transform = `scale(${yesSize})`;
    } else {
        // Después de muchos clics, el botón "No" desaparece
        noBtn.style.display = 'none';
        message.textContent = '¡Ya solo queda una opción! 😊💖';
    }
});

// Comportamiento del botón "Sí"
yesBtn.addEventListener('click', () => {
    questionContainer.classList.add('hidden');
    successContainer.classList.remove('hidden');
    
    // Crear confeti de corazones
    createHeartConfetti();
});

function createHeartConfetti() {
    const colors = ['❤️', '💕', '💖', '💗', '💝', '💘'];
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = colors[Math.floor(Math.random() * colors.length)];
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = '-50px';
            heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
            heart.style.zIndex = '1000';
            heart.style.animation = `fall ${Math.random() * 3 + 2}s linear`;
            
            document.body.appendChild(heart);
            
            setTimeout(() => heart.remove(), 5000);
        }, i * 100);
    }
}

// Animación de caída para confeti
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);
