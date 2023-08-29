
// Validates whether the input is a number
function validateNumber(input) {
    return !isNaN(input);
}

function validateIntegerNumber(input) {
    return Number.isInteger(input);
}

// Exercise 1
function calculateGrossPrice(netPrice, vatPercentage) {
    if (netPrice < 0 || vatPercentage < 0) {
        return `cannot be calculated with the given data`;
    }

    let vatNumber = vatPercentage / 100;
    return netPrice + (netPrice * vatNumber);
}

function printGrossPrice() {
    let netPrice = Number(prompt(`Please enter the price of your product (integer number)!`));
    let vatPercentage = parseFloat(prompt(`Please enter the value of the VAT (%)!`));

    if (!validateIntegerNumber(netPrice)) {
        alert(`You enterred an incorrect data! Please enter an integer number!`);
        return;
    }
    if (!validateNumber(vatPercentage)) {
        alert(`You enterred an incorrect data! Please enter a number!`);
        return;
    }

    let result = `The price of your product is: ${netPrice} and the value of the VAT is: ${vatPercentage}%. \nThe gross price of your product is ${calculateGrossPrice(netPrice, vatPercentage)}.`;
    alert(result);
    document.getElementById(`solution-1`).innerHTML = result;
}

// Exercise 2
function isPrime(number) {
    let isPrime = true;

    let counter = 0;
    for (let i = 2; i <= number - 1; i++) {
        if (number % i === 0) {
            counter++;
        }
    }
    if (counter > 0) {
        isPrime = false;
    }

    if (isPrime && number > 1) {
        return `a prime`;
    } else {
        return `not a prime`;
    }
}

function printIsPrime() {
    let requestedNumber = Number(prompt(`Please enter an integer number!`));

    if (!validateIntegerNumber(requestedNumber)) {
        alert(`You enterred an incorrect data! Please enter an integer number!`);
        return;
    }

    let result = `Your number is: ${requestedNumber}, which is ${isPrime(requestedNumber)} number.`;
    alert(result);
    document.getElementById(`solution-2`).innerHTML = result;
}

// Exercise 3
function isPalindrome(string) {
    let isPalindrome = true;

    let cleanString = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();    // Remove non-alphanumeric characters
    let reversedString = cleanString.split('').reverse().join('');

    if (cleanString === reversedString) {
        isPalindrome = true;
        return `a palindrome`;
    } else {
        isPalindrome = false;
        return `not a palindrome`;
    };
}

function printIsPalindrome() {
    let requestedStr = String(prompt(`Please enter a text!`));

    let result = `Your text is: ${requestedStr}, which is ${isPalindrome(requestedStr)}.`;
    document.getElementById(`solution-3`).innerHTML = result;
}

// Exercise 4
function createPassword(passwordLength) {
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = ``;
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length);
        let passwordChr = charset[randomIndex];
        password += passwordChr;
    }
    return password;
}

function printPassword() {
    let requestedNumber = Number(prompt(`Please enter the length of the desired password!`));

    if (!validateIntegerNumber(requestedNumber)) {
        alert(`You enterred an incorrect data! Please enter an integer number!`);
        return;
    }
    if (requestedNumber < 1) {
        alert(`Please enter a number greather than 1!`);
        return;
    }

    let result = `Your password is: ${createPassword(requestedNumber)}`;
    console.log(result);
    document.getElementById(`solution-4`).innerHTML = result;
}

// Exercise 5
function isDivisible(number1, number2) {
    let isDivisible;
    if (number1 % number2 == 0 || number2 % number1 == 0) {
        isDivisible = true;
    } else {
        isDivisible = false;
    }

    if (isDivisible) {
        return `divisible`;
    } else {
        return `not divisible`;
    }
}

function printIsDivisible() {
    let firstRequestedNumber = Number(prompt(`Please enter a number!`));
    let secondRequestedNumber = Number(prompt(`Please enter another number!`));

    if (!validateNumber(firstRequestedNumber) || !validateNumber(secondRequestedNumber)) {
        alert(`You enterred an incorrect data! Please enter a number!`);
        return;
    }

    let result = `Your numbers are: ${firstRequestedNumber} and ${secondRequestedNumber}, they are ${isDivisible(firstRequestedNumber, secondRequestedNumber)} with each other.`;
    console.log(result);
    document.getElementById(`solution-5`).innerHTML = result;
}