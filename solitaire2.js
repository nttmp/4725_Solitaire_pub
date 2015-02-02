var testString = "";
var compareExtension = "";
var caller = "";
var toSwap = "";
var timer = 0;
var RNG = 0;
var windowMinimized = false;
var buttonPresses = 0;
var failures = 0;
var name = "";

//booleans to control the scenarios
isScenario = true;
call = false; //Call scenario control
boss = false; //Boss scenario control
swap = false; //Change extension scenario control

//soundVariables
var fadeIn = new Audio('FadeIn.mp3');
var fadeOut = new Audio('FadeOut.mp3');

//extension variables
var milesExt = "t699";
var kelseyExt = "t635";
var sasiExt = "t174";
var matthewExt = "t239";
var jarExt = "t110";
var skinnyExt = "t324";
var ryanExt = "t634";
var ianExt = "t702";
var colinExt = "t992";
var bleahyExt = "t556";


//setInterval(function () {alert("Hello")}, 3000);
//setInterval(function () {alert("Hello")}, 3000);
//setInterval(update, 3000);
//setInterval(increment, 1000);
//setInterval(RNJesus, 1000);
//setInterval(callScenario, 1000);

setInterval(update, 1000);
setInterval(controller, 16000);

function controller() {
	if (isScenario == true) {
		isScenario = false;
	}
}

function update() {
	if (isScenario == false) {
		RNJesus();
		if (RNG <= 2) {swapScenario();}
		else if (RNG >= 8) {bossScenario();}
		else (callScenario());

	}
	if(call == true) {
		if (buttonPresses == 4) {
			callComparison();
		}
	}

	//if (timer > 1) {
	//	compareInput();		
	//}
}

//Handling the call scenario
function callScenario() {
	isScenario = true;
	call = true;
  	buttonPresses = 0;
  	testString = "";
  	alert("INCOMING PHONE CALL")
  	RNJesus();
  	if (RNG == 0) {compareExtension = milesExt;
  					caller = "Miles";}
  	if (RNG == 1) {compareExtension = kelseyExt;
  					caller = "Kelsey";}
	if (RNG == 2) {compareExtension = sasiExt;
  					caller = "Sasi";}
	if (RNG == 3) {compareExtension = matthewExt;
					caller = "Matthew";}
  	if (RNG == 4) {compareExtension = jarExt;
  					caller = "Jar"; }
  	if (RNG == 5) {compareExtension = skinnyExt;
  					caller = "Skinny";}
  	if (RNG == 6) {compareExtension = ryanExt;
  					caller = "Ryan";}
  	if (RNG == 7) {compareExtension = ianExt;
  					caller = "Ian";}
  	if (RNG == 8) {compareExtension = colinExt;
  					caller = "Colin";}
  	if (RNG == 9) {compareExtension = bleahyExt;
  					caller = "Bleahy";}
	setTimeout(function(){alert("Transfer to " + caller)}, 4000);
}

function callComparison() {
	if (compareExtension == testString) {
		alert("Call transferred. (Success)");
	}
	else if (testString.charAt(0) == "t") {
		alert("Call transferred. (Failure)");
	}
	else {
		alert("Reset.")
		testString = "";
		buttonPresses = 0;
		return;
	}
	testString = "";
	call = false;
	buttonPresses = 0;
	isScenario = false;
}

//Handling boss scenario

function bossScenario() {
	//alert("BOSS IS COMIN");
	fadeIn.play();
	//isScenario = true;
	//boss = true;
	setTimeout(bossCheck, 5000);
  //Play boss walking up sound
  //If the player minimizes the window, set the boolean as such
  //At the end of the sound playing, check to see if the window is down
  //If the window is down, hooray! And play sound of boss walking away
  //If not, BOSS GETS MAD and the timer increments while the score decrements
}

function bossCheck() {
	//alert("Boss check");
	if (windowMinimized == true) {
		alert("Passed the boss check");
	}
	else {
		alert("Failed the boss check");
	}
	fadeOut.play();
	//isScenario = false;
	//boss = false;
}

