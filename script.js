const images = [
    "../../img/assets/banner-smart.svg",
    "../../img/assets/banner-pulseira.svg",
    "../../img/assets/banner-fone.svg"
  ];

  function buttonWhatsapp() {
    const numero = "5512992592238"
    const mensagem = "Olá! Tenho interesse nos seus produtos. 😊";

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`
    window.open(url, `_blank`)
  }
  
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




  const container = document.getElementById('scroll-container');

  function scrollDireita(id) {
    document.getElementById(id).scrollBy({ left: 220, behavior: 'smooth' });
  }

  function scrollEsquerda(id) {
    document.getElementById(id).scrollBy({ left: -220, behavior: 'smooth' });
  }





const carrinho = [];

  document.querySelectorAll('.produto button').forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const produto = btn.closest('.produto');
      const imagem = produto.querySelector('img').src;
      const descricao = produto.querySelector('h3').innerText;
      const preco = produto.querySelector('p').innerText;
      const corSelecionada = produto.querySelector('input[type="radio"]:checked')?.closest('label').classList[1];

      if (!corSelecionada) {
        alert("Selecione uma cor!");
        return;
      }

      carrinho.push({ imagem, descricao, cor: corSelecionada, preco });
      alert('Produto adicionado ao carrinho!');
      localStorage.setItem('carrinho', JSON.stringify(carrinho));
    });
  });

  document.querySelector('.carrinho').addEventListener('click', () => {
    window.open('carrinho.html', '_blank');
  });


  // Garante que cada grupo de radio tenha um "name" único por produto
  document.querySelectorAll(".produto").forEach((produto, index) => {
    const radios = produto.querySelectorAll("input[type='radio']");
    radios.forEach((radio) => {
      radio.name = `grupo${index}`;
    });
  });


  const openMenuBtn = document.getElementById("openMenu");
  const closeMenuBtn = document.getElementById("closeMenu");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuLinks = document.getElementsByClassName("unidadeLink");
  
  // Abre o menu
  openMenuBtn.addEventListener("click", () => {

    if (closeMenuBtn.style.display === "none") {
      closeMenuBtn.style.display = "block"
    }
    mobileMenu.style.display = "flex";
  });

  closeMenuBtn.addEventListener("click", () =>{
    if (closeMenuBtn.style.display === "block") {
      closeMenuBtn.style.display = "none"
    }

    mobileMenu.style.display = "none"
  })

  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener("click", () => {
      mobileMenu.style.display = "none";
    });
  }
  
  