let posicaoRainhaLinha = 4;
let posicaoRainhaColuna = 4;
let posicaoPecaLinha = 7;
let posicaoPecaColuna = 1;
let ataqueFeito = false;
if (posicaoRainhaLinha === posicaoPecaLinha ||
  posicaoRainhaColuna === posicaoPecaColuna) {
  ataqueFeito = true;
}
//Diagonal superior direita
for (let i = 1; i < 8; i++)  {
  let linhaRainha = posicaoRainhaLinha + i;
  let colunaRainha = posicaoRainhaColuna + i;
  if (linhaRainha > 8 || colunaRainha > 8) {
    break;
  }
  if (colunaRainha === posicaoPecaColuna && linhaRainha === posicaoPecaLinha) {
    ataqueFeito = true;
  }
}
//Diagonal inferior esquerda
for (let i = 1; i < 8; i++)  {
  let linhaRainha = posicaoRainhaLinha - i;
  let colunaRainha = posicaoRainhaColuna - i;
  if (linhaRainha < 1 || colunaRainha < 1) {
    break;
  }
  if (colunaRainha === posicaoPecaColuna && linhaRainha === posicaoPecaLinha) {
    ataqueFeito = true;
  }
}
//Diagonal superior esquerda
for (let i = 1; i < 8; i++)  {
  let linhaRainha = posicaoRainhaLinha + i;
  let colunaRainha = posicaoRainhaColuna - i;
  if (linhaRainha > 8 || colunaRainha < 1) {
    break;
  }
  if (colunaRainha === posicaoPecaColuna && linhaRainha === posicaoPecaLinha) {
    ataqueFeito = true;
  }
}
//Diagonal inferior direita
for (let i = 1; i < 8; i++)  {
  let linhaRainha = posicaoRainhaLinha - i;
  let colunaRainha = posicaoRainhaColuna + i;
  if (linhaRainha < 1 || colunaRainha > 8) {
    break;
  }
  if (colunaRainha === posicaoPecaColuna && linhaRainha === posicaoPecaLinha) {
    ataqueFeito = true;
  }
}
console.log(ataqueFeito);