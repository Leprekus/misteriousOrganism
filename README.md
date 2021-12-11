# Mysterious Organism 

The aim of this project is to create an object object called 'pAequor' and output whether it is likely that it survives. It simulates a real organism and contains a strand of DNA composed of 15 bases which are able to mutate. 
## Table of Contents
* technologies[technologies]

### Technologies(technologies):
  node v16.13.0
With .mutate() they can change a random base. 

.compareDNA() takes as an argument another object to compare the DNA strand. Returns a string containing the percetage of shared DNA and bases. 

willLikelySurvive() returns true if the DNA strand consists up to 60% or more of C or G bases. 

complementStrand() returns a strand that matches the object's strand bases. 

generateObjects() takes in the number of objects that are to be produced and outputs an array of true if theDNA strand is made up of 60% or more of C or G bases. Else outputs false. This represents whether an object is likely to survive or not. 
