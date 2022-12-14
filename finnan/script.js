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
//number of d6 for sneak attack (Rogue)
let sneakDice = 1;

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
    let modifier = dex + prof;
    rollCheck("Dexterity Save", modifier);
}

document.getElementById("conSave").onclick = function () {
    rollCheck("Constitution Save", con);
}

document.getElementById("intSave").onclick = function () {
    let modifier = int + prof;
    rollCheck("Intelligence Save", modifier);
}

document.getElementById("wisSave").onclick = function () {
    rollCheck("Wisdom Save", wis);
}

document.getElementById("chaSave").onclick = function () {
    rollCheck("Charisma Save", cha);
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
    let modifier = wis + prof;
    rollCheck("Perception Check",modifier);
}

document.getElementById("performance").onclick = function() {
    rollCheck("Performance Check",cha);
}

document.getElementById("persuasion").onclick = function() {
    let modifier = cha + prof + expert;
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
    let modifier = dex + prof + expert;
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
    roll = rollDie(8);
    hp = roll + con;
    window.alert(`Hit Die: ${roll} + ${con} = ${hp}`);
}

document.getElementById("normalAttack").onclick = function() {
    let modifier = dex + prof;
    rollCheck("Normal Attack",modifier);
}

document.getElementById("shortsword").onclick = function() {
    let roll = rollDie(6);
    let damage = roll + dex;
    window.alert(`Shortsword Damage: ${roll} + ${dex} = ${damage}`);
}

document.getElementById("shortswordSneak").onclick = function() {
    let roll = rollDie(6);
    let modifier = dex + rollDice(sneakDice,6);
    let damage = roll + modifier;
    window.alert(`Shortsword Sneak Damage: ${roll} + ${modifier} = ${damage}`);
}

document.getElementById("shortswordSecond").onclick = function() {
    let roll = rollDie(6);
    window.alert(`Second Shortsword Damage: ${roll}`);
}

document.getElementById("shortswordSecondSneak").onclick = function() {
    let roll = rollDie(6);
    let modifier = rollDice(sneakDice,6);
    let damage = roll + modifier;
    window.alert(`Second Shortsword Sneak Damage: ${roll} + ${modifier} = ${damage}`);
}

document.getElementById("blaster").onclick = function() {
    let roll = rollDie(8);
    let damage = roll + dex;
    window.alert(`Blaster Damage: ${roll} + ${dex} = ${damage}`);
}

document.getElementById("blasterSneak").onclick = function() {
    let roll = rollDie(8);
    let modifier = dex + rollDice(sneakDice,6);
    let damage = roll + modifier;
    window.alert(`Blaster Sneak Damage: ${roll} + ${modifier} = ${damage}`);
}

document.getElementById("dagger").onclick = function() {
    let roll = rollDie(4);
    let damage = roll + dex;
    window.alert(`Dagger Damage: ${roll} + ${dex} = ${damage}`);
}

document.getElementById("daggerSneak").onclick = function() {
    let roll = rollDie(4);
    let modifier = dex + rollDice(sneakDice,6);
    let damage = roll + modifier;
    window.alert(`Dagger Sneak Damage: ${roll} + ${modifier} = ${damage}`);
}
