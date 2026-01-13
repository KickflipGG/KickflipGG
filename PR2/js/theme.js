// Функция для переключения темы
function toggleTheme() {
    const htmlElement = document.documentElement;
    const themeIcon = document.getElementById('themeIcon');
    
    // Проверяем текущую тему
    const currentTheme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
    
    // Переключаем тему
    if (currentTheme === 'light') {
        htmlElement.classList.add('dark');
        themeIcon.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    } else {
        htmlElement.classList.remove('dark');
        themeIcon.textContent = '☀️';
        localStorage.setItem('theme', 'light');
    }
}

// Функция для применения сохраненной темы
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    const themeIcon = document.getElementById('themeIcon');
    
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        if (themeIcon) {
            themeIcon.textContent = '🌙';
        }
    } else {
        document.documentElement.classList.remove('dark');
        if (themeIcon) {
            themeIcon.textContent = '☀️';
        }
    }
}

// Событие при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    
    if (themeToggle) {
        // Применяем сохраненную тему
        applySavedTheme();
        
        // Добавляем обработчик клика
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Проверяем аутентификацию для страниц, где это необходимо
    const protectedPages = ['profile.html', 'bucket.html'];
    const currentPage = window.location.pathname.split('/').pop();
    
    if (protectedPages.includes(currentPage) && !localStorage.getItem('isAuthenticated')) {
        window.location.href = './login.html';  // Исправлено: добавлен ./
    }
});