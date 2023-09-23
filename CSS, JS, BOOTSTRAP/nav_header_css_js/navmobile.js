function navMenu(){
  const navLinks = document.querySelectorAll(".navlink");
  const navLogo = document.getElementById("navlogo");
  let rotation = 1;
  navLinks.forEach((i) => {
    i.classList.toggle("active");
  });
}
