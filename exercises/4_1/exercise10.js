let custo = 10, venda = 13, lucro = null, imposto = 20;
if ((custo === 0) || (venda === 0) ) {
  console.error("Valor inválido!");
  
} else {
  custo += (imposto * custo/100)
  lucro = venda - custo; 
  console.log(`O lucro foi de ${lucro} reais.`);
}
