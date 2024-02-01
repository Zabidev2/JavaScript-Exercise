const findDuplicates = (numbers) => {
    let duplicates = [];
  for (let i=0 ; i < numbers.length ; i++){
      for (let j = i + 1 ; j <= numbers.length - 1 ; j++) {
          if (numbers[i] == numbers[j]) {
              duplicates.push(numbers[i]);
              break;
          }
      }
    }
  return duplicates;
}
let numbers = [1, 2, 3, 4, 2, 5, 6, 7, 8, 1];
console.log(findDuplicates(numbers));