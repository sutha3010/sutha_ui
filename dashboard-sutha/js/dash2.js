const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})

// Sample data for the chart
var data = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [{
    label: 'Monthly Sales',
    backgroundColor: 'rgba(75, 192, 192, 0.2)',
    borderColor: 'rgba(75, 192, 192, 1)',
    borderWidth: 1,
    data: [65, 59, 80, 81, 56]
  }]
};

// Configuration options
var options = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

// Get the canvas element
var ctx = document.getElementById('myChart').getContext('2d');

// Create the chart
var myChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: options
});