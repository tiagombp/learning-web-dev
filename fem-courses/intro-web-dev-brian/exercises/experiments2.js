const button = document.querySelector('.event-button');
const input = document.querySelector('.input-to-copy');
const caixaTexto = document.querySelector('.caixa-texto-copiado');
const textoAlertaBotao = document.querySelector('.texto-alerta-botao');

const colorInput = document.querySelector('.color-input');
const box = document.querySelector('.color-box');

button.addEventListener('click', function () {
    console.log("Mr. User has clicked! Oh dear. Execute Order 66.");
    textoAlertaBotao.innerText  = "Opa, botão apertado!";
    textoAlertaBotao.style.backgroundColor = 'limegreen';
});

input.addEventListener("keyup", function() {
    caixaTexto.innerText  = input.value;
    caixaTexto.style.fontFamily = "cursive";
});

colorInput.addEventListener("change", function() {
    box.style.backgroundColor  = colorInput.value;
});
