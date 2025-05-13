document.querySelectorAll(".vibrate-button").forEach((button) => {
  button.addEventListener("click", function () {
    button.classList.add("vibrate");

    // Quitar la clase después de la animación
    setTimeout(() => {
      button.classList.remove("vibrate");
    }, 300); // Duración de la animación en milisegundos
  });
});
