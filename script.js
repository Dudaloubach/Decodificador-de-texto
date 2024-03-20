const textArea = document.querySelector(".textArea");
const mensagem = document.querySelector(".mensagem");


// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea ="";
}

function encriptar(stringEncriptada) {
    let matrizCodigo =[["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length;i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencripta() {
    const textoDesencriptado = desencripta(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value ="";
}

function desencripta(stringDesencripta) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencripta = stringDesencripta.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencripta.includes(matrizCodigo[i][1])) {
            stringDesencripta = stringDesencripta.replaceAll(matrizCodigo[i][1,matrizCodigo[i][0]]);
        }
    }
    return stringDesencripta;
}


document.getElementById("copiar");
async function copiarConteudo() {
    let text = document.querySelector("#copiar").value;
    await navigator.clipboard.writeText(mensagem);
    alert("mensagem copiada")
}