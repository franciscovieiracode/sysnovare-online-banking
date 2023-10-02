//Function that generates a random IBAN 
function generateIban(){
    let iban = 'PT505050'; //Country and bank identifier
    for (let i = 0; i < 17; i++) {
      const digit = Math.floor(Math.random() * 10); // Generate a random digit between 0 and 9
      iban += digit.toString(); // Convert the digit to a string and append it to the result
    }
    return iban; 
}

module.exports = generateIban;