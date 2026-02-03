/* ==================== MENU TOGGLE ==================== */
const toggle = document.getElementById("nav-toggle");
const menu = document.getElementById("nav-menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("show-menu");
  });
}

/* ==================== SCROLL ACTIVE LINK ==================== */
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 80;
    const sectionId = section.getAttribute("id");

    const navLink = document.querySelector(
      `.nav__menu a[href="#${sectionId}"]`
    );

    if (!navLink) return;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLink.classList.add("active");
    } else {
      navLink.classList.remove("active");
    }
  });
}

let ticking = false;
window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      scrollActive();
      ticking = false;
    });
    ticking = true;
  }
});

/* ==================== EMAILJS + TYPING INIT ==================== */
document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contact-form");
  const button = form.querySelector(".btn");
  const popup = document.getElementById("popup");

  function showPopup(message, type) {
    popup.textContent = message;
    popup.className = `popup ${type} show`;

    setTimeout(() => {
      popup.className = "popup";
    }, 3000);
  }

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    button.disabled = true;
    button.textContent = "Sending...";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: new FormData(form)
      });

      const result = await response.json();

      if (result.success) {
        showPopup("✅ Message sent successfully!", "success");
        form.reset();
      } else {
        showPopup("❌ Something went wrong. Try again.", "error");
      }
    } catch (error) {
      showPopup("❌ Network error. Please try again.", "error");
      console.error(error);
    }

    button.disabled = false;
    button.textContent = "Send";
  });

  // Initialize typing effect
  typingEffect();

});


/* ==================== SCROLL REVEAL ==================== */
if (window.ScrollReveal) {
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2000,
    delay: 200,
  });

  sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text, .skills__img, .contact__input");
  sr.reveal(
    ".about__subtitle, .about__text, .container, .blob-box, .about-details, .hobby, .aboutdesc",
    { delay: 300 }
  );
  sr.reveal(".home__social-icon", { interval: 200 });
  sr.reveal(".skills__data, .btn1, .project-img, .project-btn, .project , #skills, .skills-container, .skill2", {
    interval: 200,
  });

  ScrollReveal().reveal(".certificate-card", {
    origin: "bottom",
    distance: "40px",
    duration: 800,
    interval: 200,
    easing: "ease-in-out",
  });
}

/* ==================== TYPING EFFECT ==================== */

function typingEffect() {
  const typingElement = document.querySelector(".typing");
  if (!typingElement) return;

  const texts = ["Web Developer<>", "Frontend Developer"];
  let index = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = texts[index];

    typingElement.textContent = isDeleting
      ? currentText.substring(0, charIndex--)
      : currentText.substring(0, charIndex++);

    if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => (isDeleting = true), 1200);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % texts.length;
    }

    setTimeout(type, isDeleting ? 60 : 140);
  }

  type();
}

/* ==================== BACK TO TOP ==================== */
const backToTop = document.getElementById("backToTop");

if (backToTop) {
  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}