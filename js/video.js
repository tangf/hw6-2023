var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

	video = document.getElementById("player1");
    video.autoplay = false;
    video.loop = false;
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

document.querySelector("#play").addEventListener("click", function() {
    console.log("Play Video");
    video.play();
	document.querySelector("#volume").textContent = (video.volume * 100) + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause Video");
    video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
    console.log("Slow Down");
    video.playbackRate -= 0.1;
    console.log("New Speed:", video.playbackRate.toFixed(1));
});

document.querySelector("#faster").addEventListener("click", function() {
    console.log("Speed Up");
    video.playbackRate += 0.1;
    console.log("New Speed:", video.playbackRate.toFixed(1));
});

document.querySelector("#skip").addEventListener("click", function() {
    console.log("Skip Ahead");
    if (video.currentTime + 10 < video.duration) {
        video.currentTime += 10;
    } else {
        video.currentTime = 0; 
	}
    console.log("Current Time:", video.currentTime.toFixed(0));
	
});

document.querySelector("#mute").addEventListener("click", function() {
    console.log("Mute/Unmute");
    if (video.muted) {
        video.muted = false;
        document.querySelector("#mute").textContent = "Mute";
    } else {
        video.muted = true;
        document.querySelector("#mute").textContent = "Unmute";
    }
});

document.querySelector("#slider").addEventListener("input", function() {
    console.log("Volume Slider");
    video.volume = this.value / 100; 
    document.querySelector("#volume").textContent = this.value + "%"; 
});

document.querySelector("#vintage").addEventListener("click", function() {
    console.log("Styled - Old School");
    video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
    console.log("Styled - Original");
    video.classList.remove("oldSchool");
});
