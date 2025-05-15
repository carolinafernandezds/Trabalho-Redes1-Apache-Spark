document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll("a[href^='#']:not([href='#'])"); // todos os links internos
  const sections = document.querySelectorAll("article section");

  // Oculta todas as seções, exceto a primeira
  sections.forEach((section, index) => {
    if (index !== 0) {
      section.style.display = "none";
    }
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();

      // Remove a classe 'current' de todos os itens
      menuItems.forEach((item) => {
        item.classList.remove("current");
      });

      // Adiciona a classe 'current' ao item clicado
      event.currentTarget.classList.add("current");

      // Pega o ID de destino do link
      const targetId = event.currentTarget.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // Esconde todas as seções, exceto a desejada
        sections.forEach((section) => {
          section.style.display = section.id === targetId ? "block" : "none";
        });

        // Atualiza a URL sem recarregar
        history.pushState(null, "", `#${targetId}`);
      }
    });
  });
});
  
  // document.addEventListener("DOMContentLoaded", function () {
  //     const menuItems = document.querySelectorAll("#simple-menu a");
  
  //     menuItems.forEach((item) => {
  //       item.addEventListener("click", function (event) {
  //         // Remove current class from all items
  //         menuItems.forEach((item) => {
  //           item.classList.remove("current");
  //         });
  
  //         // Add current class to the clicked item
  //         event.currentTarget.classList.add("current");
  //       });
  //     });
  //   });
  