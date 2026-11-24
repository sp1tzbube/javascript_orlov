'use strict';

const form = document.querySelector('#search-form');
const input = document.querySelector('#query');

form.addEventListener('submit', async function (event) {
    // stop the form from reloading the page
    event.preventDefault();

    // get the value entered to the form
    const value = input.value;

    try {
        // send the request with fetch
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value}`);
        if (!response.ok) {
            throw new Error('Invalid input!');
        }
        const tvShows = await response.json();

        // print the search result to the console
        console.log(tvShows);
    } catch (error) {
        console.log(error.message);
    }
});
