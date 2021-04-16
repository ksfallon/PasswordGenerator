// Assignment Code
var generateBtn = document.querySelector('#generate');
//these are my global variables in arrays so I can use them in any function on this page.
var symbols = ['!', ' ', '"', '#','$','%','&',"'",')','(','*','+',',','-','.','/',':',';','<','>','=','?','@',']','[','\\','^','_','`','}','{', '|','~'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u' , 'v', 'w', 'x' , 'y', 'z']
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbers = ['1', '2', '3', '4' , '5', '6', '7', '8', '9', '0']

//our first function is going to help me find all the variables and the length, aka the input, that I will need to generate my new password
function passwordInput() {
  //First have an alert explaining the criteria for the passwords, and then they click 'ok' to go to the next screen.
  alert("Let's create a new and SECURE password! Your password MUST be at least 8, but no more than 128, characters long. And it MUST use at least 1 of the 4 character style options.");
  //Second use a 'prompt' so user can enter in the password length they want between 8-128 characters.
  // use parseInt to turn the prompt string into an integer that can be used later
  var pwLength = parseInt(prompt('Please enter a number between 8 and 128.'));

  // if the user does not choose a number between 8 and 128 then they will see this error message and will be asked to start over and follow the parameters.
  if(pwLength < 8 || pwLength > 128){
    alert('Sorry that number does not meet our parameters, please try again!')
    return;
  }

  //if the user does not choose a number but instead chooses a letter or symbol then they will see this error message and will be asked to start over and follow the parameters.
  if(isNaN(pwLength)) {
  alert('Sorry that is not a number and does not meet our parameters, please try again!')
    return;
  }

    alert('Please choose at least 1 of the 4 character style lists to generate your password. Click "Ok" for Yes and "Cancel" for No.')
    var useSym = confirm('Would you like to use symbol characters in your password?');
    var useLow = confirm('Would you like to use lower case characters in your password?');
    var useUp = confirm('Would you like to use upper case characters in your password?');
    var useNum = confirm('Would you like to use number characters in your password?');

    if(
      useSym === false && 
      useLow === false && 
      useUp === false && 
      useNum === false
    ) {
      alert(
        'Sorry you must choose at least one of the character groups! please try again'
        );
      return;
    }
  
    //var passwordObject is the variable in an object. the pairs are the names such as length, symbol, etc and the value are the  booleans variables, such as useSym and useLow as well as the intergar variable pwLength  
    // my key-value pairs; 
    var  passwordObject = {
    length: pwLength,
    symbol: useSym,
    lower: useLow,
    upper: useUp,
    number: useNum
  }
  // by returning it its now connected back / looped into the passwordInput function
  return passwordObject;
  ;

  }

  // want to create a function that will random choices from the arrays
  function makeRandom(array) {
    //get a random number of the length of characters to use
    //array.length is the length of the array
    //our variable arrNum is Array number, and we get this by first multiplying out array length by Math.ramdom
    //
    var arrNum = (Math.floor(Math.random() * array.length));
    var randNum = array[arrNum];
    return randNum;
  }

//need this function to combine the variable arrays into a new array
//the makeRandom function is now a local variable called object.
//the variable newArray has empty brackets to indicate it will be an array.
//the variable password has empty quotation marks to indicate it will be a string.
function generatePassword(){
  var object = passwordInput();
  var newArray = []
  var password = ""

  //using the concat function to combine the global character arrays into newArray
  if(object.symbol) {
    newArray = newArray.concat(symbols);
  }

  if(object.lower) {
    newArray = newArray.concat(lowerCase);
  }

  if(object.upper) {
    newArray = newArray.concat(upperCase);
  }

  if(object.number) {
    newArray = newArray.concat(numbers);
  }

//the for loop will use the variable index and it will run for the object.length which is the password length the user enters.
// within the for loop the new password will become an array. it does this by taking the array created through the if statements
//above and running that array through the makeRandom funtion the object.length amount of times.
//and finally to get the new password to become a string the concat funtion is used to combine the arrPassword into 
//a string in the final variable called password.
  for(var i = 0; i < object.length; ++i) {
    var arrPassword = makeRandom(newArray);
    password = password.concat(arrPassword)
  }
//the return password gives the user their password on the web page.
  return password;

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