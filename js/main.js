document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('#navconfg .item');
    
    items.forEach(item => {
      item.addEventListener('click', (e) => {
        // Prevenir a propagação do evento para evitar fechamento imediato
        e.stopPropagation();
        
        // Fechar todas as outras sublistas
        items.forEach(i => {
          if (i !== item) {
            i.classList.remove('active');
          }
        });
        
        // Alternar a visibilidade do item clicado
        item.classList.toggle('active');
      });
    });
  
    // Fechar todas as sublistas ao clicar fora
    document.addEventListener('click', () => {
      items.forEach(item => {
        item.classList.remove('active');
      });
    });
  });