$(document).ready(function() {
	var screen_w = $(window).width();
	if (screen_w > 992) {
		$('#video').append('<video loop muted autobuffer autoplay poster="img/screen.jpg" class="top_video"><source src="video/top_video_big.mp4" type="video/mp4"></video>');
	} else {
		$('#video').append('<video autoplay loop muted playsinline poster="img/screen.jpg" class="top_video"><source src="video/top_video_small.mp4" type="video/mp4"></video>');
	}
});

$(document).ready(function() {
	$("#phone").mask("+7(999) 999-9999");
});
