var statusDiv = "";

addEventListener("load", inicio);

//Se agrega un funcion para cada boton
function inicio() {
  document.getElementById("fotos").addEventListener("click", crearImagen);
  document.getElementById("videos").addEventListener("click", crearVideo);
  document.getElementById("datos").addEventListener("click", mostrarDatos);
}

function mostrarFotoTigre() {
  document.getElementById("href").src = "../img/tigre 1.jpg";
}

function mostrarDatos() {
  if (statusDiv == "video" || statusDiv == "") {
    var datosTigre = document.getElementById("frameTigre");
    datosTigre.src = "../Tigre/tigreinfo.html";
  }else {
    fotoTigre1.remove();
    fotoTigre2.remove();
    fotoTigre3.remove();
    fotoTigre4.remove();

    var crearIframeTigre = document.createElement("iframe");
    crearIframeTigre.setAttribute("id", "frameTigre");
    crearIframeTigre.setAttribute("name", "center");
    crearIframeTigre.setAttribute("frameborder", "0");
    crearIframeTigre.setAttribute("width", "800px");
    crearIframeTigre.setAttribute("height", "300px");

    var idDataTigre = document.getElementById("dataTigre");
    idDataTigre.appendChild(crearIframeTigre);

    var datosTigre = document.getElementById("frameTigre");
    datosTigre.src = "../Tigre/tigreInfo.html";
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
    var eliminarIframe = document.getElementById("frameTigre");
    eliminarIframe.remove();

    //primero elimino el iframe para poder insertar las etiquetas img
    //var eliminarIframe = document.getElementById("frameLeon");
    //eliminarIframe.remove();

    //Luego creo elementos img
    var fotoTigre1 = document.createElement("img");
    fotoTigre1.setAttribute("id", "fotoTigre1");
    fotoTigre1.setAttribute("width", "300px");
    fotoTigre1.setAttribute("height", "200px");
    fotoTigre1.src = "../img/tigre 1.jpg";

    var fotoTigre2 = document.createElement("img");
    fotoTigre2.setAttribute("id", "fotoTigre2");
    fotoTigre2.setAttribute("width", "300px");
    fotoTigre2.setAttribute("height", "200px");
    fotoTigre2.src = "../img/tigre 2.jpg";

    var fotoTigre3 = document.createElement("img");
    fotoTigre3.setAttribute("id", "fotoTigre3");
    fotoTigre3.setAttribute("width", "300px");
    fotoTigre3.setAttribute("height", "200px");
    fotoTigre3.src = "../img/tigre 3.jpg";

    var fotoTigre4 = document.createElement("img");
    fotoTigre4.setAttribute("id", "fotoTigre4");
    fotoTigre4.setAttribute("width", "300px");
    fotoTigre4.setAttribute("height", "200px");
    fotoTigre4.src = "../img/tigre 4.jpg";

    //Se agregan los elementos al id contenedor
    var idDataTigre = document.getElementById("dataTigre"); //Se toma el ID
    idDataTigre.appendChild(fotoTigre1);
    idDataTigre.appendChild(fotoTigre2);
    idDataTigre.appendChild(fotoTigre3);
    idDataTigre.appendChild(fotoTigre4);

    statusDiv = "imagen";
  }

  console.log("statusDiv = " + statusDiv);
}

function crearVideo() {
  if (statusDiv == "imagen") {
    var crearIframeTigre = document.createElement("iframe");
    crearIframeTigre.setAttribute("id", "frameTigre");
    crearIframeTigre.setAttribute("name", "center");
    crearIframeTigre.setAttribute("frameborder", "0");
    crearIframeTigre.setAttribute("width", "600px");
    crearIframeTigre.setAttribute("height", "300px");

    var idDataTigre = document.getElementById("dataTigre");
    idDataTigre.appendChild(crearIframeTigre);

    fotoTigre1.remove();
    fotoTigre2.remove();
    fotoTigre3.remove();
    fotoTigre4.remove();

    //statusDiv = "video";
  }
  //var videoLeon1 = document.createElement("video");
  //videoLeon1.setAttribute("id", "videoLeon1");
  //videoLeon1.src="https://www.youtube.com/embed/DBv0beKQMw0?autoplay=1";

  //document.getElementById("fotoLeon").replaceChildren("videoLeon1");

  //SI NO ESTA EL FRAME NESECITO CREARLO--OJO--
  var videoTigre1 = document.getElementById("frameTigre");
  //console.log("Tipo  devideoLeon1 = " + typeof videoTigre1);
  //videoLeon1.setAttribute("id", "fotoTigre1");
  videoTigre1.src = "../Tigre/tigreVideo.html";
  statusDiv = "video";
  console.log("statusDiv = " + statusDiv);
}
