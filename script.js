const body = document.querySelector('body');

async function getMovies() {
    const movies = await fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1");
    const data = await movies.json();
    return data;

}

async function makeHTML() {
    const movies = await getMovies();
    movies.results.forEach((movie) => {
        body.innerHTML += `
                <h1>${movie.title}</h1>
                <p>Título do filme na linguagem original: ${movie.original_title}</p>
                <p>Data de lançamento: ${movie.release_date}</p>
                <p>Linguagem do filme: ${movie.original_language}</p>
                <p>Média de votos: ${movie.vote_average}</p>
                <p>Sinopse: ${movie.overview}</p>
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
                
            </div>
        `;
    });
}

makeHTML();