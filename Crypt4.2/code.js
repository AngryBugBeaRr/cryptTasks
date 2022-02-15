function gcd_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
        return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}
function Cipher () {
        let n = document.getElementById('alphabet').value.length;
        let text = document.getElementById('sourceText').value.toLowerCase();
        let k = document.getElementById('meaningK').value;
        let a = document.getElementById('meaningA').value;
        let alphabet = document.getElementById('alphabet').value;
        let message = document.getElementById('error');
        let encryptedT = "";
        if (gcd_two_numbers(+n, +k) !== 1) {
            message.classList.add('active');
        } else {
            message.classList.remove('active');
            for (let i = 0; i < text.length; i++) {
                let c = text.charAt(i);
                let pos = alphabet.indexOf(c);
                if (pos < 0) {
                    encryptedT += c; // не шифруем данный символ
                    continue;
                }
                let newPos = (parseInt(pos) * k + a) % n;
                let newC = alphabet.charAt(newPos);
                encryptedT += newC;
            }
            document.getElementById('encryptedText').value = encryptedT;
        }
    }
    function deCipher () {
        let n = document.getElementById('alphabet').value.length;
        let k = document.getElementById('meaningK').value;
        let a = document.getElementById('meaningA').value;
        let message = document.getElementById('error');
        if (gcd_two_numbers(+n, +k) === 1) {
            message.classList.remove('active');

            function calcInverse(k, n) {
                let rez = 1;
                let i = 0;
                while (rez) {
                    if ((k * i) % n === 1) {
                        return i;
                    } else {
                        i++
                    }
                }
            }

            let kInverse = calcInverse(k, n);
            let text = document.getElementById('encryptedText').value.toLowerCase();
            let alphabet = document.getElementById('alphabet').value;
            let decryptedT = "";
            for (let i = 0; i < text.length; i++) {
                let c = text.charAt(i);
                let pos = alphabet.indexOf(c);
                if (pos < 0) {
                    decryptedT += c; // не шифруем данный символ
                    continue;
                }
                let newPos = (kInverse * (parseInt(pos) + n - a)) % n;
                let newC = alphabet.charAt(newPos);
                decryptedT += newC;
            }
            document.getElementById('sourceText').value = decryptedT;
        } else {
            message.classList.add('active');
        }
    }
