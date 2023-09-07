
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

    if (!validateNumber(consumption) || !validateNumber(gasolinePrice) || !validateNumber(lengthOfJurney)) {
        alert(`You enterred an incorrect data! Please enter a number!`);
        return;
    }
    let result = `The consumption of the car is: ${consumption} liter/100 km, the price of gasoline is: ${gasolinePrice} €/liter and the length of the journey is: ${lengthOfJurney} km. <br>The travel cost is: ${calculateTravelCost(consumption, gasolinePrice, lengthOfJurney)} €.`;
    document.getElementById(`solution-10`).innerHTML = result;
}

// Exercise 11

function exchangeEuro(euroExchangeRate, euroAmmount) {
    return euroExchangeRate * euroAmmount;
}

function printExchange() {
    let euroExchangeRate = Number(prompt(`Please enter the euro exchange rate (how much is 1 € worth in HUF)!`));
    let euroAmmount = Number(prompt(`Please enter the amount of euros you want to convert to HUF!`));

    if (!validateNumber(euroExchangeRate) || euroExchangeRate < 1) {
        alert(`You enterred an incorrect data! Please enter a positive number!`);
        return;
    }
    if (!validateIntegerNumber(euroAmmount) || euroAmmount < 1) {
        alert(`You enterred an incorrect data! Please enter a positive integer number!`);
        return;
    }
    let result = `1 € = ${euroExchangeRate} HUF <br>Your desired amount is ${euroAmmount} €, which is ${exchangeEuro(euroExchangeRate, euroAmmount)} HUF.`;
    document.getElementById(`solution-11`).innerHTML = result;
}

// Exercise 12
function calculateCubeSurface(cubeSide) {
    return 6 * (Math.pow(cubeSide, 2));
}

function calculateCubeVolume(cubeSide) {
    return Math.pow(cubeSide, 3);
}

function printCubeSurfaceAndVolume() {
    let cubeSide = Number(prompt(`Please enter a number (side of the cube)!`));

    if (!validateNumber(cubeSide) || cubeSide < 1) {
        alert(`You enterred an incorrect data! Please enter a positive number!`);
        return;
    }
    let result = `The side of the cube is: ${cubeSide}, therefore the surface is: ${calculateCubeSurface(cubeSide)} and volume is: ${calculateCubeVolume(cubeSide)}.`;
    document.getElementById(`solution-12`).innerHTML = result;
}

// Exercise 13
function calculateConeSurface(coneRadius, coneHeight) {
    let surface = Math.PI * coneRadius * (coneRadius + ((Math.sqrt(Math.pow(coneRadius, 2) + Math.pow(coneHeight, 2)))));
    return surface.toFixed(3);
}

function calculateConeVolume(coneRadius, coneHeight) {
    let volume = (1 / 3) * (Math.PI * Math.pow(coneRadius, 2) * coneHeight);
    return volume.toFixed(3);
}

function printConeSurfaceAndVolume() {
    let coneRadius = Number(prompt(`Please enter a number (radius of the cone)!`));
    let coneHeight = Number(prompt(`Please enter a number (height of the cone)!`));

    if (!validateNumber(coneRadius) || coneRadius < 1 || !validateNumber(coneHeight) || coneHeight < 1) {
        alert(`You enterred an incorrect data! Please enter a positive number!`);
        return;
    }
    let result = `The radius of the cone is: ${coneRadius}, the height is: ${coneHeight}. <br>Therefore the surface is ${calculateConeSurface(coneRadius, coneHeight)} and volume is ${calculateConeVolume(coneRadius, coneHeight)}.`;
    document.getElementById(`solution-13`).innerHTML = result;
}

// Exercise 14/a
function createArray(lenghtOfArray, lowerLimit, upperLimit) {
    if (lowerLimit > upperLimit) {
        alert(`The upper limit has to be greather than the lower limit!`);
        return;
    }
    let randomArray = [];
    for (let i = 0; i < lenghtOfArray; i++) {
        let element = Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
        randomArray.push(element)
    }
    return randomArray;
}

