window.addEventListener("load", () => {
      setTimeout(() => {
        document.getElementById("splash").style.opacity = "0";
        setTimeout(() => {
          document.getElementById("splash").style.display = "none";
          document.getElementById("content").style.display = "block";
        }, 200);
      }, 1000);
    });

    // Scroll suave
    document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
      });
    });



    document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash');
    const content = document.getElementById('content');

    // Tiempo que dura la pantalla de carga (en milisegundos)
    const splashDuration = 3000; 

    setTimeout(() => {
        // Oculta el splash con una transición de opacidad
        splashScreen.style.opacity = '0'; 

        setTimeout(() => {
            // Una vez que la transición termina, oculta el splash completamente
            splashScreen.style.display = 'none';
            // Muestra el contenido principal
            content.style.display = 'block'; 
        }, 600); // Coincide con la duración de la transición en el CSS
        
    }, splashDuration);
});
