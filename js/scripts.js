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
    const result = factorial.toLocaleString('fullwide', {useGrouping: false});

    console.log(result);
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

function UppercaseWords() {
    let text = "Wikipedia is a free online encyclopedia," +
        " created and edited by volunteers around the world and hosted " +
        "by the Wikimedia Foundation";
    let newText = '';
       newtext = text.replace("Wikipedia","Wiki");

       console.log(newtext, "\n", newtext.toUpperCase());
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
