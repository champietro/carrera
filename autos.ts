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
  let m4s: number = Number(vuelta4S.value);

  console.log("el dato ingresado es ", vuelta11);
  console.log("el dato ingresado es ", vuelta22);
  console.log("el dato ingresado es ", vuelta33);
  console.log("el dato ingresado es ", vuelta44);
});
