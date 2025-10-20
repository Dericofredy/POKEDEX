// Espera o DOM carregar para evitar erro de elementos nulos
window.addEventListener('DOMContentLoaded', () => {
  // Elementos HTML
  const imgFechada = document.getElementById('pokedex-fechada');
  const imgAberta = document.getElementById('pokedex-aberta');
  const tela = document.getElementById('tela-pokedex');
  const btnIniciar = document.getElementById('btn-iniciar');
  const botaoAbrir = document.getElementById('botao-abrir');

  // 🔘 Evento ao clicar no botão amarelo da pokédex
  botaoAbrir.addEventListener('click', () => {
    // Esconde a pokédex fechada e o botão amarelo
    imgFechada.classList.add('hidden');
    botaoAbrir.classList.add('hidden');

    // Mostra a pokédex aberta e a tela de boas-vindas
    imgAberta.classList.remove('hidden');
    tela.classList.remove('hidden');
  });

  // 🚀 Evento ao clicar em "Iniciar Pokédex"
  btnIniciar.addEventListener('click', () => {
    // Redireciona para a próxima tela (pokedex.html)
    window.location.href = 'pokedex.html';
  });
});
