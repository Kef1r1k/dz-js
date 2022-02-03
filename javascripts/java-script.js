$(document).ready(function(){
	$(".red, .orange").click(function(){
		$(this).toggleClass("yellow");
	});
});

$(document).ready(function(){
	$(".pink, .cyan").click(function(){
		$(this).toggleClass("orange");
	});
});

$(document).ready(function(){
	$(".violet, .black").click(function(){
		$(this).toggleClass("green2");
	});
});

$(document).ready(function(){
	$(".yellow, .green").click(function(){
		$(this).toggleClass("violet");
	});
});

$(document).ready(function(){
	$(".gray, .blue").click(function(){
		$(this).toggleClass("black");
	});
});

$(document).ready(function(){
	$("div").click(function(){
		$(this).css({
			height: function(index, value) {
				return parseFloat (value) +100;
			}
		});
	});
});
