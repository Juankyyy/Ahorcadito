const temas = [["framework", "bug", "software", "holamundo", "frontend", "backend", "codigo"], ["francia", "argentina", "japon", "alemania", "españa", "mexico", "rusia", "egipto", "suiza", "suecia"], ["pizza", "chicharron", "natilla", "salchipapas", "empanada", "buñuelo", "arepa"]]
let tema = 0;

const select = document.querySelectorAll(".select");
const content = document. querySelector("#content");

const body = document.querySelector("body")
const dark = document.querySelector("#darkMode");
let theme;
let count = 1
asignarTema();

dark.addEventListener("click", () => {
    count++;

    if (count % 2 == 0) {
        theme = "dark";
    } else {
        theme = "light";
    }

    localStorage.setItem("theme", theme);
    asignarTema()
});

function asignarTema() {
    if (localStorage.getItem("theme") == "dark") {
        body.className = "theme-dark";
        dark.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M13 3h-2v2h2V3zm4 2h2v2h-2V5zm-6 6h2v2h-2v-2zm-8 0h2v2H3v-2zm18 0h-2v2h2v-2zM5 5h2v2H5V5zm14 14h-2v-2h2v2zm-8 2h2v-2h-2v2zm-4-2H5v-2h2v2zM9 7h6v2H9V7zm0 8H7V9h2v6zm0 0v2h6v-2h2V9h-2v6H9z"/></svg>`;
        dark.style.backgroundColor = "#ffff00";
        dark.style.fill = "#000";
    } else {
        body.className = "theme-light";
        dark.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M6 2h8v2h-2v2h-2V4H6V2ZM4 6V4h2v2H4Zm0 10H2V6h2v10Zm2 2H4v-2h2v2Zm2 2H6v-2h2v2Zm10 0v2H8v-2h10Zm2-2v2h-2v-2h2Zm-2-4h2v4h2v-8h-2v2h-2v2Zm-6 0v2h6v-2h-6Zm-2-2h2v2h-2v-2Zm0 0V6H8v6h2Z"/></svg>`;
        dark.style.backgroundColor = "#000";
        dark.style.fill = "#fff";
    }
}

const programming = document.querySelector("#programming");
const country = document.querySelector("#country");
const food = document.querySelector("#food");

programming.addEventListener("click", () => {
    tema = temas[0];
    hidden();
    game();
});

country.addEventListener("click", () => {
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
    select.forEach(card => {
        card.classList.add("hidden");
    });

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
            alert("Ganaste!!");

            setTimeout(() => {
                restart();
            }, 1000);
        };
        
        if (vidas == 0) {
            alert(`Perdiste :(\n\nLa palabra era: ${palabraArray.join(" ").toUpperCase()}`);
            
            setTimeout(() => {
                restart();
            }, 1000);
        };
    }
};

function restart() {
    location.reload();
};