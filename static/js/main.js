$(document).ready(function (){
	var input = document.createElement('input'); 
	var speechSupport = 'speech' in input || 'onwebkitspeechchange' in input;
	var eventName = "onwebkitspeechchange" in input ? "webkitspeechchange" : "speechchange";

	if (speechSupport) {
		$('#insertSpeechInput').show();
		$('#insertSpeechInput input').on(eventName, function(e){
			var speech = $(this).val();
			$(this).val('');

			var padeditor = require('ep_etherpad-lite/static/js/pad_editor').padeditor;

			return padeditor.ace.callWithAce(function (ace) {
				rep = ace.ace_getRep();
				ace.ace_replaceRange(rep.selStart, rep.selEnd, speech);
			}, "speechInput");
		});
	}
});
