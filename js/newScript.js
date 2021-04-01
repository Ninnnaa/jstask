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
