
		$(document).ready(function() {
			$('.toggle').click(function() {
				/* Act on the event */
				$('.toggle').toggleClass('active');
				$('.overlay').toggleClass('active');
				$('.menu').toggleClass('active');
			});
		});
