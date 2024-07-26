function syncTableWidths() {
    const mainTableThs = document.querySelectorAll('#main-table th');
    const accordionTableTds = document.querySelectorAll('#accordion-table td');
  
    mainTableThs.forEach((th, index) => {
      const width = th.offsetWidth;
      accordionTableTds[index].style.width = `${width}px`;
    });
  }
  
  // Run the function after the tables are rendered
  window.onload = syncTableWidths;
  