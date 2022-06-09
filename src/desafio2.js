"use strict";
// Como podemos melhorar o esse código usando TS? 
var Job;
(function (Job) {
    Job[Job["Atriz"] = 0] = "Atriz";
    Job[Job["Padeiro"] = 1] = "Padeiro";
})(Job || (Job = {}));
let pessoa1 = {
    nome: "maria",
    idade: 29,
    profissao: Job.Atriz
};
let pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: Job.Padeiro
};
let pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: Job.Atriz
};
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Job.Padeiro
};
