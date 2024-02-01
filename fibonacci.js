
const printFibonacci = (number) => {
    let series = [0,1]
    while (series[series.length-1] + series[series.length-2] <= number){
        series.push(series[series.length-1] + series[series.length-2]);
    }
    console.log(series);
}

printFibonacci(24)