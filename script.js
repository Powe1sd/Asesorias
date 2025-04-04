document.addEventListener("DOMContentLoaded", () => {
  const programsListElement = document.getElementById("programsList");

  // Lista de programas con título, descripción y ruta del archivo
  const programs = [
    {
      title: "Chat GPT Local",
      description:
        "Aplicación de chat GPT local sin necesidad de internet, fácil de ejecutar. ¡Pruébala ahora!",
      path: "",
      precio: {
        valor: "20.000",
        moneda: "COP",
        etiqueta: "Precio de oferta",
      },
    },

    {
      title: "Unir pdfs",
      description:
        "Programa en el cual se unen varios pdfs, permitiendo así la creación de un solo archivo",
      path: "https://drive.google.com/drive/folders/1o722_C0s6ABtAwgljkmkMEZjnDyAe3k-?usp=sharing",
    },

    {
      title: "Programa para empezar aprender ingles ",
      description:
        "Este es un programa en el cual se puede empezar aprender inglés es una manera práctica, para incentivar el idioma inglés.",

      path: "https://drive.google.com/file/d/1ZaUL2DLziA-2LwFFjqrnQcGce7v4bYqz/view?usp=sharing",
    },
    {
      title: "Generador de código de barras",
      description:
        "Esta es una aplicación para generar código de barras en el cual se pueden generar, los códigos de barras ",
      path: "https://drive.google.com/drive/folders/1zAlAHp_rkQ-J83lZvbXzsIGHiJ27I45n?usp=drive_link",
    },

    {
      title: "Programa de gestor de documentos",
      description:
        "Es un programa para guardar los documentos de manera segura ",
      path: "https://drive.google.com/drive/folders/1fzK7bQzUySHIiGzF4J8hHt4ON0inbbf1?usp=drive_link",
    },

    {
      title: "Sistema de grabación de pantalla",
      description:
        "Es una aplicación donde se puede grabar la pantalla sin marca de agua y manera gratuita.",
      path: "https://drive.google.com/drive/folders/1SZGnyDCroXvL24_LBNGMFndohKH45NjG?usp=sharing",
    },
    {
      title: "Sistema de grabación de pantalla Con cara",
      description:
        "Es una aplicación donde se puede grabar la pantalla y también el rostro de la cámara del pc.",
      path: "https://drive.google.com/drive/folders/1lub7UCdg_DHnRV_xePHzuHG7yzzk7-dV?usp=sharing",
    },

    {
      title: "Convertidor de imágenes jpg a .ico",
      description:
        "Es un programa para convertir imágenes jpg png a .ico permitiendo la conversión de este formato. ",
      path: "https://drive.google.com/drive/folders/1b3qogp7blT9IR3-_c3HdmFv3Navi_0-Y?usp=sharing",
    },

    {
      title: "Eliminar fondo de una imagen",
      description: "Programa para eliminar fondo de una imagen",
      path: "https://drive.google.com/drive/folders/1tpKbud-uGRCZpJEUkzTN9Z7A0jUs5kEu?usp=sharing",
    },

    {
      title: "Generador de pdf a Word",
      description: "Convertir los archivos de pdf a word",
      path: "https://drive.google.com/drive/folders/1ZoBNSyA_jasvlLmDEKVfpqgKuobdZX7f?usp=sharing",
    },

    {
      title: "Otra",
      description: "Aplicación en proceso de desarrollo",
      path: "",
    },

    {
      title: "Aplicación",
      description: "Aplicación en proceso de desarrollo ",
      path: "",
    },

    {
      title: "Aplicación",
      description: "Aplicación en proceso de desarrollo ",
      path: "",
    },

    {
      title: "Aplicación",
      description: "Aplicación en proceso de desarrollo",
      path: "",
    },

    {
      title: "Aplicación",
      description: "Aplicación en proceso de desarrollo ",
      path: "",
    },
  ];

  // Generar elementos de la interfaz para cada programa
  programs.forEach((program) => {
    const programItem = document.createElement("div");
    programItem.classList.add("program-item");

    const title = document.createElement("h2");
    title.classList.add("program-title");
    title.textContent = program.title;

    const description = document.createElement("p");
    description.classList.add("program-description");
    description.textContent = program.description;

    // Agregar precio si está presente
    if (program.precio) {
      const precioDiv = document.createElement("div");
      precioDiv.classList.add("program-price");
      precioDiv.textContent = `${program.precio.etiqueta}: ${program.precio.valor} ${program.precio.moneda}`;
      programItem.appendChild(precioDiv);
    }

    const downloadLink = document.createElement("a");
    downloadLink.classList.add("download-link");
    downloadLink.href = program.path;
    downloadLink.download = program.path.split("/").pop(); // Nombre del archivo
    downloadLink.textContent = "Descargar";

    programItem.appendChild(title);
    programItem.appendChild(description);
    programItem.appendChild(downloadLink);

    programsListElement.appendChild(programItem);
  });
});
