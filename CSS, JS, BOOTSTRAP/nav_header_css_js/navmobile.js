function navMenu(){
  const navLinks = document.querySelectorAll(".navlink");
  navLinks.forEach((i) => {
    i.classList.toggle("active");
  })
}
