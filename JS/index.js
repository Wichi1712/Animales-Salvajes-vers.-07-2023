var typeAnimal = "";

addEventListener("load", inicio);

//Llanma a las funciones correspondientes a cada boton
function inicio() {
    console.log("indexJS Ok");
    document.getElementById("Leon").addEventListener("click", mostrarMenuLeon);
    document.getElementById("Cocodrilo").addEventListener("click", mostrarMenuCocodrilo);
    document.getElementById("Tigre").addEventListener("click", mostrarMenuTigre);
    document.getElementById("Tiburon").addEventListener("click", mostrarMenuTiburon);

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

//Cada funcion carga una pagina dependiendo del boton pulsado
//Las paginas que se carguen mostraran los botones inferiores
function mostrarMenuLeon() {
    console.log("Leon");
    typeAnimal = "leon";
    //console.log("typeAnimal: " + typeAnimal);
    document.getElementById("frame2").src="menuLeon.html";
}

function mostrarMenuCocodrilo() {
    console.log("Cocodrilo");
    typeAnimal = "cocodrilo";
    //console.log("typeAnimal: " +typeAnimal);
    document.getElementById("frame2").src="menuCocodrilo.html";
}

function mostrarMenuTigre() {
    console.log("Tigre");
    typeAnimal = "tigre";
    document.getElementById("frame2").src="menuCocodrilo.html";
}

function mostrarMenuTiburon() {
    console.log("Tiburon");
    typeAnimal = "tiburon";
    document.getElementById("frame2").src="menuCocodrilo.html";
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