'use strict';

const form = document.querySelector('#search-form');
const input = document.querySelector('#query');
const results = document.querySelector('#results');

form.addEventListener('submit', async function (event) {
    // stop the form from reloading the page
    event.preventDefault();

    const value = input.value;

    try {
        // Task 1: send the request with fetch
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value}`);
        if (!response.ok) {
            throw new Error('Invalid input!');
        }
        const tvShows = await response.json();

        // Task 1: print the search result to the console
        console.log(tvShows);

        // Task 2: clear the old results
        results.innerHTML = '';

        // Task 2: print every series on the page
        for (const tvShow of tvShows) {
            const article = document.createElement('article');

            // name in <h2>
            const h2 = document.createElement('h2');
            h2.textContent = tvShow.show.name;
            article.appendChild(h2);

            // link to details in <a>, opens in a new tab
            const link = document.createElement('a');
            link.href = tvShow.show.url;
            link.textContent = tvShow.show.url;
            link.target = '_blank';
            article.appendChild(link);

            // medium image (some shows have no image, so use ?.)
            const img = document.createElement('img');
            img.src = tvShow.show.image?.medium;
            img.alt = tvShow.show.name;
            article.appendChild(img);

            // summary in <div>, because summary already has <p> tags
            const div = document.createElement('div');
            div.innerHTML = tvShow.show.summary;
            article.appendChild(div);

            // add the article to <div id="results">
            results.appendChild(article);
        }
    } catch (error) {
        console.log(error.message);
    }
});
    