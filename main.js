var player = {
    money : 10,
    generator1 : 0,
    generator2 : 0,
    generator3 : 0,
    generator4 : 0,
    generator5 : 0,
    generator6 : 0,
    generator7 : 0,
    generator8 : 0,
    gen1mult : 1,
    gen2mult : 1,
    gen3mult : 1,
    gen4mult : 1,
    gen5mult : 1,
    gen6mult : 1,
    gen7mult : 1,
    gen8mult : 1,
    gen1cost : 10,
    gen2cost : 100,
    gen3cost : 1e4,
    gen4cost : 1e6,
    gen5cost : 1e9,
    gen6cost : 1e13,
    gen7cost : 1e18,
    gen8cost : 1e24,
    gen1buyed : 0,
    gen2buyed : 0,
    gen3buyed : 0,
    gen4buyed : 0,
    gen5buyed : 0,
    gen6buyed : 0,
    gen7buyed : 0,
    gen8buyed : 0,
    multicost : 1e6,
    timecost : 1e15,
    timespeed : 100,
    moneymult : 1,
    InfinityPoints : 0
}
var savefile = player;
var savegame = JSON.parse(localStorage.getItem("savefile"));

const moneyamount =  document.querySelector('.amount1');
const IPamount =  document.querySelector('.amount2');
const gen1amount = document.querySelector('.generator1amount');
const gen2amount = document.querySelector('.generator2amount');
const gen3amount = document.querySelector('.generator3amount');
const gen4amount = document.querySelector('.generator4amount');
const gen5amount = document.querySelector('.generator5amount');
const gen6amount = document.querySelector('.generator6amount');
const gen7amount = document.querySelector('.generator7amount');
const gen8amount = document.querySelector('.generator8amount');
const gen1multiplayer = document.querySelector('.generator1mult');
const gen2multiplayer = document.querySelector('.generator2mult');
const gen3multiplayer = document.querySelector('.generator3mult');
const gen4multiplayer = document.querySelector('.generator4mult');
const gen5multiplayer = document.querySelector('.generator5mult');
const gen6multiplayer = document.querySelector('.generator6mult');
const gen7multiplayer = document.querySelector('.generator7mult');
const gen8multiplayer = document.querySelector('.generator8mult');
const generator1cost = document.querySelector('.cost1');
const generator2cost = document.querySelector('.cost2');
const generator3cost = document.querySelector('.cost3');
const generator4cost = document.querySelector('.cost4');
const generator5cost = document.querySelector('.cost5');
const generator6cost = document.querySelector('.cost6');
const generator7cost = document.querySelector('.cost7');
const generator8cost = document.querySelector('.cost8');
const generator1buyed = document.querySelector('.gen1buyed');
const generator2buyed = document.querySelector('.gen2buyed');
const generator3buyed = document.querySelector('.gen3buyed');
const generator4buyed = document.querySelector('.gen4buyed');
const generator5buyed = document.querySelector('.gen5buyed');
const generator6buyed = document.querySelector('.gen6buyed');
const generator7buyed = document.querySelector('.gen7buyed');
const generator8buyed = document.querySelector('.gen8buyed');
const generator1buy = document.querySelector('.generatorbuy1');
const generator2buy = document.querySelector('.generatorbuy2');
const generator3buy = document.querySelector('.generatorbuy3');
const generator4buy = document.querySelector('.generatorbuy4');
const generator5buy = document.querySelector('.generatorbuy5');
const generator6buy = document.querySelector('.generatorbuy6');
const generator7buy = document.querySelector('.generatorbuy7');
const generator8buy = document.querySelector('.generatorbuy8');
const multibuy = document.querySelector('.multiplayer');
const multibuybutton = document.querySelector('.multbuybutton');
const timefastercost = document.querySelector('.timecost');
const timegoesfaster = document.querySelector('.timefast');
const loading = document.querySelector('.loading');

load()
setInterval(save,200)

