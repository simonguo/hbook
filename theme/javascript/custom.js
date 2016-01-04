var $ = require('jquery');
var sidebar = require('./sidebar');

function init() {

	$(".chapter.active").parents(".chapter").addClass("active");
	$(".chapter.active").parents(".chapter").find(">span>.btn-open,>a>.btn-open").removeClass("fa-folder-o").addClass("fa-folder-open-o");


	$(document).on('click', ".chapter>span", function() {
		if ($(this).find(".btn-open").hasClass("fa-folder-o")) {
			$(this).parents(".chapter:eq(0)").addClass("active");
			$(this).find(".btn-open").removeClass("fa-folder-o").addClass("fa-folder-open-o");
		} else {
			$(this).parents(".chapter:eq(0)").removeClass("active");
			$(this).find(".btn-open").removeClass("fa-folder-open-o").addClass("fa-folder-o");
		}
	});


	$(".btn-toggle-summary").click(function() {
		sidebar.toggle();
	});

    console.log("init costom");


}

module.exports = {
	init: init
};
