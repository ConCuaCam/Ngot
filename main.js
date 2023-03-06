const toggleBtn = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const navbar = this.document.querySelector("nav");
const imgs = ["https://znews-photo.zingcdn.me/w860/Uploaded/izhqv/2017_09_28/18238563_1521686024540516_1167805767140430691_o.jpg","https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/295510818_1680741318962629_3944605859959247613_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=R16hkx8YFh0AX_r_ZWM&_nc_ht=scontent.fhan2-5.fna&oh=00_AfDweHKTooMnnyjDDvaRDxPdYoMGfICEugzPZ-OukOfFZg&oe=640BC640","https://znews-photo.zingcdn.me/w860/Uploaded/izhqv/2017_09_28/18238563_1521686024540516_1167805767140430691_o.jpg"];

toggleBtn.addEventListener("click",function() {
  navLinks.classList.toggle("active");
})

window.addEventListener("scroll", function() {
  navbar.classList.toggle("fixed", this.window.scrollY > navbar.clientHeight);
})

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    
    navLinks.classList.remove("active")
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = navLinks.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 87) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});

