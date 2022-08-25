console.log("Hello, this is coming from index js")

const resultsNew = document.querySelector("#new-releases")

fetch("http://www.omdbapi.com/?s=new&y=2022&apikey=adf1f2d7")
  .then(response => response.json())
  .then((data) => {
    data.Search.forEach((result) => {
        const movieTag = `<div class="movie-card">
            <div class="movie-poster">
                <img src="${result.Poster}" alt="film poster">
            </div>
            <div class="movie-title">
              <h4>${result.Title}</h4>
              <p>${result.Year}</p>
            </div>
            <div class="movie-buttons">
                <button class="watch-now">Watch Now</button>
                <button class="add"><i class="fa-solid fa-heart"></i></button>
          </div>
        </div>`
        resultsNew.insertAdjacentHTML("beforeend", movieTag)
      })
})

const resultsTop = document.querySelector("#top-rated")

fetch("http://www.omdbapi.com/?s=marvel&apikey=adf1f2d7")
  .then(response => response.json())
  .then((data) => {
    data.Search.forEach((result) => {
        const movieTag = `<div class="movie-card">
            <div class="movie-poster">
                <img src="${result.Poster}" alt="film poster">
            </div>
            <div class="movie-title">
              <h4>${result.Title}</h4>
              <p>${result.Year}</p>
            </div>
            <div class="movie-buttons">
                <button class="watch-now">Watch Now</button>
                <button class="add"><i class="fa-solid fa-heart"></i></button>
          </div>
        </div>`
        resultsTop.insertAdjacentHTML("beforeend", movieTag)
      })
})

const resultsAgain = document.querySelector("#watch-again")

fetch("http://www.omdbapi.com/?s=harry%20potter&apikey=adf1f2d7")
  .then(response => response.json())
  .then((data) => {
    data.Search.forEach((result) => {
        const movieTag = `<div class="movie-card">
            <div class="movie-poster">
                <img src="${result.Poster}" alt="film poster">
            </div>
            <div class="movie-title">
              <h4>${result.Title}</h4>
              <p>${result.Year}</p>
            </div>
            <div class="movie-buttons">
                <button class="watch-now">Watch Now</button>
                <button class="add"><i class="fa-solid fa-heart"></i></button>
          </div>
        </div>`
        resultsAgain.insertAdjacentHTML("beforeend", movieTag)
      })
})