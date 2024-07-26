
document.getElementById('scroll-container').addEventListener('scroll', function() {
    var fixedCells = document.querySelectorAll('.fixed-td');
    if (this.scrollLeft > 0) {
        fixedCells.forEach(function(cell) {
            cell.classList.add('shadow');
        });
    } else {
        fixedCells.forEach(function(cell) {
            cell.classList.remove('shadow');
        });
    }
});

