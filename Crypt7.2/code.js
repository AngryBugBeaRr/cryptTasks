function crypt (btnNumber) {
    let result = '';
    let reg = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
    let text = '';
    let index = 0;
    // let rusTextLength = document.getElementById('rusText').value;
    let engTextLength = document.getElementById('engText').value;
    // let armTextLength = document.getElementById('armText').value;
    let rusAlph = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
    let engAlph = 'ABCDEFGHIJKLMNOPQRSTUVXYZ';
    let armAlph = 'ԱԲnԴԵԶԷԸԹԺԻԼԽԾԿՀՁՂՃՄՅՆՇՈՉՊՋՌՍՎՏՐՑՒՓՔևՕՖ'; //39
    // console.log(rusTextLength);
    let length = 13;
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
    }
    switch (btnNumber) {
        case 1:
            for (let i = 0; i < engTextLength; i++) {
                result += rusAlph[getRandomIntInclusive(0, 32)];
            }
            document.getElementById('1').innerHTML = 'Результат: ' + result;
            result = '';
            break;
        case 2:
            for (let i = 0; i < engTextLength; i++) {
                result += engAlph[getRandomIntInclusive(0, 24)];
            }
            document.getElementById('2').innerHTML = 'Результат: ' + result;
            result = '';
            break;
        case 3:
            for (let i = 0; i < engTextLength; i++) {
                result += armAlph[getRandomIntInclusive(0, 38)];
            }
            document.getElementById('3').innerHTML = 'Результат: ' + result;
            result = '';
            break;
        case 4:
            result = document.getElementById('1').innerHTML.substr(11, engTextLength + 11);
            for (let i = 0; i < result.length; i++) {
                let help = 1;
                for (let j = i + 1; j < engTextLength; j++) {
                    if (result[i] === result[j]) {
                        help++;
                        result = result.replace(result[j], '');
                    }
                }
                index += Math.pow(help, 2) / Math.pow(engTextLength, 2);
                help = 0;
            }
            document.getElementById('4').innerHTML = 'Индекс русского текста: ' + Math.trunc(index * 1000) / 1000;
            result = '';
            index = '';
            break;
        case 5:
            result = document.getElementById('2').innerHTML.substr(11, engTextLength + 11);
            for (let i = 0; i < result.length; i++) {
                let help = 1;
                for (let j = i + 1; j < result.length; j++) {
                    if (result[i] === result[j]) {
                        help++;
                        result = result.replace(result[j], '');
                    }
                }
                index += Math.pow(help, 2) / Math.pow(engTextLength, 2);
                help = 0;
            }
            document.getElementById('5').innerHTML = 'Индекс английского текста: ' + Math.trunc(index * 1000) / 1000;
            result = '';
            index = '';
            break;
        case 6:
            result = document.getElementById('3').innerHTML.substr(11, engTextLength + 11);
            for (let i = 0; i < result.length; i++) {
                let help = 1;
                for (let j = i + 1; j < result.length; j++) {
                    if (result[i] === result[j]) {
                        help++;
                        result = result.replace(result[j], '');
                    }
                }
                index += Math.pow(help, 2) / Math.pow(engTextLength, 2);
                help = 0;
            }
            document.getElementById('6').innerHTML = 'Индекс армянского текста: ' + Math.trunc(index * 1000) / 1000;
            result = '';
            index = '';
            break;
        case 7:
            for (let i = 0; i < engTextLength; i++) {
                result += rusAlph[getRandomIntInclusive(0, 32)];
            }
            console.log(result);
            document.getElementById('1').innerHTML = 'Результат: ' + result;
            result = '';
            for (let i = 0; i < engTextLength; i++) {
                result += engAlph[getRandomIntInclusive(0, 24)];
            }
            document.getElementById('2').innerHTML = 'Результат: ' + result;
            result = '';
            for (let i = 0; i < engTextLength; i++) {
                result += armAlph[getRandomIntInclusive(0, 38)];
            }
            document.getElementById('3').innerHTML = 'Результат: ' + result;
            result = '';
            break;
        case 8:
            result = document.getElementById('1').innerHTML.substr(11, engTextLength + 11);
            for (let i = 0; i < result.length; i++) {
                let help = 1;
                for (let j = i + 1; j < engTextLength; j++) {
                    if (result[i] === result[j]) {
                        help++;
                        result = result.replace(result[j], '');
                    }
                }
                index += Math.pow(help, 2) / Math.pow(engTextLength, 2);
                help = 0;
            }
            document.getElementById('4').innerHTML = 'Индекс русского текста: ' + Math.trunc(index * 1000) / 1000;
            result = '';
            index = 0;

            result = document.getElementById('2').innerHTML.substr(11, engTextLength + 11);
            for (let i = 0; i < result.length; i++) {
                let help = 1;
                for (let j = i + 1; j < result.length; j++) {
                    if (result[i] === result[j]) {
                        help++;
                        result = result.replace(result[j], '');
                    }
                }
                index += Math.pow(help, 2) / Math.pow(engTextLength, 2);
                help = 0;
            }
            document.getElementById('5').innerHTML = 'Индекс английского текста: ' + Math.trunc(index * 1000) / 1000;
            result = '';
            index = 0;

            result = document.getElementById('3').innerHTML.substr(11, engTextLength + 11);
            for (let i = 0; i < result.length; i++) {
                let help = 1;
                for (let j = i + 1; j < result.length; j++) {
                    if (result[i] === result[j]) {
                        help++;
                        result = result.replace(result[j], '');
                    }
                }
                index += Math.pow(help, 2) / Math.pow(engTextLength, 2);
                help = 0;
            }
            document.getElementById('6').innerHTML = 'Индекс армянского текста: ' + Math.trunc(index * 1000) / 1000;
            result = '';
            index = 0;
            break;
    }
    return result;
}
