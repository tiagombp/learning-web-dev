let visor = document.querySelector('.visor > p');

let saida = "0";
let resultado = 0;
let operando = 0;
let operador = "";

let corpoCalculadora = document.querySelector('.corpo')

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
                saida = saida.substring(0,saida.length-1);
            }

        // clicou em operador

        } else if (event.target.className.includes("operador")) {

            if (operador === "") { /* ainda não clicou em nenhum operador */
                resultado = parseInt(saida);
                saida = "0";

            } else {

                operando = parseInt(saida);

                switch (operador) {
                    case '/':
                      resultado = resultado / operando;
                      break;
                    case '*':
                      resultado = resultado * operando;
                      break;
                    case '+':
                      resultado = resultado + operando;
                      break; 
                    case '-':
                      resultado = resultado - operando;
                      break;   
                };
                saida = "0";
            }

        // clicou no igual

        } else if (event.target.className.includes("botaoIgual")) {
            saida = resultado;
        }


    visor.innerText = saida;
});


