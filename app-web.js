const formCadastro = document.getElementById('formCadastro');

// Cria ou carrega a lista de jogadores já salvos no navegador
let listaJogadores = JSON.parse(localStorage.getItem('listaJogadores')) || [];

// Escuta o momento em que o usuário envia o formulário
formCadastro.addEventListener('submit', function(event) {
    // Evita que a página recarregue e limpe os dados antes da hora
    event.preventDefault();

    // Captura os valores digitados usando o ID de cada elemento
    const nome = document.getElementById('nomeUser').value.trim();
    const funcao = document.getElementById('funcaoUser').value.trim();
    const pontuacao = parseInt(document.getElementById('pointsUser').value);
    
    // Verifica qual rádio button de status está selecionado
    const statusAtivo = document.getElementById('statusAtivo').checked;
    const estaAtivo = statusAtivo ? 'sim' : 'não';

    // Validação básica de segurança
    if (pontuacao < 0 || Number.isNaN(pontuacao)) {
        alert('Por favor, insira uma pontuação válida e positiva.');
        return;
    }

    // Monta o objeto do novo jogador igualzinho ao do seu sistema de terminal
    const novoJogador = {
        nome: nome,
        funcao: funcao,
        pontuacao: pontuacao,
        estaAtivo: estaAtivo
    };

    // Adiciona o jogador na nossa lista
    listaJogadores.push(novoJogador);

    // Salva a lista atualizada no banco de dados do navegador (localStorage)
    localStorage.setItem('listaJogadores', JSON.stringify(listaJogadores));

    // Avisa o usuário e limpa os campos do formulário
    alert(`Jogador ${nome} cadastrado com sucesso!`);
    formCadastro.reset();
});