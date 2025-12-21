// Mobile Menü
const navBtn = document.getElementById("navbtn");
const nav = document.getElementById("nav");

navBtn?.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  navBtn.setAttribute("aria-expanded", String(open));
});

// Menü schließen bei Klick auf Link (mobile)
document.querySelectorAll(".nav__link").forEach(a => {
  a.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navBtn?.setAttribute("aria-expanded", "false");
  });
});

// Footer Jahr
document.getElementById("year").textContent = new Date().getFullYear();

// Produkte (einfach anpassen)
const products = [
  { title: "Aluschalen", meta: "Robust, vielseitig", tag: "To-Go" },
  { title: "Burger Box", meta: "Stabil & sauber", tag: "Imbiss" },
  { title: "Besteck", meta: "Einweg/Mehrweg", tag: "Service" },
  { title: "Kassenrollen", meta: "Thermo / Standard", tag: "Kasse" },
  { title: "Nudelbox", meta: "Papier, Asia/ Snack", tag: "Food" },
  { title: "Pappschalen", meta: "Pommes & Snacks", tag: "Snack" },
  { title: "Servietten", meta: "Versch. Größen", tag: "Hygiene" },
  { title: "Trinkbecher", meta: "Kalt & Heiß", tag: "Getränke" },
];

const grid = document.getElementById("productGrid");
if (grid) {
  grid.innerHTML = products.map(p => `
    <article class="tile">
      <div class="tile__top">
        <div class="tile__title">${p.title}</div>
        <span class="pill">${p.tag}</span>
      </div>
      <div class="tile__meta">${p.meta}</div>
      <a class="link" href="#contact">Anfragen →</a>
    </article>
  `).join("");
}

// Shop-Link (später echte URL einsetzen)
document.getElementById("shopLink")?.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Shop-Link kommt später – hier trägst du deine Shop-URL ein.");
});
