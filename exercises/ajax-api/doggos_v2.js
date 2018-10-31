const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const promise = fetch(DOG_URL);
const lugarDoCachorro = document.querySelector(".doggos");

console.log("O tal promise ", promise);


promise
  .then(function(response) {
      console.log("A tal response ", response);
      const processingPromise = response.json();
      console.log("O tal processing promise ", processingPromise);
      return processingPromise;
})
  .then(function(processedResponse) {
      console.log("O resultado ", processedResponse);
      console.log("Status: ", processedResponse.status);
      console.log("URL da foto fofinha de cachorro ", processedResponse.message);
      // criando o tag da imagem
      const img = document.createElement("img");
      // definindo os atributos do tag
      img.src = processedResponse.message;
      img.alt = "Cachorro fofinho";
      // incluindo o tag como filho do div
      lugarDoCachorro.appendChild(img);

  });

console.log("this will log first");