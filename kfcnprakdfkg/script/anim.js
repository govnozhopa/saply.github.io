document.addEventListener('DOMContentLoaded', function() {
  // Создаем плавающие руны
  const runesContainer = document.querySelector('.runes');
  const runeSymbols = ['ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ', 'ᚷ', 'ᚹ', 'ᚺ'];
  
  for (let i = 0; i < 15; i++) {
    const rune = document.createElement('div');
    rune.className = 'rune';
    rune.textContent = runeSymbols[Math.floor(Math.random() * runeSymbols.length)];
    rune.style.left = '${Math.random() * 100}vw'; // Исправлено здесь
    rune.style.animationDelay = '${Math.random() * 60'}s;
    rune.style.fontSize = '${20 + Math.random() * 30}px';
    runesContainer.appendChild(rune);
  }

  // Создаем мерцающие огни
  const lightsContainer = document.querySelector('.flicker-lights');
  
  for (let i = 0; i < 5; i++) {
    const light = document.createElement('div');
    light.className = 'flicker-light';
    light.style.left = ${Math.random() * 100}vw; // И здесь
    light.style.top = ${Math.random() * 100}vh; // И здесь
    light.style.background = radial-gradient(circle, 
      rgba(58, ${124 + Math.random() * 50}, ${165 + Math.random() * 50}, 0.3), 
      transparent 70%);
    light.style.animationDuration = ${3 + Math.random() * 7}s;
    lightsContainer.appendChild(light);
  }

  // Создаем тени существ
  const creaturesContainer = document.querySelector('.shadow-creatures');
  
  for (let i = 0; i < 3; i++) {
    const creature = document.createElement('div');
    creature.className = 'shadow-creature';
    creature.style.top = ${100 + Math.random() * 60}vh; // И здесь
    creature.style.animationDelay = ${Math.random() * 30}s;
    creature.style.width = ${200 + Math.random() * 200}px;
    creature.style.height = ${50 + Math.random() * 100}px;
    creaturesContainer.appendChild(creature);
  }
});