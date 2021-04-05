function displayArraysByColorsSwitchVersion() {
    const fruits = [
        {name: "banana", color: "yellow"},
        {name: "apple", color: "red"},
        {name: "kiwi", color: "green"},
        {name: "raspberry", color: "red"},
        {name: "pepper", color: "red"},
    ];
    const allFruits = [];
    const red = 'red';
    const yellow = 'yellow';
    const green = 'green';

    fruits.forEach((fruit) => {
        const color = fruit.color;

        switch (color) {
            case red:
                if(allFruits[0]) {
                    allFruits[0].push(fruit);
                } else {
                    allFruits[0]=[fruit];
                }
                break;
            case yellow:
                if(allFruits[1]) {
                    allFruits[1].push(fruit);
                } else {
                    allFruits[1]=[fruit];
                }
                break;
            case green:
                if(allFruits[2]) {
                    allFruits[2].push(fruit);
                } else {
                    allFruits[2]=[fruit];
                }
                break;
            default:
                console.log("This color does not exist in our system");
        }
    });

    console.log(allFruits);

    return allFruits;
}

function displayArraysByColorsIfElseVersion() {
    const fruits = [
        {name: "banana", color: "yellow"},
        {name: "banana", color: "yellow"},
        {name: "apple", color: "red"},
        {name: "kiwi", color: "green"},
        {name: "raspberry", color: "red"},
        {name: "pepper", color: "red"},
    ];
    const allFruits = [];
    const red = 'red';
    const yellow = 'yellow';
    const green = 'green';

    fruits.forEach(
        (fruit) => {
        const color = fruit.color;
        if (color === red) {
            if(allFruits[0]) {
                allFruits[0].push(fruit);
            } else {
                allFruits[0]=[fruit];
            }
        } else if(color === yellow) {
            if(allFruits[1]) {
                allFruits[1].push(fruit);
            } else {
                allFruits[1]=[fruit];
            }
        } else if (color === green) {
            if(allFruits[2]) {
                allFruits[2].push(fruit);
            } else {
                allFruits[2]=[fruit];
            }
        }
    });

    console.log(allFruits);
}

function orderProductsByColors() {
    const fruits = [
        {name: "banana", color: "yellow"},
        {name: "apple", color: "red"},
        {name: "kiwi", color: "green"},
        {name: "raspberry", color: "red"},
        {name: "pepper", color: "red"},
    ];
    const allFruits = [];
    const red = 'red';
    const yellow = 'yellow';
    const green = 'green';

    fruits.forEach((fruit) => {
        const color = fruit.color;

        switch (color) {
            case red:
                if(allFruits[0]) {
                    allFruits[0].push(fruit.name);
                } else {
                    allFruits[0]=[fruit.name];
                }
                break;
            case yellow:
                if(allFruits[1]) {
                    allFruits[1].push(fruit.name);
                } else {
                    allFruits[1]=[fruit.name];
                }
                break;
            case green:
                if(allFruits[2]) {
                    allFruits[2].push(fruit.name);
                } else {
                    allFruits[2]=[fruit.name];
                }
                break;
            default:
                console.log("This color does not exist in our system");
        }
    });

    console.log("The " +red +" products are: " + allFruits[0] +"\n"+
        "The " +yellow +" products are: " + allFruits[1]+"\n"+
        "The " +green +" products are: " + allFruits[2]);
}

function orderProductsByColorsSecond() {
    const allFruits = displayArraysByColorsSwitchVersion();
    let result = '';

    allFruits.forEach((fruitArray) => {
        const color = fruitArray[0].color;
        result += "The " + color +" products are: "
        fruitArray.forEach((fruit) => {
            result += fruit.name + ", ";
        })
        result = result.slice(0, -2) + "\n";
    })

    console.log(result);
}
function displayTheTime() {
    const today = new Date();
    const date = getDateFormat('dd.mm.yy');
    const date1 = getDateFormat('dd,mm,yyyy');
    const date2 = getDateFormat('yyyy.mm');
    const date3 = getDateFormat('ordinaryDate');
    const date4 = getDateFormat('fullDate');


    console.log(date + "\n" + date1 + "\n" + date2 + "\n" + date3+ "\n"+date4);
}

function getDateFormat(format) {
    const today = new Date();
    switch (format) {
        case 'dd.mm.yy':
            return fixDateFormat(today.getDate()) + '.' + fixDateFormat(today.getMonth() + 1) +
                '.' + today.getFullYear().toString().substr(-2);
            break;
        case 'dd,mm,yyyy':
           return fixDateFormat(today.getMonth() + 1) + ',' + today.getDate() + ',' + today.getFullYear();
           break;
        case 'yyyy.mm':
            return today.getFullYear() + '' + (today.getMonth() + 1);
        case 'ordinaryDate':
            return "It's the " +newDataOrdinal(today.getDate())+" day";
        case'fullDate':
            return today.toLocaleString('default', { month: 'long' })+' '+today.getDate()+', '+today.getFullYear()+', '+today.getHours()+':'+today.getMinutes();
        default:
            return "No dates for you today ;)"

    }

}

function fixDateFormat(number) {
    if (number > 9) {
        return number;
    }

    return '0' + number;
}

function newDataOrdinal(ordinalData){
    if (ordinalData > 3 && ordinalData < 21) {
        return 'th';
    }
    switch (ordinalData % 10) {
        case 1:
            return ordinalData + "st";
            break;
        case 2:
            return ordinalData + "nd";
            break;
        case 3:
            return ordinalData + "rd";
            break;
        default:
            return ordinalData + "th";
    }
}

function ordinateObjectsByCharactersNumbers(){
    const mounts = {
        0: 'January', 1: 'February', 2: 'March', 3: 'April', 4: 'May',
        5: 'June', 6: 'July', 7: 'August', 8: 'September', 9: 'October', 10:
            'November', 11: 'December'
    };
    let mountsArray = [];
    let result = [];

    Object.values(mounts).forEach((value) => {
        mountsArray.push({name: value, length: value.length});
        result.push(value);

    });

    result.sort((a, b) => (a.length > b.length) ? 1 : -1);
    result = Object.assign({}, result);

    console.log(result);
}
function first() {
    const name = 'First function';
    const firstArray = ['January', 'February'];

    console.log(name, firstArray)

    return firstArray
}

function second() {
    const name = 'Second function';
    const secondArray = ['March', 'April'];
    const firstResult = first();
    const result = firstResult.concat(secondArray);

    console.log(name, result);

    return result
}

function third() {
    const name = 'Third function';
    const thirdArray = ['May', 'June'];
    const secondResult = second();
    const result = secondResult.concat(thirdArray)

    console.log(name, result);

    return result
}

function fourth() {
    const name = 'Fourth function';
    const fourthArray = ['July', 'August'];
    const thirdResult = third();
    const result = thirdResult.concat(fourthArray)

    console.log(name, result);

    return result
}

function fifth() {
    const name = 'Fourth function';
    const fifthArray = ['September', 'October'];
    const fourthResult = fourth();
    const result = fourthResult.concat(fifthArray)

    console.log(name, result);

    return result
}

function sixth() {
    const name = 'Fourth function';
    const sixthArray = ['November', 'December'];
    const fifthResult = fifth();
    const result = fifthResult.concat(sixthArray)

    console.log(name, result);

    return result
}

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncFunction() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);

}

function displayDataType() {
    console.log(typeof 96);
    console.log(typeof "This is");

}