function printArrayResults() {
    let lenghtOfArray = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
    // console.log(lenghtOfArray);
    let lowerLimit = Number(prompt(`Please enter the lower limit of random numbers!`));
    let upperLimit = Number(prompt(`Please enter the upper limit of random numbers!`));

    if (!validateIntegerNumber(lenghtOfArray) || lenghtOfArray < 1) {
        alert(`You enterred an incorrect data! Please enter a positive integer number!`);
        return;
    }
    if (!validateIntegerNumber(lowerLimit) || !validateIntegerNumber(upperLimit)) {
        alert(`You enterred an incorrect data! Please enter an integer number!`);
        return;
    }

    let randomArray = createArray(lenghtOfArray, lowerLimit, upperLimit);

    let result = `Your array is: ${randomArray.join(`, `)}`;
    document.getElementById(`solution-14-a`).innerHTML = result;

    document.getElementById(`solution-14-b`).innerHTML = calculateSumOfEvens(randomArray);

    document.getElementById(`solution-14-c`).innerHTML = calculateAverageOfOdds(randomArray);

    document.getElementById(`solution-14-d`).innerHTML = `The smallest value is: ${determineSmallestValue(randomArray)}`;

    document.getElementById(`solution-14-e`).innerHTML = `The index/indices of the smallest elements is/are: ${determineIndexOfSmallestValue(randomArray)}`;

    document.getElementById(`solution-14-f`).innerHTML = `One random element from the array: ${searchRandomElement(randomArray)}`;

    document.getElementById(`solution-14-g`).innerHTML = `Every 5th elements from the array: ${searchFifthElements(randomArray)}`;

    document.getElementById(`solution-14-h`).innerHTML = searchDivisibleByThree(randomArray);
}

// Exercise 14/b
function calculateSumOfEvens(array) {
    let sumEvens = 0;
    array.forEach(element => {
        if (element % 2 == 0) {
            sumEvens += element;
        }
    });
    if (sumEvens) {
        return `The sum of the even elements is: ${sumEvens}`;
    } else {
        return `There are no even elements in the array!`;
    }
}

// Exercise 14/c
function calculateAverageOfOdds(array) {
    let sumOdds = 0;
    let counter = 0;
    array.forEach(element => {
        if (element % 2 !== 0) {
            sumOdds += element;
            counter++;
        }
    });
    if (counter !== 0) {
        return `The average of the odd elements is: ${(sumOdds / counter).toFixed(1)}`;
    } else {
        return `There are no odd elements in the array!`;
    }
}

// Exercise 14/d
function determineSmallestValue(array) {
    let smallestElement = array[0];
    array.forEach(element => {
        if (element < smallestElement) {
            smallestElement = element;
        }
    });
    return smallestElement;
}

// Exercise 14/e
function determineIndexOfSmallestValue(array) {
    let indices = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === determineSmallestValue(array)) {
            indices.push(i);
        }
    };
    return indices.join(`, `);
}

