const imgFechada = document.getElementById('pokedex-fechada');
const imgAberta = document.getElementById('pokedex-aberta');
const tela = document.getElementById('tela-pokedex');
const btnIniciar = document.getElementById('btn-iniciar');

// Ao clicar na Pokédex fechada → abrir
imgFechada.addEventListener('click', () => {
  imgFechada.classList.add('hidden');
  imgAberta.classList.remove('hidden');
  tela.classList.remove('hidden');
});

// Ao clicar no botão iniciar → abrir pokedex.html
btnIniciar.addEventListener('click', () => {
  window.location.href = 'pokedex.html';
});
