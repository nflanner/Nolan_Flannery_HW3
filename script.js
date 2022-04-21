// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  try {
    var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  } catch (error) {
    // do nothing
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate the random password
function generatePassword() {
  var generatedPass = "";

  var lowerSelectors = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var upperSelectors = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var numericSelectors = ['1','2','3','4','5','6','7','8','9','0'];
  var specialSelectors = ['!','\"','#','$','%','&','\'','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~']
  var totalSelector = [];

  // Prompt for password length (between 8-128 chars)
  do {
    var passLength = window.prompt('How long would you like your password?\nEnter a number between 8 and 128.\n(Must enter a numeric value)');
  } while (!isNumber(passLength) || passLength < 8 || passLength > 128)

  // Prompt to include lowercase
  do {
    var lowerCase = window.prompt('Would you like to include lowercase characters?\nPlease enter \'yes\' or \'no\'.').toLowerCase();
  } while (lowerCase != 'yes' && lowerCase != 'no')

  // Promt to include uppercase
  do {
    var upperCase = window.prompt('Would you like to include uppercase characters?\nPlease enter \'yes\' or \'no\'.').toLowerCase();
  } while (upperCase !== 'yes' && upperCase !== 'no')
  
  // Prompt to include numeric
  do {
    var numericChar = window.prompt('Would you like to include numeric characters?\nPlease enter \'yes\' or \'no\'.').toLowerCase();
  } while (numericChar !== 'yes' && numericChar !== 'no')

  // Promt to include special chars
  do {
    var specialChar = window.prompt('Would you like to include special characters?\nPlease enter \'yes\' or \'no\'.').toLowerCase();
  } while (specialChar !== 'yes' && specialChar !== 'no')

  // Check that at least one char type is selected
  if (lowerCase === 'no' && upperCase === 'no' && numericChar === 'no' && specialChar === 'no') {
    window.alert('Error: At least one character type must be selected.');
    return generatePassword();
  }

  // Validate selections (at least one type needs to be chosen)
  var confirm = window.confirm(
    'Your selections are:\n'+
    'Length: ' + passLength + '\n' +
    'Lowercase: ' + lowerCase + '\n' +
    'Uppercase: ' + upperCase + '\n' +
    'Numeric: ' + numericChar + '\n' +
    'Special: ' + specialChar + '\n' +
    'Select \'OK\' if this is correct or \'Cancel\' to re-select'
  );

  
  // Generate the password
  if (!confirm) {
    return generatePassword();
  } else {
    if (lowerCase === 'yes') {
      totalSelector = totalSelector.concat(lowerSelectors);
    }
    if (upperCase === 'yes') {
      totalSelector = totalSelector.concat(upperSelectors);
    }
    if (numericChar === 'yes') {
      totalSelector = totalSelector.concat(numericSelectors);
    }
    if (specialChar === 'yes') {
      totalSelector = totalSelector.concat(specialSelectors);
    }

    for (var i = 0; i < passLength; i++) {
      generatedPass += totalSelector[getRndInteger(0,totalSelector.length)];
    }
  }

  return generatedPass;
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function isNumber(val) {
  var numericSelectors = ['1','2','3','4','5','6','7','8','9','0'];
  for (var char of val) {
    if (!numericSelectors.includes(char)) {
      return false
    } else {
      return true;
    }
  }
}