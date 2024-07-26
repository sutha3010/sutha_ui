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

