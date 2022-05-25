let numero: number = Number(prompt("Ingrese un numero"));

function esMultiplo(N1: number, N2: number): string {
  if (N1 % N2 === 0) {
    return "Verdadero";
  } else {
    return "Falso";
  }
}

function cantidadDeDivisores(numero: number): number {
  let cantidad: number = 0;
  for (let i = 0; i <= numero; i++) {
    if (esMultiplo(numero, i) === "Verdadero") {
      cantidad++;
    }
  }
  return cantidad;
}

console.log(
  "El numero " + numero + " tiene " + cantidadDeDivisores(numero) + " Divisores"
);
