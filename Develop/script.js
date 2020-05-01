// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
      passwordText.value = password;

}

function generatePassword() {
// Variables for generating a password
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numericChar = "1234567890"
  var specialChar = "!@#$%^&*()_"
  var allCharTypes = "";
  var passwordLength = parseInt(prompt("How long would you like your password to be?"));

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password must be between 8 and 128 characters. Please enter a number within that range.");
  }
  else {

    var lowerCaseChoice = confirm("Would you like your password to contain lower case characters?");

    var upperCaseChoice = confirm("Would you like your password to contain upper case characters?");

    var numericCharChoice = confirm("Would you like your password to contain numeric characters?");

    var specialCharChoice = confirm("Would you like your password to contain special characters?");

    var passwordCriteria = [lowerCaseChoice, upperCaseChoice, numericCharChoice, specialCharChoice];

    if (!lowerCaseChoice && !upperCaseChoice && !numericCharChoice && !specialCharChoice) {
      alert("You must select at least one choice for your character type");
    }
    else {
      if (lowerCaseChoice) {
      allCharTypes+=lowerCase;
      }
      if (upperCaseChoice) {
        allCharTypes+=upperCase
      }
      if (numericCharChoice) {
        allCharTypes+=numericChar
      }
      if (specialCharChoice) {
        allCharTypes = allCharTypes+specialChar
      }
      // Validate Input
      console.log(allCharTypes);
      var gpassword = ""
      for (var i = 0; i < passwordLength; i++) {
        var character = allCharTypes[Math.floor(Math.random() * allCharTypes.length)]
        console.log(character)
        gpassword += character
      }
      console.log("Password", gpassword)
      return gpassword
    }
  }
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
