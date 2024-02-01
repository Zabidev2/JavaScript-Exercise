const checkAnagrams = (first_string, second_string) => {
    if (first_string.length != second_string.length){
        return "Given Strings are not anagrams!"
    }
    for (let char of first_string) {
        let found = false;
        for (let second_char of second_string){
            if (char === second_char){

                found = true;
                break;
            }
        }
        if (!found){
            return "Given Strings are not anagrams!";
        }
    }
    return "Given Strings are anagrams!"
}

let firstString = "abcd 5";
let secondString = "5 dcba";
console.log(checkAnagrams(firstString,secondString));