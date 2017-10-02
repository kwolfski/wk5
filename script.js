//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible

// variables

var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },

    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },

    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },

    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech];

var user = window.prompt("What's your name?");






    //When the page loads, use the window.prompt() command to ask for the user’s name. When the user responds, use a conditional to check that the type of the returned value is a string and that it is not equal to a blank string
    //(a blank string in JavaScript is expressed like this “”). If the user has entered a non-blank string, display this in the console: Hi [user’s name]!

    if (typeof user === "string" && user.length !== 1) {
      console.log("Hi " + user + "!");
    }
    else {
      console.log("OK, I'll just call you User.");
    };

    //You may notice that a new property of “authorAge” has been added to each of the speech objects. We are going to use the “Donate” button to ask the user which author is their favorite and then display the age of the specified author.
    //To do this, start by using another window.prompt() command to ask the user’s favorite author when the “Donate” button is clicked. Then use a SWITCH statement to check which author name they entered.
    //Display something like this after the user provides their answer:

    //[author name] was [author age] during this speech.

document.getElementById('BtnDonate').addEventListener('click', function(){
  var answer = window.prompt("Who is your favorite author: Churchill, Ghandi, Demosthenes?");
switch (answer) {
  case "Churchill" :
    console.log(speechesArray[0].author + "was" + speechesArray[0].authorAge + "during this speech.")
    break;

  case "Ghandi" :
  console.log(speechesArray[1].author + "was" + speechesArray[1].authorAge + "during this speech.")
    break;

  case "Churchill" :
  console.log(speechesArray[2].author + "was" + speechesArray[2].authorAge + "during this speech.")
    break;

  default: console.log("Did you spell the name correctly?")
}
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
