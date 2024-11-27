const toggleButton = document.createElement('button');
toggleButton.textContent = 'Alternar Modo Escuro';
toggleButton.className = 'toggle-dark-mode';
document.body.prepend(toggleButton);

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});