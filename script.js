const temas = [["error", "booleano", "riwi", "funcion", "string"], ["amarillo", "azul", "rojo", "verde", "morado", "blanco"], ["pizza", "hamburguesa", "lasaña", "salchipapas", "empanada", "buñuelo"]]
let tema = 0;

const select = document.querySelector(".select")
const content = document. querySelector("#content")

const programming = document.querySelector("#programming");
const colors = document.querySelector("#colors");
const food = document.querySelector("#food");

programming.addEventListener("click", () => {
    tema = temas[0];
    hidden();
    game();
});

colors.addEventListener("click", () => {
    tema = temas[1];
    hidden();
    game();
});

food.addEventListener("click", () => {
    tema = temas[2];
    hidden();
    game();
});

function hidden() {
    select.classList.add("hidden")
    content.classList.remove("hidden")
}

function game() {
    const palabra = tema[Math.floor(Math.random() * tema.length)];
    
    const palabraArray = palabra.split("");
    vidas = 6;
    correcto = false;
    arraySecret = "_".repeat(palabra.length).split("");

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