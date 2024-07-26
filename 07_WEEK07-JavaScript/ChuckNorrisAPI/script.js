document.addEventListener('DOMContentLoaded', () => {
    const jokeEl = document.getElementById('joke');
    const newJokeButton = document.getElementById('new-joke');

    function fetchJoke() {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(data => {
                jokeEl.textContent = data.value;
            })
            .catch(error => {
                jokeEl.textContent = 'Error loading joke.';
                console.error('Error:', error);
            });
    }

    newJokeButton.addEventListener('click', fetchJoke);

    // Fetch the first joke when the page loads
    fetchJoke();
});
