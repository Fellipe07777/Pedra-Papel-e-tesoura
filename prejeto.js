let jogadorEscolha = 0;
let jogadorPontos = 0;
let coputadorEscolha = 0;
let computadorPontos = 0;
let ganhador = -1;

function jogar(escolha){
    jogadorEscolha = escolha;
    computadorEscolha = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    /* PEDRA = 1 
    PAPEL = 2 
    TESOURA = 3 */

    if ( jogadorEscolha == 1 && computadorEscolha == 1){
        ganhador = 0;
    //PEDRA E PEDRA = EMPATE
    }else if (jogadorEscolha == 1 && computadorEscolha == 2){
        ganhador = 2;
    //PEDRA E PAPEL = PAPEL
    }else if (jogadorEscolha == 1 && computadorEscolha == 3){
        ganhador = 1;
    //PEDRA E TESOURA = PEDRA
    } else if (jogadorEscolha == 2 && computadorEscolha == 1) {
        ganhador = 1; 
    //PAPEL E PEDRA = PEPEL
    } else if (jogadorEscolha == 2 && computadorEscolha == 2) {
        ganhador = 0;
    //PEPEL E PAPEL = EMPATE
    } else if (jogadorEscolha == 2 && computadorEscolha == 3){
        ganhador = 2;
    //PAPEL E TESOURA = TESOURA
    } else if (jogadorEscolha == 3 && computadorEscolha == 1){
        ganhador = 2;
    //TESOURA E PEDRA = PEDRA
    }else if (jogadorEscolha == 3 && computadorEscolha == 2){
        ganhador = 1; 
    }



    document.getElementById('jogadorEscolha1').classList.remove
     ('selecionado');
    document.getElementById('jogadorEscolha2').classList.remove
     ('selecionado')
    document.getElementById('jogadorEscolha3').classList.remove
     ('selecionado')
     document.getElementById('computadorEscolha1').classList.remove
     ('selecionado');
    document.getElementById('computadorEscolha2').classList.remove
     ('selecionado')
    document.getElementById('computadorEscolha3').classList.remove
     ('selecionado')
    




     document.getElementById('jogadorEscolha'+jogadorEscolha).
     classList.add('selecionado');
     document.getElementById('computadorEscolha'+computadorEscolha).
     classList.add('selecionado');


     /*
     EMPATE = 0;
     JOGADOR = 1;
     COMPUTADOR = 2;
     */


     if (ganhador == 0){
        document.getElementById('mensagem').innerHTML = "EMPATE"
     }else if (ganhador == 1){
        document.getElementById('mensagem').innerHTML = "JOGADOR GANHOU"
        computadorPontos++;
     }else if (ganhador == 2){
        document.getElementById('mensagem').innerHTML = "COMPUTADOR GANHOU"
        computadorPontos++;
     }

     document.getElementById('jogadorPontos').innerHTML = 
     jogadorPontos;
     document.getElementById('computadorPontos').innerHTML =
     computadorPontos;

}