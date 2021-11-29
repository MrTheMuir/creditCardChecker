// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];
const validBatch = [valid1, valid2, valid3, valid4, valid5];
const invalidBatch = [invalid1, invalid2, invalid3, invalid4, invalid5];
const mysteryBatch = [mystery2, mystery3, mystery4, mystery5];

// Add your functions below:

const validateCred = (array) => {
	// let nCheck = 0, bEven = false;
	// value = array.join().replace(/\D/g, "");

	// for (var n = value.length - 1; n >= 0; n--) {
	// 	var cDigit = value.charAt(n),
	// 		  nDigit = parseInt(cDigit, 10);
	// 	if (bEven && (nDigit *= 2) > 9) nDigit -= 9;
	// 	nCheck += nDigit;
	// 	bEven = !bEven;
	// }
	// return (nCheck % 10) == 0;
  let total = 0;
  for (let i = array.length - 1; i >= 0; i--) {
    let currValue = array[i]
    if ((array.length - 1 - i) % 2 === 1) {
      currValue *= 2;
      if (currValue > 9) {
        currValue -= 9;
      }
    }
    total += currValue;
  }

  return total % 10 === 0;
}
// Test functions:
console.log(validateCred(valid1)); // Should print true
console.log(validateCred(mystery3)); // Should print false
console.log(validateCred(valid1) ? 'this card is valid':'this card is invalid'); // Should print valid
console.log(validateCred(mystery3) ? 'this card is valid':'this card is invalid'); // Should print invalid


const findInvalidCards = (cards) => {
  const invalids = [];
  for(let i = 0; i < cards.length; i++){
    let card = cards[i];
    //console.log(card);
    let result = validateCred(card);
    //console.log(result)
    if (result == false) {
      invalids.push(card);
    }
  }
  return invalids;
}

console.log('known valids');
console.log(findInvalidCards(validBatch));//batch of all known valids
console.log('known invalids');
console.log(findInvalidCards(invalidBatch)); // batch of known invalids
console.log('mystery'); 
console.log(findInvalidCards(mysteryBatch)); // only mystery 
console.log('all')
console.log(findInvalidCards(batch)); // check all cards using the batch array and return those that are valid


const idInvalidCardCompanies = (cards) =>{
    const companies = [];

      for (let i = 0; i < cards.length; i++) {
        switch (cards[i][0]) {
          case 3:
            if (!~companies.indexOf('Amex')) {
              companies.push('Amex');
            }
            break
          case 4:
            if (!~companies.indexOf('Visa')) {
              companies.push('Visa');
            }
            break
          case 5:
            if (!~companies.indexOf('Mastercard')) {
              companies.push('Mastercard');
            }
            break
          case 6:
            if (!~companies.indexOf('Discover')) {
              companies.push('Discover');
            }
            break
          default:
            console.log('Company not found');
        }
      }
      return companies;

}


console.log(idInvalidCardCompanies([invalid1])); // Should print['visa']
console.log(idInvalidCardCompanies([invalid2])); // Should print ['mastercard']
console.log(idInvalidCardCompanies(batch)); // Find out which companies have mailed out invalid cards

const convertToArrayOfNumbers = (arr) => {
  let a = arr.split('');// make string into array
  let b = a.map(Number);// pass number to map to turn into numbers
  return b.filter(value => !Number.isNaN(value)); // return numbers 
}
console.log(convertToArrayOfNumbers('39487623984576dsjhfgakjhsdgf')) 


