function navMenu(){
  const navLinks = document.querySelectorAll(".navlink");
  const navLogo = document.getElementById("navlogo");
  navLinks.forEach((i) => {
    i.classList.toggle("active");
  });
}
