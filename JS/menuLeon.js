var status ="";

addEventListener("load", inicio);

function inicio() {
    document.getElementById("fotos").addEventListener("click", crearImagen);
    document.getElementById("videos").addEventListener("click", crearVideo);
}


function mostrarFotoLeon() {
    document.getElementById("href").src="img/leon 2.jpg";
}

function crearImagen() {
    //----Crea un cuadro con 4 imagenes de leon----

    //primero borro el iframe
    var eliminarIframe = document.getElementById("frameLeon");
    eliminarIframe.remove();

    //Luego creo elementos img
    var fotoLeon1 = document.createElement("img");
    fotoLeon1.setAttribute("id", "fotoLeon1");
    fotoLeon1.src="img/leon 1.jpg";

    var fotoLeon2 = document.createElement("img");
    fotoLeon2.setAttribute("id", "fotoLeon2");
    fotoLeon2.src="img/leon 2.jpg";

    var fotoLeon3 = document.createElement("img");
    fotoLeon3.setAttribute("id", "fotoLeon3");
    fotoLeon3.src="img/leon 3.jpg";

    var fotoLeon4 = document.createElement("img");
    fotoLeon4.setAttribute("id", "fotoLeon4");
    fotoLeon4.src="img/leon 4.jpg";

    //Se agregan los elementos al id contenedor
    var idFotoLeon = document.getElementById("fotoLeon");//Se toma el ID
    idFotoLeon.appendChild(fotoLeon1);
    idFotoLeon.appendChild(fotoLeon2);
    idFotoLeon.appendChild(fotoLeon3);
    idFotoLeon.appendChild(fotoLeon4);

}

function crearVideo() {
    

    //var videoLeon1 = document.createElement("video");
    //videoLeon1.setAttribute("id", "videoLeon1");
    //videoLeon1.src="https://www.youtube.com/embed/DBv0beKQMw0?autoplay=1";

    //document.getElementById("fotoLeon").replaceChildren("videoLeon1");

    //SI NO ESTA EL FRAME NESRVITO CREARLO--OJO--
    var videoLeon1 = document.getElementById("frameLeon");
    //videoLeon1.setAttribute("id", "fotoLeon1");
    videoLeon1.src="lion/leonVideo.html";

    
    
}