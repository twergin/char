/**
 * Created by twerg_000 on 4/22/2014.
 */
/*jshint browser:true */

var str = {};
str.value = 0;

var int = {};
int.value = 0;

var wis = {};
wis.value = 0;

var dex = {};
dex.value = 0;

var con = {};
con.value = 0;

var cha = {};
cha.value = 0;



var calc = function(ability, mod, elem, elem2) {
    mod = "0";
    ability.value = parseInt(document.getElementById(elem).value);
    if (ability.value < 10) {
        mod = "-1";
    } else if (ability.value < 12) {
        mod = "+0";
    } else if (ability.value <= 13) {
        mod = "+1";
    } else if (ability.value <= 15) {
        mod = "+2";
    } else if (ability.value <= 17) {
        mod = "+3";
    } else if (ability.value <= 19) {
        mod = "+4";
    } else if (ability.value > 19) {
        mod = "+5";
    } else {
        mod = "+0";
    }
    document.getElementById(elem2).innerHTML = "Mod: " + mod;

};

var eachNum = [];

var total1 = {};
total1.value = 0;

var total2 = {};
total2.value = 0;

var total3 = {};
total3.value = 0;

var total4 = {};
total4.value = 0;



var roll = function(times, sides, element, totalDam, totalElement) {

        var plusToHit = document.getElementById("plustohit").value;
        var damageTimes = "";
        var sideNum = "";
        eachNum = [];
        totalDam.value = 0;
        document.getElementById(element).innerHTML = "";
        document.getElementById(totalElement).innerHTML = "";
        document.getElementById(element).innerHTML = "Result: ";
        damageTimes = parseInt(document.getElementById(times).value);
        sideNum = parseInt(document.getElementById(sides).value);

        for (var i = 0; i < damageTimes; i++) {
            var result = (Math.floor(Math.random() * sideNum + 1)).toString();
            eachNum.push(result);
        }
        document.getElementById(element).innerHTML = "Result: " + eachNum.toString();
        for (var j = 0; j < eachNum.length; j++) {
            totalDam.value += parseInt(eachNum[j]);

        }
        totalDam.value += +plusToHit;
        document.getElementById(totalElement).innerHTML = "Total: " + totalDam.value.toString();
};




var findLevel = function(spellLevel, uses, results, totals) {
    var d = document.getElementById(uses);
    var f = document.getElementById(results);
    var g = document.getElementById(totals);
    f.className = "";
    d.className="";

    e = document.getElementById(spellLevel).value.toString();
    d.className = 'level' + e;
    f.className = f.className + ('lev' + e);
    g.className += ' tot' + e;
};



var perDay = function(spellNumber) {

    var uses = parseInt(document.getElementById(spellNumber).value);

    if(uses > 0) {
        uses--;
    } else if (uses == 0){

    var cl2 = document.getElementsByClassName('lev' + e);
        for (var j= 0; j < cl2.length; j++) {
            cl2[j].innerHTML = "None Remaining";
        }
    var cl3 = document.getElementsByClassName('tot' + e);
        for (var h = 0; h < cl3.length; h++) {
            cl3[h].innerHTML = "";
        }

    }
    uses.toString();
    var clName = document.getElementsByClassName('level' + e);
    for(var i = 0;i < clName.length;i++){
        clName[i].value = uses;
    }
};