// Exercise 14/f
function searchRandomElement(array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// Exercise 14/g
function searchFifthElements(array) {
    let fifthElements = [];
    for (let i = 4; i < array.length; i += 5) {
        fifthElements.push(array[i]);
    };
    return fifthElements.join(`, `);
}

// Exercise 14/h
function searchDivisibleByThree(array) {
    let divisibleByThree = [];
    let counter = 0;
    array.forEach(element => {
        if (element % 3 == 0) {
            divisibleByThree.push(element);
            counter++;
        }
    });
    if (counter > 0) {
        return `These numbers are divisible by three without
            a remainder: ${divisibleByThree.join(`, `)}`;
    } else {
        return `There are no numbers in the array that are divisible by three without
            a remainder!`;
    }
}

// Exercise 15
function calculateBmi(usersWeight, usersHeight) {
    let usersHeightInMeter = usersHeight / 100;
    return (usersWeight / (Math.pow(usersHeightInMeter, 2))).toFixed(2);
}

function changeBmiToText(bmi) {
    if (bmi < 16) {
        return `seriously underweighted`;
    } else if (16 <= bmi && bmi < 17) {
        return `moderately underweighted`;
    } else if (17 <= bmi && bmi < 18.5) {
        return `mildly underweighted`;
    } else if (18.5 <= bmi && bmi < 25) {
        return `in the normal weight zone`;
    } else if (25 <= bmi && bmi < 30) {
        return `overweighted`;
    } else if (30 <= bmi && bmi < 35) {
        return `in Obese Class I`;
    } else if (35 <= bmi && bmi < 40) {
        return `in Obese Class II`;
    } else if (40 <= bmi) {
        return `in Obese Class III (morbidly obese)`;
    }
}

function printBmi() {
    let usersWeight = Number(prompt(`Please enter your weight (in kilograms)!`));
    let usersHeight = Number(prompt(`Please enter your height (in centimeters)!`));

    if (!validateNumber(usersWeight) || usersWeight < 1 || !validateNumber(usersHeight) || usersHeight < 1) {
        alert(`You enterred an incorrect data! Please enter a positive number!`);
        return;
    }
    let bmi = calculateBmi(usersWeight, usersHeight);
    let result = `Your Body Mass Index (BMI) is: ${bmi} , you are ${changeBmiToText(bmi)}.`;
    document.getElementById(`solution-15`).innerHTML = result;
}

// Exercise 16
function calculateSleepTime(sleepTime) {
    if (0 <= sleepTime && sleepTime <= 6) {
        return `little`;
    } else if (7 <= sleepTime && sleepTime <= 9) {
        return `average`;
    } else if (10 <= sleepTime && sleepTime <= 12) {
        return `plenty`;
    } else if (13 <= sleepTime && sleepTime <= 24) {
        return `a lot of`;
    }
}

function printSleepTime() {
    let sleepTime = Number(prompt(`Please enter the average number of hours the user sleeps per day (as a whole number)!`));

    if (!validateIntegerNumber(sleepTime) || sleepTime < 0) {
        alert(`You enterred an incorrect data! Please enter an integer number greater than or equal to 0!`);
        return;
    }
    let result = `You are sleeping ${sleepTime} hours, which is ${calculateSleepTime(sleepTime)}.`;
    document.getElementById(`solution-16`).innerHTML = result;
}

// Exercise 17
function calculateQuadraticEquationX1(a, b, c) {
    let x1 = (-b + (Math.sqrt(Math.pow(b, 2) - 4 * a * c))) / 2 * a;
    return x1;
}

function calculateQuadraticEquationX2(a, b, c) {
    let x2 = (-b - (Math.sqrt(Math.pow(b, 2) - 4 * a * c))) / 2 * a;
    return x2;
}

function printQuadraticEquation() {
    let a = Number(prompt(`Please enter a number (a)!`));
    let b = Number(prompt(`Please enter another number (b)!`));
    let c = Number(prompt(`Please enter another number (c)!`));

    if (!validateNumber(a) || !validateNumber(b) || !validateNumber(c)) {
        alert(`You enterred an incorrect data! Please enter a number!`);
        return;
    }

    let result = ``;
    let discriminant = Math.pow(b, 2) - 4 * a * c;
    console.log(discriminant);
    if (a === 0 || discriminant < 0) {
        alert(`You entered an incorrect data! 'a' cannot be equal to 0, and the discriminant of the equation cannot be a negative number!`);
    } else {
        result = `a = ${a}, b = ${b}, c = ${c} <br>
    The results are: x1 = ${calculateQuadraticEquationX1(a, b, c)} and x2 = ${calculateQuadraticEquationX2(a, b, c)}.`;
    }
    document.getElementById(`solution-17`).innerHTML = result;
};

// Exercise 18
function createCoinFlips() {
    let coinFlips = [];
    for (let i = 0; i < 3; i++) {
        let randomSide = Math.floor(Math.random() * 2);
        if (randomSide == 0) {
            coinFlips.push(`heads`);
        } else {
            coinFlips.push(`tails`);
        };
    }
    return coinFlips.join(`, `);
}

function printCoinFlips() {
    let result = `The reasult of the coin flips are: ${createCoinFlips()}.`;
    document.getElementById(`solution-18`).innerHTML = result;
}

// Exercise 19
function calculateReward(dailyIncome) {
    return dailyIncome / 100 * 5;
}

function printReward() {
    let dailyIncome = Number(prompt(`Please enter your daily income (in euros)!`));

    if (!validateNumber(dailyIncome) || dailyIncome < 0) {
        alert(`You enterred an incorrect data! Please enter a positive number!`);
        return;
    }
    let result = `Your daily income is: ${dailyIncome} €, your reward is: ${calculateReward(dailyIncome)} €.`;
    document.getElementById(`solution-19`).innerHTML = result;
}

// Exercise 20
function determineBirthPlace(birthPlace) {
    if (birthPlace === `Budapest` || birthPlace === `Buda` || birthPlace === `Pest`) {
        return `capital`;
    } else {
        return `countryside`;
    };
}

function printBirthPlace() {
    let birthPlace = prompt(`Please enter your place of birth!`);

    let result = `Your place of birth is: ${birthPlace}, you were born in the ${determineBirthPlace(birthPlace)}.`;
    document.getElementById(`solution-20`).innerHTML = result;
}