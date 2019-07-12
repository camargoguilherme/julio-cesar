/*
 * Algoritmo de Criptografia (Cifra de César): codificação
 *
 * Autor: Guilherme Camargo
 * Email: guilhermecamargo57@hotmail.com
 */


const alfa = "abcdefghijklmnopqrstuvwxyz";

const encode = (frase = '', casas = 0) => {
  let off = parseInt(casas);
  let keep = [];
  for(let i = 0; i < frase.length; i++){
    if(getIndex(frase[i]) > -1){
      keep.push( alfa[getIndexCifra(getIndex(frase[i]), off)] )
    }else{
      keep.push(frase[i])
    }
  }
  return keep.join('');
}

const decode = (frase = '', casas = 0) => {
  let off = parseInt(casas);
  let keep = [];
  
  for(let i = 0; i < frase.length; i++){
    if(getIndex(frase[i]) > -1){
      keep.push( alfa[verifyIndex( getIndex( frase[i]), off)] )
    }else{
      keep.push(frase[i])
    }
  }
  console.log(keep)
  return keep.join('');
}

const getIndex = (char = '') => {
  return parseInt(alfa.indexOf(char))
}

const getIndexCifra = (index = 0, casas = 0 ) => {
  return (parseInt(index) + parseInt(casas)) % alfa.length
}

const verifyIndex = (index = 0, casas = 0) =>{
  let pos = -1;
  let off = parseInt(casas);
  for(let i = 0; i < alfa.length; i++){
    if((i + off) % alfa.length === index){
      pos = i;
    }
  }
  return parseInt(pos);
}

module.exports = {
  encode,
  decode
}