document.addEventListener("DOMContentLoaded", function() {
    const tvshowsContainer = document.getElementById('tvshows-container');
    const jsonUrl = 'https://raw.githubusercontent.com/spacetoonlinks/hosting/main/tab-show.json';

    fetch(jsonUrl)
        .then(response => response.json())
        .then(data => {
            data.forEach(show => {
                const showItem = document.createElement('div');
                showItem.innerHTML = `
                    <div class="movie-item item">
                        <div class="item-inner">
                            <a href="${show.href}" class="cover">
                                <div> 
                                    <img class="lazyload" data-src="${show.imgSrc}" alt="${show.altText}">
                                </div>
                            </a>
                            <div class="tt-btn" data-tip="73538?/cacheadf6c">
                                <i class="fa-sharp fa-solid fa-info"></i>
                            </div>
                            <div class="quality">${show.quality}</div>
                            <div class="detail">
                                <div class="title">${show.title}</div>
                                <div class="info"> 
                                    <span class="type">${show.type}</span> 
                                    <span>${show.seasonEpisode}</span> 
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                tvshowsContainer.appendChild(showItem.firstElementChild);
            });
        })
        .catch(error => console.error('Error fetching JSON data:', error));
});