function game() {
    player.money += (player.generator1/10 * player.gen1mult * player.moneymult)
    player.generator1 += (player.generator2/10 * player.gen2mult)
    player.generator2 += (player.generator3/10 * player.gen3mult)
    player.generator3 += (player.generator4/10 * player.gen4mult)
    player.generator4 += (player.generator5/10 * player.gen5mult)
    player.generator5 += (player.generator6/10 * player.gen6mult)
    player.generator6 += (player.generator7/10 * player.gen7mult)
    player.generator7 += (player.generator8/10 * player.gen8mult)
    moneyamount.innerText = scientific(Math.round(player.money));
    gen1amount.innerText = scientific(Math.round(player.generator1));
    gen2amount.innerText = scientific(Math.round(player.generator2));
    gen3amount.innerText = scientific(Math.round(player.generator3));
    gen4amount.innerText = scientific(Math.round(player.generator4));
    gen5amount.innerText = scientific(Math.round(player.generator5));
    gen6amount.innerText = scientific(Math.round(player.generator6));
    gen7amount.innerText = scientific(Math.round(player.generator7));
    gen8amount.innerText = scientific(Math.round(player.generator8));
    gen1multiplayer.innerText = scientific(Math.round(player.gen1mult));
    gen2multiplayer.innerText = scientific(Math.round(player.gen2mult));
    gen3multiplayer.innerText = scientific(Math.round(player.gen3mult));
    gen4multiplayer.innerText = scientific(Math.round(player.gen4mult));
    gen5multiplayer.innerText = scientific(Math.round(player.gen5mult));
    gen6multiplayer.innerText = scientific(Math.round(player.gen6mult));
    gen7multiplayer.innerText = scientific(Math.round(player.gen7mult));
    gen8multiplayer.innerText = scientific(Math.round(player.gen8mult));
    generator1buyed.innerText = scientific(player.gen1buyed);
    generator2buyed.innerText = scientific(player.gen2buyed);
    generator3buyed.innerText = scientific(player.gen3buyed);
    generator4buyed.innerText = scientific(player.gen4buyed);
    generator5buyed.innerText = scientific(player.gen5buyed);
    generator6buyed.innerText = scientific(player.gen6buyed);
    generator7buyed.innerText = scientific(player.gen7buyed);
    generator8buyed.innerText = scientific(player.gen8buyed);
    if (player.money >= player.gen1cost) {
        generator1buy.style.backgroundColor = 'white';
    }
    else {
        generator1buy.style.backgroundColor = 'rgb(167, 167, 167)';
    }
    if (player.money >= player.gen2cost) {
        generator2buy.style.backgroundColor = 'white';
    }
    else {
        generator2buy.style.backgroundColor = 'rgb(167, 167, 167)';
    }
    if (player.money >= player.gen3cost) {
        generator3buy.style.backgroundColor = 'white';
    }
    else {
        generator3buy.style.backgroundColor = 'rgb(167, 167, 167)';
    }
    if (player.money >= player.gen4cost) {
        generator4buy.style.backgroundColor = 'white';
    }
    else {
        generator4buy.style.backgroundColor = 'rgb(167, 167, 167)';
    }
    if (player.money >= player.gen5cost) {
        generator5buy.style.backgroundColor = 'white';
    }
    else {
        generator5buy.style.backgroundColor = 'rgb(167, 167, 167)';
    }
    if (player.money >= player.gen6cost) {
        generator6buy.style.backgroundColor = 'white';
    }
    else {
        generator6buy.style.backgroundColor = 'rgb(167, 167, 167)';
    }
    if (player.money >= player.gen7cost) {
        generator7buy.style.backgroundColor = 'white';
    }
    else {
        generator7buy.style.backgroundColor = 'rgb(167, 167, 167)';
    }
    if (player.money >= player.gen8cost) {
        generator8buy.style.backgroundColor = 'white';
    }
    else {
        generator8buy.style.backgroundColor = 'rgb(167, 167, 167)';
    }
    if (player.money >= player.multicost) {
        multibuybutton.style.backgroundColor = 'white';
    }
    else {
        multibuybutton.style.backgroundColor = 'rgb(167, 167, 167)';
    }
    if (player.money >= player.timecost) {
        timegoesfaster.style.backgroundColor = 'white';
    }
    else {
        timegoesfaster.style.backgroundColor = 'rgb(167, 167, 167)';
    }
    if (player.money >= 1.79e308) {
        player.InfinityPoints += 1
        player.money = 10 * (player.InfinityPoints + 1)
        player.generator1 = 0
        player.generator2 = 0
        player.generator3 = 0
        player.generator4 = 0
        player.generator5 = 0
        player.generator6 = 0
        player.generator7 = 0
        player.generator8 = 0
        player.gen1mult = 1 + player.InfinityPoints
        player.gen2mult = 1 + player.InfinityPoints
        player.gen3mult = 1 + player.InfinityPoints
        player.gen4mult = 1 + player.InfinityPoints
        player.gen5mult = 1 + player.InfinityPoints
        player.gen6mult = 1 + player.InfinityPoints
        player.gen7mult = 1 + player.InfinityPoints
        player.gen8mult = 1 + player.InfinityPoints
        player.gen1cost = 10
        player.gen2cost = 100
        player.gen3cost = 1e4
        player.gen4cost = 1e6
        player.gen5cost = 1e9
        player.gen6cost = 1e13
        player.gen7cost = 1e18
        player.gen8cost = 1e24
        player.gen1buyed = 0
        player.gen2buyed = 0
        player.gen3buyed = 0
        player.gen4buyed = 0
        player.gen5buyed = 0
        player.gen6buyed = 0
        player.gen7buyed = 0
        player.gen8buyed = 0
        player.multicost = 1e6
        player.timecost = 1e15
        player.timespeed = 100
        player.moneymult = 1
        generator1cost.innerText = scientific(player.gen1cost)
        generator2cost.innerText = scientific(player.gen2cost)
        generator3cost.innerText = scientific(player.gen3cost)
        generator4cost.innerText = scientific(player.gen4cost)
        generator5cost.innerText = scientific(player.gen5cost)
        generator6cost.innerText = scientific(player.gen6cost)
        generator7cost.innerText = scientific(player.gen7cost)
        generator8cost.innerText = scientific(player.gen8cost)
        IPamount.innerText = scientific(player.InfinityPoints)
        multibuy.innerText = scientific(player.multicost)
        timefastercost.innerText = scientific(player.timecost)
        setInterval(game,100);
    }
    loading.style.display = 'none';
}

