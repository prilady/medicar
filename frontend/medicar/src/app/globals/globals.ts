export class Especialidade {
    nome: string = '';
}

export class Medico {
    nome: string = '';
    especialidade: Especialidade = new Especialidade();
}

export class Schedule {
    dia: string = '';
    hora: string = '';
    medico: Medico = new Medico();
}

export class Token {
    str: string = '';
}

