function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent!");
  this.reset();
});

document.getElementById("toggle-dark").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

function openModal(src) {
  document.getElementById("modal-img").src = src;
  document.getElementById("modal").style.display = "flex";
}
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

const faders = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);
faders.forEach(el => observer.observe(el));

const backToTop = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 400 ? "block" : "none";
});
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
document.getElementById("next").onclick = () => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
};
document.getElementById("prev").onclick = () => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
};

gsap.registerPlugin(ScrollTrigger);

gsap.from("#hero .hero-content", {
  y: -50,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out"
});

gsap.utils.toArray("section").forEach(sec => {
  gsap.from(sec.querySelector("h2"), {
    scrollTrigger: {
      trigger: sec,
      start: "top 80%"
    },
    x: -100,
    opacity: 0,
    duration: 0.8
  });
  gsap.from(sec.querySelectorAll("p, img, article, .gallery-grid img, .slide"), {
    scrollTrigger: {
      trigger: sec,
      start: "top 80%"
    },
    y: 50,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2
  });
});
