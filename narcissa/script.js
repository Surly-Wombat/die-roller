//Initialize stat modifiers
let str = 0;
let dex = 2;
let con = 3;
let int = 0;
let wis = 0;
let cha = 3;
//proficiency
let prof = 2;
//spell attack modifier
let spell = 5;

function rollDie(sides) {
    return Math.ceil(Math.random() * sides);
}

function rollDice(rolls,sides) {
    let result = 0;
    for(let i = 0; i < rolls; i++) {
        result += rollDie(sides);
    }
    return result;
}

function rollCheck(name, modifier) {
    natRoll = Math.ceil(Math.random() * 20);
    dirtyRoll = natRoll + modifier;
    if (modifier >= 0) {
        window.alert(`${name}: ${natRoll} + ${modifier} = ${dirtyRoll}`);
    }
    else {
        window.alert(`${name}: ${natRoll} - ${Math.abs(modifier)} = ${dirtyRoll}`);
    }
}


document.getElementById("flatJump").onclick = function () {
    document.getElementById("flatBookmark").scrollIntoView(true);
}

document.getElementById("saveJump").onclick = function () {
    document.getElementById("saveBookmark").scrollIntoView(true);
}

document.getElementById("skillJump").onclick = function () {
    document.getElementById("skillBookmark").scrollIntoView(true);
}

document.getElementById("specialJump").onclick = function () {
    document.getElementById("specialBookmark").scrollIntoView(true);
}

document.getElementById("attackJump").onclick = function () {
    document.getElementById("attackBookmark").scrollIntoView(true);
}

document.getElementById("spellJump").onclick = function () {
    document.getElementById("spellBookmark").scrollIntoView(true);
}

document.getElementById("strFlat").onclick = function () {
    rollCheck("Flat Strength", str);
}

document.getElementById("dexFlat").onclick = function () {
    rollCheck("Flat Dexterity", dex);
}

document.getElementById("conFlat").onclick = function () {
    rollCheck("Flat Consitution", con);
}

document.getElementById("intFlat").onclick = function () {
    rollCheck("Flat Intelligence", int);
}

document.getElementById("wisFlat").onclick = function () {
    rollCheck("Flat Wisdom", wis);
}

document.getElementById("chaFlat").onclick = function () {
    rollCheck("Flat Charisma", cha)
}

document.getElementById("strSave").onclick = function () {
    rollCheck("Strength Save", str);
}

document.getElementById("dexSave").onclick = function () {
    rollCheck("Dexterity Save", dex);
}

document.getElementById("conSave").onclick = function () {
    let modifier = con + prof;
    rollCheck("Constitution Save", modifier);
}

document.getElementById("intSave").onclick = function () {
    rollCheck("Intelligence Save", int);
}

document.getElementById("wisSave").onclick = function () {
    rollCheck("Wisdom Save", wis);
}

document.getElementById("chaSave").onclick = function () {
    let modifier = cha + prof;
    rollCheck("Charisma Save", modifier);
}

document.getElementById("acrobatics").onclick = function () {
    let modifier = dex + prof;
    rollCheck("Acrobatics Check",modifier);
}

document.getElementById("animalHandling").onclick = function() {
    rollCheck("Animal Handling Check",wis);
}

document.getElementById("arcana").onclick = function() {
    rollCheck("Arcana Check",int);
}

document.getElementById("athletics").onclick = function() {
    rollCheck("Athletics Check",str);
}

document.getElementById("deception").onclick = function() {
    let modifier = cha + prof;
    rollCheck("Deception Check",modifier);
}

document.getElementById("history").onclick = function() {
    rollCheck("History Check",int);
}

document.getElementById("insight").onclick = function() {
    rollCheck("Insight Check",wis);
}

document.getElementById("intimidation").onclick = function() {
    rollCheck("Intimidation Check",cha);
}

document.getElementById("investigation").onclick = function() {
    rollCheck("Investigation Check",int);
}

document.getElementById("medicine").onclick = function() {
    rollCheck("Medicine Check",wis);
}

document.getElementById("nature").onclick = function() {
    rollCheck("Nature Check",int);
}

document.getElementById("perception").onclick = function() {
    rollCheck("Perception Check",wis);
}

document.getElementById("performance").onclick = function() {
    let modifier = cha + prof;
    rollCheck("Performance Check",modifier);
}

document.getElementById("persuasion").onclick = function() {
    let modifier = cha + prof;
    rollCheck("Persuasion Check",modifier);
}

document.getElementById("religion").onclick = function() {
    rollCheck("Religion Check",int);
}

document.getElementById("sleightOfHand").onclick = function() {
    let modifier = dex + prof;
    rollCheck("Sleight of Hand Check",modifier);
}

document.getElementById("stealth").onclick = function() {
    rollCheck("Stealth Check",dex);
}

document.getElementById("survival").onclick = function() {
    rollCheck("Survival Check",wis);
}

document.getElementById("initiative").onclick = function() {
    rollCheck("Initiative",dex);
}

document.getElementById("deathSave").onclick = function() {
    let roll = rollDie(20);
    if (roll == 1) {
        window.alert("Nat 1! 2 fails");
    }
    else if (roll == 20) {
        window.alert("Nat 20! Full success");
    }
    else if (roll < 10) {
        window.alert(`${roll}: 1 fail`)
    }
    else {
        window.alert(`${roll}: 1 success`)
    }
}

document.getElementById("hitDie").onclick = function() {
    roll = rollDie(6);
    hp = roll + con;
    window.alert(`Hit Die: ${roll} + ${con} = ${hp}`);
}

document.getElementById("normalAttack").onclick = function() {
    let modifier = dex + prof;
    rollCheck("Normal Attack",modifier);
}

document.getElementById("crossbow").onclick = function() {
    let roll = rollDie(8);
    let damage = roll + dex;
    window.alert(`Light Crossbow Damage: ${roll} + ${dex} = ${damage}`);
}

document.getElementById("dagger").onclick = function() {
    let roll = rollDie(4);
    let damage = roll + dex;
    window.alert(`Dagger Damage: ${roll} + ${dex} = ${damage}`);
}

document.getElementById("secondDagger").onclick = function() {
    let roll = rollDie(4);
    window.alert(`Second Dagger Damage: ${roll}`);
}

document.getElementById("spellAttack").onclick = function() {
    rollCheck("Spell Attack",spell);
}

document.getElementById("chillTouch").onclick = function() {
    let roll = rollDie(8);
    window.alert(`Chill Touch Damage: ${roll}`);
}

document.getElementById("fireBolt").onclick = function() {
    let roll = rollDie(10);
    window.alert(`Fire Bolt Damage: ${roll}`);
}

document.getElementById("shockingGrasp").onclick = function() {
    let roll = rollDie(8);
    window.alert(`Shocking Grasp Damage: ${roll}`);
}

document.getElementById("chromaticOrb").onclick = function() {
    let roll = rollDice(3,8);
    window.alert(`Chromatic Orb Damage: ${roll}`);
}

document.getElementById("iceKnifeMiss").onclick = function() {
    let roll = rollDice(2,6);
    window.alert(`Ice Knife Damage: ${roll} cold`)
}

document.getElementById("iceKnifeHit").onclick = function() {
    let hit = rollDie(10);
    let explosion = rollDice(2,6);
    window.alert(`Ice Knife Damage: ${hit} piercing + ${explosion} cold`)
}
