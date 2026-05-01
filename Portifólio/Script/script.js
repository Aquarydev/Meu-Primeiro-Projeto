const botao = document.getElementById("modoClaro/Escuro")
var doc = document

let claro = true;
botao.addEventListener("click", function() {
    if (claro) {
        doc.body.style.backgroundColor = '#141420';
        doc.body.style.color = 'white';
        botao.textContent = "Modo Claro"
    } else {
        doc.body.style.backgroundColor = 'white';
        doc.body.style.color = 'black';
        botao.textContent = "Modo Escuro"
    }
    claro = !claro
})
