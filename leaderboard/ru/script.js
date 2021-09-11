var url = "1hYIk13OHVp1YpnDco1OdO4SbAF4JCnW5nktdW3EPcOI";

function renderTable(data) {
	let html = "<tr>";
	html = "<tr><th>№</th><th>ВРЕМЯ</th><th>НИК</th></tr>";
	data.rows.forEach((item, index) => {
		html += `<tr><td>${index + 1}</td><td>${item.c[0].f}</td><td>${item.c[1].v}</td></tr>`;
	});
	document.getElementById("leaderboard").innerHTML = "<table>" + html + "</table>";
}

let n = 0;

function getData() {
	fetch(`https://docs.google.com/spreadsheets/d/${url}/gviz/tq?`)
		.then((res) => res.text())
		.then((rep) => {
			const { table } = JSON.parse(rep.substr(47).slice(0, -2));
			if (table.rows[0].c[1].v === "НИК") {
				return (document.getElementById("leaderboard").innerHTML = "<div class='empty'>Таблица лидеров пуста.</br>Ты можешь стать первым!</div>");
			}
			renderTable(table);
		})
		.catch(() => {
			document.getElementById("leaderboard").innerHTML = "<div class='error'>Не удалось получить данные с таблицы.</br>Попробуйте позже</div>";
		});
}

getData();
