const botoes = document.querySelectorAll(".ver-mais");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTexto = document.getElementById("modal-texto");
const fechar = document.querySelector(".fechar");

// abrir modal
botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    
    const img = botao.getAttribute("data-img");
    const texto = botao.getAttribute("data-texto");

    modal.style.display = "flex";
    modalImg.src = img;
    modalTexto.textContent = texto;
  });
});

// fechar modal
fechar.addEventListener("click", () => {
  modal.style.display = "none";
});

// fechar clicando fora
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
