// Superhero object
let superhero = {
  name: "Superman",
  secretIdentity: "Clark Kent",
  powers: ["super strength", "flight", "x-ray vision"],
  weakness: ["kryptonite"],
  usePower: function (powerName) {
    if (this.powers.includes(powerName)) {
      console.log(`${this.name} uses ${powerName}!`);
    } else {
      console.log(`${this.name} doesn't have the power ${powerName}`);
    }
  },
  revealIdentity: function () {
    console.log(
      `The secret identity of ${this.name} is ${this.secretIdentity}!`
    );
  },
};

//Superhero constructor
function Superhero(name, secretIdentity, powers, weakness) {
  this.name = name;
  this.secretIdentity = secretIdentity;
  this.powers = powers;
  this.weakness = weakness;
}

Superhero.prototype.usePower = function (powerName) {
  if (this.powers.includes(powerName)) {
    console.log(`${this.name} uses ${powerName}!`);
    addLog(`${this.name} uses ${powerName}!`);
  } else {
    console.log(`${this.name} doesn't have the power ${powerName}`);
    addLog(`${this.name} doesn't have the power ${powerName}`);
  }
};

Superhero.prototype.revealIdentity = function () {
  console.log(`The secret identity of ${this.name} is ${this.secretIdentity}!`);
  addLog(`The secret identity of ${this.name} is ${this.secretIdentity}!`);
};

//Villain contructor
function Villain(name, secretIdentity, power, weakness) {
  Superhero.call(this, name, secretIdentity, power, weakness);
}

Villain.prototype = Object.create(Superhero.prototype);
Villain.prototype.constructor = Villain;

Villain.prototype.attack = function (hero) {
  console.log(`${this.name} attacks ${hero.name}!`);
  addLog(`${this.name} attacks ${hero.name}!`);
};

// Creating superheroes
let superman = new Superhero(
  "Superman",
  "Clark Kent",
  ["super strength", "flight", "x-ray vision"],
  "kryptonite"
);
let batman = new Superhero(
  "Batman",
  "Bruce Wayne",
  ["martial arts", "intelligence", "gadgets"],
  "none"
);
let wonderWoman = new Superhero(
  "Wonder Woman",
  "Diana Prince",
  ["super strength", "flight", "combat skills"],
  "none"
);
let flash = new Superhero(
  "Flash",
  "Barry Allen",
  ["super speed", "phasing", "time manipulation"],
  "overexertion"
);
let greenLantern = new Superhero(
  "Green Lantern",
  "Hal Jordan",
  ["power ring", "flight", "energy constructs"],
  "yellow energy"
);

// Creating villains
let joker = new Villain(
  "Joker",
  "Unknown",
  ["insanity", "intelligence"],
  "Batman"
);
let lexLuthor = new Villain(
  "Lex Luthor",
  "Alexander Luthor Jr.",
  ["genius-level intellect", "wealth"],
  "ego"
);
let catwoman = new Villain(
  "Catwoman",
  "Selina Kyle",
  ["acrobatics", "stealth", "claws"],
  "moral code"
);
let darkseid = new Villain(
  "Darkseid",
  "Uxas",
  ["super strength", "omega beams", "godlike powers"],
  "Anti-Life Equation"
);
let harleyQuinn = new Villain(
  "Harley Quinn",
  "Harleen Quinzel",
  ["acrobatics", "weapons proficiency"],
  "Joker"
);

// Array to store all superheroes and villains
let characters = [
  superman,
  batman,
  wonderWoman,
  flash,
  greenLantern,
  joker,
  lexLuthor,
  catwoman,
  darkseid,
  harleyQuinn,
];

characters.forEach((character) => {
  console.log(`${character.name} is ready for battle`);
});

let characterNames = characters.map((character) => character.name);
console.log(characterNames);

let heroes = characters.filter((character) => !(character instanceof Villain));
console.log(heroes);

// Function to start the battle
function startBattle() {
  let log = document.getElementById("battleLog");
  log.innerHTML = "";

  let battleActions = [
    () => superman.usePower("flight"),
    () => batman.usePower("gadgets"),
    () => joker.attack(batman),
    () => superman.revealIdentity(),
    () => joker.attack(superman),
  ];

  battleActions.forEach((action) => {
    action();
  });
}

// Function to add log entries to the battle log div
function addLog(message) {
  let log = document.getElementById("battleLog");
  let entry = document.createElement("p");
  entry.textContent = message;
  log.appendChild(entry);
  log.scrollTop = log.scrollHeight;
}
