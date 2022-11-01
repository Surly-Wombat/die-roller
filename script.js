//Initialize stat modifiers
let str = -1;
let dex = 3;
let con = 1;
let int = 0;
let wis = 1;
let cha = 2;
let proficiency = 2;
let expertise = proficiency;

function rollDie(sides) {
  return Math.ceil(Math.random() * sides);
}

function rollCheck(name,modifier) {
  natRoll = Math.ceil(Math.random() * 20);
  dirtyRoll = natRoll + modifier;
  if(natRoll == 1) {
    window.alert(`${name}: Nat 1! (${dirtyRoll})`);
  }
  else if(natRoll == 20) {
    window.alert(`${name}: Nat 20! (${dirtyRoll})`);
  }
  else {
    window.alert(`${name}: ${dirtyRoll}`);
  }
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
