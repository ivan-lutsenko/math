		var flag = true;
		$('.numb').keypress(function(e) {
		if (!(e.which==8 || e.which==44 ||e.which==45 ||e.which==47 ||e.which==58 ||e.which==46 ||(e.which>47 && e.which<58)))
			{ 
				console.log(e.which);
				return false;
			}
		});
		$('.menu').click(function(){
			$('nav').toggleClass('visible');
			$('body').toggleClass('over');
		});
		$('.resh').click(function(){
			if ($('.numb').val() == "-3:7" || $('.numb').val() == "-3/7")
			{
				//Ответ верный
				$('.block-img-1').removeClass('visible-img');
				$('.block-img-2').addClass('visible-img');
				$('.form-block .text-1').text('Ты молодец, отличная работа!!!');
			}
			else
			{
				//Ответ не верный
				$('.block-img-1').addClass('visible-img');
				$('.block-img-2').removeClass('visible-img');
				$('.form-block .text-1').text('Ошибка. Посмотри внимательно!!!');
			}
			$('.form').css({'top':'0px', 'bottom':'0px'});
			$('.form').animate({
				opacity: "1"
			},500);
			$('body').toggleClass('over');
		});
		$('.icon-2 img').click(function(){
			//Ответ не верный
			$('.block-img-1').addClass('visible-img');
			$('.block-img-2').removeClass('visible-img');
			$('.form-block .text-1').text('Посмотри внимательно!!!');
			$('.form').css({'top':'0px', 'bottom':'0px'});
			$('.form').animate({
				opacity: "1"
			},500);
			$('body').toggleClass('over');
		});
		$('.form').click(function(){
			if (flag)
			{
				function func(){
					$('.form').css({'top':'-100%', 'bottom':'100%'});
				}
				$('.form').animate({
					opacity: "0"
				},500);
				setTimeout(func, 500);
				$('body').toggleClass('over');
			}
			else
				flag = true;
		});
		$('.inner').click(function(){
			flag = false;
		});
		$('.close').click(function(){
			flag = false;
			function func(){
				$('.form').css({'top':'-100%', 'bottom':'100%'});
			}
			$('.form').animate({
					opacity: "0"
				},500);
			setTimeout(func, 500);
			$('body').toggleClass('over');
		});
		$('.btn').click(function(){
			flag = false;
			function func(){
				$('.form').css({'top':'-100%', 'bottom':'100%'});
			}
			$('.form').animate({
					opacity: "0"
				},500);
			setTimeout(func, 500);
			$('body').toggleClass('over');
		});