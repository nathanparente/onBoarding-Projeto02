//MODAL FUNCTIONALITY
const toggleModal = () => {
  document.querySelector("#siteModal").classList.toggle("modal--visibility");
};

document.querySelector(".show-modal").addEventListener("click", toggleModal);
