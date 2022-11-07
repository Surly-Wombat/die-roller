//Initialize stat modifiers
let str = 2;
let dex = 1;
let con = 1;
let int = 1;
let wis = 0;
let cha = 1;
//proficiency
let prof = 2;

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
    let modifier = str + prof;
    rollCheck("Strength Save", modifier);
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
    rollCheck("Charisma Save", cha);
}

document.getElementById("acrobatics").onclick = function () {
    rollCheck("Acrobatics Check",dex);
}

document.getElementById("animalHandling").onclick = function() {
    rollCheck("Animal Handling Check",wis);
}

document.getElementById("arcana").onclick = function() {
    rollCheck("Arcana Check",int);
}

document.getElementById("athletics").onclick = function() {
    let modifier = str + prof;
    rollCheck("Athletics Check",modifier);
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
    let modifier = cha + prof;
    rollCheck("Intimidation Check",modifier);
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
    rollCheck("Performance Check",cha);
}

document.getElementById("persuasion").onclick = function() {
    rollCheck("Persuasion Check",cha);
}

document.getElementById("religion").onclick = function() {
    rollCheck("Religion Check",int);
}

document.getElementById("sleightOfHand").onclick = function() {
    rollCheck("Sleight of Hand Check",dex);
}

document.getElementById("stealth").onclick = function() {
    let modifier = dex + prof;
    rollCheck("Stealth Check",modifier);
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
    roll = rollDie(10);
    hp = roll + con;
    window.alert(`Hit Die: ${roll} + ${con} = ${hp}`);
}

document.getElementById("meleeAttack").onclick = function() {
    let modifier = str + prof;
    rollCheck("Melee Attack",modifier);
}

document.getElementById("rangedAttack").onclick = function() {
    let modifier = dex + prof;
    rollCheck("Ranged Attack",modifier);
}

document.getElementById("greatsword").onclick = function() {
    let roll = rollDice(2,6);
    let damage = roll + str;
    window.alert(`Greatsword Damage: ${roll} + ${str} = ${damage}`)
}

document.getElementById("crossbow").onclick = function() {
    let roll = rollDie(8);
    let damage = roll + dex;
    window.alert(`Light Crossbow Damage: ${roll} + ${dex} = ${damage}`);
}