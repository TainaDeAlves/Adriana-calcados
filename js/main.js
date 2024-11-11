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


// carrocel index
document.addEventListener('DOMContentLoaded', function() {
  const items = document.querySelectorAll('.carousel-item');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let currentIndex = 0;
  const totalItems = items.length;

  // Função para mostrar a imagem na posição correta
  function showImage(index) {
      items.forEach(item => item.classList.remove('active')); // Remove a classe 'active' de todas as imagens
      items[index].classList.add('active'); // Adiciona a classe 'active' à imagem no índice desejado
  }

  // Função para ir para a próxima imagem
  function nextImage() {
      currentIndex = (currentIndex + 1) % totalItems; // Vai para a próxima imagem (com comportamento circular)
      showImage(currentIndex);
  }

  // Função para ir para a imagem anterior
  function prevImage() {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Vai para a imagem anterior (com comportamento circular)
      showImage(currentIndex);
  }

  // Inicializa o carrossel com a primeira imagem
  showImage(currentIndex);

  // Adiciona os eventos de clique nos botões
  nextBtn.addEventListener('click', nextImage);
  prevBtn.addEventListener('click', prevImage);

  // Alternância automática (opcional, se você ainda quiser isso)
  setInterval(nextImage, 4500); // Troca a imagem automaticamente a cada 3 segundos
});


//





  







