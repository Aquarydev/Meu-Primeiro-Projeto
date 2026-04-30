const botao = document.getElementById("modoClaro/Escuro")

let claro = true;
botao.addEventListener("click", function() {
    if (claro) {
        doc.body.style.backgroundColor = '#141420';
        doc.body.style.color = 'white';
        botao.textContent("Modo Escuro")

    } else {
        doc.body.style.backgroundColor = 'white';
        doc.body.style.color = 'black';
        botao.textContent("Modo Claro");
    }
claro =!claro
})
