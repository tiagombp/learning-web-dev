const monthlyRent = 500;

const yearlyRent = monthlyRent * 12;
console.log(yearlyRent);

const skyIsBlue = true;

if (skyIsBlue) {
    console.log("The sky is blue indeed!");
} else {
    console.log("The sky is... not blue?")
}


const temperatureToday = 86;

if (temperatureToday === 86) {
    console.log("it\'s too damn hot");
} else {
    console.log("it\'s fine. maybe");
}

if (temperatureToday >= 80) {
    console.log("it\'s too damn hot");
} else {
    console.log("it\'s fine. maybe");
}

const friendsAtYourParty = 3;

if (friendsAtYourParty === 0) {
  console.log("Cool, now I have a lot of nachos to myself.");
} else if (friendsAtYourParty <= 4) {
  console.log("Perfect amount to play some Mario Kart.");
} else {
  console.log("Wooooo turn on the dance music!");
}


/*
  Write some code that declares two variables, character and timesToRepeact.
  Using a loop, repeat that character that many times and then console.log it.
  Example, if I had character = 'f' and timesToRepeat = 10, it'd console.log
  'fffff'
*/

const character = 't';
const timesToRepeat = 23;

let output = '';

for (let i = 1; i <= timesToRepeat; i++) {
  output += character;
}

console.log(output);


// functions

function greet(firstName, lastName, honorific, greeting) {
    return `${greeting} ${honorific} ${lastName}! I’m extremely pleased you could join us, ${firstName}! I hope you enjoy your stay, ${honorific} ${lastName}.`;
  }
  
  console.log(greet("Brian", "Holt", "Lord", "Salutations"));
  console.log(greet("Jack", "Sparrow", "Captain", "A-hoy"));
