var phrases = ["Football ", "Traveler ", "Adventurer ", "Cyrophile " , "Foodie "];
var prePhrases = ["a ", "an avid ", "an ", "a ", "a "];
var postPhrases = [" fan ", " ", " ", " ", " "];
var emojis = ["&#x26BD;", "&#x2708;", "&#x1F3D4;","&#x2744;", "&#x1F374;"];
var currentIndex = 0;

function changePhrase() {
  var outputElement = document.getElementById("outputSentence");
  var phrase = phrases[currentIndex];
  var prePhrase = prePhrases[currentIndex];
  var postPhrase = postPhrases[currentIndex];
  var emoji = emojis[currentIndex];
  var sentence = "I'm a passionate " + "<strong>Software Engineer </strong>" + "and " + prePhrase + " <strong>" + phrase + "</strong>" + '<span class="emoji">' + emoji + '</span>' + postPhrase;

  outputElement.innerHTML = sentence;
  currentIndex = (currentIndex + 1) % phrases.length;
  }
setInterval(changePhrase, 3000);

function handleFormSubmit() {
  alert("Form submitted successfully!");
}