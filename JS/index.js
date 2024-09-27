var typeAnimal = "";

addEventListener("load", inicio);

//Prueba de PockeAPI---------------------------------------------------------
const apiButton = document.getElementById("apiButton");
const apiData = document.getElementById("apiData");
const base_experience = document.getElementById("base_experience");

const callAPI = () => {
    //alert("poke");
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(res => res.json())
        .then(data => {
            apiData.innerText = "data: "+JSON.stringify(data);
            base_experience.innerText = "Experiencia Base:" + JSON.stringify(data.base_experience); //${ JSON.stringify(data.base_experience)}ˋ
        })
        .catch(e => console.error(new Error(e)));
}

apiButton.addEventListener("click", callAPI);
//---------------------------------------------------------------------------------

//Llanma a las funciones correspondientes a cada boton
function inicio() {
    console.log("indexJS Ok");
    document.getElementById("Leon").addEventListener("click", mostrarMenuLeon);
    document.getElementById("Cocodrilo").addEventListener("click", mostrarMenuCocodrilo);
    document.getElementById("Tigre").addEventListener("click", mostrarMenuTigre);
    document.getElementById("Tiburon").addEventListener("click", mostrarMenuTiburon);
    document.getElementById("About").addEventListener("click", mostrarAbout);

    /*
    document.getElementById("fotos").addEventListener("click", function(){
        switch (typeAnimal) {
            case "leon":
                document.getElementById("frame2").src="img/leon 4.jpg";
                break;

            case "cocodrilo":
                document.getElementById("frame2").src="img/cocodrilo 4.jpg";
                break;

            case "tigre":
                document.getElementById("frame2").src="img/tigre 4.jpg";
                break;

            case "tiburon":
                document.getElementById("frame2").src="img/tiburon 4.jpg";
                break;
        
            default:
                break;
        }
    }
    );
    */

}

function mostrarAbout() {
    document.getElementById("frame2").src="about.html";
}

//Cada funcion carga una pagina dependiendo del boton pulsado
//Las paginas que se carguen mostraran los botones inferiores
function mostrarMenuLeon() {
    console.log("Leon");
    typeAnimal = "leon";
    //console.log("typeAnimal: " + typeAnimal);
    document.getElementById("frame2").src="./Lion/menuLeon.html";
}

function mostrarMenuCocodrilo() {
    console.log("Cocodrilo");
    typeAnimal = "cocodrilo";
    //console.log("typeAnimal: " +typeAnimal);
    document.getElementById("frame2").src="Crocodile/menuCocodrilo.html";
}

function mostrarMenuTigre() {
    console.log("Tigre");
    typeAnimal = "tigre";
    document.getElementById("frame2").src="./Tigre/menuTigre.html";
}

function mostrarMenuTiburon() {
    console.log("Tiburon");
    typeAnimal = "tiburon";
    document.getElementById("frame2").src="./Tiburon/menuTiburon.html";
}

//Funciones de botones inferiores------------------------------------------
/*
function fotoLeon() {
    document.getElementById("img_animal").src="img/leon 4.jpg";
}

function fotoCocodrilo() {
    document.getElementById("img_animal").src="img/cocodrilo 4.jpg";
}
*/