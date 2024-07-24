        document.addEventListener("DOMContentLoaded", function() {
            const slidesContainer = document.getElementById('slides-container');
            const jsonUrl = 'https://raw.githubusercontent.com/spacetoonlinks/hosting/main/tab-home-slide.json'; 

            fetch(jsonUrl)
                .then(response => response.json())
                .then(data => {
                    data.forEach(slide => {
                        const slideItem = document.createElement('div');
                        slideItem.classList.add('swiper-slide');
                        slideItem.innerHTML = `
						    <div class="swiper-slide">
                            <!--slider-background img-->
                            <div class="slider-bg"> 
                                <img src="${slide.bgImgSrc}" alt="${slide.altText}"> 
                            </div>
                            <!--slider-background img-->
                            <!--slider container-->
                            <div class="slider-inner container">
                                <!--slider detail-->
                                <div class="slider-detail">
                                    <span class="quality">${slide.quality}</span> 
                                    <h2 class="title">${slide.title}</h2>
                                    <div class="description">${slide.description}</div>
                                    <div class="info-action">
                                        <div class="info">
                                            <div class="d-flex align-items-center"> 
                                                <span class="rating">${slide.rating}</span> 
                                                <span class="star-rating">
                                                    <i class="fa-solid fa-star"></i> 
                                                    <span>${slide.starRating}</span>
                                                </span> 
                                            </div>
                                            <div class="genre"> 
                                                ${slide.genres.map(genre => `<a href="#">${genre}</a>`).join(' ')}
                                            </div>
                                        </div>
                                        <div class="actions d-flex align-items-center">
                                            <a class="play btn btn-primary play rounded-pill" href="#">
                                                <i class="fa-solid fa-play"></i> 
                                                <span>Play</span> 
                                                <span>Now</span>
                                            </a> 
                                        </div>
                                    </div>
                                </div>
                                <!--slider detail-->
                                <!--slider-img--next-img--> 
                                <div class="slider-trailer">
                                    <div> 
                                        <img src="${slide.bgImgSrc}" alt="${slide.altText}"> 
                                    </div>
                                    <button style="background-image: url('${slide.trailerImgSrc}')" class="swiper-button-next"></button> 
                                </div>
                                <!--slider-img--next-img--> 
                            </div>
                            <!--slider container-->
							</div>
                        `;
                        slidesContainer.appendChild(slideItem);
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
                
