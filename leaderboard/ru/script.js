var url = "1hYIk13OHVp1YpnDco1OdO4SbAF4JCnW5nktdW3EPcOI";

function renderTable(data) {
	let html = "<tr>";
	html = "<tr><th>№</th><th>ВРЕМЯ</th><th>НИК</th></tr>";
	data.forEach((item, index) => {
		html += `<tr><td>${index + 1}</td><td>${item.timestamp}</td><td>${item.ник}</td></tr>`;
	});
	document.getElementById("leaderboard").innerHTML = "<table>" + html + "</table>";
}

let n = 0;

function getData() {
	if (n > 5) {
		n = 0;
		document.getElementById("leaderboard").innerHTML = "<div class='error'>Не удалось получить данные с таблицы.</br>Попробуйте позже</div>";
	}
	fetch(`https://spreadsheets.google.com/feeds/list/${url}/1/public/values?alt=json`)
		.then((res) => res.json())
		.then((json) => {
			if (!json.feed.entry) {
				return (document.getElementById("leaderboard").innerHTML = "<div class='empty'>Таблица лидеров пуста.</br>Ты можешь стать первым!</div>");
			}
			const data = [];
			const rows = json.feed.entry;
			for (const row of rows) {
				const formattedRow = {};
				for (const key in row) {
					if (key.startsWith("gsx$")) {
						formattedRow[key.replace("gsx$", "")] = row[key].$t;
					}
				}
				data.push(formattedRow);
			}
			renderTable(data);
		})
		.catch(() => {
			n = n + 1;
			getData();
		});
}

getData();
