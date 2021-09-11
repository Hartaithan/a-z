var url = "1Lk7V7x5NK87DBXIHinaJBXM3CunytfNqJHElxnQAolk";

function renderTable(data) {
	let html = "<tr>";
	html = "<tr><th>№</th><th>TIMESTAMP</th><th>NICKNAME</th></tr>";
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
			if (table.rows[0].c[1].v === "NICKNAME") {
				return (document.getElementById("leaderboard").innerHTML = "<div class='empty'>The leaderboard is empty.</br>You can be the first!</div>");
			}
			renderTable(table);
		})
		.catch(() => {
			document.getElementById("leaderboard").innerHTML = "<div class='error'>Failed to retrieve data from the table.</br>Try again later</div>";
		});
}

getData();
