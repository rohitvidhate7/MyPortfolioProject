/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*==================== REMOVE MENU MOBILE ====================*/
const navLinks = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  if (navMenu) {
    navMenu.classList.remove("show");
  }
}

navLinks.forEach((link) =>
  link.addEventListener("click", linkAction)
);

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    const navLink = document.querySelector(
      `.nav__menu a[href*="${sectionId}"]`
    );

    if (!navLink) return;

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink.classList.add("active");
    } else {
      navLink.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", scrollActive);

/*==================== EMAILJS CONTACT FORM ====================*/
document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("-qDC7q9BAUxlmZ6Rz");

  const form = document.getElementById("contact-form");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    emailjs
      .sendForm("rohit7276", "template_fdt1vza", form)
      .then(() => {
        alert("Message sent successfully!");
        form.reset();
      })
      .catch((error) => {
        alert("Failed to send message!");
        console.error("EmailJS error:", error);
      });
  });
});

// active menu icon on click
function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 60;
    const sectionId = section.getAttribute("id");

    const navLink = document.querySelector(
      `.nav__menu a[href*="${sectionId}"]`
    );

    if (!navLink) return;

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink.classList.add("active");
    } else {
      navLink.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", scrollActive);



/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
});

sr.reveal(
  ".home__data, .about__img, .skills__subtitle, .nav",
  {}
);
sr.reveal(
  ".about__subtitle, .about__text, .btn1, .container, .blob-box, .about-details, .hobby , .aboutdesc, .about__text",
  { delay: 300 }
);
sr.reveal(".home__social-icon", { interval: 200 });
sr.reveal(".skills__data, .work__img, .project", { interval: 200
});

// Typing effect for Home section
const typingElement = document.querySelector(".typing");
const texts = ["Full Stack Developer", "Web Developer", "Frontend Developer"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function type() {
  currentText = texts[index];
  
  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex--);
  } else {
    typingElement.textContent = currentText.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentText.length) {
    // Pause at the end
    setTimeout(() => isDeleting = true, 1000);
  } else if (isDeleting && charIndex === 0) {
    // Move to next text
    isDeleting = false;
    index = (index + 1) % texts.length;
  }

  setTimeout(type, isDeleting ? 50 : 150); // speed
}

// Start typing
document.addEventListener("DOMContentLoaded", type);
