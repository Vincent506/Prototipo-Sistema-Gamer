// Aguarda o navegador carregar o HTML completamente
document.addEventListener('DOMContentLoaded', function() {
    const corpoTabela = document.getElementById('tabelaJogadores');

    // Recupera a lista de jogadores do localStorage
    const listaJogadores = JSON.parse(localStorage.getItem('listaJogadores')) || [];

    // Se houver jogadores cadastrados, limpa a mensagem de "Nenhum jogador cadastrado"
    if (listaJogadores.length > 0) {
        corpoTabela.innerHTML = '';

        // Percorre cada jogador da lista e monta a linha (tr) correspondente
        listaJogadores.forEach(function(jogador) {
            const linha = document.createElement('tr');

            // Formata o status para começar com letra maiúscula (Sim -> Ativo / Não -> Inativo)
            const statusFormatado = jogador.estaAtivo === 'sim' ? 'Ativo' : 'Inativo';

            // Injeta as células com os dados do objeto do jogador
            linha.innerHTML = `
                <td>${jogador.nome}</td>
                <td>${jogador.funcao}</td>
                <td>${jogador.pontuacao}</td>
                <td>${statusFormatado}</td>
            `;

            // Adiciona a linha preenchida dentro do tbody da tabela
            corpoTabela.appendChild(linha);
        });
    }
});
