function crypt (btnNumber) {
    let result = '';
    let reg = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
    let text = '';
    let alph = '';
    switch (btnNumber) {
        case 1:
            text = document.getElementById('text').value;
            alph = document.getElementById('alphabet').value;
            document.getElementById('thirdText').value = document.getElementById('text').value;
            break;
        case 2:
            text = document.getElementById('secondText').value;
            alph = document.getElementById('secondAlphabet').value;
            break;
        case 3:
            text = document.getElementById('thirdText').value;
            alph = document.getElementById('thirdAlphabet').value;
            break;
    }
    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < reg.length; j++) {
            if (reg[j][0].toLowerCase() === text[i].toLowerCase()) {
                result = result + (alph[j][0]);
            }
        }
    }
    switch (btnNumber) {
        case 1:
            document.getElementById('1').innerHTML = 'Результат: ' + result;
            break;
        case 2:
            document.getElementById('2').innerHTML = 'Результат: ' + result;
            break;
        case 3:
            document.getElementById('3').innerHTML = 'Результат: ' + result;
            break;
    }
    document.getElementById('secondText').value = result;
    return result;
}

/*Делаем композицию двух алфавитов*/
function createComposition () {
    let firstAlphabet = document.getElementById('alphabet').value;
    let secondAlphabet = document.getElementById('secondAlphabet').value;
    let regularAlphabet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
    let result = '';
    let add;
    for (let i = 0; i < secondAlphabet.length; i++) {
        let j = regularAlphabet.indexOf(firstAlphabet[i]);
        result += secondAlphabet[j];
    }
    /*for (let i = 0; i < firstAlphabet.length; i++) {
        add[i] = regularAlphabet.indexOf(firstAlphabet[i]);
    }*/
    document.getElementById('thirdAlphabet').value = result;
}
