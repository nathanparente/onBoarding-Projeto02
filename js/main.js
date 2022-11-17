function openModal() {
  const modal = document.getElementById("modal");
  //const main = document.getElementById("main");
  modal.classList.add("enabled");
  //main.classList.add("disabled");
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("enabled");
}

// function toggleModal() {
//   const modal = document.getElementById("modal");
// }
