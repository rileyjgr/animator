// ----------------------
// Setup
// ----------------------

// Load the Gif
var sup1 = new SuperGif({ gif: document.getElementById('exampleimg') } );
sup1.load(function(){

});

// var sup2 = new SuperGif({ gif: document.getElementById('exampleimg2') } );
// sup2.load(function(){

// });






function getVoices() {
	if(voiceSelecter){
        voiceSelecter.innerHTML = "";
    	var voices = speechSynthesis.getVoices();
    	// iOS returns voices it doesn't let you use.
    	var bIsiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    	var iOSVoiceSet = {};
    	if( bIsiOS ){ 
    		var array = ["Maged","Zuzana","Sara","Anna","Melina","Karen","Serena","Moira","Tessa","Samantha","Monica","Paulina","Satu","Amelie","Thomas","Carmit","Lekha","Mariska","Damayanti","Alice","Kyoko","Yuna","Ellen","Xander","Nora","Zosia","Luciana","Joana","Ioana","Milena","Laura","Alva","Kanya","Yelda","Ting-Ting","Sin-Ji","Mei-Jia"];
    		array.forEach(function(val){
    			iOSVoiceSet[val] = true;
    		});
    	}
    	voices.forEach(function(voice, i) {
    		// only some iOS voices are working, but they are all returned.
    		if( !bIsiOS || voice.name in iOSVoiceSet ){
    			var option = document.createElement('option');
    			option.value = voice.name;
    			option.innerHTML = voice.name;
    			if( voice.lang.substring(0,2) == "en" ){
    				voiceSelecter.insertBefore(option, voiceSelecter.firstChild);
    			}	else {
    				voiceSelecter.appendChild(option);
    			}
    		}
    	});
    }    
}
getVoices();

var playsyncronized = function(){

var text = "Wikipedia is fake news."


	if(!'speechSynthesis' in window){
		instructions.innerHTML = "Speech synthesis is not supported in this browser.  Sorry.";
		document.getElementById('ttsoptions').style.visibility = "hidden";
	}
	else {
		document.getElementById('ttsoptions').style.visibility = "visible";
		if(speechSynthesis.speaking){
			return;
		}
		
		

		// get the selected voice
		var voice = speechSynthesis.getVoices().filter(function(voice){
				return voice.name == "Google US English";
			})[0];

	    // Splitting each utterance up using punctuation is important.  Intra-utterance
	    // punctuation will add silence to the tts which looks bad unless the mouth stops moving
	    // correctly. Better to split it into separate utterances so play_for_duration will move when
	    // talking, and be on frame 0 when not. 

	    // split everything betwen deliminators [.?,!], but include the deliminator.
	    var substrings = text.match(/[^.?,!]+[.?,!]?/g);
	    for (var i = 0, l = substrings.length; i < l; ++i) {
	        var str = substrings[i].trim();

	        // Make sure there is something to say other than the deliminator
	        var numpunc = (str.match(/[.?,!]/g) || []).length;
	        if (str.length - numpunc > 0) {

	        	// suprisingly decent approximation for multiple languages.

	       		// if you change the rate, you would have to adjust
	            var speakingDurationEstimate = str.length * 50;
	            // Chinese needs a different calculation.  Haven't tried other Asian languages.
	            if (str.match(/[\u3400-\u9FBF]/)) {
	                speakingDurationEstimate = str.length * 200;
	            }

	            var msg = new SpeechSynthesisUtterance();

	            (function(dur){
                	msg.addEventListener('start', function(){
                		sup1.play_for_duration(dur);
	                })
                })(speakingDurationEstimate);

	            // The end event is too inacurate to use for animation,
	            // but perhaps it could be used elsewhere.  You might need to push 
	            // the msg to an array or aggressive garbage collection fill prevent the callback
	            // from firing.
	            //msg.addEventListener('end', function (){console.log("too late")}			                
	            
	            msg.text = str;
	            //change voice here
	            msg.voice = voice;

				window.speechSynthesis.speak(msg);
				
				count++;

				
				
			}
			
	    }
    }
    
    document.addEventListener("keypress", function(e) {
        if (e.which == 13) {		
    
            
            playsyncronized();
            
            
        }
    });
	
};