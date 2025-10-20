// Aguarda o carregamento da página
document.addEventListener('DOMContentLoaded', () => {
  // Nome do Pokémon a ser buscado inicialmente (pode ser alterado dinamicamente)
  const nomePokemon = 'pikachu';

  // Acessa a PokéAPI no endpoint de um Pokémon específico
  const url = `https://pokeapi.co/api/v2/pokemon/${nomePokemon.toLowerCase()}`;

  // Busca os dados do Pokémon
  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error('Pokémon não encontrado');
      return response.json();
    })
    .then(data => {
      // Extração de dados úteis
      const nome = data.name;
      const numero = data.id;
      const imagem = data.sprites.other['official-artwork'].front_default;
      const tipos = data.types.map(t => t.type.name).join(', ');

      // Cria o card do Pokémon (usando template string)
      const cardHTML = `
        <div class="pokemon-card">
          <img src="${imagem}" alt="${nome}" />
          <h2>#${numero} - ${nome.charAt(0).toUpperCase() + nome.slice(1)}</h2>
          <p><strong>Tipo:</strong> ${tipos}</p>
        </div>
      `;

      // Insere o card no container da lista
      document.getElementById('pokemon-list').innerHTML = cardHTML;
    })
    .catch(error => {
      // Em caso de erro, mostra uma mensagem na tela
      document.getElementById('pokemon-list').innerHTML = `<p class="erro">${error.message}</p>`;
    });
});
