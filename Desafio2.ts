// Como podemos melhorar o esse código usando TS? 
enum Job {
    Atriz,
    Padeiro
}


type caracteristicas = {
    nome: string, 
    idade: number, 
    profissao: Job
}

let pessoa1: caracteristicas = {
    nome: "maria",
    idade: 29,
    profissao: Job.Atriz
}


let pessoa2: caracteristicas = {
    nome: "roberto",
    idade: 19,
    profissao: Job.Padeiro
}


let pessoa3: caracteristicas = {
    nome: "laura",
    idade: 32,
    profissao: Job.Atriz
};

let pessoa4: caracteristicas = {
    nome: "carlos",
    idade: 19,
    profissao: Job.Padeiro
}