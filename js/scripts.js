function whileFunction() {
    let count = 5;
    while (count <= 15) {
        console.log(count);
        count += 1;
    }
}

function factorialFunction() {
    let num = 26;
    let fact = 1;
    for (let i = 1; i <= num; i++){
        fact *= i;
    }
    console.log(fact.toLocaleString('fullwide', {useGrouping:false}));
}
