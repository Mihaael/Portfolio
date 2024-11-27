const body = document.body;
const toggleButton = document.getElementById('toggle-theme');

if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    toggleButton.textContent = 'Modo Claro';
} else {
    toggleButton.textContent = 'Modo Escuro';
}

const toggleDarkMode = () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
        toggleButton.textContent = 'Modo Claro';
    } else {
        localStorage.setItem('dark-mode', 'disabled');
        toggleButton.textContent = 'Modo Escuro';
    }
};

toggleButton.addEventListener('click', toggleDarkMode);