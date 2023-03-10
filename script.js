function criptografar(){
    var digitado = document.querySelector(".text-area").value.toLowerCase();
    var textoCriptografado = '';

    textoCriptografado = digitado.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");
    exibir(textoCriptografado);
}

function exibir(texto){
    document.querySelector('.mensagem').value = texto;
    document.querySelector('.mensagem').style.backgroundImage ='';
}

function descript (){
    var textoCriptografado = document.querySelector('.mensagem').value;
    var texto = '';

    texto = textoCriptografado.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");
    exibir(texto);
}

function copiar(){
    var copyText = document.querySelector('.mensagem');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
}

document.querySelector('.btnCriptografar').addEventListener('click', criptografar);
document.querySelector('.btnDescriptografar').addEventListener('click', descript);
document.querySelector('.btnCopiar').addEventListener('click', copiar);

