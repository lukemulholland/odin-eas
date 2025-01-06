// Initialise a grid (16 x 16)
createGrid(16);

// Function to create grid
function createGrid(size) {
    const gridBlocks = document.querySelector('#grid');
    
    // Clear the grid before creating new squares
    gridBlocks.innerHTML = ''; 

    // Fixed total grid width
    const totalWidth = 600;

    // Calculate the size of each square based on the grid size
    const squareSize = totalWidth / size;

    // Set the grid container size (fixed width, dynamic height)
    gridBlocks.style.width = `${totalWidth}px`; // Fixed width
    gridBlocks.style.height = `${squareSize * size}px`; // Dynamic height based on square size

    // Loop to create grid squares
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        gridBlocks.appendChild(square);
    }

    // Apply styles to the grid squares
    const squares = document.querySelectorAll('#grid div');
    squares.forEach(square => {
        square.style.width = `${squareSize}px`; // Dynamic square size
        square.style.height = `${squareSize}px`; // Dynamic square size
    });
}

// Select all squares and add event listener to each
const squares = document.querySelectorAll('#grid div');

// Add event listener to each square and change color to black when mouseover
squares.forEach(square => {
    square.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'black';
    });
});

// Set up reset button
const resetButton = document.querySelector('#btn-reset');

// Clear existing grid on button click and prompt user for new grid size
resetButton.addEventListener('click', function() {
    // Select all grid elements and clear them
    const gridBlocks = document.querySelector('#grid');
    gridBlocks.innerHTML = '';

    // Prompt user for new grid size
    const newSize = parseInt(prompt("Enter new grid size (max: 100):"));

    // Validate input
    if (newSize > 0 && newSize <= 100) {
        createGrid(newSize); // Generate a new grid
    } else {
        alert("Please enter a valid size between 1 and 100.");
    }
});