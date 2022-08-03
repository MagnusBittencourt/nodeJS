import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});
let dados = []

function ordem (array) {
    array.pop()
    
    array.sort()
    console.log(array)
}


function organizador() {
    rl.question('Qual é a propriedade CSS?', (resposta) =>{
        dados.push(resposta)
        if (dados.at(-1) !== 'sair'&& dados.at(-1) !== 'SAIR'){
            organizador()
        }
        else {
            rl.close()
            console.log(dados)
            ordem(dados)
        }
    }); 
} 

organizador()

