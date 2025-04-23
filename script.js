const images = [
    "../../img/assets/banner-smart.svg",
    "../../img/assets/banner-pulseira.svg",
    "../../img/assets/banner-fone.svg"
  ];
  
  let index = 0;
  const main = document.querySelector("main");
  
  function trocarImagem() {
    main.style.backgroundImage = `url('${images[index]}')`;
    index = (index + 1) % images.length;
  }
  
  
  trocarImagem();
  setInterval(trocarImagem, 3000);