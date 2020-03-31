let sbruto = 1000, aliquotaIn = null, aliquotaIr = null;
if(sbruto <= 1556.94) {
  aliquotaIn = sbruto * 0.08;
} else if (sbruto <= 2594.92) {
  aliquotaIn = sbruto * 0.09;
} else if (sbruto <= 5189.82) {
  aliquotaIn = sbruto * 0.11;
} else {
  aliquotaIn = 570.88;
}

let salBase = sbruto - aliquotaIn;

if(sbruto <= 1903.98) {
  aliquotaIr = 0;
} else if(sliquido <= 2826.65) {
  aliquotaIr = (salBase * 0.075 )- 142.8;
}else if (sliquido1 <=3751.05) {
  aliquotaIr = 0.15;
  slfinal = sliquido1 - ((aliquotaIr * sliquido1)- 354.80);
} else if (sliquido1 <= 4664.68) {
  aliquotaIr = 0.225;
  slfinal = sliquido1 - ((aliquotaIr * sliquido1) - 636.13);
} else {
  aliquotaIr = 0.275;
  slfinal = sliquido1 - ((aliquotaIr * sliquido1) - 869.36);
}

console.log(`O salário líquido é de ${slfinal} reais`);