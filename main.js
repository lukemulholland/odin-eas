console.log('Script loaded!');

//create divs for 16x16 grid
const gridBlocks = document.querySelector('#grid');

console.log(gridBlocks); // Check if the container is selected

for (let index = 0; index < 256; index++) {
    const square = document.createElement('div');
    gridBlocks.appendChild(square);
}