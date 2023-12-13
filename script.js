//Variable
const nombre = "Deisy López"

//Salida
//alert(nombre);
console.log(nombre);
document.write(nombre);

console.log(document.getElementById('titulo'));
let HTMLtitulo = document.getElementById('titulo');

let ElementoTypewriter = new Typewriter(HTMLtitulo, {
    loop: true
});

ElementoTypewriter.typeString('Deisy López')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Desarrolladora web chiquita')
    .pauseFor(2500)
    .deleteChars(7)
    .start();