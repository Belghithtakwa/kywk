const prompt = require('prompt');

generateRandomIntegers = (min, max) => {
    const randomIntegers = [];
    for (let i = 0; i < 3; i++) {
        randomIntegers.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return randomIntegers;
}

generateSecondDegreeFunctionString = (a, b, c) => {
    return `f(x) = ${a}x² + ${b}x + ${c}`;
}


calculateDiscriminant = (a, b, c) => {
    return Math.pow(b, 2) - 4 * a * c;
}

isPerfectSquare = (number) => {
    // Calculate the square root of the number
    var squareRoot = Math.sqrt(number);

    // Check if the square root is an integer
    if (Number.isInteger(squareRoot)) {
        return true; // The number is a perfect square
    } else {
        return false; // The number is not a perfect square
    }
}


// function pour retourner le type de discriminant : carree ou bien non carree mais petit ou bien negative 
calculateTypeOfDiscriminant = (a, b, c) => {
    dicriminant = calculateDiscriminant(a, b, c)
    if (dicriminant < 0) {
        return "Negative";
    }
    else if (dicriminant == 0) {
        return "Zero";
    }
    else if (isPerfectSquare(dicriminant)) return "Discriminant carre";
    else return "Discriminant non carre mais petit";
}

module.exports.generateurs =async (discriminantType) => {
    let numbers = [];
    let type = "";
    do {
        numbers = generateRandomIntegers(1, 9);
        type = calculateTypeOfDiscriminant(numbers[0], numbers[1], numbers[2]);

    } while (type !== discriminantType)

    console.log("Trouver le discriminant de :")
    console.log(generateSecondDegreeFunctionString(numbers[0], numbers[1], numbers[2]))
    const { input } = await prompt.get(['input'])
    const discriminant = calculateDiscriminant(numbers[0], numbers[1], numbers[2])
    if (discriminant == parseInt(input)) {
        console.log("Correct");
    } else {
        console.log(`c'est n'est pas la bonne réponse , la valeur exacte est :` +discriminant);
    }
}
