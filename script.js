var changeThemeButton = document.querySelector("#change-theme");

changeThemeButton.addEventListener("click", (e) => {
  document.body.classList.toggle("dark-theme");
});
