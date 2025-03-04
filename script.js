document.addEventListener("DOMContentLoaded", () => {
  const programsListElement = document.getElementById("programsList");

  // Lista de programas con título, descripción y ruta del archivo
  const programs = [
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
      title: "Aplicación",
      description: "Aplicación en proceso de desarrollo  ",
      path: "",
    },

    {
      title: "Aplicación",
      description: "Aplicación en proceso de desarrollo  ",
      path: "",
    },

    {
      title: "Aplicación",
      description: "Aplicación en proceso de desarrollo ",
      path: "",
    },

    {
      title: "Aplicación",
      description: "Aplicación en proceso de desarrollo  ",
      path: "",
    },

    {
      title: "Aplicación",
      description: "Aplicación en proceso de desarrollo  ",
      path: "",
    },

    {
      title: "Otra",
      description: "Aplicación en proceso de desarrollo  ",
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
      description: "Aplicación en proceso de desarrollo  ",
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
