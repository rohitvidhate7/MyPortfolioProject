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
  if (navMenu) navMenu.classList.remove("show");
}

navLinks.forEach(link =>
  link.addEventListener("click", linkAction)
);

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

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

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
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

  form.addEventListener("submit", e => {
    e.preventDefault();

    emailjs
      .sendForm("rohit7276", "template_fdt1vza", form)
      .then(() => {
        alert("Message sent successfully!");
        form.reset();
      })
      .catch(error => {
        alert("Failed to send message!");
        console.error("EmailJS error:", error);
      });
  });
});

/*==================== SCROLL REVEAL ====================*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
});

sr.reveal(".home__data, .about__img, .skills__subtitle, .nav");
sr.reveal(
  ".about__subtitle, .about__text, .container, .blob-box, .about-details, .hobby, .aboutdesc",
  { delay: 300 }
);
sr.reveal(".home__social-icon", { interval: 200 });
sr.reveal(".skills__data, .btn1, .project-img, .project-btn, .project", { interval: 200 });

/*==================== TYPING EFFECT ====================*/
document.addEventListener("DOMContentLoaded", () => {
  const typingElement = document.querySelector(".typing");
  if (!typingElement) return;

  const texts = ["Web Developer<>", "Frontend Developer"];
  let index = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = texts[index];

    if (isDeleting) {
      typingElement.textContent = currentText.substring(0, charIndex--);
    } else {
      typingElement.textContent = currentText.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => (isDeleting = true), 1200);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % texts.length;
    }

    setTimeout(type, isDeleting ? 60 : 140);
  }

  type();
});
