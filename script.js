// Səhifədəki interaktiv funksiyalar
document.addEventListener('DOMContentLoaded', () => {
    const welcomeBtn = document.getElementById('welcome-btn');

    if (welcomeBtn) {
        welcomeBtn.addEventListener('click', () => {
            // "Bizimlə Əlaqə" düyməsinə kliklədikdə rəvan şəkildə əlaqə bölməsinə düşür
            document.getElementById('elaqe').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }
});

