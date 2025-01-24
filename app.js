// Verifica si la API de vibración está disponible
const supportsVibration = "vibrate" in navigator;

// Vibración al hacer clic en botones
const vibrateButtons = document.querySelectorAll(".vibrate-button");
vibrateButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (supportsVibration) {
      navigator.vibrate(100); // Vibrar durante 100ms
    }
  });
});

// Selecciona el audio de bienvenida
const welcomeAudio = document.getElementById("welcome-audio");

// Mostrar el splash screen y reproducir el audio
document.querySelector(".splash-screen").style.display = "block";
welcomeAudio.play().catch((error) => {
  console.log("El usuario debe interactuar con la página primero:", error);
});

// Ocultar el splash después de 3 segundos y mostrar el contenido
setTimeout(() => {
  document.querySelector(".splash-screen").style.display = "none";
  document.querySelector(".content").style.display = "block";
}, 3000);
