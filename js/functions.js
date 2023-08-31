
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
    let charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = ``;
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * charSet.length);
        let passwordChr = charSet[randomIndex];
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

// Exercise 6
function createWeeklyLotteryFive() {
    let lotteryFiveNumbers = [];
    let i = 0;
    while (lotteryFiveNumbers.length < 5) {
        let randomNumber = Math.floor(Math.random() * 90 + 1);
        if (!lotteryFiveNumbers.includes(randomNumber)) {
            lotteryFiveNumbers.push(randomNumber);
        }
    }

    return lotteryFiveNumbers.join(`, `);
}

function printWeeklyLotteryFive() {
    let result = `The 5 lottery numbers for this week are: ${createWeeklyLotteryFive()}.`;
    document.getElementById(`solution-6`).innerHTML = result;
}

// Exercise 7
function createLotterySix() {
    let lotterySixNumbers = [];
    while (lotterySixNumbers.length < 6) {
        let randomNumber = Math.floor(Math.random() * 45 + 1);
        if (!lotterySixNumbers.includes(randomNumber)) {
            lotterySixNumbers.push(randomNumber);
        }
    }
    return lotterySixNumbers.join(`, `);
}

function printYearlyLotterySix() {
    let yearlyNumbers = ``;
    for (let i = 0; i < 52; i++) {
        let result = `Week ${i + 1}: ${createLotterySix()}. <br>`;
        yearlyNumbers += result;
    }
    document.getElementById(`solution-7`).innerHTML = `The 6 lottery numbers for each week are: <br>${yearlyNumbers}`;
}

// Exercise 8
function calculatePercentageOfVowels(text) {
    let charSet = [`a`, `e`, `i`, `o`, `u`];
    let cleanText = text.replace(/[^a-zA-z0-9]/g, ``).toLowerCase().split(``);
    let counter = 0;
    for (let i = 0; i < cleanText.length; i++) {
        if (charSet.includes(cleanText[i])) {
            counter++;
        };
    }
    console.log(counter);
    let persentage = counter / cleanText.length * 100;
    return persentage;
}

function printPercentageOfVowels() {
    let requestedText = prompt(`Please write your text here!`);
    let result = `The percentage of vowels in your text are: ${calculatePercentageOfVowels(requestedText)}%.`;
    document.getElementById(`solution-8`).innerHTML = result;
}

// Exercise 9
function calculateHypotenuse(leg1, leg2) {
    let hypotenuse = Math.sqrt(Math.pow(leg1, 2) + Math.pow(leg2, 2));
    return hypotenuse;
}

function printHypotenuse() {
    let firstRequestedNumber = Number(prompt(`Please enter a number!`));
    let secondRequestedNumber = Number(prompt(`Please enter another number!`));

    if (!validateNumber(firstRequestedNumber) || firstRequestedNumber <= 0 || !validateNumber(secondRequestedNumber) || secondRequestedNumber <= 0) {
        alert(`You enterred an incorrect data! Please enter a positive number!`);
        return;
    }

    let result = `The two legs of the right-angled triangle are: ${firstRequestedNumber} and ${secondRequestedNumber}, the hypotenuse is: ${calculateHypotenuse(firstRequestedNumber, secondRequestedNumber)}.`;
    document.getElementById(`solution-9`).innerHTML = result;
}

// Exercise 10
function calculateTravelCost(consumption, gasolinePrice, lengthOfJurney) {
    let travelCost = (consumption * gasolinePrice / 100) * lengthOfJurney;
    return travelCost;
}

function printTravelCost() {
    let consumption = Number(prompt(`Please enter the consumption of the car (liters per 100 km)!`));
    let gasolinePrice = Number(prompt(`Please enter the price of gasoline (euro per liter)!`));
    let lengthOfJurney = Number(prompt(`Please enter the length of the journey (km)!`));

    let result = `The consumption of the car is: ${consumption} liter/100 km, the price of gasoline is: ${gasolinePrice} €/liter and the length of the journey is: ${lengthOfJurney} km. <br>The travel cost is: ${calculateTravelCost(consumption, gasolinePrice, lengthOfJurney)} €.`;
    document.getElementById(`solution-10`).innerHTML = result;
}