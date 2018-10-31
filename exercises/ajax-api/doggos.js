const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const lugarDoCachorro = document.querySelector(".doggos");

function acrescentaCachorro() {
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

    });
}

console.log("this will log first");
document.querySelector(".add-cachorrinho").addEventListener("click", acrescentaCachorro);