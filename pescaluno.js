// const alunos = ["João", "Juliana", "Ana", "Caio"];
// const medias = [10, 8, 7.5, 9];

// const listaDeAlunosEMedias = [alunos, medias];

// function exibeNomeENota(aluno){
//     if (listaDeAlunosEMedias[0].includes(aluno)) {
//         const indice = listaDeAlunosEMedias[0].indexOf(aluno);

//         const mediaDoAluno = listaDeAlunosEMedias[1][indice];

//         console.log(`${aluno} tem a média ${mediaDoAluno}.`);

//     } else {
//         console.log("Aluno não encontrado!");
//     }
// }

// exibeNomeENota("Evaldo");

// o método includes() confere se o elemento passado por parâmetro está incluso em uma lista;
// o método indexOf() retorna o índice do elemento passado por parâmetro.

// ATUALIZANDO

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno){
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        const [alunos, medias] = listaDeAlunosEMedias;

        const indice = alunos.indexOf(aluno);

        const mediaDoAluno = medias[indice];

        console.log(`${aluno} tem a média ${mediaDoAluno}.`);

    } else {
        console.log("Aluno não encontrado!");
    }
}

exibeNomeENota("Ana");


