// Referências aos elementos HTML
const imgFechada = document.getElementById('pokedex-fechada');
const imgAberta = document.getElementById('pokedex-aberta');
const tela = document.getElementById('tela-pokedex');
const btnIniciar = document.getElementById('btn-iniciar');

// Ao clicar na imagem da Pokédex fechada, mostrar aberta
imgFechada.addEventListener('click', () => {
  imgFechada.classList.add('hidden');      // Esconde a pokédex fechada
  imgAberta.classList.remove('hidden');    // Mostra a pokédex aberta
  tela.classList.remove('hidden');         // Mostra a tela com botão
});

// Ao clicar no botão "Iniciar Pokédex", vai para pokedex.html
btnIniciar.addEventListener('click', () => {
  window.location.href = 'pokedex.html';
});
