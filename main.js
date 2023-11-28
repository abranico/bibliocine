let movies = document.getElementById('movies')

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWQ0Y2I2MTJlNmI0YTBkN2U5YjlmM2UyNDgzYTBjYyIsInN1YiI6IjY0NzUxYjIwOTI0Y2U2MDBhNzVkNzUzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YNKtM8_CBOOSbVB93iZhPk9QrkBFoXQfXiDC-4pxnKA'
  }
};


fetch('https://api.themoviedb.org/3/discover/movie', options)
  .then(response => response.json())
  .then(response => {
    response.results.forEach(result =>{
      let { poster_path, overview,vote_average
      } = result; 
      
      console.log(result)
      let movie = document.createElement('div')
      movie.innerHTML=`<div class="col-3 col-m-4 col-s-6">
      <div class="card-movie" style=" background-image:url('https://image.tmdb.org/t/p/w500${poster_path}');">
        <div class="description-container">
            <p class="overview">${overview}</p>
            <p>${vote_average}</p>
            <p>descrizione</p>
            <p>descrizione</p>
          
        </div>
      </div>
    </div>`
    movies.appendChild(movie)
    })
  })
  .catch(err => console.error(err));


  fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc', options)
  .then(response => response.json())
  .then(response => {
    response.results.forEach(result =>{
      let { poster_path, overview,vote_average
      } = result; 
      
      console.log(result)
      let movie = document.createElement('div')
      movie.innerHTML=`<div class="col-3 col-m-4 col-s-6">
      <div class="card-movie" style=" background-image:url('https://image.tmdb.org/t/p/w500${poster_path}');">
        <div class="description-container">
            <p class="overview">${overview}</p>
            <p>${vote_average}</p>
            <p>descrizione</p>
            <p>descrizione</p>
          
        </div>
      </div>
    </div>`
    movies.appendChild(movie)
    })
  })
  .catch(err => console.error(err));