// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}

function generatePassword() {
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var special = "~!@#$%^&*()-_=+<>?";
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

  // Ensures that at least one of the criteria is selected.
  if (answer === false) {
    alert("You must select at least one choice for your character type.");
  }
  else {
    passwordText.value = password;
  };
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
