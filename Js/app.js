//jshint esversion:6


let search =document.querySelector("#search");
search.addEventListener=("keyup" ,(e) => {
  let searchText = e.target.value;
  SearchMovies(searchText);
  let formText = document.getElementById("divBlock");
  formText.style.display ="none";
  search.classList.add("afterkeyPress");
  document.querySelector("#formBlock").classList.add("afterkey_formBlock");
});


function SearchMovies(searchText){
    console.log(searchText);
 const imdbAPI=`http://www.omdbapi.com/?s=${searchText}&apikey=fa3ffd4e`; 
 window
 .fetch(imdbAPI)
 .then((data) => {
     data
     .json()
     .then((movieData) => {
         let movies = movieData.Search;
         let output = [];
         for (let movie of movies) {
            console.log(movie); 
            output += `
             <div>
             <img src="${movie.Poster}" />
             <h1>${movie.Title}</h1>
             <p>${movie.Year}</p>
             <a href="http://www.imdb.com/title/${movie.imdbID}/" target="_blank">Movie Details</a>
             </div>
             `;
         }
         document.getElementById("template").innerHTML= output;
     })
     .catch((err) => console.log(err));
 })
 .catch((err) => console.log(err));
}