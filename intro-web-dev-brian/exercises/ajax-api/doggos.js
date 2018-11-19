const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const lugarDoCachorro = document.querySelector(".doggos");
const loadingIcon = document.querySelector(".botao > img");

loadingIcon.style.display = "none";

function acrescentaCachorro() {
  // mostra o ícone de "carregando"
  loadingIcon.style.display = "inline";

  // faz o fecth na API
  const promise = fetch(DOG_URL);
  promise
    .then(function(response) {
        console.log("A tal response ", response);
        const processingPromise = response.json();
        console.log("O tal processing promise ", processingPromise);
        return processingPromise;
    })
    .then(function(processedResponse) {
        // criando o tag da imagem
        const img = document.createElement("img");
        // definindo os atributos do tag
        img.src = processedResponse.message;
        img.alt = "Cachorro fofinho";
        // incluindo o tag como filho do div
        lugarDoCachorro.appendChild(img);
        // ocultando o ícone de carregando
        loadingIcon.style.display = "none";

    });
}

console.log("this will log first");
document.querySelector(".add-cachorrinho").addEventListener("click", acrescentaCachorro);