const name_usuario = [];
const age = [];
let edadMayor = 0;
let posicion = 0;
for (let i = 0; i < 3; i++) {
  name_usuario.push(prompt(`Usuario ${i + 1}, por favor ingrese su nombre`));
  age.push(parseInt(prompt(`${name_usuario[i]} cual es tu edad`)));
  mayorEdad(age[i]);
  if (age[i] > edadMayor) {
    posicion = i;
    edadMayor = age[i];
  }
}
alert(`${name_usuario[posicion]} una pena, sos el/la mayor de l@s tres ☺️😩`);
function mayorEdad(edad) {
  if (edad >= 18) {
    return alert("Eres mayor de edad");
  } else {
    return alert("eres menor de edad");
  }
}
