var grid = document.querySelector('.grid-container');
new Masonry(grid, {
    itemSelector: '.card',
    columnWidth: '.card',
    percentPosition: true
});