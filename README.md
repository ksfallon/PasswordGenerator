# PasswordGenerator

Here is the link for my Password Generator webpage [PasswordGeneratorWebpage]( https://ksfallon.github.io/PasswordGenerator/)

For this homework assignment I decided to put my variables into arrays. I understand how to do it with strings as well, but for some reason I am able to wrap my head around this more than with strings!

## Using Alerts, Prompts, and Confirms to gather information

1. I wanted to make sure I set *alerts* that thoroughly explained the password parameters. This is why I included the instructions before asking any questions: "Let's create a new and SECURE password! Your password MUST be at least 8, but no more than 128, characters long. And it MUST use at least 1 of the 4 character style options." I used an *alert* because I only want the user to have to option to click OK, there is no real need for a cancel.

[Screen SHOT of FIRST ALERT] 

2. Once the user clicks OK on the first *alert*, the user is directed to a *prompt* window and are asked to "Please enter a number between 8 and 128." By using the *prompt* function it gives a space for users to type in their answer. 
- If the user does not choose a number between 8-128, this *alert* pops up 'Sorry that number does not meet our parameters, please try again! The user has to start over and must click Generate Password again.
>> - Inside of an *if statement* I used **pwlength < 8 || 128 > pwlength**, to tell my function to check to see if the number is less than 8 OR greater than 128 to send my error alert.

[GIF of wrong number]

- If the user does not choose a number but instead a symbol or letter a similar *alert* pops up: 'Sorry that is not a number and does not meet our parameters, please try again!' and the user must start over and click Generate Password again. 
>> - I used the **isNAN** (is not a number) function within an if statement to determine if the number entered which I called pwLength is an actual number or not. If it determines the pwLength given was not a number than the user gets my error *alert*.

[GIF of isNAN error]

- When the user types a number between 8-128 then a new *alert* pops up explaining (again) "Please choose at least 1 of the 4 character style lists to generate your password. Click "Ok" for Yes and "Cancel" for No." I figured why not explain that ok means yes and cancel means no. 

3. When the user clicks OK, then the character variable choices will pop up one at at time. 
- First the user is asked 'Would you like to use symbol characters in your password?' they'll either choose ok or cancel to move through the 4 character variable windows.
>> - I used *confirms*, because this gives the user to option to click OK or Cancel.

[GIF of VARIABLE selection, all 4 variables]

- If the user clicks No or Cancel for all of the variables than the alert 'Sorry you must choose at least one of the character groups! please try again' and the user is sent back to the Password Generator page.

[GIF OF selecting CANCEL for all variables]

## Deeper into The Code: The Functions that generate a Random Password 

To generate the password is used multiple functions:
1. The first function I used, called **passwordInput()** , gathered all the information I needed to eventually generate my password and put that information into an object. The function gave me this object:
[screen shot of my object JS]
This object grabs the length variable - *pwlength* based on what was entered into the password length prompt. I used *parseInt* to convert it from a string to an integar. The next 4 key value pairs are booleans that are generated based on my 4 character variables: symbols, lower, upper, number and within the object they are True if the user clicks OK and they are False if the user clicks cancel.

2. The next function I used, called **makeRandom(array)** , can be used to randomly select any item within that array. To do this my first line of code within the function is:

- var arrNum = Math.floor(Math.random() * array.length) 
working from the inside out - the length of my array must first be multiplied by **Math.random()** which is just a function that returns a random number between 0 and 1. 
- This is held within the function **Math.floor()** which is a function that give you an integar value rather than a decimal value, it rounds it down. And what it returns is a random number from within that array. And in our case, it will return that symbol, or lowercase, or uppercase, or number associated with the random number generated. 

the next two lines of code are:

- var randNum = array[arrNum];
    return randNum;
- We want to put this new random number we have created into an array, and this is easily done by creating a new variable which is called *randNum* and having that equal *array[arrNum]* . Then we return our new array *randNum* to close out the function.
- BUT, this only gives us one random symbol

3. My final function will use the two previous functions to create my password. 
- My function is called **generatePassword()** and the first could lines of code will be my local variables. 
- the first is: **var object = passwordInput();** in which i turn my first function **passwordInput()** into a variable called *object*.
- the second line is **var newArray = ''** and i'm creating a new local variable called *newArray* but it is empty. I will use the if statements to create this new variable array.
- Next I create if statements to combine my global variable arrays: symbols, lowerCase, upperCase, and numbers into a single array, my local variable called *newArray*.
- My if statements will ask refer to the booleans collected in the **passwordInput()** which is now a variable called *object* and if the value of the key is true the array is added to the *newArray* and if it is false, the function just goes to the next if statement.
- Next I create my for loop. Here i will use the *newArray* inside of the **makeRandom()** function and run that *object.length* times through to generate my password.
- But here is my problem - this creates a passowrd in an array and it needs to be a list.







