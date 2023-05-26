var maximo, mmedio, reproducir, barra, progreso, silenciar, volumen, bucle;
function iniciar() {

  if (screen.width < 420)
  {
    maximo = 150;
  }
  else if (screen.width < 720 && screen.width >= 420)
  {
    maximo = 200;
  }
  else if (screen.width < 920 && screen.width >= 720)
  {
    maximo = 300;
  }
  else maximo = 550;
  
  mmedio = document.getElementById("medio");
  reproducir = document.getElementById("reproducir");
  barra = document.getElementById("barra");
  progreso = document.getElementById("progreso");
  silenciar = document.getElementById("silenciar");
  volumen = document.getElementById("volumen");

  reproducir.addEventListener("click", presionar);
  silenciar.addEventListener("click", sonido);
  barra.addEventListener("click", mover);
  volumen.addEventListener("change", nivel);
}

function presionar() {
  if (!medio.paused && !medio.ended) {
    medio.pause();
    reproducir.value = ">";
    clearInterval(bucle);
  } else {
    medio.play();
    reproducir.value = "||";
    bucle = setInterval(estado, 1000);
  }
}

function estado() {
  if (!medio.ended) {
    var largo = parseInt(medio.currentTime * maximo / medio.duration);
    progreso.style.width = largo + "px";
  } else {
    progreso.style.width = "0px";
    reproducir.value = ">";
    clearInterval(bucle);
  }
}

function mover(evento) {
  if (!medio.paused && !medio.ended) {
    var ratonX = evento.offsetX - 2;
    if (ratonX < 0) {
      ratonX = 0;
    } else if (ratonX > maximo) {
      ratonX = maximo;
    }
    var tiempo = ratonX * medio.duration / maximo;
    medio.currentTime = tiempo;
    progreso.style.width = ratonX + "px";
  }
}

function sonido() {
  if (silenciar.value == "MUTE") {
    medio.muted = true;
    silenciar.value = "SOUND";
  } else {
    medio.muted = false;
    silenciar.value = "MUTE";
  }
}

function nivel() {
  medio.volume = volumen.value;
}

window.addEventListener("load", iniciar);
