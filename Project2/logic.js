const searchBox = document.querySelector('.search-field');
const searchBtn = document.querySelector('#submit');
const movieContainer = document.querySelector('.movie-container');
//console.log(submit)

// function fetch api-data
const fetchData = async (query) => {
    movieContainer.innerHTML = `<h2>Find ${query} movie plese wait </h2>`
    try {
        const data = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=ac06809c&s=${query}`)
        //  console.log(data);
        const response = await data.json();
        movieContainer.innerHTML = "";
        response.Search.forEach(movie => {
            const movieDiv = document.createElement('div');
            // apend this movieDiv into main Movie-container
            movieContainer.appendChild(movieDiv);
            movieDiv.classList.add('movie');
            movieDiv.innerHTML = `
                     <img src="${movie.Poster}">
                     <h1>Title:${movie.Title}</h1>
                     <h1>Type:${movie.Type}</h1>
                     <h1>Year:${movie.Year}</h1>
                                            `
            //   console.log(movieDiv);


        });
    } catch (e) {
        movieContainer.innerHTML = `<h2>something wrong with api</h2>`
        console.log(e);
    }
}
searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const searchInput = searchBox.value.trim();
    if (!searchInput) {
        movieContainer.innerHTML = `<h2>Search Movie not found</h2>`
    }
    fetchData(searchInput);
    //console.log('clicked')

})
