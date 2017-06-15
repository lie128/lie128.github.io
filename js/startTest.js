var startTestPage = new StartTestPage();

function StartTestPage() {
	//jQuery("#page").showLoading() ;

	$("#prevStep").unbind("click").bind("click", function() {
		getPreQuestionPage();
	})

	$("#nextStep").unbind("click").bind("click", function() {
		submitAnswer();
	})

	loadLi();
}

function getPreQuestionPage() {
	//得到上一题

}

function submitAnswer() {
	if($(".curSpan").length == 0) {
		//如果没有选项被选中
		showDialog.showInfoDialog({
			title: " ",
			msgInfo: "请选择答案!"
		});
		return;
	}
}

function loadLi() {
	//答题
	$(".testNumLi").find("li").on("click", function(event) {
		var parentUl = $(this).parents(".testNumLi");

		//单选
		if(parentUl.hasClass("radioTest")) {
			$(this).find('.enCode').addClass('curSpan').parents('li').siblings('li').find('.enCode').removeClass('curSpan')
			if($(this).find('.addInput').length > 0) {
				$('.addInput').show()
			} else {
				$('.addInput').hide()
			}
		} else {
			// 多选
			// 是否已经选中
			if($(this).find('.enCode').hasClass('curSpan')) {
				$(this).find('.enCode').removeClass('curSpan')
				if($(this).find('.addInput').length > 0) {
					$('.addInput').hide()
				}
			} else {
				$(this).find('.enCode').addClass('curSpan')
				if($(this).find('.addInput').length > 0) {
					$('.addInput').show();
				}
			}
		}
	})
}