function logEvenNumbers() {
    for (let i = 1000; i >= 0; i -= 2) {
        console.log(i);
    }
}

function alertLoopCompletionSteps() {
    for (let i = 0; i <= 10000; i++) {
        if (i == 2500) {
            alert("A quarter of the way there!");
        } else if (i == 5000) {
            alert("Half way there!");
        } else if (i == 10000) {
            alert("The loop is done")
        }
    }
}

function favoriteShow() {
    let show = ["Bleach", "Darling in the Franxx", "Mythbusters", "Woody Woodpecker and Friends", "The orginal Teen Titans"]
    let number = [1, 2, 3, 4, 5]
    
    for (let i = 0; i < 5; i++) {
        console.log("My #"+ number[i] +" favorite show is "+ show[i] +".");
    }
}
