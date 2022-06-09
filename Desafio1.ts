// Tipo por inferência --------------------------
let employee = {
    code: 10,
    name: 'Jhon'
}

// Tipo por especificação -----------------------
let employee2: {code: number, name: string} = {
    code: 10,
    name: 'Jhon'
}

// Usando uma interface -------------------------
interface Employee {
    code: number,
    name: string
}

let employee3 = {
    code: 150,
    name: 'Daivid'
}

console.log(employee3);