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
      title: "Programa 2",
      description: "Otro programa interesante con funcionalidades avanzadas.",
      path: "archivos/programa2.exe",
    },
    {
      title: "Programa 3",
      description:
        "Un tercer programa para completar tu colección de herramientas.",
      path: "archivos/programa3.exe",
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
