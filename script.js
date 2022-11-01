//Initialize stat modifiers
let str = -1;
let dex = 3;
let con = 1;
let int = 0;
let wis = 1;
let cha = 2;
//proficiency and expertise (Rogue)
let prof = 2;
let expert = prof;

function rollDie(sides) {
  return Math.ceil(Math.random() * sides);
}

function rollCheck(name,modifier) {
  natRoll = Math.ceil(Math.random() * 20);
  dirtyRoll = natRoll + modifier;
  if(modifier >= 0) {
    window.alert(`${name}: ${natRoll} + ${modifier} = ${dirtyRoll}`);
  }
  else {
    window.alert(`${name}: ${natRoll} - ${Math.abs(modifier)} = ${dirtyRoll}`);
  }
}

document.getElementById("flatJump").onclick = function() {
  document.getElementById("flatBookmark").scrollIntoView(true);
}

document.getElementById("saveJump").onclick = function() {
  document.getElementById("saveBookmark").scrollIntoView(true);
}

document.getElementById("strFlat").onclick = function() {
  rollCheck("Flat Strength",str);
}

document.getElementById("dexFlat").onclick = function() {
  rollCheck("Flat Dexterity",dex);
}

document.getElementById("conFlat").onclick = function() {
  rollCheck("Flat Consitution",con);
}

document.getElementById("intFlat").onclick = function() {
  rollCheck("Flat Intelligence",int);
}

document.getElementById("wisFlat").onclick = function() {
  rollCheck("Flat Wisdom",wis);
}

document.getElementById("chaFlat").onclick = function() {
  rollCheck("Flat Charisma",cha)
}
