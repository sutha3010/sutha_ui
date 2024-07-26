// const selected = document.querySelector(".selected");
// const optionsContainer = document.querySelector(".options-container");
// const searchBox = document.querySelector(".search-box input");
// const arrow = document.querySelector(".arrow");
// const optionsList = document.querySelectorAll(".option");

// selected.addEventListener("click", () => {
//   optionsContainer.classList.toggle("active");
//   arrow.classList.toggle("active");

//   searchBox.value = "";
//   filterList("");

//   if (optionsContainer.classList.contains("active")) {
//     searchBox.focus();
//   }


// });

// optionsList.forEach(o => {
//   o.addEventListener("click", () => {
//     selected.innerHTML = o.querySelector("label").innerHTML;
//     optionsContainer.classList.remove("active");
//     arrow.classList.remove("active");

//   });
// });

// searchBox.addEventListener("keyup", function(e) {
//   filterList(e.target.value);
// });

// const filterList = searchTerm => {
//   searchTerm = searchTerm.toLowerCase();
//   optionsList.forEach(option => {
//     let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
//     if (label.indexOf(searchTerm) != -1) {
//       option.style.display = "block";
//     } else {
//       option.style.display = "none";
//     }
//   });

// };




const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const searchBox = document.querySelector(".search-box input");
const arrow = document.querySelector(".arrow");
const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
  arrow.classList.toggle("active");

  searchBox.value = "";
  filterList("");

  if (optionsContainer.classList.contains("active")) {
    searchBox.focus();
  }
});

optionsList.forEach((option) => {
  option.addEventListener("click", () => {
    selected.innerHTML = option.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
    arrow.classList.remove("active");
  });
});

searchBox.addEventListener("keyup", function (e) {
  filterList(e.target.value);
});

const filterList = (searchTerm) => {
  searchTerm = searchTerm.toLowerCase();
  let matches = 0; // Count of matching options
  optionsList.forEach((option) => {
    let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
    if (label.indexOf(searchTerm) !== -1) {
      option.style.display = "block";
      matches++;
    } else {
      option.style.display = "none";
    }
  });

  const existingMessage = document.querySelector(".no-match-message");
  if (matches === 0) {
    if (!existingMessage) {
      const noMatchMessage = document.createElement("div");
      noMatchMessage.classList.add("no-match-message");
      noMatchMessage.innerText = "No match found";
      optionsContainer.appendChild(noMatchMessage);
    }
  } else {
    if (existingMessage) {
      existingMessage.remove();
    }
  }
};
