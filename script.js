function criptografar() {
    const input = document.getElementById('input').value.toLowerCase();
    if (!isValidInput(input)) {
        alert('São aceitas apenas letras minúsculas e sem acento.');
        return;
    }
    const criptografado = input
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    exibirResultado(criptografado);
}

function descriptografar() {
    const input = document.getElementById('input').value.toLowerCase();
    if (!isValidInput(input)) {
        alert('Por favor, use apenas letras minúsculas sem acento.');
        return;
    }
    const descriptografado = input
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    exibirResultado(descriptografado);
}

function isValidInput(input) {
    return /^[a-z\s]*$/.test(input);
}

function exibirResultado(texto) {
    document.getElementById('result').innerHTML = `<p>${texto}</p>`;
}

function copiarTexto() {
    const resultado = document.getElementById('result').innerText;
    navigator.clipboard.writeText(resultado).then(() => {
        alert('Texto copiado para a área de transferência!');
    });
}

document.getElementById('input').addEventListener('input', function(e) {
    this.value = this.value.toLowerCase().replace(/[^a-z\s]/g, '');
});
