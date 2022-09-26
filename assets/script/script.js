class Calculator {

    static addition(num1, num2) {
        return Number(num1) + Number(num2);
    }

    static subtraction(num1, num2) {
        return Number(num1) - Number(num2);
    }

    static multiplication(num1, num2) {
        return Number(num1) * Number(num2);
    }

    static division(num1, num2) {
        return Number(num1) / Number(num2);
    }

}

let firstNumber = '';
let secondNumber = '';

function getNumber() {
    firstNumber = document.getElementById("firstNumber").value;
    secondNumber = document.getElementById("secondNumber").value;
    let errorCode = 0;

    if (!firstNumber || isNaN(firstNumber)) {
        alert('Пожалуйста,введите первое число!');
        errorCode += 1;
    }

    if (!secondNumber || isNaN(secondNumber)) {
        alert('Пожалуйста,введите второе число!');
        errorCode += 1;
    }
    return errorCode;
}

function addition() {
    if (getNumber() === 0) {
        document.getElementById('result').value = Calculator.addition(firstNumber, secondNumber);
    }
}

function subtraction() {
    if (getNumber() === 0) {
        document.getElementById('result').value = Calculator.subtraction(firstNumber, secondNumber);
    }
}

function multiplication() {
    if (getNumber() === 0) {
        document.getElementById('result').value = Calculator.multiplication(firstNumber, secondNumber);
    }
}

function division() {
    if (getNumber() === 0) {
        if (+secondNumber === 0) {
            alert('На ноль делить нельзя!');
        } else {
        document.getElementById('result').value = Calculator.division(firstNumber, secondNumber);
        }
    }
}