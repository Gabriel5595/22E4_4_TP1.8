exibir = document.getElementById('exibir');
const notasA = [6.7, 3.2, 9.6, 8.7, 10, 7.5];
const notasB = [...notasA];

exibir.innerHTML += notasA;
exibir.innerHTML += "<br>"
exibir.innerHTML += notasB;
