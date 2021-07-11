// scroll change backgroud of nav
function scrollHeader() {
  const scrollHeader = document.getElementById("scroll-header");

  if (this.scrollY > 100) {
    scrollHeader.classList.add('bg-white');
    scrollHeader.classList.add('shadow-sm');
    scrollHeader.classList.remove('bg-transparent');
  } else {
    scrollHeader.classList.remove("bg-white");
    scrollHeader.classList.remove('shadow-sm');
    scrollHeader.classList.add('bg-transparent');
  }
}
window.addEventListener("scroll", scrollHeader);

// show nav at mobile

let btn_toggle = document.getElementById('btn__close'),
  nav_list = document.getElementById('nav__list');

if (btn_toggle) {
  btn_toggle.addEventListener('click', () => {
    nav_list.classList.toggle('nav__show');
  });
  }

