console.log("Hello, this is coming from watch.js")

const list = document.querySelector("#recent-list")

fetch("http://www.omdbapi.com/?s=harry%20potter&apikey=adf1f2d7")
  .then(response => response.json())
  .then((data) => {
    data.Search.forEach((result) => {
        const movieTag = `<div class="list-card">
        <div class="list-card-poster">
          <img src="${result.Poster}" alt="movie poster">
        </div>
        <div class="list-card-description">
          <div class="movie-description">
            <h3>${result.Title}</h3>
            <p>${result.Year}</p>
          </div>
          <button class="watch-now">Watch Now</button>
        </div>
      </div>`
        list.insertAdjacentHTML("beforeend", movieTag)
      })
})