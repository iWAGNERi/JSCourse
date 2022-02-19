let requestedURL = "https://pokeapi.co/api/v2/berry/1";

fetch(requestedURL)
  .then((data) => data.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(`Ошибка в запросе ${err}`))
