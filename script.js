const images = [
    "../../img/assets/banner-smart.svg",
    "../../img/assets/banner-pulseira.svg",
    "../../img/assets/banner-fone.svg"
  ];
  
  let index = 0;
  const main = document.querySelector("main");
  
  function trocarImagem() {
    // Faz o fade-out
    main.style.opacity = 0.2;
  
    setTimeout(() => {
      // Troca a imagem no meio da transição
      main.style.backgroundImage = `url('${images[index]}')`;
      // Faz o fade-in
      main.style.opacity = 1;
  
      // Atualiza o índice
      index = (index + 1) % images.length;
    }, 1000); // mesmo tempo que o transition
  }
  
  // Inicializa
  main.style.backgroundImage = `url('${images[index]}')`;
  index = (index + 1) % images.length;
  setInterval(trocarImagem, 4000);