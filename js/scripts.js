function whileFunction() {
    let count = 5;
    while (count <= 15) {
        console.log(count);
        count++;
    }
}

function factorialFunction() {
    let num = 26;
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }

    console.log(factorial);
}

function drawStars() {
    const minStar = 1;
    const maxStar = 8;
    const star = '*';
    let result = '';

    for (let i = minStar; i <= maxStar; i++) {
        result += star.repeat(i) + "\n";
    }

    console.log(result);
}

function checkUsedElements() {
    const items = [1, 3, 5, 6, 8, 7, 9, 9, 5, 4, 4, 6, 8, 2];
    const returnItems = [];
    const usedItems = [];
    items.forEach((item) => {
        if (item % 2 === 0 && usedItems.indexOf(item) < 0) {
            usedItems.push(item);
            item = item * 10;
        }
        returnItems.push(item);
    });

    console.log(returnItems);
}

function removeSpacesFromArray() {
    const things = ["casa ","telefon ", "masina ","om", "trei ","space"]
        .map(str => str.replace(/\s/g, ""));

    console.log(things);
}

function replaceMarkInString() {
    var sentence = "Retourne l'entier supérieur du nombre value,"
        .replace(",",".");

    console.log(sentence);
}

function deleteLastCharacterFromString() {
    var text = "Click on the link to go to the documentation.".slice(0,-1);

    console.log(text);
}

function uppercaseWords() {
    let text = "Wikipedia is a free online encyclopedia," +
        " created and edited by volunteers around the world and hosted " +
        "by the Wikimedia Foundation";

    let newText = text.toUpperCase();
    text = text.replace("Wikipedia", "Wiki");

       console.log(text,"\n" + newText);
}

function concatSameLengthArrays() {
    const a = ['a','b','mm','s'];
    const b = ['f','d','m','se','6','8'];
    const c = ['n','r','c','p', 'p'];
    const d = ['2','g', 'y', 'a', 'u','l'];
    let allArrays = [a, b, c, d];
    var result = [];

    allArrays.forEach((item) => {
      if (item.length) {
          if(result[item.length]) {
              result[item.length].push(item);
          } else {
              result[item.length] = [item];
          }
      }
    });

    console.log(result);
}

function countWords() {
    let text = 'The forEach construct provides an easy way to iterate over ' +
        'arrays. forEach works only on arrays and objects, and will issue an ' +
        'error when you try to use it on a variable with a different data type or ' +
        'an uninitialized variable';
    let result = text.split(' ').map(word => (word + '(' +word.length + ')')).join(' ');

    console.log(result);
}

function phoneNumbers() {
    const numbers = ['+37378959721', '+37368223345', '+37323750222', '+37367525596', '+37369958474'];
    const countryCodeCount = 4;
    const mobileCodeCount = 2;
    const homeCodeCount = 3;
    const orange = ['68', '69', '60'];
    const moldcell = ['79', '78'];
    const moldtelecom = ['237'];
    const unite = ['67'];
    let result = '';

    numbers.forEach((number) => {
        if (orange.includes(number.slice(countryCodeCount, countryCodeCount + mobileCodeCount))) {
            result += number + ' operator: ' + 'Orange\n';
        } else if(moldcell.includes(number.slice(countryCodeCount, countryCodeCount + mobileCodeCount))) {
            result += number + ' operator: ' + 'moldcell\n';
        } else if(unite.includes(number.slice(countryCodeCount, countryCodeCount + mobileCodeCount))) {
            result += number + ' operator: ' + 'unite\n';
        } else if(moldtelecom.includes(number.slice(countryCodeCount, countryCodeCount + homeCodeCount))) {
            result += number + ' operator: ' + 'moldtelecom\n';
        }
    });

    console.log(result);
}
