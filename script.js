// HTML-dəki elementləri seçirik
const clickBtn = document.getElementById('click-me-btn');
const counterValue = document.getElementById('counter-value');
const themeToggleBtn = document.getElementById('theme-toggle');

let count = 0;

// 1. Sayğaç funksiyası
clickBtn.addEventListener('click', () => {
    count++; // Hər klikdə sayı 1 artırır
    counterValue.textContent = count; // Yeni sayı ekrana yazdırır
});

// 2. Gecə/Gündüz rejimi funksiyası
themeToggleBtn.addEventListener('click', () => {
    // Səhifənin body hissəsinə "dark-mode" sinfini əlavə edir və ya silir
    document.body.classList.toggle('dark-mode');
    
    // Düymənin daxilindəki mətni rejimlərə görə dəyişirik
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = "☀️ Gündüz Rejimi";
    } else {
        themeToggleBtn.textContent = "🌙 Gecə Rejimi";
    }
});
