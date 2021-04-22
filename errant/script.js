var inputReady = true;
var input = $(".404-input");
input.focus();
$(".container").on("click", function (e) {
	input.focus();
});

input.on("keyup", function (e) {
	$(".new-output").text(input.val());
});

$(".four-oh-four-form").on("submit", function (e) {
	e.preventDefault();
	var val = $(this).children($(".404-input")).val().toLowerCase();
	var href;

	if (val === "редут") {
		showAnswer();
		resetInput();
	} else if (val === "подсказка" || val === "hint") {
		showHint();
		resetInput();
	} else if (val === "кодовое слово" || val === "кодовоеслово") {
		showCode();
		resetInput();
	} else {
		resetForm();
	}
});

function resetForm(withAnswer) {
	var message = "НЕИЗВЕСТНАЯ КОМАНДА";
	var input = $(".404-input");

	$(".new-output").removeClass("new-output");
	input.val("");
	$(".terminal").append(
		'<p class="prompt">' +
			message +
			'</p><p class="prompt output new-output"></p>'
	);

	$(".new-output").velocity("scroll"), { duration: 100 };
}

function resetInput(withAnswer) {
	var input = $(".404-input");

	$(".new-output").removeClass("new-output");
	input.val("");
	$(".terminal").append('<p class="prompt output new-output"></p>');

	$(".new-output").velocity("scroll"), { duration: 100 };
}

function showHint() {
	$(".terminal").append(
		"<div class='answer'>" + "<p class='prompt'>ЗАГЛЯНИ ВНУТРЬ</p>" + "</div>"
	);

	var lines = $(".answer p");
	$.each(lines, function (index, line) {
		setTimeout(function () {
			$(line).css({
				opacity: 1,
			});

			textEffect($(line));
		}, index * 100);
	});

	$(".new-output").velocity("scroll"), { duration: 100 };
}

function showCode() {
	$(".terminal").append(
		"<div class='answer'>" + "<p class='prompt'>ТЫ СЕРЬЕЗНО?</p>" + "</div>"
	);

	var lines = $(".answer p");
	$.each(lines, function (index, line) {
		setTimeout(function () {
			$(line).css({
				opacity: 1,
			});

			textEffect($(line));
		}, index * 100);
	});

	$(".new-output").velocity("scroll"), { duration: 100 };
}

function showAnswer() {
	$(".terminal").append(
		"<div class='answer'>" +
			"<p class='prompt'>ПОЗДРАВЛЯЮ, ПЕРЕХОДИ К ПОСЛЕДНЕМУ ЭТАПУ</p>" +
			"<p class='prompt'>ФИАЛ 22.7 8.8 23.7 2.8 30.3 13.5 25.5 11.12 17.8 АНАКРЕОНА</p>" +
			"</div>"
	);

	var lines = $(".answer p");
	$.each(lines, function (index, line) {
		setTimeout(function () {
			$(line).css({
				opacity: 1,
			});

			textEffect($(line));
		}, index * 100);
	});

	$(".new-output").velocity("scroll"), { duration: 100 };
}

function textEffect(line) {
	var alpha = [";", ".", ",", ":", ";", "~", "`"];
	var animationSpeed = 10;
	var index = 0;
	var string = line.text();
	var splitString = string.split("");
	var copyString = splitString.slice(0);

	var emptyString = copyString.map(function (el) {
		return [alpha[Math.floor(Math.random() * alpha.length)], index++];
	});

	emptyString = shuffle(emptyString);

	$.each(copyString, function (i, el) {
		var newChar = emptyString[i];
		toUnderscore(copyString, line, newChar);

		setTimeout(function () {
			fromUnderscore(copyString, splitString, newChar, line);
		}, i * animationSpeed);
	});
}

function toUnderscore(copyString, line, newChar) {
	copyString[newChar[1]] = newChar[0];
	line.text(copyString.join(""));
}

function fromUnderscore(copyString, splitString, newChar, line) {
	copyString[newChar[1]] = splitString[newChar[1]];
	line.text(copyString.join(""));
}

function shuffle(o) {
	for (
		var j, x, i = o.length;
		i;
		j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
	);
	return o;
}
