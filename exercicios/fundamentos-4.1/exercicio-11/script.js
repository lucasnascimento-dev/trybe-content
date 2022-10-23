

const aliquota_inss8 = 0.08;
const aliquota_inss9 = 0.09;
const aliquota_inss11 = 0.11;
const aliquota_inss_max = 570.88;

const salario_bruto = 2500;
let salario_base = 0;
let desconto = 0;
let salario_liquido = 0;
let parcela_a_deduzir = 0;

if (salario_bruto <= 1556.94) {
    desconto = aliquota_inss8*salario_bruto
    salario_base = salario_bruto-desconto;
    console.log("Seu salário base é de R$"+salario_base.toFixed(2)+" Foi dencontado RS"+desconto.toFixed(2)+" do INSS" )
}
else if (salario_bruto <= 2594.92) {
    desconto = aliquota_inss9*salario_bruto
    salario_base = salario_bruto-desconto;
    console.log("Seu salário base é de R$"+salario_base.toFixed(2)+" Foi dencontado RS"+desconto.toFixed(2)+" do INSS" )

    }
else if (salario_bruto <= 5189.82) {
    desconto = aliquota_inss11*salario_bruto
    salario_base = salario_bruto-desconto;
    console.log("Seu salário base é de R$"+salario_base.toFixed(2)+" Foi dencontado RS"+desconto.toFixed(2)+" do INSS" )
  }
else {
    desconto = aliquota_inss_max
    salario_base = salario_bruto-desconto;
    console.log("Seu salário base é de R$"+salario_base.toFixed(2)+" Foi dencontado RS"+desconto.toFixed(2)+" do INSS" )

 }

const aliquota_ir_7 = 0.075;
const aliquota_ir_15 = 0.15;
const aliquota_ir_22 = 0.225;
const aliquota_ir_27 = 0.275;

if (salario_base <= 1903.98) {
    desconto = 0;
    salario_liquido = salario_base-desconto;
    console.log("Seu salário líquido é de R$"+salario_liquido.toFixed(2)+" Faixa Isenta de imposto de renda.")
}
else if (salario_base <= 2826.65) {
    parcela_a_deduzir = 142.80;
    desconto = (aliquota_ir_7*salario_base)-parcela_a_deduzir;
    salario_liquido = salario_base-desconto;
    console.log("Seu salário líquido é de R$"+salario_liquido.toFixed(2)+" Foi descontado R$ "+desconto.toFixed(2)+" de imposto de renda")
}
else if (salario_base <= 3751.05) {
    parcela_a_deduzir = 354.80;
    desconto = (aliquota_ir_15*salario_base)-parcela_a_deduzir;
    salario_liquido = salario_base-desconto;
    console.log("Seu salário líquido é de R$"+salario_liquido.toFixed(2)+" Foi descontado R$ "+desconto.toFixed(2)+" de imposto de renda")
}
else if (salario_base <= 4664.68) {
    parcela_a_deduzir = 636.13;
    desconto = (aliquota_ir_22*salario_base)-parcela_a_deduzir;
    salario_liquido = salario_base-desconto;
    console.log("Seu salário líquido é de R$"+salario_liquido.toFixed(2)+" Foi descontado R$ "+desconto.toFixed(2)+" de imposto de renda")
}
else {
    parcela_a_deduzir = 869.36;
    desconto = (aliquota_ir_27*salario_base)-parcela_a_deduzir;
    salario_liquido = salario_base-desconto;
    console.log("Seu salário líquido é de R$"+salario_liquido.toFixed(2)+" Foi descontado R$ "+desconto.toFixed(2)+" de imposto de renda")
}