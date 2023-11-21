// First things first: Figure out the Alorithm: 

// To begin, inspect the datasets carefully. How is the data organized and what does that mean for your code? 

// What does your program need to do, step-by-step
    // read word from input box
    const input = document.querySelector('input');
    const scrabbleScore = document.querySelector('h2');
    // have search run calcScore function
    input.addEventListener('search', calcScore);

    function calcScore() {
        let score = 0;
        let word = input.value
        if (scrabbleDictionaryArr.includes(word)) { // check if word is in the dictionary
            console.log(`${word}, is in the dictionary`);
            // change string to an array
            word = word.toUpperCase();
            let lettersArr = word.split(''); // no space as argument in .split to make each character an index of the array.
            console.log(lettersArr);

            for(let i = 0; i < lettersArr.length; i++) {
                const letter = lettersArr[i];
                score += letterValuesObj[letter];
            }
            console.log('score', score);

            scrabbleScore.textContent = score;
        } else {
            console.log(`${word} is not in dictionary`);
            scrabbleScore.textContent = `${word} is not in the dictionary, try again`;
        }
   
    
    // add values together
    // show scrabble score

}
// Make notes / write comments, then code along w the comments
