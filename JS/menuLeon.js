var statusDiv = "";

addEventListener("load", inicio);

//Se agrega un funcion para cada boton
function inicio() {
  document.getElementById("fotos").addEventListener("click", crearImagen);
  document.getElementById("videos").addEventListener("click", crearVideo);
  document.getElementById("datos").addEventListener("click", mostrarDatos);
}

function mostrarFotoLeon() {
  document.getElementById("href").src = "../img/leon 2.jpg";
}

function mostrarDatos() {
  if (statusDiv == "video" || statusDiv == "") {
    var datosLion = document.getElementById("frameLeon");
    datosLion.src = "../lion/leoninfo.html";
  }else {
    fotoLeon1.remove();
    fotoLeon2.remove();
    fotoLeon3.remove();
    fotoLeon4.remove();

    var crearIframeLeon = document.createElement("iframe");
    crearIframeLeon.setAttribute("id", "frameLeon");
    crearIframeLeon.setAttribute("name", "center");
    crearIframeLeon.setAttribute("frameborder", "0");
    crearIframeLeon.setAttribute("width", "800px");
    crearIframeLeon.setAttribute("height", "300px");

    var idDataLeon = document.getElementById("dataLion");
    idDataLeon.appendChild(crearIframeLeon);

    var datosLion = document.getElementById("frameLeon");
    datosLion.src = "../lion/leoninfo.html";
  }

  statusDiv = "datos";

}

function crearImagen() {
  //statusDiv = "imagen";
  //----Crea un cuadro con 4 imagenes de leon----

  if (statusDiv == "video" || statusDiv == "datos" || statusDiv == "") {
    //var crearIframeLeon = document.createElement("iframe");
    //crearIframeLeon.setAttribute("id", "frameLeon");

    //var idDataLeon = document.getElementById("dataLion")
    //idDataLeon.appendChild(crearIframeLeon);

    //fotoLeon1.remove();
    //fotoLeon2.remove();
    //fotoLeon3.remove();
    //fotoLeon4.remove();

    //primero elimino el iframe para poder insertar las etiquetas img
    var eliminarIframe = document.getElementById("frameLeon");
    eliminarIframe.remove();

    //primero elimino el iframe para poder insertar las etiquetas img
    //var eliminarIframe = document.getElementById("frameLeon");
    //eliminarIframe.remove();

    //Luego creo elementos img
    var fotoLeon1 = document.createElement("img");
    fotoLeon1.setAttribute("id", "fotoLeon1");
    fotoLeon1.src = "../img/leon 1.jpg";

    var fotoLeon2 = document.createElement("img");
    fotoLeon2.setAttribute("id", "fotoLeon2");
    fotoLeon2.src = "../img/leon 2.jpg";

    var fotoLeon3 = document.createElement("img");
    fotoLeon3.setAttribute("id", "fotoLeon3");
    fotoLeon3.src = "../img/leon 3.jpg";

    var fotoLeon4 = document.createElement("img");
    fotoLeon4.setAttribute("id", "fotoLeon4");
    fotoLeon4.src = "../img/leon 4.jpg";

    //Se agregan los elementos al id contenedor
    var idDataLeon = document.getElementById("dataLion"); //Se toma el ID
    idDataLeon.appendChild(fotoLeon1);
    idDataLeon.appendChild(fotoLeon2);
    idDataLeon.appendChild(fotoLeon3);
    idDataLeon.appendChild(fotoLeon4);

    statusDiv = "imagen";
  }

  console.log("statusDiv = " + statusDiv);
}

function crearVideo() {
  if (statusDiv == "imagen") {
    var crearIframeLeon = document.createElement("iframe");
    crearIframeLeon.setAttribute("id", "frameLeon");
    crearIframeLeon.setAttribute("name", "center");
    crearIframeLeon.setAttribute("frameborder", "0");
    crearIframeLeon.setAttribute("width", "600px");
    crearIframeLeon.setAttribute("height", "300px");

    var idDataLeon = document.getElementById("dataLion");
    idDataLeon.appendChild(crearIframeLeon);

    fotoLeon1.remove();
    fotoLeon2.remove();
    fotoLeon3.remove();
    fotoLeon4.remove();

    //statusDiv = "video";
  }
  //var videoLeon1 = document.createElement("video");
  //videoLeon1.setAttribute("id", "videoLeon1");
  //videoLeon1.src="https://www.youtube.com/embed/DBv0beKQMw0?autoplay=1";

  //document.getElementById("fotoLeon").replaceChildren("videoLeon1");

  //SI NO ESTA EL FRAME NESECITO CREARLO--OJO--
  var videoLeon1 = document.getElementById("frameLeon");
  //console.log("Tipo  devideoLeon1 = " + typeof videoLeon1);
  //videoLeon1.setAttribute("id", "fotoLeon1");
  videoLeon1.src = "../lion/leonVideo.html";
  statusDiv = "video";
  console.log("statusDiv = " + statusDiv);
}
