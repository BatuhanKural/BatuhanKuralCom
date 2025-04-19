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
      li.classList.remove('active');
      const a = li.querySelector('a');
      if (a.getAttribute('href') === `#${current}`) {
        li.classList.add('active');
      }
    });
  });
