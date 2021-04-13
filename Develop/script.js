// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

}



var symbols = ['!', '"', '@', '#', '$', '%', '^', '&', '*', "'", ')', '(', '+', ',', '.', '/', ':', ';', '<', '>', '=', '?', '[', ']', '`', '|', '{', '}' , '~' , '_' , ' ',]
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u' , 'v', 'w', 'x' , 'y', 'z']
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbers = ['1', '2', '3', '4' , '5', '6', '7', '8', '9', '0']

// user must choose password character length 7< x >129
var passwordbox = window.prompt('How long will your password be? Choose a password length that is greater than 7 but less than 129 characters')

// // doesn't like this code but this is the idea - why doesn't it work?
if user chooses password character length x<8 or x>128 
if (passwordbox > '8') {
window.alert('Sorry that is not enough characters, please choose a password length that is greater than 7 but less than 129 characters ');
else if (passwordbox > 128)

window.prompt('Sorry that is too many characters, please choose a password length that is greater than 7 but less than 129 characters ')

// }

var passwordLength = window.prompt('Which characters would you like to use in your password: lower case (1), upper case(2), symbols(3) and/or numbers(4)? You must choose at least one and you can choose up to 4. For lowercase please enter "1", for uppercase please enter "2", for symbols please choose "3" and for numbers please choose "4". If you would like to choose multiple please enter like so "1, 3, 4" and if you would like all of the options enter "all")


// Would you like to use all character types in your password?
if no, exit to 'Would you like to use uppercase characters'
if yes, we run math.floor(math.random()) for all variables 

Would you like to use uppercase characters?
if no, exit to 'Would you like to use lower case characters'
if yes, 'Would you also like to include lowerCase case characters'
  if no, exit to 'Would you like to use symbols'
  if yes, 'would you like to also use symbols?'
    if no, exit to 'would you also like to use numbers?'
    if yes, 'Would you like to also include numbers?'
      if no, we run math.floor(math.random()) for uppercase, lowercase and symbols
      if yes we run math.floor(math.random()) for all variables

"Would you like to use lowercase?" (no uppercase)

'Would you like to include symbols?' (Yes uppercase, no lowercase)

'Would you also like to use numbers?'(Yes uppercase, yes lowercase, no symbols)


OR can we do this:
Would you like to use all character types in your password?
if yes, run math.floor(math.random()) for all variables
if no, continue on to these 4 Y or N questions:
Would you like to use lowercase characters? Y or N
Would you like to use uppercase characters? Y or N
Would you like to use symbols? Y or N
Would you like to use numbers? Y or N

If they Choose Y N N N - run math.floor(math.random()) only for lowercase characters
if they choose Y Y N N - run math.floor(math.random())  for lowercase AND uppercase characters
if they choose Y N Y N - run math.floor(math.random()) for lowercase AND symbols
if they choose Y N N Y - run math.floor(math.random()) for lowercase AND numbers
if they choose Y Y Y N - run math.floor(math.random()) for lowercase AND uppercase AND symbols
if they choose Y Y N Y - run math.floor(math.random()) for lowercase AND uppercase AND numbers
if they choose Y N Y Y - run math.floor(math.random()) for lowercase AND symbols AND numbers
if they choose Y Y Y Y - run math.floor(math.random()) for ALL variables

