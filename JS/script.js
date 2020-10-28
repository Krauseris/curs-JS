function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function hi(b) {
    if(b == 1) {
        a = getRandomInRange(1, 4);
    } else if(b == 2) {
        a = getRandomInRange(3, 4);
    } else if(b == 3) {
        a = getRandomInRange(1, 2);
    }

    if(a == 1) {
        alert("Hi!");
    } else if(a == 2) {
        alert("Hello world");
    } else if(a == 3) {
        alert("Hello world!");
    } else if(a == 4) {
        alert("Hi everyone!");
    }
}

let c = getRandomInRange(1, 3);

hi(c);