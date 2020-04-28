// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}

function generatePassword() {
  // Establishing the different variables.
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialChar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "<", ">", "?"];
  var allCharTypes = [lowerCase, upperCase, numericChar, specialChar];
  var passwordLength = prompt("How long would you like your password to be?");

  if (passwordLength < 8) {
    alert("Your password must be between 8 and 128 characters. Please enter a number within that range.");
    prompt("How long would you like your password to be?");
  }
  else if (passwordLength > 128) {
    alert("Your password must be between 8 and 128 characters. Please enter a number within that range.");
    prompt("How long would you like your password to be?");
  }
  
  var lowerCaseChoice = confirm("Would you like your password to contain lower case characters?");

  var upperCaseChoice = confirm("Would you like your password to contain upper case characters?");

  var numericCharChoice = confirm("Would you like your password to contain numeric characters?");

  var specialCharChoice = confirm("Would you like your password to contain special characters?");
  
  var passwordCriteria = [lowerCaseChoice, upperCaseChoice, numericCharChoice, specialCharChoice];

  if (!lowerCaseChoice && !upperCaseChoice && !numericCharChoice && !specialCharChoice) {
    alert("You must select at least one choice for your character type");
  }
    
  // Validate Input
  console.log(passwordCriteria);

  for (var i = 0; i < passwordLength; i++) {
    var num = Math.floor(Math.random() * Math.floor(128))
  }
  passwordText.value = password;
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
