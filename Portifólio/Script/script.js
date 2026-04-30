var doc = document
const botao = doc.getElementById("modoClaro/Escuro")

let claro = true;
botao.addEventListener("click", function() {
    if (claro) {
        doc.body.style.backgroundColor = 'black';
        doc.body.style.color = 'white';
        botao.textContent("Modo Escuro")
        claro = true
    } else {
        doc.body.style.backgroundColor = 'white';
        doc.body.style.color = 'black';
        botao.textContent("Modo Claro")
        claro = false
    }
})