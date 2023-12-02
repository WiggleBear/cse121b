document.addEventListener("DOMContentLoaded", function () {
    const ratingSelect = document.getElementById("rating");
    const generateButton = document.getElementById("generateSuggestion");
    const movieInfoElement = document.getElementById("movieInfo");
  
    generateButton.addEventListener("click", () => {
      const selectedRating = ratingSelect.value;
      fetchMovieSuggestion(selectedRating);
    });
  
    async function fetchMovieSuggestion(rating) {
      const url = `https://movie-database-alternative.p.rapidapi.com/?r=json&rating=${rating}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '405fa001dfmshc6401711dadfde0p131270jsn9a47bbbfb785',
          'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
        }
      };
  
      try {
        const response = await fetch(url, options);
        const result = await response.json();
  
        if (result.length > 0) {
          const randomMovie = getRandomMovie(result);
          displayMovieInfo(randomMovie);
        } else {
          movieInfoElement.innerHTML = `<p>No movies found for the selected rating.</p>`;
        }
      } catch (error) {
        console.error(error);
      }
    }
  
    function getRandomMovie(movies) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      return movies[randomIndex];
    }
  
    function displayMovieInfo(movie) {
      const html = `<h2>${movie.title}</h2>
                    <p>Genre: ${movie.genre}</p>
                    <p>Plot: ${movie.plot}</p>
                    <p>Country: ${movie.country}</p>
                    <p>Language: ${movie.language}</p>
                    <img src="${movie.poster}" alt="${movie.title} Poster">`;
      
      movieInfoElement.innerHTML = html;
    }
  });
  