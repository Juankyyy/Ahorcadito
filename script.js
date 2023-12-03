// const palabras = ["error", "iterador", "riwi", "javascript"]
const palabras = ["amarillo", "azul", "rojo", "verde", "morado"]
const palabra = palabras[Math.floor(Math.random() * palabras.length)];

const palabraArray = palabra.split("");
let vidas = 6;
let correcto = false;
let arraySecret = "_".repeat(palabra.length).split("");

const wordSecret = document.querySelector("#arraySecret");
const lives = document.querySelector("#lives");
const inputLetter = document.querySelector("#letter-input");
const btn = document.querySelector(".letter-btn");

lives.textContent = `Tienes ${vidas} Vidas`;
wordSecret.textContent = arraySecret.join(" ");

btn.addEventListener("click", () => {
    const letra = inputLetter.value.toLowerCase();
    inputLetter.value = "";

    intento(letra);
});


function intento(letra) {
    correcto = false;

    for (j = 0; j < palabra.length; j++) {
    
        if (palabra[j] == letra) {
            arraySecret[j] = letra;
            correcto = true;
    
            wordSecret.textContent = arraySecret.join(" ").toUpperCase();
        };
    };

    if (!correcto) {
        vidas--;
        lives.textContent = `Tienes ${vidas} Vidas`;
        alert("Incorrecto")
    };

    if (palabraArray.join("") == arraySecret.join("")) {
        alert("Ganaste")
    };
    
    if (vidas == 0) {
        alert("Perdiste bobo")
    };
}

// while (vidas != 0) {
//     let correcto = false;
//     const letra = prompt(`${arraySecret.join(" ").toUpperCase()}\nTienes ${vidas} Vidas\nLetra: `);

//     for (j = 0; j < palabra.length; j++) {
//         if (palabra[j] == letra) {
//             arraySecret[j] = letra;
//             correcto = true;
//         };
//     };
    
//     if (!correcto) {
//         vidas--;
//     };

//     if (palabraArray.join("") == arraySecret.join("")) {
//         alert(`Has ganado!! :D\nLa palabra es: ${palabraArray.join(" ").toUpperCase()}`)
//         break;
//     };

//     if (vidas == 0) {
//         alert(`Has perdido! :(\n ${arraySecret.join(" ")}\nLa palabra era: ${palabraArray.join(" ").toUpperCase()}`)
//         break;
//     };
// }