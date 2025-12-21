// Mobile Menü
const navBtn = document.getElementById("navbtn");
const nav = document.getElementById("nav");

navBtn?.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  navBtn.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav__link").forEach(a => {
  a.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navBtn?.setAttribute("aria-expanded", "false");
  });
});

// Footer Jahr
document.getElementById("year").textContent = new Date().getFullYear();

// Top Seller (Fokus)
const topseller = [
  { title: "Pizza-Karton 30×30×4 cm", meta: "100 Stk – Klassiker", tag: "Top" },
  { title: "Pizza-Karton 32×32×4 cm", meta: "100 Stk – sehr gefragt", tag: "Top" },
  { title: "Pizza-Karton 26×26×4 cm", meta: "100 Stk – Standard", tag: "Top" },
  { title: "Alu-Schale R45L + Deckel", meta: "1000 Stk – stark", tag: "Top" },
  { title: "Alu-Schale R13L + Deckel", meta: "500 Stk – beliebt", tag: "Top" },
  { title: "Alu-Schale R80L 2-geteilt + Deckel", meta: "800 Stk – Menü", tag: "Top" },
  { title: "Alu-Schale R81L 3-geteilt + Deckel", meta: "800 Stk – Menü", tag: "Top" },
  { title: "Alu-Schale R28L + Deckel", meta: "1000 Stk – rund", tag: "Top" },
];

const topsellerGrid = document.getElementById("topsellerGrid");
if (topsellerGrid) {
  topsellerGrid.innerHTML = topseller.map(p => `
    <article class="tile">
      <div class="tile__top">
        <div class="tile__title">${p.title}</div>
        <span class="pill">${p.tag}</span>
      </div>
      <div class="tile__meta">${p.meta}</div>
      <a class="link" href="tel:+4915777120812">Anrufen →</a>
    </article>
  `).join("");
}

// Sortiment-Listen (aus deinem PDF)
const pizzaItems = [
  "20×20×4 cm (100 Stk)",
  "22×22×4 cm (100 Stk)",
  "24×24×4 cm (100 Stk)",
  "26×26×4 cm (100 Stk)",
  "28×28×… cm (100 Stk)",
  "29×29×4 cm (100 Stk)",
  "30×30×4 cm (100 Stk)",
  "31×31×4 cm (100 Stk)",
  "32×32×4 cm (100 Stk)",
  "33×33×4 cm (100 Stk)",
  "36×36×4 cm (100 Stk)",
  "40×40×4 cm (100 Stk)",
  "60×40×5 cm (50 Stk)",
  "45×45×5 cm (50 Stk)",
  "50×50×5 cm (50 Stk)",
  "33×49×4 cm (50 Stk)",
];

const aluItems = [
  "R45L mit Deckel (1000 Stk)",
  "R13L mit Deckel (500 Stk)",
  "R14L mit Deckel (500 Stk)",
  "R80L 2-geteilt mit Deckel (800 Stk)",
  "R81L 3-geteilt mit Deckel (800 Stk)",
  "R28L mit Deckel (1000 Stk)",
  "C803L rund mit Deckel (400 Stk)",
  "C807L rund mit Deckel (400 Stk)",
  "C801L rund mit Deckel (600 Stk)",
  "R84L mit Deckel (800 Stk)",
  "R1L mit Deckel (1000 Stk)",
];

const pizzaList = document.getElementById("pizzaList");
if (pizzaList) pizzaList.innerHTML = pizzaItems.map(x => `<li>${x}</li>`).join("");

const aluList = document.getElementById("aluList");
if (aluList) aluList.innerHTML = aluItems.map(x => `<li>${x}</li>`).join("");
