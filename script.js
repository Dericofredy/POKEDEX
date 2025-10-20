// Aguarda o carregamento completo do DOM antes de manipular elementos
window.addEventListener('DOMContentLoaded', () => {
  // 🎯 Elementos principais do DOM
  const imgFechada = document.getElementById('pokedex-fechada'); // imagem fechada
  const imgAberta = document.getElementById('pokedex-aberta');   // imagem aberta
  const tela = document.getElementById('tela-pokedex');          // tela sobreposta com botão
  const btnIniciar = document.getElementById('btn-iniciar');     // botão iniciar pokédex

  // ✅ Quando clica na pokédex FECHADA → abre
  imgFechada.addEventListener('click', () => {
    imgFechada.classList.add('hidden');        // esconde imagem fechada
    imgAberta.classList.remove('hidden');      // mostra imagem aberta
    tela.classList.remove('hidden');           // mostra mensagem e botão
  });

  // ✅ Quando clica na pokédex ABERTA → fecha
  imgAberta.addEventListener('click', () => {
    imgAberta.classList.add('hidden');         // esconde imagem aberta
    tela.classList.add('hidden');              // esconde mensagem e botão
    imgFechada.classList.remove('hidden');     // mostra imagem fechada novamente
  });

  // 🚀 Quando clica no botão "Iniciar Pokédex" → vai para pokedex.html
  btnIniciar.addEventListener('click', () => {
    window.location.href = 'pokedex.html';
  });
});
