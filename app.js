const animais = [

    ['Cachorro', 'Doberman', 2],
    ['Boi', 'Nelori', 5],
    ['Pássaro', 'Papagaio', 3],
    ['Peixe', 'Beta', 2],
    ['Cavalo', 'Manga Larga', 6]
];

console.log('Informacoes dos animais: ');
console.table(animais);

const indiceAnimal = 2;
const nomeAnimal = animais[indiceAnimal][1];
const especieAnimal = animais[indiceAnimal][0]
const idadeAnimal = animais[indiceAnimal][2];

console.log(`\nInformacoes do Animal do indice:`);
console.log(`Nome: ${nomeAnimal}`);
console.log(`Especie: ${especieAnimal}`);
console.log(`Idade: ${idadeAnimal}`)





