//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible

// variables

var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
var ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
var demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },

var userName = {
  window.prompt("What's your name?");

}

    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech];

    //When the page loads, use the window.prompt() command to ask for the user’s name. When the user responds, use a conditional to check that the type of the returned value is a string and that it is not equal to a blank string
    //(a blank string in JavaScript is expressed like this “”). If the user has entered a non-blank string, display this in the console: Hi [user’s name]!

    if (typeof userName === "string" && userName.length !== 1) {
      console.log("Hi " + userName + "!");
    } else {
      console.log("OK, I'll just call you User.");
    };

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
});
