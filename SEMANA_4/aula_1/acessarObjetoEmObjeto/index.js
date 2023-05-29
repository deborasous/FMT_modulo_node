const magma = {
  tipo: 'fogo'
}

const pokemon ={
  nome: "chasd",
  fogo: "Pokemon de fogo"
}

//formas certas de acessar um objeto dentro de outro. Está sendo acessado a propriedade 'tipo' do objeto magma e com o resultado 'fogo' é procurado dentro de pokemon a propriedade fogo que tem o valor "Pokemon de fogo"
console.log(pokemon[magma.tipo])
console.log(pokemon[magma['tipo']])