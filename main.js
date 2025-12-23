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

// --- Sortiment: Kategorie-Auswahl mit Bildern ---
const data = {
  pizza: {
    heading: "Pizza-Kartons (100 Stk / 50 Stk)",
    items: [
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
    ],
  },
  alu: {
    heading: "Alu-Schalen (mit Deckel)",
    items: [
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
    ],
  },
};

const catGrid = document.getElementById("catGrid");
const catHeading = document.getElementById("catHeading");
const catList = document.getElementById("catList");

function renderCat(key){
  const cat = data[key];
  if (!cat || !catHeading || !catList) return;

  catHeading.textContent = cat.heading;
  catList.innerHTML = cat.items.map(x => `<li>${x}</li>`).join("");

  // Active State
  document.querySelectorAll(".cat-card").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.cat === key);
  });
}

catGrid?.addEventListener("click", (e) => {
  const btn = e.target.closest(".cat-card");
  if (!btn) return;
  renderCat(btn.dataset.cat);
});

// Default anzeigen
renderCat("pizza");


// Scroll Animation für Kategorie-Kacheln
const cards = document.querySelectorAll(".cat-card");

// Scrollrichtung merken
let lastY = window.scrollY;
let scrollingDown = true;

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  scrollingDown = y > lastY;
  lastY = y;
}, { passive: true });

// Karten beobachten
const cards = Array.from(document.querySelectorAll(".cat-card"));

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const card = entry.target;

    if (entry.isIntersecting) {
      // Rein: immer sichtbar machen + raus-Klassen entfernen
      card.classList.remove("out-left", "out-right");
      // Stagger rein (nacheinander)
      const idx = cards.indexOf(card);
      card.style.transitionDelay = `${idx * 120}ms`;
      card.classList.add("is-visible");
    } else {
      // Raus: je nach Richtung
      card.style.transitionDelay = `0ms`;
      card.classList.remove("is-visible");

      if (scrollingDown) {
        // beim Runterscrollen: nach links raus
        card.classList.remove("out-right");
        card.classList.add("out-left");
      } else {
        // beim Hochscrollen: nach rechts raus
        card.classList.remove("out-left");
        card.classList.add("out-right");
      }
    }
  });
}, { threshold: 0.35 });

cards.forEach(c => io.observe(c));
