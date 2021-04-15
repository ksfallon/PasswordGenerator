// Assignment Code
var generateBtn = document.querySelector('#generate');
// created these empty strings which will be filled later with variables we create'
//these are my global variables in arrays so I can use them in any function on this page.
var symbols = [ '@','%','+','\\',',','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u' , 'v', 'w', 'x' , 'y', 'z']
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbers = ['1', '2', '3', '4' , '5', '6', '7', '8', '9', '0']

//our first function is going to help me find all the variables and the length that I will generate my new password from
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
  
    // if(useSym === true) 
    //   {
    //  // add var symbols to var random list
    //  console.log('current random list: ' , random)
    //  random = symbols + random
    //  console.log('new random list: ', random)
    //  }
    // else {
      // console.log('SymBls', SymBls)
    

    // if(useLow ===  true) 
    // {
    //   console.log('current random list: ' , random)
    //   random = lowerCase + random
    //   console.log('new random list: ', random)
    // }
      //   LowerC ===  lowerCase
      // }
      //  else {LowerC ===  myNull}
      //  console.log('LowerC', LowerC)

    // if(useUp ===  true) 
    // {
    //   console.log('current random list: ' , random)
    //   random = upperCase + random
    //   console.log('new random list: ', random)
    // }
      //    UpperC ===  upperCase
      //  }
        // else {UpperC ===  myNull}
        // console.log('UpperC', UpperC)

  // if(useNum ===  true) 
    // {
      // console.log('current random list: ' , random)
      // random = numbers + random
      // console.log('new random list: ', random)
    // }
        //   NumBrs ===  numbers
        // }
        //  else {NumBrs ===  myNull}
        //  console.log('NumBrs', NumBrs)
      
    //**IMPORTANT, the return at the end will be important so it doesnt continue to add to the random list!! */
    // random = (SymBls + NumBrs + UpperC + LowerC)

  // is it ok to use var instead of let??
  // for (var i = 0; x=random.length; i<pwLength; ++i) {
  //         passWord += random.charAt(Math.floor(Math.random()*x))
  //      }
    
  // alert('Your new password is ' + passWord);
  // return passWord;
  // 

    //var passwordObject is the variable in an object. the pairs are the names such as length, symbol, etc and the value are the  booleans variables, such as useSym and useLow as well as the intergar variable pwLength  

  var  passwordObject = {
    //var passwordObject is the variable in an object. the pairs are the names such as length, symbol, etc and the value are the  booleans variables, such as useSym and useLow as well as the intergar variable pwLength  
    // my key-value pairs; 
    length: pwLength,
    symbol: useSym,
    lower: useLow,
    upper: useUp,
    number: useNum
  }
  console.log(passwordObject.length)
  console.log(passwordObject.symbol)
  console.log(passwordObject.lower)
  console.log(passwordObject.upper)
  console.log(passwordObject.number)

  console.log(passwordObject)

  // by returning it its now connected back / looped into the passwordInput function
  return passwordObject;
  ;

  }

  // want to create a function that will random choices from the arrays
  function makeRandom(array) {
    //get a random number of the length of characters to use
    //array.length is the length of the array
    //our variable arrNum is Array number, and we get this by first multiplying out array length but Math.ramdom
    //
    var arrNum = Math.floor(Math.random() * array.length)
    var randNum = array[arrNum];
    return randNum;
  }


function generatePassword(){
  var object = passwordInput();
  var newArray = ""
  var newPassWord = ""

  if(object.symbol) {
    newArray = newArray.concat(symbols);
  }
  console.log(newArray)

  if(object.lower) {
    newArray = newArray.concat(lowerCase);
  }
  console.log(newArray)

  if(object.upper) {
    newArray = newArray.concat(upperCase);
  }
  console.log(newArray)

  if(object.number) {
    newArray = newArray.concat(numbers);
  }
  console.log(newArray)


  for(var i = 0; i <= object.length; ++i) {
    var arrPassword = makeRandom(newArray);
    console.log(arrPassword);
  }

  var password = arrPassword.join()
  console.log(password)

  return password;
// for newArray I want to run it through makeRandom object.length many times to generate my password.
  //for (var i=0; i <=object.length; makeRandom(newArray); ++i )
  //for (var i = 0; i < randNum+1; i++)


    //now create if statements to bring in the variable arrays
  // if(object.symbol)  {
  //   makeRandom(symbols);
  //   // object = object.concat(symbols);
  //   console.log(makeRandom(symbols));
  // } 
  // // else {
  // //     return object;
  // //   }

  // if(object.lower) {
  //   makeRandom(lowerCase);
  //   // object = object.concat(lowerCase);
  //   //console.log(object);
  //   console.log(makeRandom(lowerCase));
  // } 
  // // else {
  // //   return object;
  // //   }

  // if(object.upper) {
  //   makeRandom(upperCase);
  //  // object = object.concat(upperCase);
  //   //console.log(object);
  //   console.log(makeRandom(upperCase));
  // } 
  // // else {
  // //   return object;
  // //   }

  // if(object.number) {
  //   makeRandom(numbers);
  //   // object = object.concat(numbers)
  //   //console.log(object);
  //   console.log(makeRandom(numbers));
  // } 
  // else {
  //   return object;
  //  }
  //for (var i = 0; i < randNum+1; i++)
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