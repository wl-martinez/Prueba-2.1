function getCharacters(done) {
  const results = fetch("https://rickandmortyapi.com/api/character");
  results
    .then(response => response.json())
    .then(data => {
      done(data)
    });
}

getCharacters(data => {
  data.results.slice(0, 3).forEach(personaje => { // Utilizamos slice(0, 3) para obtener solo los primeros tres personajes
    const article = document.createRange().createContextualFragment(/*html*/`
      <article>
        <h5>* ${personaje.name}</h5>
        <div class="foto-cargo">
          <img src="${personaje.image}" alt="personaje">
        </div>
      </article>
    `);
    const main = document.querySelector("main");
    main.append(article);
  });
});

fetch('https://api.thedogapi.com/v1/images/search')
  .then(response => response.json())
  .then(data => {
    const imageUrl = data[0].url;
    const perroElement = document.querySelector('.perrito');
    const image = document.createElement('img');
    image.src = imageUrl;
    perroElement.appendChild(image);
  })
  .catch(error => console.error(error));

  fetch('https://api.thecatapi.com/v1/images/search')
  .then(response => response.json())
  .then(data => {
    const imageUrl = data[0].url;
    const perroElement = document.querySelector('.gatito');
    const image = document.createElement('img');
    image.src = imageUrl;
    perroElement.appendChild(image);
  })
  .catch(error => console.error(error));