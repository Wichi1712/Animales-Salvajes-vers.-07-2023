var statusDiv = "";

addEventListener("load", inicio);

//Se agrega un funcion para cada boton
function inicio() {
  document.getElementById("fotos").addEventListener("click", crearImagen);
  document.getElementById("videos").addEventListener("click", crearVideo);
  document.getElementById("datos").addEventListener("click", mostrarDatos);
}

function mostrarFotoCocodrilo() {
  document.getElementById("href").src = "../img/cocodrilo 1.jpg";
}

function mostrarDatos() {
  if (statusDiv == "video" || statusDiv == "") {
    var datosCocodrilo = document.getElementById("frameCocodrilo");
    datosCocodrilo.src = "../Crocodile/crocodileinfo.html";
  }else {
    fotoCocodrilo1.remove();
    fotoCocodrilo2.remove();
    fotoCocodrilo3.remove();
    fotoCocodrilo4.remove();

    var crearIframeCocodrilo = document.createElement("iframe");
    crearIframeCocodrilo.setAttribute("id", "frameCocodrilo");
    crearIframeCocodrilo.setAttribute("name", "center");
    crearIframeCocodrilo.setAttribute("frameborder", "0");
    crearIframeCocodrilo.setAttribute("width", "800px");
    crearIframeCocodrilo.setAttribute("height", "300px");

    var idDataCocodrilo = document.getElementById("dataCocodrilo");
    idDataCocodrilo.appendChild(crearIframeCocodrilo);

    var datosCocodrilo = document.getElementById("frameCocodrilo");
    datosCocodrilo.src = "../Crocodile/crocodileinfo.html";
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
    var eliminarIframe = document.getElementById("frameCocodrilo");
    eliminarIframe.remove();

    //primero elimino el iframe para poder insertar las etiquetas img
    //var eliminarIframe = document.getElementById("frameLeon");
    //eliminarIframe.remove();

    //Luego creo elementos img
    var fotoCocodrilo1 = document.createElement("img");
    fotoCocodrilo1.setAttribute("id", "fotoCocodrilo1");
    fotoCocodrilo1.setAttribute("width", "300px");
    fotoCocodrilo1.setAttribute("height", "200px");
    fotoCocodrilo1.src = "../img/cocodrilo 1.jpg";

    var fotoCocodrilo2 = document.createElement("img");
    fotoCocodrilo2.setAttribute("id", "fotoCocodrilo2");
    fotoCocodrilo2.setAttribute("width", "300px");
    fotoCocodrilo2.setAttribute("height", "200px");
    fotoCocodrilo2.src = "../img/cocodrilo 2.jpg";

    var fotoCocodrilo3 = document.createElement("img");
    fotoCocodrilo3.setAttribute("id", "fotoCocodrilo3");
    fotoCocodrilo3.setAttribute("width", "300px");
    fotoCocodrilo3.setAttribute("height", "200px");
    fotoCocodrilo3.src = "../img/cocodrilo 3.jpg";

    var fotoCocodrilo4 = document.createElement("img");
    fotoCocodrilo4.setAttribute("id", "fotoCocodrilo4");
    fotoCocodrilo4.setAttribute("width", "300px");
    fotoCocodrilo4.setAttribute("height", "200px");
    fotoCocodrilo4.src = "../img/cocodrilo 4.jpg";

    //Se agregan los elementos al id contenedor
    var idDataCocodrilo = document.getElementById("dataCocodrilo"); //Se toma el ID
    idDataCocodrilo.appendChild(fotoCocodrilo1);
    idDataCocodrilo.appendChild(fotoCocodrilo2);
    idDataCocodrilo.appendChild(fotoCocodrilo3);
    idDataCocodrilo.appendChild(fotoCocodrilo4);

    statusDiv = "imagen";
  }

  console.log("statusDiv = " + statusDiv);
}

function crearVideo() {
  if (statusDiv == "imagen") {
    var crearIframeCocodrilo = document.createElement("iframe");
    crearIframeCocodrilo.setAttribute("id", "frameCocodrilo");
    crearIframeCocodrilo.setAttribute("name", "center");
    crearIframeCocodrilo.setAttribute("frameborder", "0");
    crearIframeCocodrilo.setAttribute("width", "600px");
    crearIframeCocodrilo.setAttribute("height", "300px");

    var idDataCocodrilo = document.getElementById("dataCocodrilo");
    idDataCocodrilo.appendChild(crearIframeCocodrilo);

    fotoCocodrilo1.remove();
    fotoCocodrilo2.remove();
    fotoCocodrilo3.remove();
    fotoCocodrilo4.remove();

    //statusDiv = "video";
  }
  //var videoLeon1 = document.createElement("video");
  //videoLeon1.setAttribute("id", "videoLeon1");
  //videoLeon1.src="https://www.youtube.com/embed/DBv0beKQMw0?autoplay=1";

  //document.getElementById("fotoLeon").replaceChildren("videoLeon1");

  //SI NO ESTA EL FRAME NESECITO CREARLO--OJO--
  var videoCocodrilo1 = document.getElementById("frameCocodrilo");
  //console.log("Tipo  devideoLeon1 = " + typeof videoLeon1);
  //videoLeon1.setAttribute("id", "fotoLeon1");
  videoCocodrilo1.src = "../Crocodile/CrocodileVideo.html";
  statusDiv = "video";
  console.log("statusDiv = " + statusDiv);
}
