const API_URL = 'https://icanhazdadjoke.com/';
let btn = document.querySelector('.btn');

const fetchJoke = () => {
  fetch(API_URL, {
    headers: {
      Accept: 'application/json'
    }
  })
    .then(response => response.json())
    .then(data =>
      document.getElementById('jokeContainer').innerText = data.joke
    );
}

  btn.addEventListener('click', fetchJoke)    
