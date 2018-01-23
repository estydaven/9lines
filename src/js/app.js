$(document).ready(() => {
	function setValue(_val) {
		let START = -115;
		let delta = 2;
		let currentNumber = $('#level__number').text(_val);

		$({numberValue: currentNumber}).animate({numberValue: 410}, {
			duration: 1200,
			easing: 'linear',
			step() {
				$('#level__number').text(Math.ceil(this.numberValue));
			},
		});

		let deg = START + _val * delta;

		if (deg > 95) {
			deg = 75;
		}
		$('#arrow').css({transform: `rotate(${deg}deg)`});
	}

	$('#testParam').change(function () {
		let value = $(this).val();

		setValue(value);
	}).change();
});
