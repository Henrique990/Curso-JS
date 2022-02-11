var jogador1 = 2;// placaar do jogador 1
var jogador2 = 0;// placaar do jogador 2
var placar;



// usando if
if (jogador1 > 0 && jogador2 == 0) {
    console.log(' Jogador1 marcou ponto!');
    placar = jogador1 > jogador2;
}
// usando else if
else if (jogador2 > 0 && jogador1 == 0) {
    console.log(' Jogador2 marcou ponto!');
    placar = jogador2 > jogador1;
}
// usando else
else {
    console.log('Ninguém marcou ponto!');
}