//The extension changing scenario

function swapExt() {
	isScenario = true;
	swap = true;
	RNJesus();
  	if (RNG == 0) {toSwap = milesExt; name = "Miles";}
  	if (RNG == 1) {toSwap = kelseyExt; name = "Kelsey";}
	if (RNG == 2) {toSwap = sasiExt; name = "Sasi";}
	if (RNG == 3) {toSwap = matthewExt; name = "Matthew";}
  	if (RNG == 4) {toSwap = jarExt; name = "Jar";}
  	if (RNG == 5) {toSwap = skinnyExt; name = "Skinny";}
  	if (RNG == 6) {toSwap = ryanExt; name = "Ryan";}
  	if (RNG == 7) {toSwap = ianExt; name = "Ian";}
  	if (RNG == 8) {toSwap = colinExt; name = "Colin";}
  	if (RNG == 9) {toSwap = bleahyExt; name = "Bleahy's";}
  	toSwap = "t";
  	RNJesus();
  	toSwap = toSwap.concat(RNG.toString());
  	RNJesus();
  	toSwap = toSwap.concat(RNG.toString());
  	RNJesus();
  	toSwap = toSwap.concat(RNG.toString());
  	alert(name + "'s extension is now: " + toSwap.charAt(1)+toSwap.charAt(2)+toSwap.charAt(3));
	isScenario = false;
	swap = false;
}

//UTILITIES

//This handle tracking minimizing the window
		function ChromeVisibilityChange() {
  			if (document.webkitHidden) {
    			//# alert("Chrome Page Minimized");
    			windowMinimized = true;
			}
			else {
				windowMinimized = false;
			}
		}

		function FirefoxVisibilityChange() {
			if (document.hidden) {
				//# alert("Firefox Page Minimized");
				windowMinimized = true;
			}
			else {
				windowMinimized = false;
			}
		}

		document.addEventListener("webkitvisibilitychange", ChromeVisibilityChange, false);
		document.addEventListener("visibilitychange", FirefoxVisibilityChange, false);

//Increment the timer
function increment() {
	timer += 1;
}

//Compare testString
function compareInput() {
	if (testString == "0") {
		alert("yay " + timer);
	}
	else {
		alert("Nay " + timer);
	}
}

//RNG function. Returns between 1 and 9.
function RNJesus() {
	RNG = Math.floor((Math.random() * 10));
	//alert("RNG = " + RNG);
}

//Number Keys
function key0pressed() {
	//alert("key 0 was pressed");
	testString = testString.concat("0");
	buttonPresses += 1;
}

function key1pressed() {
	//alert("key 1 was pressed");
  	testString = testString.concat("1");
	buttonPresses += 1;
}

function key2pressed() {
	//alert("key 2 was pressed");
	testString = testString.concat("2");
	buttonPresses += 1;	
}

function key3pressed() {
	//alert("key 3 was pressed");
	testString = testString.concat("3");
	buttonPresses += 1;	
}

function key4pressed() {
	//alert("key 4 was pressed");
	testString = testString.concat("4");
	buttonPresses += 1;	
}

function key5pressed() {
	//alert("key 5 was pressed");
	testString = testString.concat("5");
	buttonPresses += 1;	
}

function key6pressed() {
	//alert("key 6 was pressed");
	testString = testString.concat("6");
	buttonPresses += 1;	
}

function key7pressed() {
	//alert("key 7 was pressed");
	testString = testString.concat("7");
	buttonPresses += 1;	
}

function key8pressed() {
	//alert("key 8 was pressed");
	testString = testString.concat("8");
	buttonPresses += 1;	
}

function key9pressed() {
	//alert("key 9 was pressed");
	testString = testString.concat("9");
	buttonPresses += 1;
}

function keyTpressed() {
	//alert("key T was pressed");
	testString = testString.concat("t");
	buttonPresses += 1;	
}