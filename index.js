
// efectuamos la funcion llamando a la api 

function getCharacters(done){
    const results = fetch("https://rickandmortyapi.com/api/character");
    console.log("🚀 ~ file: index.js:5 ~ getCharacters ~ results:", results)

    results
    .then(Response => Response.json())
    .then(data => {
        done(data)
    });
}


getCharacters(data => {
console.log("🚀 ~ file: index.js:16 ~ data:")

    data.results.forEach(personaje => {

        const article = document.createRange().createContextualFragment(
        /**
         * html for search avatars and avatars images
         */
        `
            <article>

                <div class="image-container">
                    <img src="${personaje.image}" alt="Personaje">
                </div>

                <h2>${personaje.name}</h2>
                <span>${personaje.status}</span>

            </article>
        `);
        
        const main = document.querySelector("main");
        main.append(article);


    });



});


