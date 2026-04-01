document.addEventListener("DOMContentLoaded", () => {

    const splash = document.getElementById("splash");
    const content = document.getElementById("content");
    const sound = document.getElementById("bootSound");

    // ⏳ DURACIÓN DEL SPLASH
    const splashDuration = 2500;

    // 🔊 INTENTO DE SONIDO AUTOMÁTICO
    function playSound() {
        sound.volume = 0.5;

        sound.play().catch(() => {
            // fallback: primer movimiento o click
            document.addEventListener("click", playSoundOnce, { once: true });
            document.addEventListener("mousemove", playSoundOnce, { once: true });
        });
    }

    function playSoundOnce() {
        sound.currentTime = 0;
        sound.play();
    }

    // intentar sonido apenas carga
    playSound();

    // ⏳ CONTROL DEL SPLASH
    setTimeout(() => {
        splash.style.opacity = "0";
        splash.style.transition = "0.8s";

        setTimeout(() => {
            splash.style.display = "none";
            content.style.display = "block";
        }, 800);

    }, splashDuration);

});