const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector("#btn");
//Assuming the parent element contains both the closeBtn and sidebar
const parentElement = closeBtn.parentElement;

parentElement.addEventListener("mouseenter", function () {
    sidebar.classList.add("open");
});

sidebar.addEventListener("mouseleave", function (e) {
    const isHoveringParent = parentElement.contains(e.relatedTarget);
    if (!isHoveringParent) {
        sidebar.classList.remove("open");
    }
});

// Accessing all menu items inside the sidebar
const menuItems = document.querySelectorAll(".sidebar .menu-item");
menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", function () {
    });
});


//functionality for logout button

function logout() {
    const confirmLogout = confirm("Are you sure you want to logout?");
    if (confirmLogout) {
    window.location.href = "navi.html";
    }
    else{
    alert("failed");
    }

  }


const logoutButton = document.querySelector("#log_out");
logoutButton.addEventListener("click", logout); 

// $('#example').DataTable();
 // Initialize DataTable when the document is ready
 $(document).ready(function() {
    $('#myTable').DataTable();
  });

  // Function to apply different themes
  function applyTheme(themeClass) {
    // Remove existing theme classes from DataTables wrapper
    $('#myTable').removeClass('theme1 theme2 theme3 theme4 theme5');

    // Add the selected theme class to DataTables wrapper
    $('#myTable').addClass(themeClass);

    // Remove existing theme classes from the table itself
    const table = document.getElementById('myTable');
    table.classList.remove('table-dark', 'table-info', 'table-success','table-borderless','table-striped');

     // Toggle table-dark class based on the selected theme
     if (themeClass === 'theme3') {
      table.classList.add('table-dark');
      table.classList.toggle('table-striped', true);
    } else if (themeClass === 'theme4') {
      table.classList.add('table-borderless');     
  } else if (themeClass === 'theme5') {
    table.classList.add('table-dark','table-borderless');
   

}
    
  // Toggle table-striped class based on the selected theme
  table.classList.toggle('table-striped', themeClass === 'theme3')
  table.classList.toggle('table-borderless', themeClass === 'theme4')

  }

  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))