function scientific(amount) {
    let power = Math.floor(Math.log10(amount))
    let mantissa = amount / Math.pow(10,power)
    if (power < 3) return Math.round(amount.toFixed(2))
    return mantissa.toFixed(2) + "e" + power
}

function gen1buy() {
    if (player.money >= player.gen1cost) {
        player.money -= player.gen1cost
        player.generator1 += 1
        player.gen1buyed += 1
        if (player.gen1buyed % 10 == 0) {
            player.gen1mult *= 4
            player.gen1cost *= 1e3
            generator1cost.innerText = scientific(player.gen1cost)
        }
    }
}
function gen2buy() {
    if (player.money >= player.gen2cost) {
        player.money -= player.gen2cost
        player.generator2 += 1
        player.gen2buyed += 1
        if (player.gen2buyed % 10 == 0) {
            player.gen2mult *= 4
            player.gen2cost *= 1e4
            generator2cost.innerText = scientific(player.gen2cost)
        }
    }
}
function gen3buy() {
    if (player.money >= player.gen3cost) {
        player.money -= player.gen3cost
        player.generator3 += 1
        player.gen3buyed += 1
        if (player.gen3buyed % 10 == 0) {
            player.gen3mult *= 4
            player.gen3cost *= 1e5
            generator3cost.innerText = scientific(player.gen3cost)
        }
    }
}
function gen4buy() {
    if (player.money >= player.gen4cost) {
        player.money -= player.gen4cost
        player.generator4 += 1
        player.gen4buyed += 1
        if (player.gen4buyed % 10 == 0) {
            player.gen4mult *= 4
            player.gen4cost *= 1e6
            generator4cost.innerText = scientific(player.gen4cost)
        }
    }
}
function gen5buy() {
    if (player.money >= player.gen5cost) {
        player.money -= player.gen5cost
        player.generator5 += 1
        player.gen5buyed += 1
        if (player.gen5buyed % 10 == 0) {
            player.gen5mult *= 4
            player.gen5cost *= 1e8
            generator5cost.innerText = scientific(player.gen5cost)
        }
    }
}
function gen6buy() {
    if (player.money >= player.gen6cost) {
        player.money -= player.gen6cost
        player.generator6 += 1
        player.gen6buyed += 1
        if (player.gen6buyed % 10 == 0) {
            player.gen6mult *= 4
            player.gen6cost *= 1e10
            generator6cost.innerText = scientific(player.gen6cost)
        }
    }
}
function gen7buy() {
    if (player.money >= player.gen7cost) {
        player.money -= player.gen7cost
        player.generator7 += 1
        player.gen7buyed += 1
        if (player.gen7buyed % 10 == 0) {
            player.gen7mult *= 4
            player.gen7cost *= 1e12
            generator7cost.innerText = scientific(player.gen7cost)
        }
    }
}
function gen8buy() {
    if (player.money >= player.gen8cost) {
        player.money -= player.gen8cost
        player.generator8 += 1
        player.gen8buyed += 1
        if (player.gen8buyed % 10 == 0) {
            player.gen8mult *= 4
            player.gen8cost *= 1e15
            generator8cost.innerText = scientific(player.gen8cost)
        }
    }
}
function multiplayerbuy() {
    if (player.money >= player.multicost) {
        player.money -= player.multicost
        player.moneymult *= 2
        player.multicost *= 1e3
        multibuy.innerText = scientific(player.multicost)
    }
}
function timefast() {
    if (player.money >= player.timecost) {
        player.money -= player.timecost
        player.timespeed = player.timespeed / 1.5
        setInterval(game,player.timespeed);
        player.timecost *= 1e5
        timefastercost.innerText = scientific(player.timecost)
    }
}
function save() {
    savefile = player;    
    localStorage.setItem("savefile",JSON.stringify(savefile));
}
function load() {
    savegame = JSON.parse(localStorage.getItem("savefile"));
    if (savegame == null) {
        loading.style.display = 'none';
        return;
    }
    player = savegame;
    generator1cost.innerText = scientific(player.gen1cost)
    generator2cost.innerText = scientific(player.gen2cost)
    generator3cost.innerText = scientific(player.gen3cost)
    generator4cost.innerText = scientific(player.gen4cost)
    generator5cost.innerText = scientific(player.gen5cost)
    generator6cost.innerText = scientific(player.gen6cost)
    generator7cost.innerText = scientific(player.gen7cost)
    generator8cost.innerText = scientific(player.gen8cost)
    IPamount.innerText = scientific(player.InfinityPoints)
    multibuy.innerText = scientific(player.multicost)
    timefastercost.innerText = scientific(player.timecost)
    setInterval(game,player.timespeed);
}