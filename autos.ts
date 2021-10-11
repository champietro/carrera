let btnEnv = document.getElementById("btnEnviar");
let vuelta1M = document.getElementById("vuelta1M");
let vuelta1S = document.getElementById("vuelta1S");
let vuelta2M = document.getElementById("vuelta2M");
let vuelta2S = document.getElementById("vuelta2S");
let vuelta3M = document.getElementById("vuelta3M");
let vuelta3S = document.getElementById("vuelta3S");
let vuelta4M = document.getElementById("vuelta4M");
let vuelta4S = document.getElementById("vuelta4S");

btnEnv.addEventListener("click", () => {
  let v1m: number = Number(vuelta1M.value);
  let v1s: number = Number(vuelta1S.value);
  let v2m: number = Number(vuelta2M.value);
  let v2s: number = Number(vuelta2S.value);
  let v3m: number = Number(vuelta3M.value);
  let v3s: number = Number(vuelta3S.value);
  let v4m: number = Number(vuelta4M.value);
  let v4s: number = Number(vuelta4S.value);

  let segundos = v1s + v2s + v3s + v4s; // suma todos los segundos
  let minutos = v1m + v2m + v3m + v4m; // suma todos los minutos
  
  let promedioS = 0;
  let promedioM = 0;

  promedioS = segundos / 4;
  promedioM = minutos / 4;

if promedioS > 60{ 
  promedioS = promedioS / 60;
  promedioM = promedioM + promedioS;
  promedioS = promedioS % 60;
}

if promedioM > 60{
  let promedioH = 0;
  promedioM = promedioM / 60;
  promedioH = promedioH + promedioM;
  promedioM = promedioM % 60;
}






  if (segundos > 60) {
    let minutosExtras = 0; // variable inicial
    minutosExtras = segundos / 60;
    minutos = minutosExtras + minutos;
    segundos = segundos % 60;
  }

  if (minutos > 60) {
    let horas = 0; // variable inicial
    horas = minutos / 60;
    minutos = minutos % 60;
    minutos = Math.trunc(minutos);
    horas = Math.trunc(horas);
    // minutos = Math.round(minutos);
    // horas = Math.round(horas);
  }




  console.log("El tiempo total es: ,"horas, ":", minutos, ":", segundos);
  console.log("El tiempo promedio es: ,"promedioH, ":", promedioM, ":", promedioS);
 
});
