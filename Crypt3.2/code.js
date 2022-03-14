function crypt () {

    let result = 0;
    let chance = document.getElementById('chance').value;
    let stateCount = document.getElementById('stateCount').value;
    let mass = false;
    let flag = false;
    let sumCheck = 0;
    let add = '';
    let massChance = [];
    for (let j = 0; j < chance.length; j++) {
        if (chance[j] === ',') mass = true;
    }
    if (mass) {
        for (let i = 0; i < chance.length;) {
            if (chance[i] === ' ') i++;
            else if (chance[i] !== ',') {
                add += chance[i];
                i++
            } else {
                massChance.push(add);
                add = '';
                i++
            }
        }
        massChance.push(add);
        for (let i = 0; i < massChance.length; i++) {
            sumCheck += +massChance[i];
        }
        if (massChance.length !== +stateCount || sumCheck !== 1) {
            flag = true;
            document.getElementById('error').classList.add('active');
        } else {
            flag = false;
            document.getElementById('error').classList.remove('active');
        }
        if (!flag) {
            for (let i = 0; i < massChance.length; i++) {
                massChance[i] = Number(massChance[i]);
            }
            if (massChance.length < stateCount)
                for (let i = 0; i < (stateCount - massChance.length); i++) {
                    massChance.push(massChance[massChance.length - 1])
                }
            for (let i = 0; i < massChance.length; i++) {
                if (massChance[i] === 1) {
                    result = 0;
                    break;
                }
            }
            for (let i = 0; i < stateCount; i++) {
                if (massChance[i] === 1) {
                    result = 0;
                    break;
                }
                result += massChance[i] * Math.log2(1 / massChance[i]);
                console.log(Math.log2(1 / massChance[i]));
                console.log('res: ', massChance[i] * Math.log2(1 / massChance[i]));
            }
        document.getElementById('1').innerHTML = 'Результат: ' + result;
        } else {
            document.getElementById('1').innerHTML = 'Результат: ';
        }
    }
    else
        {
            if (chance * stateCount !== 1) {
                flag = true;
                document.getElementById('error').classList.add('active');
            } else {
                flag = false;
                document.getElementById('error').classList.remove('active');
            }
            if (!flag) {
                for (let i = 0; i < stateCount; i++) {
                    result = Math.abs(Math.log2(chance));
                }
            } else {
                document.getElementById('1').innerHTML = 'Результат: ';
            }
        document.getElementById('1').innerHTML = 'Результат: ' + result;
        return result;
    }
}
