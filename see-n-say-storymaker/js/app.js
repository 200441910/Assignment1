// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
// Load the data

//Decalare array variable and stored all data in five diffrent aarays
var textToSpeak = [
	['The turkey', 'mom', 'dad', 'the dog', 'my teacher', 'the elephant', 'the cat'],
	['sat on', 'ate', 'danced with', 'saw', 'doesn\'t like', 'kissed'],
	['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'],
	['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'],
	['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes']
];

// Working functionality for the left hand side buttons


//Variable declaration for subject button on left side 
var speakbuttonone = document.querySelector('button.subjects');

//Variable declaration for verbs button on left side
var speakbuttontwo = document.querySelector('button.verbs');

//Variable declaration for adjectives button on left side
var speakbuttonthree = document.querySelector('button.adjectives');

//Variable declaration for objects button on left side
var speakbuttonfour = document.querySelector('button.objects');

//Variable declaration for places button on left side
var speakbuttonfive = document.querySelector('button.places');


// Working functionality for the right hand side button


//Variable declaration for subject button on right side that speak random word
var speakrightbuttonone = document.querySelector('button.subjects.right');

//Variable declaration for verbs button on right side that speak random word
var speakrightbuttontwo = document.querySelector('button.verbs.right');

//Variable declaration for adjectives button on right side that speak random word
var speakrightbuttonthree = document.querySelector('button.adjectives.right');

//Variable declaration for objects button on right side that speak random word
var speakrightbuttonfour = document.querySelector('button.objects.right');

//Variable declaration for places button on right side that speak random word
var speakrightbuttonfive = document.querySelector('button.places.right');

//Variable declaration for surprises button
var speakSurprisesButton = document.querySelector('button.surprises');

//Variable declaration for playback button
var speakPlaybackButton = document.querySelector('button.playback');

//speaker element
var speakerImg = document.querySelector('img.speaker');

var theSentence = Array(5);


/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Cancel the previous speak
	synth.cancel();
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);

	// Display the sound wave when speak starting
	utterThis.onstart = function (event) {
		speakerImg.style.display = 'unset';
	}
	utterThis.rate = 0.7;
	// Actually speak the text
	synth.speak(utterThis);

	// Conceal the sound wave when speak ending
	utterThis.onend = function (event) {
		speakerImg.style.display = 'none';
	}
}

/* Event Listeners for random textToSpeak selction in arrays*/



// onclick event handler for textToSpeak speake in Subject Arrays

speakbuttonone.addEventListener('click', function() {
	speakNow(textToSpeak[0].join(','));
});




// onclick event handler for textToSpeak speake in Verbs Arrays

speakbuttontwo.addEventListener('click', function() {
	speakNow(textToSpeak[1].join(','));
});




// onclick event handler for textToSpeak speake in Adjectives array
speakbuttonthree.addEventListener('click', function() {
	speakNow(textToSpeak[2].join(','));
});




// onclick event handler for textToSpeak speake in Objects array
speakbuttonfour.addEventListener('click', function() {
	speakNow(textToSpeak[3].join(','));
});



// onclick event handler for textToSpeak speake in Objects array Places array
speakbuttonfive.addEventListener('click', function() {
	speakNow(textToSpeak[4].join(','));
});



// onclick event handler for that speaks the random text from the Subjects array
speakrightbuttonone.addEventListener('click', function() {
	theSentence[0] = randomValueFromArray(textToSpeak[0]);
	speakNow(theSentence[0]);
});



// onclick event handler for that speaks the random text from the Verbs array
speakrightbuttontwo.addEventListener('click', function() {
	theSentence[1] = randomValueFromArray(textToSpeak[1]);
	speakNow(theSentence[1]);
});



// Onclick handler for the button that speaks the random text contained in the Adjectives array
speakrightbuttonthree.addEventListener('click', function() {
	theSentence[2] = randomValueFromArray(textToSpeak[2]);
	speakNow(theSentence[2]);
});


// Onclick handler for the button that speaks the random text contained in the Objects array
speakrightbuttonfour.addEventListener('click', function() {
	theSentence[3] = randomValueFromArray(textToSpeak[3]);
	speakNow(theSentence[3]);
});




// onclick event handler for that speaks the random text from  the Places array
speakrightbuttonfive.addEventListener('click', function() {
	theSentence[4] = randomValueFromArray(textToSpeak[4]);
	speakNow(theSentence[4]);
});



// Onclick handler for the surprises button
speakSurprisesButton.addEventListener('click', function() {
	for (var i = 0; i < textToSpeak.length; i++) {
		theSentence[i] = randomValueFromArray(textToSpeak[i]);
	}
	speakNow(theSentence.join(' '));
});




// Onclick handler for the playback sbutton 
speakPlaybackButton.addEventListener('click', function() {
	speakNow(theSentence.join(' '));
});


/* Random array function for pass the valure from arrays rendomly
--------------------------------------------------*/

function randomValueFromArray(array){
	return array[Math.floor(Math.random()*array.length)];
}