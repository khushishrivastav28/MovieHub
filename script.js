

const movieForm = document.querySelector("#movieForm");
const movieInput = document.querySelector("#movieInput");
const movieHub = document.querySelector("#movieHub");
const hamburger = document.querySelector("#hamburger")
const options = document.querySelector("#options")

const NO_POSTER ="https://placehold.co/300x450/18181b/a1a1aa?text=No+Poster";

movieForm.addEventListener("submit" , (e) => {
    e.preventDefault();
    let query = movieInput.value.trim()
    if(!query){
        return
    }
    searchMovies(query);
});

async function searchMovies(movieName){
    movieHub.innerHTML =    `<div class="loader"></div> `

    try{
    let response = await fetch(`https://www.omdbapi.com/?apikey=50eecabd&s=${encodeURIComponent(movieName)}`);
    let data = await response.json();
    

    if(data.Response === "True"){
        displayMovies(data.Search);
    }else{
        movieHub.innerHTML=`<p class="col-span-full text-center text-red-400 py-16 text-lg">${data.Error || 'No movies found.'}</p>`
    }
} catch (error){
    movieHub.innerHTML = `<p class="col-span-full text-center text-red-400 py-16 text-lg">Error loading movies. Please try again. </p>`;
}

}

function displayMovies(movies){

    movieHub.innerHTML= ""

    movies.forEach((movie) =>{
        const div = document.createElement("div");

        div.dataset.imdbID = movie.imdbID;
        div.className = "movie-card bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-red-500 hover:scale-105 cursor-pointer transition flex flex-col group";
     
    const poster =(movie.Poster && movie.Poster !=="N/A")? movie.Poster :NO_POSTER;
    console.log({poster , mp:movie.Poster});

        div.innerHTML = 
    `
    <img
        src="${poster}"
        alt="${movie.Title}"
        class="w-full h-80 object-cover"
    >
        <div class="p-4 flex-1 flex flex-col justify-between">
            <h3 class="font-semibold text-white text-base group-hover:text-red-500 transition-colors">${movie.Title}</h3>
            <p class="text-sm text-red-500 font-medium mt-2">${movie.Year}</p>
         </div>
    `
    movieHub.append(div)
    })
    
}
movieHub.addEventListener("click" ,(e) =>{
    e.stopPropagation();
   const movieCard= e.target.closest(".movie-card")
   if(movieCard && movieCard.dataset.imdbID){
   const imdbID = movieCard.dataset.imdbID
   location.href =`movie-details.html?id=${imdbID}`
   }
})

let data =[
    {
        "Title": "Avengers: Infinity War",
        "Year": "2018",
        "imdbID": "tt4154756",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_QL75_UX380_CR0,0,380,562_.jpg"
    },
    {
        "Title": "Captain America: Civil War",
        "Year": "2016",
        "imdbID": "tt3498820",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_QL75_UX380_CR0,0,380,562_.jpg"
    },
    {
        "Title": "World War Z",
        "Year": "2013",
        "imdbID": "tt0816711",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BODg3ZTM2YWQtZDE5Ny00NGNiLTkzYjgtYWVlYjNkOTg5NDI1XkEyXkFqcGc@._V1_QL75_UX380_CR0,11,380,562_.jpg"
    },
    {
        "Title": "War of the Worlds",
        "Year": "2005",
        "imdbID": "tt0407304",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_QL75_UY562_CR0,0,380,562_.jpg"
    },
    {
        "Title": "Lord of War",
        "Year": "2005",
        "imdbID": "tt0399295",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNThlY2NkYmMtNTFhNi00MzBiLWJmNzEtZjk5MzYwYWU2MjllXkEyXkFqcGc@._V1_QL75_UX380_CR0,2,380,562_.jpg"
    },
    {
        "Title": "War for the Planet of the Apes",
        "Year": "2017",
        "imdbID": "tt3450958",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzNhMzNiZDYtMzYxYy00YTYwLTkxNmYtNTJhOGU1Yjg5ODI5XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
    },
    {
        "Title": "War Dogs",
        "Year": "2016",
        "imdbID": "tt2005151",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjEyNzQ0NzM4MV5BMl5BanBnXkFtZTgwMDI0ODM2OTE@._V1_QL75_UY562_CR0,0,380,562_.jpg"
    },
    {
        "Title": "Civil War",
        "Year": "2024",
        "imdbID": "tt17279496",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYTkzMjc0YzgtY2E0Yi00NDBlLWI0MWUtODY1ZjExMDAyOWZiXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
    },
    {
        "Title": "The Tomorrow War",
        "Year": "2021",
        "imdbID": "tt9777666",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYmUyNzY2YWYtNWQ0My00ODMwLTkwOTQtOTA0ZjM0MjRmYjJiXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
    },
    {
        "Title": "This Means War",
        "Year": "2012",
        "imdbID": "tt1596350",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTYyOTQ4MDE2MV5BMl5BanBnXkFtZTcwOTE0MTgwNw@@._V1_QL75_UY562_CR0,0,380,562_.jpg"
    }
]

displayMovies(data)

if(hamburger && options){
hamburger.addEventListener("click" , (e) =>{
    e.stopPropagation();
    options.classList.toggle("hidden");
    options.classList.toggle("flex");
});
}

