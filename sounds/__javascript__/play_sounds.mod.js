	(function () {
		var __name__ = '__main__';
		var play = function (id) {
			document.getElementById ('audio_' + id).play ();
		};
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.play = play;
		__pragma__ ('</all>')
	}) ();
