//Trabajando con index alterno

var typeAnimal = "";

addEventListener("load", inicio);

function inicio() {
    document.getElementById("Leon").addEventListener("click", mostrarMenuLeon);
    document.getElementById("Cocodrilo").addEventListener("click", mostrarMenuCocodrilo);
    document.getElementById("Tigre").addEventListener("click", mostrarMenuTigre);
    document.getElementById("Tiburon").addEventListener("click", mostrarMenuTiburon);

    document.getElementById("fotos").addEventListener("click", function(){
        switch (typeAnimal) {
            case "leon":
                document.getElementById("img_animal").src="img/leon 4.jpg";
                break;

            case "cocodrilo":
                document.getElementById("img_animal").src="img/cocodrilo 4.jpg";
                break;

            case "tigre":
                document.getElementById("img_animal").src="img/tigre 4.jpg";
                break;

            case "tiburon":
                document.getElementById("img_animal").src="img/tiburon 4.jpg";
                break;
        
            default:
                break;
        }
    }
    );

    /*
    switch (typeAnimal) {
        case "leon":
            document.getElementById("fotos").addEventListener("click", fotoLeon);
            break;

        case "cocodrilo":
            document.getElementById("fotos").addEventListener("click", fotoCocodrilo);
            break;
    
        default:
            break;
    }
    */
}


function mostrarMenuLeon() {
    console.log("Leon");
    typeAnimal = "leon";
    console.log(typeAnimal);
    document.getElementById("img_animal").src="img/Leon 2.jpg";
}

function mostrarMenuCocodrilo() {
    console.log("Cocodrilo");
    typeAnimal = "cocodrilo";
    console.log(typeAnimal);
    document.getElementById("img_animal").src="img/cocodrilo 1.jpg";
}

function mostrarMenuTigre() {
    console.log("Tigre");
    typeAnimal = "tigre";
    document.getElementById("img_animal").src="img/tigre 1.jpg";
}

function mostrarMenuTiburon() {
    console.log("Tiburon");
    typeAnimal = "tiburon";
    document.getElementById("img_animal").src="img/tiburon 1.jpg";
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