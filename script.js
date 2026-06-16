// Efecto de confirmación
function confirmar() {
    const btn = document.querySelector('.confirm-btn');
    btn.style.animation = 'none';
    btn.offsetHeight; // Trigger reflow
    btn.style.animation = 'pulse-btn 0.5s ease-in-out';
    
    // Crear confetti
    crearConfetti();
    
    // Mostrar mensaje
    setTimeout(() => {
        alert('❤️ ¡Te amo! Nos vemos el 18/06 a las 19:15 ❤️');
    }, 300);
}

// Crear efecto confetti
function crearConfetti() {
    const confettiPieces = 50;
    
    for (let i = 0; i < confettiPieces; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = i % 2 === 0 ? '#ff1493' : '#ff69b4';
        confetti.style.borderRadius = '50%';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        
        document.body.appendChild(confetti);
        
        const randomX = (Math.random() - 0.5) * 200;
        const randomDuration = 2 + Math.random() * 1;
        
        confetti.animate([
            { 
                transform: 'translateY(0) translateX(0) rotate(0deg)',
                opacity: 1
            },
            {
                transform: `translateY(${window.innerHeight + 20}px) translateX(${randomX}px) rotate(360deg)`,
                opacity: 0
            }
        ], {
            duration: randomDuration * 1000,
            easing: 'ease-in'
        });
        
        setTimeout(() => confetti.remove(), randomDuration * 1000);
    }
}

// Agregar más interactividad
document.addEventListener('DOMContentLoaded', function() {
    // Agregar efecto al pasar el mouse sobre el título
    const title = document.querySelector('.title');
    if (title) {
        title.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 20px rgba(255, 20, 147, 0.5)';
        });
        
        title.addEventListener('mouseleave', function() {
            this.style.textShadow = 'none';
        });
    }
    
    // Agregar efecto al pasar el mouse sobre el número
    const number = document.querySelector('.number');
    if (number) {
        number.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        number.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
});

// Efecto de parpadeo en los corazones al hacer scroll
window.addEventListener('scroll', function() {
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach(heart => {
        heart.style.opacity = (1 - window.scrollY / 1000).toString();
    });
});
