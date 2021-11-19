var video = document.getElementById("player1");

window.addEventListener("load", function() {
	video.pause();
	console.log("Good job opening the window");
});

document.querySelector("#play").addEventListener("click", function() {

	let volume = document.getElementById("volume");
	let volume_slider = document.getElementById("slider");

	volume.innerHTML = volume_slider.value + "%";
	volume_level = volume_slider.value / 100;
	video.volume = volume_level;

	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.95;
	console.log('New Speed is ' + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate / 0.95;
	console.log('New Speed is ' + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	let video_time = video.currentTime;
	console.log("Original Location " + video_time);

	video_time = video_time + 15;

	if (video_time >= 68.92){
		video_time = 0;
		video.currentTime = video_time;
		console.log("Going back to beginning")
		console.log("New Location " + video_time)
	}
	else{
		video.currentTime = video_time;
		console.log("New Location " + video_time)
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	let mute = document.getElementById("mute");
	if (mute.innerHTML == "Mute") {
		video.muted = true;
		mute.innerHTML = "Unmute";
	}
	else if (mute.innerHTML == "Unmute") {
		mute.innerHTML = "Mute";
		video.muted = false;
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	let volume = document.getElementById("volume");
	let volume_slider = document.getElementById("slider");

	volume.innerHTML = volume_slider.value + "%";
	volume_level = volume_slider.value / 100;
	video.volume = volume_level;
	console.log(volume_level)
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