var save = function() {
    var name = document.getElementById('name').value;
    var race = document.getElementById('race').value;
    var charClass = document.getElementById('charClass').value;
    var sex = document.getElementById('sex').value;
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;
    var level = document.getElementById('level').value;
    var xp = document.getElementById('xp').value;
    var proficiencies = document.getElementById('proficiencies').value;

    var str = document.getElementById('str').value;
    var int = document.getElementById('int').value;
    var wis = document.getElementById('wis').value;
    var dex = document.getElementById('dex').value;
    var con = document.getElementById('con').value;
    var cha = document.getElementById('cha').value;

    var hp = document.getElementById('hp').value;
    var ac = document.getElementById('ac').value;
    var gold = document.getElementById('gold').value;
    var plusAttack = document.getElementById('attack').value;
    var plusDamage = document.getElementById('plustohit').value;

    var wep1 = document.getElementById('weapon1').value;
    var times1 = document.getElementById('damage1').value;
    var sides1 = document.getElementById('side1').value;
    var notes1 = document.getElementById('notes1').value;
    var wep2 = document.getElementById('weapon2').value;
    var times2 = document.getElementById('damage2').value;
    var sides2 = document.getElementById('side2').value;
    var notes2 = document.getElementById('notes2').value;
    var wep3 = document.getElementById('weapon3').value;
    var times3 = document.getElementById('damage3').value;
    var sides3 = document.getElementById('side3').value;
    var notes3 = document.getElementById('notes3').value;

    var item1 = document.getElementById('item1').value;
    var desc1 = document.getElementById('desc1').value;
    var item2 = document.getElementById('item2').value;
    var desc2 = document.getElementById('desc2').value;
    var item3 = document.getElementById('item3').value;
    var desc3 = document.getElementById('desc3').value;
    var item4 = document.getElementById('item4').value;
    var desc4 = document.getElementById('desc4').value;
    var item5 = document.getElementById('item5').value;
    var desc5 = document.getElementById('desc5').value;

    var skill1 = document.getElementById('skill1').value;
    var tion1 = document.getElementById('tion1').value;
    var skill2 = document.getElementById('skill2').value;
    var tion2 = document.getElementById('tion2').value;
    var skill3 = document.getElementById('skill3').value;
    var tion3 = document.getElementById('tion3').value;
    var skill4 = document.getElementById('skill4').value;
    var tion4 = document.getElementById('tion4').value;
    var skill5 = document.getElementById('skill5').value;
    var tion5 = document.getElementById('tion5').value;



    localStorage.setItem('name', name);
    localStorage.setItem('race', race);
    localStorage.setItem('charClass', charClass);
    localStorage.setItem('sex', sex);
    localStorage.setItem('height', height);
    localStorage.setItem('weight', weight);
    localStorage.setItem('level', level);
    localStorage.setItem('xp', xp);
    localStorage.setItem('proficiencies', proficiencies);

    localStorage.setItem('str', str);
    localStorage.setItem('int', int);
    localStorage.setItem('wis', wis);
    localStorage.setItem('dex', dex);
    localStorage.setItem('con', con);
    localStorage.setItem('cha', cha);

    localStorage.setItem('hp', hp);
    localStorage.setItem('ac', ac);
    localStorage.setItem('gold', gold);
    localStorage.setItem('attack', plusAttack);
    localStorage.setItem('plustohit', plusDamage);

    localStorage.setItem('weapon1', wep1);
    localStorage.setItem('damage1', times1);
    localStorage.setItem('side1', sides1);
    localStorage.setItem('notes1', notes1);
    localStorage.setItem('weapon2', wep2);
    localStorage.setItem('damage2', times2);
    localStorage.setItem('side2', sides2);
    localStorage.setItem('notes2', notes2);
    localStorage.setItem('weapon3', wep3);
    localStorage.setItem('damage3', times3);
    localStorage.setItem('side3', sides3);
    localStorage.setItem('notes3', notes3);

    localStorage.setItem('item1', item1);
    localStorage.setItem('desc1', desc1);
    localStorage.setItem('item2', item2);
    localStorage.setItem('desc2', desc2);
    localStorage.setItem('item3', item3);
    localStorage.setItem('desc3', desc3);
    localStorage.setItem('item4', item4);
    localStorage.setItem('desc4', desc4);
    localStorage.setItem('item5', item5);
    localStorage.setItem('desc5', desc5);

    localStorage.setItem('skill1', skill1);
    localStorage.setItem('tion1', tion1);
    localStorage.setItem('skill2', skill2);
    localStorage.setItem('tion2', tion2);
    localStorage.setItem('skill3', skill3);
    localStorage.setItem('tion3', tion3);
    localStorage.setItem('skill4', skill4);
    localStorage.setItem('tion4', tion4);
    localStorage.setItem('skill5', skill5);
    localStorage.setItem('tion5', tion5);

};

