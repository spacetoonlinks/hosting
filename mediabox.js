$('.popup').magnificPopup({
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 400,
	preloader: false,
	iframe: {
		patterns: {
			youtube: {
				index: 'youtube.com',
				id: 'v=',
				src: 'https://www.youtube.com/embed/%id%?rel=0&autoplay=1'
			}
		}
	},
});
