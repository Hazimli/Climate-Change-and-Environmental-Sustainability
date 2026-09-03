const progress = document.getElementById("progress");
window.addEventListener("scroll", () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${(window.scrollY / scrollable) * 100}%`;
});

const factBtn = document.getElementById("factBtn");
const factBox = document.getElementById("factBox");
factBtn.addEventListener("click", () => {
  const hidden = factBox.hasAttribute("hidden");
  if (hidden) {
    factBox.removeAttribute("hidden");
    factBtn.innerHTML = 'Hide the fact <span>×</span>';
  } else {
    factBox.setAttribute("hidden", "");
    factBtn.innerHTML = 'Show me a fact <span>✦</span>';
  }
});

const detailTitle = document.getElementById("detailTitle");
const detailText = document.getElementById("detailText");
document.querySelectorAll(".impact-card").forEach(card => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".impact-card").forEach(c => c.classList.remove("selected"));
    card.classList.add("selected");
    detailTitle.textContent = card.dataset.title;
    detailText.textContent = card.dataset.text;
    document.getElementById("impactDetail").scrollIntoView({behavior:"smooth", block:"center"});
  });
});

const resultTitle = document.getElementById("resultTitle");
const resultText = document.getElementById("resultText");
const choices = {
  energy: {
    title: "Start with one energy habit.",
    text: "Try switching off unused lights and electronics, then look for opportunities to reduce unnecessary energy use."
  },
  waste: {
    title: "Make one purchase more circular.",
    text: "Before buying something new, ask: can I reuse, repair, borrow or choose a longer-lasting option instead?"
  },
  nature: {
    title: "Give nature some room.",
    text: "Protect green spaces, avoid unnecessary disturbance of wildlife and support actions that maintain healthy ecosystems."
  }
};
document.querySelectorAll(".choice").forEach(choice => {
  choice.addEventListener("click", () => {
    document.querySelectorAll(".choice").forEach(c => c.classList.remove("selected"));
    choice.classList.add("selected");
    const data = choices[choice.dataset.choice];
    resultTitle.textContent = data.title;
    resultText.textContent = data.text;
  });
});

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll("nav a");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
    }
  });
}, {rootMargin:"-35% 0px -55% 0px"});
sections.forEach(section => observer.observe(section));
