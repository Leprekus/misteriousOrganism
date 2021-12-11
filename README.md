# Mysterious Organism 

The aim of this project is to create an object object called 'pAequor' and output whether it is likely that it survives. It simulates a real organism and contains a strand of DNA composed of 15 bases which are able to mutate. 
## Table of Contents
* [technologies](#technologies)
* [usage](#usage) 
* [methods](#Methods)

## Technologies:
  [node v16.13.0](https://nodejs.org/en/blog/release/v16.13.0/)
  
  ## Usage
  
  ### pAequorFactory():
  In order to create an object call create new object and call the pAequor() function with **pAequorFactory.instances**, and **mockUpStrand()** as parameters.
  Ex:
  ```
  let newObj = new pAequorFactory(pAequor.instances, mockUpStrand)
  
  Output:
  
  pAequorFactory {
  specimenNum: 1,
  dna: [
    'A', 'C', 'T', 'T',
    'G', 'G', 'G', 'T',
    'A', 'G', 'G', 'G',
    'C', 'A', 'C'
  ],
  mutate: [Function (anonymous)],
  compareDNA: [Function (anonymous)],
  willLikelySurvive: [Function (anonymous)],
  complementStrand: [Function (anonymous)]
}
  
  ```
  
  ### generateObjects():
  Takes in as parameter the number of objects that want to be created. Outputs array of _true_ or _false_ depending on whether the object is likely to survive or not. 
  
## Methods 

* newObj.mutate() -> changes a random base. (it outputs which base was changed and at what index)
*  compareDNA() -> takes in another object as an argument, returns array of bases that match letter and index. 
*  willLikelySurvive() -> if the DNA strand is composed 60% or more of C or G bases it should output *true*
*  complementStrand() -> returns a [complementary strand](https://en.wikipedia.org/wiki/Complementarity_(molecular_biology)) of DNA for the object's strand 

