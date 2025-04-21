  // I'm kısımı
  var options = {
    strings: ["Frontend Developer", "Web Developer", "JavaScript Enthusiast"],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1000,
    startDelay: 500,
    loop: true
  };

  var typed = new Typed("#typed-text", options);

  // Active sınıfının dinamik olarak eklenmesi
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links li');

  window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(li => {
    li.classList.remove('active-section');
    const a = li.querySelector('a');
    if (a.id === current+"-btn") {
      li.classList.add('active-section');
    }
  });
});



  function scrollToTop(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    closeSideBar()
  }

const homeBtn = document.getElementById('home-btn')
const aboutBtn = document.getElementById('about-btn')
const aboutSection = document.getElementById('about')


homeBtn.addEventListener('click', e => {
  scrollToTop()  
})

aboutBtn.addEventListener('click', e => {
  aboutSection.scrollIntoView({
    behavior: "smooth"
  })
})

const scrollToTopBtn = document.querySelector('.scroll-to-top')


window.addEventListener("scroll", () => {
  const aboutTop = aboutSection.offsetTop;

  if (window.scrollY >= aboutTop - 100) {
    scrollToTopBtn.style.opacity = "1";
  } else {
    scrollToTopBtn.style.opacity = "0";
  }
});


const openSidebarBtn = document.getElementById('open-sidebar-btn')
const sideBar = document.querySelector('aside')
const sidebarBtnIcon = document.querySelector('#open-sidebar-btn > i')
const overlay = document.getElementById('overlay');

function openSidebar(){
  const isOpen = sideBar.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
  sidebarBtnIcon.classList.replace(isOpen ? 'fa-bars' : 'fa-xmark', isOpen ? 'fa-xmark' : 'fa-bars');
}

function closeSideBar(){
  sideBar.classList.remove('active');
  overlay.classList.remove('active');
  document.body.classList.remove('no-scroll');
  sidebarBtnIcon.classList.replace('fa-xmark', 'fa-bars')
}

openSidebarBtn.addEventListener('click', openSidebar)


overlay.addEventListener('click', closeSideBar);


const navLinkList = document.querySelectorAll('.nav-links > li > a')

navLinkList.forEach(navLink => {
  navLink.addEventListener('click', closeSideBar)
})