// Assignment Code
var generateBtn = document.querySelector('#generate');
// created these empty strings which will be filled later with variables we create'
var random = ""
var newPass = ""
//why am I having so much trouble adding the symbols??
var symbols = "!@#$%^&*()_=+,-./:\|"
var numbers = "1234567890"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var myNull = ""


function generatePassword() {
  //First have an alert explaining the criteria for the passwords, and then they click 'ok' to go to the next screen.
  alert("Let's create a new and SECURE password! Your password MUST be at least 8, but no more than 128, characters long. And it MUST use at least 1 of the 4 character style options.");
  //Second use a 'prompt' so user can enter in the password length they want between 8-128 characters.
  var pwLength = prompt(' Please enter a number between 8 and 128.')

  // if the user does not choose a number between 8 and 128 then they will see this error message and will be asked to start over and follow the parameters.
  if(pwLength < 8 || pwLength > 128){
    alert('Sorry that number does not meet our parameters, please try again!')
    return generatePassword();
  }

  if(pwLength > 7 && pwLength < 129){
    confirm('Please choose at least 1 of the 4 character style lists to generate your password. Click "Ok" for Yes and "Cancel" for No.')
    SymBls = confirm('Would you like to use symbol characters in your password?');
    LowerC = confirm('Would you like to use lower case characters in your password?');
    UpperC = confirm('Would you like to use upper case characters in your password?');
    NumBrs = confirm('Would you like to use number characters in your password?');

    if(SymBls === false && LowerC === false && UpperC === false && NumBrs === false){
      alert('Sorry you must choose at least one of the character groups! please try again')
      return generatePassword();
    }

    if(SymBls === true) {
      SymBls ===  symbols
    }
      else {SymBls === myNull}

      if(LowerC ===  true) {
        LowerC ===  lowerCase
      }
       else {LowerC ===  myNull}

       if(UpperC ===  true) {
         UpperC ===  upperCase
       }
        else {UpperC ===  myNull}

        if(NumBrs ===  true) {
          NumBrs ===  numbers
        }
         else {NumBrs ===  myNull}
      
         for(let i = 0; x=random.length; i<pwLength; ++i) {
           newPass += random.charAt(Math.floor(Math.random()*x))
         }

         return 
    } 

  }

}
// Write password to the #password input
function writePassword() {
  console.log('writing password');
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);




// // function writePassword() {
// var pwLength = window.prompt("Let's create a secure password! It will need to be a certain length and contain at least one character type. Please choose a password length that is between 8 to 128 characters long.");

// if (passwordLength < 8 || passwordLength > 128) {
//   alert("You need to choose a number between 8 and 128 characters, please enter a new character length meeting these parameters")
//   return writePassword();
// }

// if (passwordLength > 8 && passwordLength <128) {
//   Num = confirm["Would you like to use numbers in your password? Click 'Ok' for Yes or click 'cancel' for No"]

