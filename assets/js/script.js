$(function (){
	//


	var container = $('#container')
	var fairy = $('#fairy')
	var obstacle = $('.obstacle')
	var obstacle1 = $('#obstacle1')
	var obstacle2 = $('#obstacle2')
	var	score = $('#score')
	var speed_span = $('#speed')
	var	restart	= $('#restart')

	var contwidth = parseInt(container.width());
	var contheight = parseInt(container.height());
	var obsposition = parseInt(obstacle.css('right'));
	var obsheight = parseInt(obstacle.css('height'));
	var fairy_left = parseInt(fairy.css('left'));
	var fairy_height = parseInt(fairy.height());
	var speed = 10;

	var go_up = false;
	var score_updated = false;
	var game_over = false;


	var the_training = setInterval(function () {

		if(collision(fairy, obstacle1) || collision(fairy, obstacle2) || parseInt(fairy.css('top')) <=0 || parseInt(fairy.css('top')) > contheight - fairy_height){
			stop_the_training();

		}else {

		var obscurrent_position = parseInt(obstacle.css('right'));

			if(obscurrent_position > contwidth - fairy_left) {
				if (score_updated ===false) {
				score.text(parseInt(score.text()) + 1);
				score_updated = true;
			}
		}

		if (obscurrent_position > contwidth) {

			var new_height = parseInt(Math.random()* -100);

			// height
			obstacle1.css('height', obsheight + new_height);
			obstacle2.css('height', obsheight - new_height);

			//speed
			speed = speed + 1;
			speed_span.text(speed);

			score_updated = false;

			obscurrent_position = obsposition;
		}

			
		//move the obstacle to the left
		obstacle.css('right', obscurrent_position + speed);

		if(go_up === false){
			go_down();
		}
		}

	}, 40);


	$(document).on('keydown', function(e){
		var key =e.keyCode;
		if(key ===32 && go_up ===false && game_over ===false){
			go_up = setInterval(up, 50);
		}

	});

	$(document).on('keyup', function(e){
		var key =e.keyCode;
		if(key ===32){
			clearInterval(go_up);
			go_up = false;
		}

	});


	function go_down() {
		fairy.css('top', parseInt(fairy.css('top')) + 5);
	}

	function up(){	
		fairy.css('top', parseInt(fairy.css('top')) - 12);
	}

	function stop_the_training(){
		clearInterval(the_training);
		game_over = true;
		restart.slideDown();

	}

	restart.click(function(){
		location.reload();
	});

	function collision($div1, $div2) {
		var x1 = $div1.offset().left;
		var y1 = $div1.offset().top;
		var h1 = $div1.outerHeight(true);
		var w1 = $div1.outerWidth(true);
		var b1 = y1 + h1;
		var r1 = x1 + w1;
		var x2 = $div2.offset().left;
		var y2 = $div2.offset().top;
		var h2 = $div2.outerHeight(true);
		var w2 = $div2.outerWidth(true);
		var b2 = y2 + h2;
		var r2 = x2 + w2;

		if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
		return true;

	}



})