function getCharacters(done) {
  const results = fetch("https://rickandmortyapi.com/api/character");
  results
    .then(response => response.json())
    .then(data => {
      done(data)
    });
}

getCharacters(data => {
  data.results.forEach(personaje => {
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