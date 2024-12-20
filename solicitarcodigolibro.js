function solicitarCodigo6(event) {
  event.preventDefault(); // Evita que el enlace se abra automáticamente

  // Muestra el cuadro de diálogo SweetAlert
  swal({
    text: "Introduce el código:",
    content: "input",
    buttons: ["Cancelar", "Aceptar"], // Array de botones con "Cancelar" y "Aceptar"
    closeOnClickOutside: false, // Evita que se cierre al hacer clic fuera del cuadro de diálogo
  }).then((value) => {
    if (value === null) {
      // Si se hace clic en "Cancelar"
      swal("Operación cancelada", {
        icon: "warning",
      });
    } else if (value === "8020w") {
      // Si se introduce el código correcto
      swal("¡Código correcto!", {
        icon: "success",
      }).then(() => {
        // Redirecciona al enlace del libro en una nueva pestaña
        window.open(
          "https://tempssll.github.io/El-enigma-de-luz-7-13/",
          "_blank"
        );
      });
    } else {
      // Si se introduce un código incorrecto
      swal("Código incorrecto. Intenta de nuevo.", {
        icon: "error",
      });
    }
  });
}
