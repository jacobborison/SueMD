// Get all word elements
const words = document.querySelectorAll('.word');

// Initialize variables to store selected words
let firstSelectedWord = null;
let secondSelectedWord = null;

// Function to handle word selection
function selectWord(event) {
    const selectedWord = event.target;

    // Check if this is the first or second word selected
    if (!firstSelectedWord) {
        firstSelectedWord = selectedWord;
        firstSelectedWord.classList.add('selected');
    } else if (!secondSelectedWord) {
        // Ensure that the selected word is not the same as the first word
        if (selectedWord !== firstSelectedWord) {
            secondSelectedWord = selectedWord;
            secondSelectedWord.classList.add('selected');

            // Check for connection
            checkConnection();
        }
    }
}

// Function to check if the selected words are connected
function checkConnection() {
    // Example connections (you can customize this logic based on your game's rules)
    const connections = [
        ['1', 'a'],
        ['2', 'b'],
        ['3', 'c'],
        ['4', 'd'],
        ['.', 'hi'],
        ['?', 'no'],
        ['!', 'yes'],
        ["'", 'bye']
    ];

    // Check if the selected words form a connection
    const isFirstWordConnected = connections.some(connection => {
        return connection.includes(firstSelectedWord.textContent) && connection.includes(secondSelectedWord.textContent);
    });

    // Display result
    if (isFirstWordConnected) {
        alert('Connected!');
    } else {
        alert('Not Connected!');
    }

    // Reset selection
    resetSelection();
}

// Function to reset word selection
function resetSelection() {
    firstSelectedWord.classList.remove('selected');
    secondSelectedWord.classList.remove('selected');
    firstSelectedWord = null;
    secondSelectedWord = null;
}

// Add click event listener to each word
words.forEach(word => {
    word.addEventListener('click', selectWord);
});
