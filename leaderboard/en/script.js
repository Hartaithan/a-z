var url = "1Lk7V7x5NK87DBXIHinaJBXM3CunytfNqJHElxnQAolk";

function renderTable(data) {
	let html = "<tr>";
	html = "<tr><th>№</th><th>TIMESTAMP</th><th>NICKNAME</th></tr>";
	data.forEach((item, index) => {
		html += `<tr><td>${index + 1}</td><td>${item.timestamp}</td><td>${item.nickname}</td></tr>`;
	});
	document.getElementById("leaderboard").innerHTML = "<table>" + html + "</table>";
}

let n = 0;

function getData() {
	if (n > 5) {
		n = 0;
		document.getElementById("leaderboard").innerHTML = "<div class='error'>Failed to retrieve data from the table.</br>Try again later</div>";
	}
	fetch(`https://spreadsheets.google.com/feeds/list/${url}/1/public/values?alt=json`)
		.then((res) => res.json())
		.then((json) => {
			if (!json.feed.entry) {
				return (document.getElementById("leaderboard").innerHTML = "<div class='empty'>The leaderboard is empty.</br>You can be the first!</div>");
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
