const prompt = require("prompt-sync")();

let time = [];
let listaJogadores = [];

function mostrarMenu(){
    console.log('__________Sistema de registro de Jogadores__________');
    console.log('1 - Cadastrar novo jogador;');
    console.log('2 - Mostrar equipe de jogadores;');
    console.log('3 - Procurar Jogador');
    console.log('4 - Remover Jogador');
    console.log('5 - Informações de todos os Jogadores');
    console.log('6 - Exibir a média dos jogadores');
    console.log('7 - Atualizar pontos');
    console.log('0 - Sair do sistema');
    console.log('____________________________________________________');
}
function cadastrarJogador() {
    let jogador = {
    nome: '',
    funcao: '',
    pontuacao: 0,
    estaAtivo: ''
    };
    
    let nomeUsuario = prompt('Digite o nome do jogador:');
    jogador.nome = nomeUsuario;
    time.push(nomeUsuario);
    let nomeFuncao = prompt('Digite a função do jogador');
    jogador.funcao = nomeFuncao;
    let playerPoints = Number.parseInt(prompt('Digite o número atual da pontuação do jogador'));
    if (Number.isInteger(playerPoints)) {
        if (playerPoints>0) {
            jogador.pontuacao = playerPoints;
        }else{
            console.log('Adicione apenas números inteiros e positivos');
            return;
        }
    }
    let continuation = true;
    while(continuation){
        let option = prompt('O jogador está ativo?(sim-não)');
        if(option === 'sim'|| option ==='SIM'){
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
    console.log("Jogador "+nomeUsuario+" foi cadastrado com sucesso!"); 
}
function mostrarTime(){
    if(time.length === 0){
        console.log('Nenhum jogador registrado no momento. Cadastre novos jogadores para ter acesso a lista');
        return;
    }
    
    console.log('_____________________________');
    console.log('Sua equipe atual:');
    console.log('Time: ',time);
    console.log('_____________________________')
}
function informJogador(objeto){
     console.log('__________O Jogador '+objeto.nome.toUpperCase()+'__________');
        console.log('Jogador: ',objeto.nome);
        console.log('Função: ',objeto.funcao);
        console.log('Pontuação: ',objeto.pontuacao);
        console.log('Está ativo? ',objeto.estaAtivo);
        console.log('____________________________________________________');
}
function detalhar(){
    if (listaJogadores.length === 0) {
        console.log('Nenhum jogador cadastrado ainda');
        return;
    }
    for(let i = 0; i<listaJogadores.length; i++){
        console.log('__________O Jogador '+listaJogadores[i].nome.toUpperCase()+'__________');
        console.log('Jogador: ',listaJogadores[i].nome);
        console.log('Função: ',listaJogadores[i].funcao);
        console.log('Pontuação: ',listaJogadores[i].pontuacao);
        console.log('Está ativo? ',listaJogadores[i].estaAtivo);
        console.log('____________________________________________________');
    }
}
function deletarJogador(){
    if (time.length === 0) {
        console.log('Nenhum Jogador cadastrado!');
        return;
        }

    mostrarTime();
    let nomeDeletado = prompt("Digite o nome a ser deletado: ");
    let index = time.indexOf(nomeDeletado);
    if (index == -1) {
        console.log('Jogador não encontrado');
        return;
    }
                
    time.splice(index,1);
    listaJogadores.splice(index,1);
    console.log('Jogador(a) '+ nomeDeletado+' foi removida do sistema');
}
function buscarJogador(){

    if(listaJogadores.length === 0){
        console.log('Não tem jogadores no registro ainda');
        return;
    }

    mostrarTime();
    let jogador = prompt('Digite o nome do jogador:');
    let encontrado = false;
    for(let i = 0; i< listaJogadores.length; i++){
        if (jogador === listaJogadores[i].nome) {
            encontrado = true;
            informJogador(listaJogadores[i]);
            break;
        }
    }
    if(!encontrado){
        console.log('Jogador fora dos registros');
    }
}
function mediaDaEquipe(){
    if (listaJogadores.length === 0) {
        console.log('Ainda não temos jogadores registrados');
        return;
    }
    let soma = 0;
    let contador = 0;
    for (let index = 0; index < listaJogadores.length; index++) {
        if (listaJogadores[index].estaAtivo === 'sim' || listaJogadores[index].estaAtivo === 'SIM') {
            soma = soma + listaJogadores[index].pontuacao;
            contador +=1;
        }
    }
    let media = soma/contador;
    mostrarTime();
    console.log('A média da pontuação dos jogadores ativos da equipe é ',media);
}
function atualizarPontos(){
    if (listaJogadores.length === 0) {
        console.clear();
        console.log('Adicione jogadores na plataforma para poder somar pontos;');
        return;
    }
    mostrarTime();
    let busca = prompt('Qual jogador deseja atualizar? ');
    let encontrado = false;
    for(let i = 0 ; i<listaJogadores.length; i++){
        if (busca === listaJogadores[i].nome) {
            let pontos = Number.parseInt(prompt('Quantos pontos ele ganhou hoje? '));
            listaJogadores[i].pontuacao = pontos+listaJogadores[i].pontuacao;
            encontrado = true;
            console.log('Pontos atualizados, o jogador '+busca+' agora esta com '+listaJogadores[i].pontuacao+' pontos');
            break;
        }
    }
    if (!encontrado) {
        console.log('Jogador não encontrado');
    }
}
let continuar = true;
while (continuar) {
    mostrarMenu();
    let opcao = parseInt(prompt('Digite aqui a sua opção: '));
    switch (opcao) {
        case 1:
            console.clear();
            cadastrarJogador();       
            break;
        case 2:
            console.clear();
            mostrarTime();
            break;
        case 3:
            console.clear();
            buscarJogador();
            break;
        case 4:
            console.clear();
            deletarJogador();
            break;
        case 5:
            console.clear();
            detalhar();
            break;
        case 6:
            console.clear();
            mediaDaEquipe();
            break;
        case 7:
            console.clear();
            atualizarPontos();
            break;
        case 0:
            continuar = false; 
            break;
        default:
            console.log('Digite uma opção válida');
            break;
    }   
    if (continuar === false) {
        console.clear();
        console.log('Até mais!!!');
    }
}