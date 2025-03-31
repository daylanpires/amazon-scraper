document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('search-form');
    const input = document.getElementById('keyword');
    const resultsContainer = document.getElementById('results');

    // Manipula o envio do formulário para buscar produtos
    form.addEventListener('submit', async (event) => {
        event.preventDefault();  // Impede o comportamento padrão de envio do formulário
        const keyword = input.value.trim(); // Pega o valor do campo de input
        if (!keyword) return; // Se não houver palavra-chave, não faz nada

        resultsContainer.innerHTML = 'Buscando...';  // Mensagem enquanto busca

        try {
            // Faz a chamada ao backend para buscar os produtos
            const response = await fetch(`/api/scrape?keyword=${encodeURIComponent(keyword)}`);
            const data = await response.json();

            resultsContainer.innerHTML = '';  // Limpa a área de resultados

            if (data.products && data.products.length > 0) {
                // Se houver produtos, exibe-os
                data.products.forEach(product => {
                    const productElement = document.createElement('div');
                    productElement.innerHTML = `
                        <h3>${product.title}</h3>
                        <p>⭐ ${product.rating} | ${product.reviews} avaliações</p>
                        <img src="${product.image}" alt="Imagem do produto">
                    `;
                    resultsContainer.appendChild(productElement);
                });
            } else {
                // Caso não haja produtos
                resultsContainer.innerHTML = 'Nenhum produto encontrado.';
            }
        } catch (error) {
            resultsContainer.innerHTML = 'Erro ao buscar os produtos.';  // Exibe erro se houver
        }
    });
});
