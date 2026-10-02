let prompt = require('prompt-sync')();

let jogador = {
    nome: "",
    funcao: "",
    pontuacao: 0,
    estaAtivo: "",
};

let listaJogadores =[];

function cadastrarJogador(){
    let variavelNome = prompt('Digite o nome do jogador: ');
    jogador.nome = variavelNome;
    let variavelFuncao = prompt('Digite a função do jogador: ');
    jogador.funcao = variavelFuncao;
    let variavelPontuacao = Number.parseInt(prompt('Digite a pontuação atual do jogador: '));
    jogador.pontuacao = variavelPontuacao;
    
    let continuation = true;
    while(continuation){
        let option = prompt('O jogador está ativo?(sim-não)');
        if(option === 'sim'|| option ==='SIM'){
            let variavelEstaAtivo = true;
            jogador.estaAtivo = option;
            continuation = false;
        }else if(option === 'não'|| option==='NÃO'){
            jogador.estaAtivo = option;
            continuation = false;
        }else{                 
            console.log('Digite sim ou não como resposta');
        }
    }
    listaJogadores.push(jogador);

    console.log("O jogador "+variavelNome+" foi registrado com sucesso");
}

function informJogador(obejto){
    console.log('__________Perfil do Jogador__________');
    console.log('Jogador: ',obejto.nome);
    console.log('Função: ',obejto.funcao);
    console.log('Pontuação: ',obejto.pontuacao);
    console.log('Está ativo? ',obejto.estaAtivo);
    console.log('______________________________________');
}



for (let index = 0; index < 4; index++) {
    cadastrarJogador();
}

percorrerCadastrados(listaJogadores);
