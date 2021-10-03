new fullpage("#fullpage", {
	autoScrolling: true,
	navigation: true,
	lazyLoading: true,
	afterLoad: function () {
		document.body.style.opacity = "1";
	},
});

function toggleDropdown() {
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
	if (!event.target.matches(".dropbtn")) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains("show")) {
				openDropdown.classList.remove("show");
			}
		}
	}
};
