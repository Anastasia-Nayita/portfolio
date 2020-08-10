(function() {
	var top = $('#top');
	var slider = $('#slider');
	var box = $('#container');

	slider.on('mousedown', function() {
		box.on('mousemove', function(event) {
			if (event.clientX <= 495) {
				top.css({
					width: event.clientX + 'px'
				});
				slider.css({
					left: event.clientX + 'px'
				});
			} else box.off('mousedown');
		});
	});

	box.on('click', function(event) {
		box.off('mousemove');
	});
})();
