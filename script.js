// Define all possible characters according to four categories
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split('');
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var numbers = "0123456789".split('');
var specialCharacters = "#$%&'()*+-./:`;<=>?@]^_}|{~[".split('');

function generatePassword () {

    var finalPassword = [];

    function passwordOptions () {

        var possibleCharacters = [];
        var guaranteedCharacters = [];
        
        var determineLength = parseInt(prompt('How many characters would you like your password to contain?\n(Length must be at least 8 characters but no more than 128 characters'));

        if (Number.isNaN(determineLength)) {
            alert('Please enter a valid number between 7 and 129');
        } else if (determineLength < 8) {
            alert("For security purposes, please enter a character length of at least 8.");
        } else if (determineLength > 128) {
            alert("Your requested character length is too long. Please enter a character length lower than 129.");
        }

        var includeLowercaseLetters = confirm("Would you like your password to include lowercase letters?");
        var includeUppercaseLetters = confirm("Would you like your password to include uppercase letters?");
        var includeNumbers = confirm("Would you like your password to include numeric characters?");
        var includeSpecialCharacters = confirm("Would you like your password to include special characters?");

        if (
            !includeLowercaseLetters && !includeUppercaseLetters && !includeNumbers && !includeSpecialCharacters) {
                alert("Please select at least one character type.")
            }

        function randomize(array) {Math.floor(Math.random(i) * array.length)};

        if (includeLowercaseLetters) {
            possibleCharacters = possibleCharacters.concat(lowercaseLetters);
            guaranteedCharacters.push(Math.random(lowercaseLetters.length));
        };

        if (includeUppercaseLetters) {
            possibleCharacters = possibleCharacters.concat(uppercaseLetters);
            guaranteedCharacters.push(Math.floor(Math.random() * uppercaseLetters.length));
        };

        if (includeNumbers) {
            possibleCharacters = possibleCharacters.concat(numbers);
            guaranteedCharacters.push(randomize(numbers));
        };

        if (includeSpecialCharacters) {
            possibleCharacters = possibleCharacters.concat(specialCharacters);
            guaranteedCharacters.push(randomize(specialCharacters));
        };

        for (var i = 0; i < determineLength; i++) {
            var possibleCharacters = Math.floor(Math.random() * possibleCharacters.length);
            finalPassword.push(possibleCharacters);
        };

        for (var i = 0; i < guaranteedCharacters.length; i++) {
            finalPassword[i] = guaranteedCharacters[i];
        }

        return finalPassword.join('');
    }
passwordOptions();
return finalPassword;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);