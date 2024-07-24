document.addEventListener("DOMContentLoaded", function() {
    const latestMoviesContainer = document.getElementById('latest-movies-container');
    const jsonUrl = 'https://raw.githubusercontent.com/spacetoonlinks/hosting/main/tab-latest-movies-slide.json'; 

    fetch(jsonUrl)
        .then(response => response.json())
        .then(data => {
            data.forEach(movie => {
                const movieItem = document.createElement('div');
                movieItem.classList.add('movie-item', 'swiper-slide');
                movieItem.innerHTML = `
                    <div class="item-inner">
                        <a href="${movie.href}" class="cover">
                            <div>
                                <img class="lazyload" data-src="${movie.imgSrc}" alt="${movie.altText}">
                            </div>
                        </a>
                        <div class="tt-btn" data-tip="73565?/cache7604f">
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
                latestMoviesContainer.appendChild(movieItem);
            });

            // Initialize Swiper
            new Swiper('.swiper-container', {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                slidesPerView: 1,
                spaceBetween: 10,
                loop: true,
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                },
            });
        })
        .catch(error => console.error('Error fetching JSON data:', error));
});

