$(document).ready(function() {

	var defColor = 'white';
	var allColors = 'red blue green yellow white';

	var isDragging = false;

	$('.box').on('mousedown', function() {
		isDragging = true;
	}).on('mouseup', function() {
		isDragging = false;
	})

	$('.box').on('mouseover', function() {
		if (isDragging) {
			$(this).addClass(color);
		}
	})



	$('.box').on('dblclick', function() {
		$(this).removeClass(color);
	})

	$('#reset').on('click', function() {
	    $('.box').removeClass(allColors);
	})

	$('#red').on('click', function() {
		color = 'red';
	})

	$('#green').on('click', function() {
		color = 'green';
	})

	$('#blue').on('click', function() {
		color = 'blue';
	})

	$('#yellow').on('click', function() {
		color = 'yellow';
	})

	$('#white').on('click', function() {
		color = 'white';
	})

})

