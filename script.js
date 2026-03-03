// Existing + new
function toggleMenu() {
    document.querySelector('nav ul').classList.toggle('active');
}

// Liquid particles (flow like fluid)
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
for (let i = 0; i < 150; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        radius: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2
    });
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.x += p.vx + Math.sin(Date.now() * 0.001 + p.x) * 0.5;  // Liquid wave
        p.y += p.vy + Math.cos(Date.now() * 0.001 + p.y) * 0.5;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#fff';
        ctx.fill();
        ctx.restore();
    });
    requestAnimationFrame(animateParticles);
}
animateParticles();

// 3D Tilt (VanillaTilt CDN loaded)
VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.5
});

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = innerHeight;
});
