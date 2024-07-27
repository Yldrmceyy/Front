document.addEventListener('DOMContentLoaded', () => {
    // Get references to the joke display element and the button
    const jokeEl = document.getElementById('joke');
    const newJokeButton = document.getElementById('new-joke');

    // Function to fetch a joke from the API
    function fetchJoke() {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())  // Convert the response to JSON
            .then(data => {
                // Display the joke in the joke element
                jokeEl.textContent =`"${data.value}"`;
            })
            .catch(error => {
                // Handle any errors that occur during the fetch
                jokeEl.textContent = 'Error loading joke.';
                console.error('Error:', error);
            });
    }

    // Add an event listener to the button to fetch a new joke when clicked
    newJokeButton.addEventListener('click', fetchJoke);

    // Fetch the first joke when the page loads
    fetchJoke();
});
