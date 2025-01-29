document.addEventListener('DOMContentLoaded', function () {
  const inputs = document.querySelectorAll('input[type="file"]');
  inputs.forEach(function (input) {
    const imagemId = input.dataset.imagemid;
    const imagem = document.getElementById(imagemId);
    input.addEventListener('change', function () {
      selecionarImagem(this, imagem);
    });
  });
});

function selecionarImagem(input, imagem) {
  if (input.files && input.files.length > 0) {
    const arquivo = input.files[0];
    const leitor = new FileReader();
    leitor.onload = function (e) {
      imagem.src = e.target.result;
    };
    leitor.readAsDataURL(arquivo);
  } else {
    console.error('Nenhum arquivo selecionado.');
  }
}


function faq() {
  var texto = document.getElementById('textchamado');  // Obtém o parágrafo com o id 'textchamado'
  var icone = document.getElementById('icone');        // Obtém o ícone da seta

  // Verifica se o texto está visível
  if (texto.style.display === "block") {
    texto.style.display = "none";  // Recolhe o texto
    icone.classList.remove('fa-chevron-down');  // Remove a seta para baixo
    icone.classList.add('fa-chevron-right');    // Adiciona a seta para a direita
  } else {
    texto.style.display = "block";  // Exibe o texto
    icone.classList.remove('fa-chevron-right'); // Remove a seta para a direita
    icone.classList.add('fa-chevron-down');     // Adiciona a seta para baixo
  }
}








  










