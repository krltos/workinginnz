/**
* 1220 is the 15th element of the sequence
* Iterative approach time complexity is linear O(n) and space complexity is constant O(1)
* Clean code principles: meaningful variable names, descriptive names of functions, code separated into reusable functions, 
* no duplicate code for example for checking the input, comments in the code, short lines
* Recursive approach time complexity is exponential O(n2) and space complexity is linear O(n)
*/


function isParamValid(param) {
//input parameted should be an integer higher than zero
  if (Number.isInteger(param) && (param>0))
    return true
  else 
    return false
}

function getNthNumberInSequence(n) {
//the sequence is: 2, 2, 4, 6, 10, 16, …
//the new element is calculated based on the last two element sum, so the next element will be 10 + 16
  if (isParamValid(n)) {
    let numberArray = [2, 2];
    for (let i = 2; i < n ; i++){
      numberArray.push(numberArray[i - 2] + numberArray[i -1])
    }
    return numberArray[n-1];
  }
}

function getNthNumberInSequenceRec(n) {
  if (isParamValid(n)) {
		if ((n == 1) || (n == 2)) 
			return 2;
		return  getNthNumberInSequenceRec(n - 1) + getNthNumberInSequenceRec(n - 2);
	}
}
