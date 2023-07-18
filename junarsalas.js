const salaJS = ["Gabriel ", "jp", "cj"];
const salaPython = ["Ju", "Leo", "matheus"];

const salasUnificadas = salaPython.concat(salaJS);

console.log(salasUnificadas);
// concat() é um método útil quando não se deseja alterar o array original, e sim fazer uma cópia alterada. Caso isso não seja necessário, considere utilizar push() ou splice() para inserir novos elementos ou fazer alterações no array original.