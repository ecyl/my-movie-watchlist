console.log("Hello, this is coming from fav.js")

const content1 = document.querySelector("#content1")

fetch("https://www.omdbapi.com/?s=horror&type=movie&apikey=adf1f2d7")
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
        </div>`
        content1.insertAdjacentHTML("beforeend", movieTag)
      })
})

const content2 = document.querySelector("#content2")

fetch("https://www.omdbapi.com/?s=comedy&type=movie&apikey=adf1f2d7")
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
        </div>`
        content2.insertAdjacentHTML("beforeend", movieTag)
      })
})

const content3 = document.querySelector("#content3")

fetch("https://www.omdbapi.com/?s=love&type=movie&apikey=adf1f2d7")
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
        </div>`
        content3.insertAdjacentHTML("beforeend", movieTag)
      })
})

const content4 = document.querySelector("#content4")

fetch("https://www.omdbapi.com/?s=mission%20impossible&type=movie&apikey=adf1f2d7")
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
        </div>`
        content4.insertAdjacentHTML("beforeend", movieTag)
      })
})