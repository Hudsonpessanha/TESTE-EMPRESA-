
let str = "HUDSON PESSANHA";

function inverterString(s) {
    let invertida = '';
    for (let i = s.length - 1; i >= 0; i--) {
        invertida += s[i];
    }
    return invertida;
}

console.log(inverterString(str));
