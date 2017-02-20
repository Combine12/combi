var gaster1 = new Howl({
	src: ["http://combine12.github.io/404resources/smile.ogg"],
	loop: true,
});
gaster1.play()
requestAnimationFrame(update);


var entryseventeen=["ENTRY NUMBER SEVENTEEN", "DARK, DARKER YET DARKER", "PHOTON READINGS NEGATIVE", "THIS NEXT EXPERIMENT SEEMS VERY", "VERY", "INTERESTING", "WHAT DO YOU TWO THINK?"]


function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}


function update() {
	//document.getElementById("text").style.top = (rate - Math.random() * rate * 2 + Math.random() * 2) + "px";
	//document.getElementById("text").style.left = (rate - Math.random() * rate * 2 + Math.random() * 2) + "px";

	//timerUp = timerUp + 1

	//if ( timerUp > 10 ) {
	document.title = randomChoice(entryseventeen);
	//}
	requestAnimationFrame(update);
}
