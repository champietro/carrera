let btnEnv = document.getElementById("btnEnviar");
let vuelta1 = document.getElementById("vuelta1");
let vuelta2 = document.getElementById("vuelta2");
let vuelta3 = document.getElementById("vuelta3");
let vuelta4 = document.getElementById("vuelta4");

btnEnv.addEventListener("click", () => {
  let vuelta11: number = Number(vuelta1.value);
  let vuelta22: number = Number(vuelta2.value);
  let vuelta33: number = Number(vuelta3.value);
  let vuelta44: number = Number(vuelta4.value);
  console.log("el dato ingresado es ", vuelta11);
  console.log("el dato ingresado es ", vuelta22);
  console.log("el dato ingresado es ", vuelta33);
  console.log("el dato ingresado es ", vuelta44);
});
