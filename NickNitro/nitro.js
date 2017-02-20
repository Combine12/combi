var nitro = new Howl({
	src: ["./sound/Nitro.wav"],
	loop: true,
});
var nitroDie = new Howl({
	src: ["./sound/UUUHONK.wav"],
	loop: false,
});
nitro.play();


var update_time = new Date();

var percent_time = 0.57686;

var rate = 1;
var rate_timer = percent_time;

var noHonks = false;
var honked = false;

function update() {

	if ( rate > 2.5 ) {
		document.getElementById("msg1").innerHTML = "NICK NITRO. DEMOLITION IS MY MISSION.";	
	}
	

	var new_time = new Date();
	var delta = new_time.getTime() - update_time.getTime();
	update_time.setTime(new_time.getTime());

	rate_timer -= rate * delta / 1000;

	if (rate_timer <= 0) {
			rate_timer += percent_time;
			rate += 0.01;
			nitro.rate(rate)
			document.getElementById("speed").innerHTML = "SPEED: " + (rate * 100).toFixed(0) + "%";

	}

	if ( noHonks == true ) {

		document.getElementById("secretNick").style.top = (rate - Math.random() * rate * 2 + Math.random() * 2) + "px";
		document.getElementById("secretNick").style.left = (rate - Math.random() * rate * 2 + Math.random() * 2) + "px";

		} else {

		if ( rate < 100.0 ) {
			document.getElementById("secretNick").style.top = (rate - Math.random() * rate * 2 + Math.random() * 2) + "px";
			document.getElementById("secretNick").style.left = (rate - Math.random() * rate * 2 + Math.random() * 2) + "px";
		}
		else {
			if ( honked == false ) {
				if ( noHonks == false ) {
					honk();
				}
			
			}
		}
		}

	requestAnimationFrame(update);
 	
}

function honk() {
	nitroDie.play();
	honked = true;
	document.getElementById("msg2").innerHTML = "Nick Nitro's battery has run out, but his music will keep going and going and going.";
}

function run() {
	update_time = new Date();
	requestAnimationFrame(update);
}