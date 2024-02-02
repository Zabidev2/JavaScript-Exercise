function validateInput(input) {
    const regex = /(\(\)|\[\]|\{\})/g;

    while (input.match(regex)) {
        input = input.replace(regex, "");

    }

    if (input.length){
        return "Input is not balanced!";
    }
    else{
        return "Input is balanced!";
    }
}

const inputString = "{[()]}[]";
console.log(validateInput(inputString));