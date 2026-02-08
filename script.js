const noBtn = document.getElementById('no-btn');
const welcomeSection = document.getElementById('welcome');
const mainContent = document.getElementById('main-content');

// Logika tombol "No" menghindar
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Pindah ke konten utama
function nextSection() {
    welcomeSection.classList.add('animate__animated', 'animate__fadeOut');
    setTimeout(() => {
        welcomeSection.style.display = 'none';
        mainContent.classList.remove('hidden');
        mainContent.classList.add('animate__animated', 'animate__fadeIn');
        window.scrollTo(0, 0);
    }, 500);
}

