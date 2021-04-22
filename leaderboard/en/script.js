var url_ru = '1hYIk13OHVp1YpnDco1OdO4SbAF4JCnW5nktdW3EPcOI';
var url_en = '1Lk7V7x5NK87DBXIHinaJBXM3CunytfNqJHElxnQAolk';

function init() {
	Tabletop.init({
		key: url_en,
		callback: showInfo,
		simpleSheet: true
	});
}

function showInfo(data) {
	var html = "<tr>";

	html += "<tr><th>№</th><th>TIMESTAMP</th><th>NICKNAME</th></tr>";
	for (i = 0; i < data.length; i++) {
		html += "<td>" + (i+1) + "</td>";
		for (prop in data[i]) {
			html += "<td>" + data[i][prop] + "</td>";
		}
		html += "</tr><tr>";
	}
	document.getElementById("leaderboard").innerHTML = html;

}

init();