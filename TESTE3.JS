{
    "faturamento_diario";[
        { "dia": 1, "valor": 219.50 },
        { "dia": 2, "valor": 0.0 },
        { "dia": 3, "valor": 340.20 },
        { "dia": 4, "valor": 0.0 },
        { "dia": 5, "valor": 289.00 },
        { "dia": 6, "valor": 450.50 },
        { "dia": 7, "valor": 550.00 },

    ]
}
const faturamentoMensal = {
    "faturamento_diario": [
        { "dia": 1, "valor": 221.50 },
        { "dia": 2, "valor": 0.0 },
        { "dia": 3, "valor": 340.20 },
        { "dia": 4, "valor": 0.0 },
        { "dia": 5, "valor": 289.00 },
        { "dia": 6, "valor": 450.50 },
        { "dia": 7, "valor": 0.0 },
        { "dia": 8, "valor": 510.00 }
    ]
};

function calcularFaturamento(faturamentoMensal) {
    const diasComFaturamento = faturamentoMensal.faturamento_diario.filter(d => d.valor > 0);


    const menorValor = Math.min(...diasComFaturamento.map(d => d.valor));
    const maiorValor = Math.max(...diasComFaturamento.map(d => d.valor));


    const somaFaturamento = diasComFaturamento.reduce((acc, d) => acc + d.valor, 0);
    const mediaMensal = somaFaturamento / diasComFaturamento.length;


    const diasAcimaDaMedia = diasComFaturamento.filter(d => d.valor > mediaMensal).length;


    return {
        menorValor,
        maiorValor,
        diasAcimaDaMedia
    };
}

const resultados = calcularFaturamento(faturamentoMensal);
console.log(`Menor valor de faturamento: ${resultados.menorValor}`);
console.log(`Maior valor de faturamento: ${resultados.maiorValor}`);
console.log(`Número de dias com faturamento acima da média: ${resultados.diasAcimaDaMedia}`);

