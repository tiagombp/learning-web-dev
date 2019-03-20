// Create an object using bracket and dot notation that represents the characters and related data you may find in a game of Clue;

let game = {};

game["murderer"] = "???";
game.characters = ["Mr. White", "Mrs. Yellow", "Mr. Orange", "Mrs. Blue", "Mrs. Green"];

// or

 
game.characters[0] = "Miss Scarlet";
game.characters.push("Mr. Green");
// pushes to the back of the array (to the end) 


game.weapons = ["candlestick", "knife", "lead pipe", "hammer", "letter opener"];
game.rooms = ["Ballroom", "Parlour", "Library", "Diner Hall"];

// 2. Create an object that looks like this:
// {"name": "Rusty", "room":"kitchen", "weapon":"candlestick"}
// Extract out the weapon and location using destructuring

let combination = {'name': "Rusty", 'room': "Kitchen", 'weapon': "candlestick"};

let {room, weapon} = combination;

room; // "Kitchen"
weapon; // "candlestick"