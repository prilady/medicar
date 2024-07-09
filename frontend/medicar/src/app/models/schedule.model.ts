export interface Especialidade {
    nome: string;
}

export interface Medico {
    nome: string;
    especialidade: Especialidade;
}

export interface Schedule {
    dia: string;
    horario: string;
    medico: Medico;
}