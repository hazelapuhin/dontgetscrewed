$(function (){
	//


	var container = $('#container')
	var fairy = $('#fairy')
	var obstacle = $('.obstacle')
	var obstacle1 = $('#obstacle1')
	var obstacle2 = $('#obstacle2')
	var	score = $('#score')
	var speed = $('#speed')
	var	restart	= $('#restart')

	var contwidth = parseInt(container.width());
	var contheight = parseInt(container.height())
	var obsposition = parseInt(obstacle.css('right'));
	var obsheight = parseInt(obstacle.css('height'));
	var fairy_left = parseInt(fairy.css('left'));
	var fairy_height = parseInt(fairy.height());
	var speed = 50;

	var the_training = setInterval(function () {

		var obscurrent_position = parseInt(obstacle.css('right'));

		if (obscurrent_position > contwidth) {
			var new_height = parseInt(Math.random()*100);
		}

			
		//mov the obstacle to the right
		obstacle.css('right',obscurrent_position + speed);





	}, 40);

})