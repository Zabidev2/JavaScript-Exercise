const validateInput = (input) => {
    const firstCondition = [...input.matchAll(/\(/g)].length == [...input.matchAll(/\)/g)].length;
    const secondCondition = [...input.matchAll(/\{/g)].length == [...input.matchAll(/\}/g)].length;
    const thirdCondition = [...input.matchAll(/\[/g)].length == [...input.matchAll(/\]/g)].length;

    if (firstCondition && secondCondition && thirdCondition){
        return "Input is balanced!"
    }
    else{
        return "Input is not balanced!"
    }

}

let input  = "()(){[])";
console.log(validateInput(input));


