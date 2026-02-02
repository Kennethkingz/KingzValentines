const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const card = document.querySelector('.card');
const RUN_DISTANCE = 160;

noBtn.addEventListener('mousemove', (e) => {
  const rect = noBtn.getBoundingRect();
  const centerX = rect.left + noBtn.width / 2;
  const centerY = rect.top + noBtn.height / 2;
  const distance = Math.sqrt((e.clientX - centerX) ** 2 + (e.clientY - centerY) ** 2);
  if (distance < RUN_DISTANCE) {
    relocateNoBtn();
  }
});

noBtn.addEventListener('pointerenter', relocateNoBtn);
noBtn.addEventListener('pointerdown', relocateNoBtn);

function relocateNoBtn() {
  const x = Math.random() * (card.offsetWidth - noBtn.offsetWidth);
  const y = Math.random() * (card.offsetHeight - noBtn.offsetHeight);
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

yesBtn.addEventListener('click', () => {
  document.querySelector('h1').innerText = 'Yay! 💖';
  noBtn.disabled = true;
  noBtn.style.opacity = 0.5;
  burstHearts();
});

function burstHearts() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerText = '❤️';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.top = `${Math.random() * 100}%`;
    heart.style.setProperty('--dx', `${Math.random() * 200 - 100}px`);
    heart.style.setProperty('--dy', `${Math.random() * -200}px`);
    heart.style.setProperty('--s', Math.random() * 0.5 + 0.5);
    card.appendChild(heart);
    heart.addEventListener('animationend', () => heart.remove());
  }
}
