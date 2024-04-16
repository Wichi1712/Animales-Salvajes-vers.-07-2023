var statusDiv = "";

addEventListener("load", inicio);

//Se agrega un funcion para cada boton
function inicio() {
  document.getElementById("fotos").addEventListener("click", crearImagen);
  document.getElementById("videos").addEventListener("click", crearVideo);
  document.getElementById("datos").addEventListener("click", mostrarDatos);
}
/*
function mostrarFotoLeon() {
  document.getElementById("href").src = "../img/leon 2.jpg";
}
*/

function mostrarDatos() {
  if (statusDiv == "video" || statusDiv == "") {
    var datosTiburon = document.getElementById("frameTiburon");
    datosTiburon.src = "../tiburon/tiburonInfo.html";
  }else {
    fotoTiburon1.remove();
    fotoTiburon2.remove();
    fotoTiburon3.remove();
    fotoTiburon4.remove();

    var crearIframeTiburon = document.createElement("iframe");
    crearIframeTiburon.setAttribute("id", "frameTiburon");
    crearIframeTiburon.setAttribute("name", "center");
    crearIframeTiburon.setAttribute("frameborder", "0");
    crearIframeTiburon.setAttribute("width", "800px");
    crearIframeTiburon.setAttribute("height", "300px");

    var idDataTiburon = document.getElementById("dataTiburon");
    idDataTiburon.appendChild(crearIframeTiburon);

    var datosTiburon = document.getElementById("frameTiburon");
    datosTiburon.src = "../Tiburon/tiburonInfo.html";
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
    var eliminarIframe = document.getElementById("frameTiburon");
    eliminarIframe.remove();

    //primero elimino el iframe para poder insertar las etiquetas img
    //var eliminarIframe = document.getElementById("frameLeon");
    //eliminarIframe.remove();

    //Luego creo elementos img
    var fotoTiburon1 = document.createElement("img");
    fotoTiburon1.setAttribute("id", "fotoTiburon1");
    fotoTiburon1.src = "../img/tiburon 1.jpg";

    var fotoTiburon2 = document.createElement("img");
    fotoTiburon2.setAttribute("id", "fotoTiburon2");
    fotoTiburon2.src = "../img/tiburon 2.jpg";

    var fotoTiburon3 = document.createElement("img");
    fotoTiburon3.setAttribute("id", "fotoTiburon3");
    fotoTiburon3.src = "../img/tiburon 3.jpg";

    var fotoTiburon4 = document.createElement("img");
    fotoTiburon4.setAttribute("id", "fotoTiburon4");
    fotoTiburon4.src = "../img/tiburon 4.jpg";

    //Se agregan los elementos al id contenedor
    var idDataTiburon = document.getElementById("dataTiburon"); //Se toma el ID
    idDataTiburon.appendChild(fotoTiburon1);
    idDataTiburon.appendChild(fotoTiburon2);
    idDataTiburon.appendChild(fotoTiburon3);
    idDataTiburon.appendChild(fotoTiburon4);

    statusDiv = "imagen";
  }

  console.log("statusDiv = " + statusDiv);
}

function crearVideo() {
  if (statusDiv == "imagen") {
    var crearIframeTiburon = document.createElement("iframe");
    crearIframeTiburon.setAttribute("id", "frameTiburon");
    crearIframeTiburon.setAttribute("name", "center");
    crearIframeTiburon.setAttribute("frameborder", "0");
    crearIframeTiburon.setAttribute("width", "600px");
    crearIframeTiburon.setAttribute("height", "300px");

    var idDataTiburon = document.getElementById("dataTiburon");
    idDataTiburon.appendChild(crearIframeTiburon);

    fotoTiburon1.remove();
    fotoTiburon2.remove();
    fotoTiburon3.remove();
    fotoTiburon4.remove();

    //statusDiv = "video";
  }
  //var videoLeon1 = document.createElement("video");
  //videoLeon1.setAttribute("id", "videoLeon1");
  //videoLeon1.src="https://www.youtube.com/embed/DBv0beKQMw0?autoplay=1";

  //document.getElementById("fotoLeon").replaceChildren("videoLeon1");

  //SI NO ESTA EL FRAME NESECITO CREARLO--OJO--
  var videoTiburon1 = document.getElementById("frameTiburon");
  //console.log("Tipo  devideoLeon1 = " + typeof videoLeon1);
  //videoLeon1.setAttribute("id", "fotoLeon1");
  videoTiburon1.src = "../lion/leonVideo.html";
  statusDiv = "video";
  console.log("statusDiv = " + statusDiv);
}
