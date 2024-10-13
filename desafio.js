/* Contagem de Medalhas
Crie um programa que receba o número de medalhas de ouro, prata e bronze de um país nas Olimpíadas e calcule o total de medalhas. Quando escrever 'sair', o programa deverá encerrar e mostrar na tela o ranking de medalhas no formato:


#Ranking de medalhas:
#Brasil: 7 medalhas
#França: 6 medalhas
#Argentina: 3 medalhas

*/

// Função principal
const medalhas = {};

while (true) {
    const pais = prompt("Digite o nome do país (ou 'sair' para encerrar):");
    if (pais.toLowerCase() === 'sair') {
        break;
    }

    const ouro = parseInt(prompt(`Digite o número de medalhas de ouro para ${pais}:`)) || 0;
    const prata = parseInt(prompt(`Digite o número de medalhas de prata para ${pais}:`)) || 0;
    const bronze = parseInt(prompt(`Digite o número de medalhas de bronze para ${pais}:`)) || 0;

    const totalMedalhas = ouro + prata + bronze;

    medalhas[pais] = totalMedalhas;
}

console.log("#Ranking de medalhas:");
for (const [pais, total] of Object.entries(medalhas)) {
    console.log(`#${pais}: ${total} medalhas`);
}
