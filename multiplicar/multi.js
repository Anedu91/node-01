
const fs = require('fs');
const colors = require('colors');

let listarTable = (base, limite) =>{
    console.log('======================'.green)
    console.log(`table of ${base}`.red)
    console.log('======================'.yellow)

    if (!Number(base)){
      console.log(`${base} isn't a number`)
    }   

    for (let i = 1; i < limite; i++){
      console.log(`${base} * ${i} = ${base*i}`)
    }
}

let createFile = (base,limite) =>{
  return new Promise((resolve, reject) =>{

    if (!Number(base)){
      reject('NAN');
      return
    }
    let data = '';

  for (let i = 1; i <= limite;i++){
    data += (`${base} * ${i} = ${base*i}\n`)
  }

fs.writeFile(`tables/table-${base}`, data, (err) => {
  if (err) 
    reject(err);
  else 
    resolve(`tabla-${base}.txt`)
});
  })
}

module.exports = {
  createFile,
  listarTable
}
