// Update this email before publishing your portfolio.
const PORTFOLIO_EMAIL = "johnmarknolasco134@gmail.com";
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
$("#year").textContent = new Date().getFullYear();

// Mobile menu
$("#hamburger").addEventListener("click", () => $("#navlinks").classList.toggle("open"));
$$(".navlinks a").forEach(a => a.addEventListener("click", () => $("#navlinks").classList.remove("open")));

// Dark / light theme (saved in this browser)
if (localStorage.getItem("jm-theme") === "light") document.body.classList.add("light");
$("#theme").addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.setItem("jm-theme", document.body.classList.contains("light") ? "light" : "dark");
});

// Reveal animations
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); }
  }), {threshold:.12});
  $$(".reveal").forEach(el => observer.observe(el));
  document.body.classList.add("reveal-animations");
}

// Filter projects
$$(".filters button").forEach(btn => btn.addEventListener("click", () => {
  $$(".filters button").forEach(b => b.classList.toggle("active", b === btn));
  const filter = btn.dataset.filter;
  $$(".project").forEach(card => card.classList.toggle("hide", filter !== "all" && card.dataset.kind !== filter));
}));

$("#gmailContact").href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to="+encodeURIComponent(PORTFOLIO_EMAIL);