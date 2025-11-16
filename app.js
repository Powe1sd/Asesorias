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