var load = function() {
    var name = localStorage.getItem('name');
    var race = localStorage.getItem('race');
    var charClass = localStorage.getItem('charClass');
    var sex = localStorage.getItem('sex');
    var height = localStorage.getItem('height');
    var weight = localStorage.getItem('weight');
    var level = localStorage.getItem('level');
    var xp = localStorage.getItem('xp');
    var proficiencies = localStorage.getItem('proficiencies');

    var str2 = localStorage.getItem('str');
    var int2 = localStorage.getItem('int');
    var wis2 = localStorage.getItem('wis');
    var dex2 = localStorage.getItem('dex');
    var con2 = localStorage.getItem('con');
    var cha2 = localStorage.getItem('cha');

    var hp = localStorage.getItem('hp');
    var ac = localStorage.getItem('ac');
    var gold = localStorage.getItem('gold');
    var plusAttack = localStorage.getItem('attack');
    var plusDamage = localStorage.getItem('plustohit');

    var wep1 = localStorage.getItem('weapon1');
    var times1 = localStorage.getItem('damage1');
    var sides1 = localStorage.getItem('side1');
    var notes1 = localStorage.getItem('notes1');
    var wep2 = localStorage.getItem('weapon2');
    var times2 = localStorage.getItem('damage2');
    var sides2 = localStorage.getItem('side2');
    var notes2 = localStorage.getItem('notes2');
    var wep3 = localStorage.getItem('weapon3');
    var times3 = localStorage.getItem('damage3');
    var sides3 = localStorage.getItem('side3');
    var notes3 = localStorage.getItem('notes3');

    var item1 = localStorage.getItem('item1');
    var desc1 = localStorage.getItem('desc1');
    var item2 = localStorage.getItem('item2');
    var desc2 = localStorage.getItem('desc2');
    var item3 = localStorage.getItem('item3');
    var desc3 = localStorage.getItem('desc3');
    var item4 = localStorage.getItem('item4');
    var desc4 = localStorage.getItem('desc4');
    var item5 = localStorage.getItem('item5');
    var desc5 = localStorage.getItem('desc5');

    var skill1 = localStorage.getItem('skill1');
    var tion1 = localStorage.getItem('tion1');
    var skill2 = localStorage.getItem('skill2');
    var tion2 = localStorage.getItem('tion2');
    var skill3 = localStorage.getItem('skill3');
    var tion3 = localStorage.getItem('tion3');
    var skill4 = localStorage.getItem('skill4');
    var tion4 = localStorage.getItem('tion4');
    var skill5 = localStorage.getItem('skill5');
    var tion5 = localStorage.getItem('tion5');

    document.getElementById('name').value = name;
    document.getElementById('race').value = race;
    document.getElementById('charClass').value = charClass;
    document.getElementById('sex').value = sex;
    document.getElementById('height').value = height;
    document.getElementById('weight').value = weight;
    document.getElementById('level').value = level;
    document.getElementById('xp').value = xp;
    document.getElementById('proficiencies').value = proficiencies;

    document.getElementById('str').value = str2;
    document.getElementById('int').value = int2;
    document.getElementById('wis').value = wis2;
    document.getElementById('dex').value = dex2;
    document.getElementById('con').value = con2;
    document.getElementById('cha').value = cha2;

    document.getElementById('hp').value = hp;
    document.getElementById('ac').value = ac;
    document.getElementById('gold').value = gold;
    document.getElementById('attack').value = plusAttack;
    document.getElementById('plustohit').value = plusDamage;

    document.getElementById('weapon1').value = wep1;
    document.getElementById('damage1').value = times1;
    document.getElementById('side1').value = sides1;
    document.getElementById('notes1').value = notes1;
    document.getElementById('weapon2').value = wep2;
    document.getElementById('damage2').value = times2;
    document.getElementById('side2').value = sides2;
    document.getElementById('notes2').value = notes2;
    document.getElementById('weapon3').value = wep3;
    document.getElementById('damage3').value = times3;
    document.getElementById('side3').value = sides3;
    document.getElementById('notes3').value = notes3;

    document.getElementById('item1').value = item1;
    document.getElementById('desc1').value = desc1;
    document.getElementById('item2').value = item2;
    document.getElementById('desc2').value = desc2;
    document.getElementById('item3').value = item3;
    document.getElementById('desc3').value = desc3;
    document.getElementById('item4').value = item4;
    document.getElementById('desc4').value = desc4;
    document.getElementById('item5').value = item5;
    document.getElementById('desc5').value = desc5;

    document.getElementById('skill1').value = skill1;
    document.getElementById('tion1').value = tion1;
    document.getElementById('skill2').value = skill2;
    document.getElementById('tion2').value = tion2;
    document.getElementById('skill3').value = skill3;
    document.getElementById('tion3').value = tion3;
    document.getElementById('skill4').value = skill4;
    document.getElementById('tion4').value = tion4;
    document.getElementById('skill5').value = skill5;
    document.getElementById('tion5').value = tion5;

};












