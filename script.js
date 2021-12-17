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

var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

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

var player;
window.onYouTubeIframeAPIReady = function () {
  player = new YT.Player("player", {
    height: "390",
    width: "640",
    videoId: "rrW-KSLWzcw",
    playerVars: {
      autoplay: 0,
      loop: 1,
      mute: 1
    }
  });
};

function playVideo() {
  if (player) {
    player.playVideo();
  }
}

var overlay = document.getElementById("overlay");
overlay.onclick = function () {
	overlay.style.setProperty('display', 'none');
  playVideo();
};