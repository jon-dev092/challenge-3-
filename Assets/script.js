// Assignment Code

// global variables
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var spec = ["!", "@", "#", "$", "%", "&", "*", "+"]
var randomChar = []; 


// generate password function
var generatePassword = function () {

  // character length prompt
  var charLength = prompt('Please enter length of password; enter a number between "8" and "128".');

  if (charLength < 8 || charLength > 128) {
    alert('Must be a number between "8" and "128"');
    return generatePassword();
  } else if (!charLength) {
    alert('A number value is needed before proceeding')
    return generatePassword();
  }


// confirm option for lowercase characters
  var charLower = confirm('Would you like to use lowercase characters?')

  if (!charLower) {
    charLower = '';
  } else {
    charLower = lower;
  }
 

// confirm option for uppercase characters
  var charUpper = confirm('Would you like to use uppercase characters?')

  if (!charUpper) {
    charUpper = '';
  } else {
    charUpper = upper;
  }


// confirm option for number characters
  var charNum = confirm('Would you like to use number characters?')

  if (!charNum) {
    charNum = '';
  } else {
    charNum = num
  }

  
// confirm option for special charcters
  var charSpec = confirm('Would you like to use special characters?')

  if (!charSpec) {
    charSpec = '';
  } else {
    charSpec = spec;
  }

  

// requires that user meet perameters
  var totalChar = charLower + charUpper + charNum + charSpec;

  if (totalChar.length <= 0) {
    alert('Atleast one type must be chosen');
    return generatePassword();
  }

 

// gives randomChar a value for loop
  if (charLower) {
    randomChar = randomChar.concat(lower);
  } else if (!charLower) {
    charLower = '';
  }


  if (charUpper) {
    randomChar = randomChar.concat(upper);
  } else if (!charUpper) {
    charUpper = '';
  }


  if (charNum) {
    randomChar = randomChar.concat(num);
  } else {
    num = '';
  }


  if (charSpec) {
    randomChar = randomChar.concat(spec);
  } else {
    spec = '';
  }



// randomize charLength with added perameters
  var finalPassword = []
  for (i = 0; i < charLength; i++) {
    var range =[Math.floor(Math.random() * randomChar.length)];
    finalPassword = finalPassword + randomChar[range];
  }

  return finalPassword;

}

// apply .js to id's
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// event listener to generate button
generateBtn.addEventListener("click", writePassword);
