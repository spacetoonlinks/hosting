document.addEventListener("DOMContentLoaded", function() {
    const trendingContainer = document.getElementById('trending-container');
    const jsonUrl = 'https://raw.githubusercontent.com/spacetoonlinks/hosting/main/tab-trend.json'; 

    fetch(jsonUrl)
        .then(response => response.json())
        .then(data => {
            data.forEach(trending => {
                const trendingItem = document.createElement('div');
                trendingItem.innerHTML = `
                    <div class="movie-item item">
                        <div class="item-inner">
                            <a href="${trending.href}" class="cover">
                                <div> 
                                    <img class="lazyload" data-src="${trending.imgSrc}" alt="${trending.altText}">
                                </div>
                            </a>
                            <div class="tt-btn" data-tip="61243?/cachef57b6">
                                <i class="fa-sharp fa-solid fa-info"></i>
                            </div>
                            <div class="quality">${trending.quality}</div>
                            <div class="detail">
                                <div class="title">${trending.title}</div>
                                <div class="info"> 
                                    <span class="type">${trending.type}</span> 
                                    <span>${trending.seasonEpisode}</span> 
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                trendingContainer.appendChild(trendingItem.firstElementChild);
            });
        })
        .catch(error => console.error('Error fetching JSON data:', error));
});
