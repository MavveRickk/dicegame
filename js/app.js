// Player 1
// Generate random numbers

let random1 = Math.ceil(Math.random() * 6);
// console.log(random1);

let randomDiceImage = 'dice ' + random1 + '.png'


// We need to get the image source

let randomImageSource = 'img/' + randomDiceImage;

let image1 = document.querySelectorAll('img')[0];
image1.setAttribute('src', randomImageSource);


// Player 2

let random2 = Math.ceil(Math.random() * 6);
// console.log(random1);

let randomDiceImage2 = 'dice ' + random2 + '.png'


// We need to get the image source

let randomImageSource2 = 'img/' + randomDiceImage2;

let image2 = document.querySelectorAll('img')[1];
image2.setAttribute('src', randomImageSource2);

// Getting the Winner 

if (random1 > random2) {
    document.querySelector('h1').innerHTML = 'Player 1 wins';
} else if (random2 > random1) {
    document.querySelector('h1').innerHTML = 'Player 2 wins';
} else {
    document.querySelector('h1').innerHTML = 'Draw'
}



// Use this to sum up the value of the dice numbers displayed

// let sum = random1 + random2;
// document.querySelector('h1').innerHTML = sum;

