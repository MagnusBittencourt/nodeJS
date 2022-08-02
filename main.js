import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});
let dados = []

function organizador() {
    rl.question('Qual é a propriedade CSS?', (resposta) =>{
        dados.push(resposta)
        if (dados.at(-1) !== 'sair'){
    
        }
        
    }); 
}

