// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//Returns pAequor Object 
let pAequorFactory = function(num,  arr){
  //properties
  pAequorFactory.instances += 1
  this.specimenNum = num,
  this.dna = arr,

  //Selects and changes a random base 
  this.mutate = () => {
    const index = this.dna.at(Math.floor(Math.random() * this.dna.length))
    let tempArr = ['A','T','C','G'].filter(element => element !== index)
    const gene = tempArr.at(Math.floor(Math.random() * tempArr.length))
    const mutatedGenes  = [`Gene replaced: ${index}`, `At index: ${this.dna.indexOf(index)}`, `Gene Inserted:${gene}`]
    this.dna[this.dna.indexOf(index)] = gene

    return [mutatedGenes, this.dna]
  },
  //returns bases with same value and index from 2 different objects
  this.compareDNA = (obj) => {
    let tempContainer = [];
    for(let i = 0, z = 0; i, z < this.dna.length; i++, z++){
      if(this.dna[i] === obj.dna[z]){
        tempContainer.push(this.dna[i])
      }
    } 
    //rounds result to 2 decimals 
    let fixed = ((tempContainer.length * 100) / this.dna.length).toFixed(2) 
    return `Specimen number ${this.specimenNum} and ${obj.specimenNum} share ${fixed}% of DNA : ${tempContainer}`
  },

  //C or G bases increase chance of survival 
  //if 60% or more of the DNA is formed up by C or G bases should return true
  this.willLikelySurvive = () => {
    let check = []
    for(let i = 0; i < this.dna.length; i++){
      if(this.dna[i] === 'C' || this.dna[i] === 'G'){
        check.push(this.dna[i])
      }
    } let fixed = ((check.length * 100) / this.dna.length).toFixed(2) 
    if(fixed >= 60 ){
      return true
    } return false
  },

  //Returns a complement strand for object's DNA strand 
  this.complementStrand = () => {
    let complementStrand = [];
    this.dna.forEach(element => {
      if(element === 'A'){complementStrand.push('T')}
      if(element === 'T'){complementStrand.push('A')}
      if(element === 'C'){complementStrand.push('G')}
      if(element === 'G'){complementStrand.push('C')}
    }); return complementStrand

    }
}
pAequorFactory.instances = 1

//func param should be left blank when calling generateObjects
//outputs array true if DNA strand is made up of mostly c or g bases
let generateObjects = function (numOfObj, func=pAequorFactory) {
  let objContainer = []
  for(let i = 0; i < numOfObj; i++){
    let obj = new func(pAequorFactory.instances, mockUpStrand())
    objContainer.push(obj.willLikelySurvive())
  } return objContainer
}


