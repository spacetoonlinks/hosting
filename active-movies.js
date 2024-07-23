document.addEventListener("DOMContentLoaded", function() {
    const moviesContainer = document.getElementById('movies-container');
    const jsonUrl = 'https://rawcdn.githack.com/spacetoonlinks/hosting/a8a886b97c458596cc43d045fc5a5b11c0313a27/active-movies.json';

    fetch(jsonUrl)
        .then(response => response.json())
        .then(data => {
            data.forEach(movie => {
                const movieItem = document.createElement('div');
                movieItem.className = 'movie-item item';

                movieItem.innerHTML = `
                    <div class="item-inner">
                        <a href="${movie.href}" class="cover">
                            <div> 
                                <img class="lazyload" data-src="${movie.imgSrc}" alt="${movie.altText}">
                            </div>
                        </a>
                        <div class="tt-btn" data-tip="73536?/cache8c76f">
                            <i class="fa-sharp fa-solid fa-info"></i>
                        </div>
                        <div class="quality">${movie.quality}</div>
                        <div class="detail">
                            <div class="title">${movie.title}</div>
                            <div class="info"> 
                                <span class="type">${movie.type}</span> 
                                <span>${movie.year} - ${movie.duration}</span> 
                            </div>
                        </div>
                    </div>
                `;

                moviesContainer.appendChild(movieItem);
            });
        })
        .catch(error => console.error('Error fetching JSON data:', error));
});

