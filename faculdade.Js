class Aluno {
    constructor(nome, email, curso, matricula){
        this.nome = nome;
        this.email = email;
        this.curso = curso;
        this.matricula = matricula;
    }

    matricularEmDisciplina(){
        console.log('nome aluno |', this.nome, '| matricula do aluno |', this.matricula, 'status do aluno - matriculado');
    }

    consultarHistorico(){
        console.log('historico do aluno |', this.nome, '| matricula aluno |', this.matricula);
    }
}

class Professor{
    constructor(nome, email, departamento){
        this.nome = nome;
        this.email = email;
        this.departamento = departamento;
    }

    lancarNota(){
        console.log('professora |', this.nome, '| lancando nota |');
    }

    vincularDisciplina(){
        console.log('professora |', this.nome, '| departamento |', this.departamento, 'disciplina vinculada -');
    }
}

class AtividadeAcademica{
    constructor(cargaHoraria, titulo, vagas, tipo){
        this.cargaHoraria = cargaHoraria;
        this.titulo = titulo;
        this.vagas = vagas;
        this.tipo = tipo;
    }

    cadastrarPessoa(){
        console.log('pessoa foi cadastrada na atividade |', this.titulo);
    }

    emitirRelatorio(){
        console.log('nome da atvidade |', this.titulo, 'carga horaria necessaria |', this.cargaHoraria, 'vagas disponiveis |', this.vagas);
    }
}

class SistemaAcademico {
    constructor(versao){
        this.versao = versao;
    }

    processarInscricao(){
        console.log('versao', this.versao, 'processando inscricao');
    }

    gerarCertificadoPDF(){
        console.log('versao', this.versao, 'gerando PDF');
    }

    exportarRelatorio(){
        console.log('versao', this.versao, 'exportando relatorio');
    }
}

const nicolei = new Aluno('nicolei', 'nicolei@email.com', 'DS', '123456');
nicolei.matricularEmDisciplina();
nicolei.consultarHistorico();

const giovanna = new Professor('giovanna', 'giovanna@email.com', 'TI');
giovanna.vincularDisciplina();
giovanna.lancarNota();

const workshop = new AtividadeAcademica(40, 'NodeJS', 30, 'Curso');
workshop.cadastrarPessoa();
workshop.emitirRelatorio();

const sistema = new SistemaAcademico('1.0');
sistema.processarInscricao();
sistema.gerarCertificadoPDF();