// Assignment Code
var generateBtn = document.querySelector('#generate');
// created these empty strings which will be filled later with variables we create'
var random = ""
var passWord = ""
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
  var pwLength = prompt('Please enter a number between 8 and 128.')

  // if the user does not choose a number between 8 and 128 then they will see this error message and will be asked to start over and follow the parameters.
  if(pwLength < 8 || pwLength > 128){
    alert('Sorry that number does not meet our parameters, please try again!')
    return generatePassword();
  }

  //if the user does not choose a number but instead chooses a letter or symbol then they will see this error message and will be asked to start over and follow the parameters.
  if(isNaN(pwLength)) {
  alert('Sorry that is not a number and does not meet our parameters, please try again!')
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
  
    if(SymBls === true) 
      {
     // add var symbols to var random list
     console.log('current random list: ' , random)
     random = symbols + random
     console.log('new random list: ', random)
     }
    // else {
      // console.log('SymBls', SymBls)
    }

    if(LowerC ===  true) 
    {
      console.log('current random list: ' , random)
      random = lowerCase + random
      console.log('new random list: ', random)
    }
      //   LowerC ===  lowerCase
      // }
      //  else {LowerC ===  myNull}
      //  console.log('LowerC', LowerC)

    if(UpperC ===  true) 
    {
      console.log('current random list: ' , random)
      random = upperCase + random
      console.log('new random list: ', random)
    }
      //    UpperC ===  upperCase
      //  }
        // else {UpperC ===  myNull}
        // console.log('UpperC', UpperC)

    if(NumBrs ===  true) 
    {
      console.log('current random list: ' , random)
      random = numbers + random
      console.log('new random list: ', random)
    }
        //   NumBrs ===  numbers
        // }
        //  else {NumBrs ===  myNull}
        //  console.log('NumBrs', NumBrs)
      
    
    // random = (SymBls + NumBrs + UpperC + LowerC)

  // is it ok to use var instead of let??
  // for (var i = 0; x=random.length; i<pwLength; ++i) {
  //         passWord += random.charAt(Math.floor(Math.random()*x))
  //      }
    
  // alert('Your new password is ' + passWord);
  // return passWord;
  //   

  }
// Write password to the #password input
function writePassword() {
  console.log('writing password');
  //this shows what is in the html box, that is why it shows the password at the end
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);