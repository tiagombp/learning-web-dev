let visor = document.querySelector('.visor > p');

let saida = "0";
let resultado = 0;
let operando = 0;
let operador = "";

let corpoCalculadora = document.querySelector('.corpo')

let calculaResultado = function(operador) {
    console.log("chamei funcao");
    switch (operador) {
        case '/':
            return resultado / operando;
        case '*':
            return resultado * operando;
        case '+':
            return resultado + operando;
        case '-':
            return resultado - operando;
    };
}

corpoCalculadora.addEventListener('click', function(event) {
    console.log("clicou em", event.target.tagName, event.target.className);
    /* event.target.className é uma string! */

        // clicou em botão numérico

        if (event.target.className.includes("botaoAlgarismo")) {
            if (saida === "0") {
                saida = event.target.innerText;
            } else {
                saida += event.target.innerText;
            }

            console.log("Resultado: ", resultado, " | Operando: ", operando, " | Operador: ", operador);
    
        // clicou no CLEAR

        } else if (event.target.className.includes("botaoClear")) {
            saida = "0";     // reinicia tudo
            resultado = 0;
            operador = "";

        // clicou no BACKSPACE
        
        } else if (event.target.className.includes("botaoBackspace")) {
            console.log("Estou aqui. O tamanho da string é... ", saida.length)
            if (saida.length === 1) {
                saida = "0";
            } else {
                saida = '' + saida; // para garantir q vai ser uma string.
                saida = saida.substring(0,saida.length-1);
            }

        // clicou em operador

        } else if (event.target.className.includes("operador")) {

            // isso tem que ficar na frente para quando se encadearem operações, senão ele opera com o operador anterior.

            if (operador === "") {   /* ainda não clicou em nenhum operador */
                console.log("primeira vez que tô clicando num operador");
                resultado = parseInt(saida);
                operando = 0; // para o caso de uma sequência de operações.
                console.log("Fim primeiro operador. Resultado: ", resultado, " | Operando: ", operando, " | Operador: ", operador);

            } else {
                console.log("o operador atual é ", operador);
                operando = parseInt(saida);
                resultado = calculaResultado(operador);
                console.log("Não é a primeira vez que clica no operador. Resultado: ", resultado, " | Operando: ", operando, " | Operador: ", operador);
            } 

            // marcar o operador clicado
            if (event.target.className.includes("botaoDivisao")) {
                operador = '/';
            } else if (event.target.className.includes("botaoMultiplicacao")) {
                operador = '*';
            } else if (event.target.className.includes("botaoAdicao")) {
                operador = '+';
            } else if (event.target.className.includes("botaoSubtracao")) {
                operador = '-';
            }    
          
            saida = "0";

        // clicou no igual

        } else if (event.target.className.includes("botaoIgual")) {
            console.log("Inicio igual. Resultado: ", resultado, " | Operando: ", operando, " | Operador: ", operador);
            operando = parseInt(saida);
            resultado = calculaResultado(operador);
            saida = resultado;
            operador = "";
            console.log("Fim igual. Resultado: ", resultado, " | Operando: ", operando, " | Operador: ", operador);
        }

    visor.innerText = saida;
});


