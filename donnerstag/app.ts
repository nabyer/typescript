console.log("Heute ist Donnerstag")
console.log("tsc -w app.ts")

// Variablen deklarieren - indirekt und direkt

// indirekt
let trainer = 'Lucas'

// direkt
let tag: string

// var ist böse
// var getränk = 'Kaffee'

tag = 'Freitag'
// tag = 4

console.log(tag)

function verdoppeln(zahl: number): number {
  return zahl * 2
}

console.log(verdoppeln(50))