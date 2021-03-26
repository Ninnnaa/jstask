function whileFunction() {
    let count = 5;
    while (count <= 15) {
        console.log(count);
        count += 1;
    }
}

function factorialFunction() {
    let num = 26;
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    const result = factorial.toLocaleString('fullwide', {useGrouping:false});
    console.log(result);
}
function drawstars() {
    var arr= ['*', '**', '***'];
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }

}
