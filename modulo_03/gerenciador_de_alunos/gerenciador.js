const alunos = [
  { nome: "Ana", nota1: 7, nota2: 8 },
  { nome: "Bruno", nota1: 5, nota2: 6 },
  { nome: "Carlos", nota1: 3, nota2: 4 },
  { nome: "Daniela", nota1: 9, nota2: 10 },
  { nome: "Eduardo", nota1: 6, nota2: 5 }
];

function calcularMedia(nota1, nota2) {
  return (nota1 + nota2) / 2;
}

const alunosComMedia = alunos.map(aluno => ({
  ...aluno,
  media: calcularMedia(aluno.nota1, aluno.nota2)
}));

const aprovados = alunosComMedia.filter(aluno => aluno.media >= 6);
const reprovados = alunosComMedia.filter(aluno => aluno.media < 6);

const mediaGeral = alunosComMedia.reduce((acc, aluno) => acc + aluno.media, 0) / alunosComMedia.length;

const ordenados = [...alunosComMedia].sort((a, b) => b.media - a.media);

console.log("=== Lista de Alunos ===");
alunosComMedia.forEach(aluno => {
  console.log(`Nome: ${aluno.nome} | Nota1: ${aluno.nota1} | Nota2: ${aluno.nota2} | Média: ${aluno.media.toFixed(2)}`);
});

console.log("\n=== Aprovados ===");
aprovados.forEach(a => console.log(`${a.nome} - Média: ${a.media.toFixed(2)}`));

console.log("\n=== Reprovados ===");
reprovados.forEach(r => console.log(`${r.nome} - Média: ${r.media.toFixed(2)}`));

console.log(`\nMédia geral da turma: ${mediaGeral.toFixed(2)}`);

console.log("\n=== Alunos Ordenados por Média ===");
ordenados.forEach(a => console.log(`${a.nome} - Média: ${a.media.toFixed(2)}`));