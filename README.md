const catalog = [
  { id: 1, title: "Blade Runner 2049", type: "movie", year: 2017, genre: "Sci-Fi", rating: 8.0, cost: 540, badges: ["4K", "Verified", "Critics' Pick"], description: "A detective uncovers a truth that shifts the future of humanity and the fate of every trace of memory.", poster: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=900&q=80", feature: true },
  { id: 2, title: "Attack on Titan", type: "anime", year: 2023, genre: "Action", rating: 9.1, cost: 680, badges: ["Top Rated", "Verified", "Subbed"], description: "Humanity fights for survival behind giant walls while secrets of the world begin to collapse.", poster: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=900&q=80" },
  { id: 3, title: "Dune: Part Two", type: "movie", year: 2024, genre: "Epic", rating: 9.0, cost: 740, badges: ["Popular", "4K", "Verified"], description: "Paul Atreides turns vengeance into a battle that reshapes the desert and the galaxy forever.", poster: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80" },
  { id: 4, title: "My Hero Academia", type: "anime", year: 2024, genre: "Hero", rating: 8.8, cost: 620, badges: ["Fan Favorite", "Verified"], description: "In a world of superpowers, class heroes rise together against dangerous threats and personal growth.", poster: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80" },
  { id: 5, title: "The Dark Knight", type: "movie", year: 2008, genre: "Action", rating: 9.2, cost: 600, badges: ["Classic", "Verified"], description: "Batman faces the Joker in a city where chaos tests the meaning of justice and hope.", poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=900&q=80" },
  { id: 6, title: "Jujutsu Kaisen", type: "anime", year: 2024, genre: "Fantasy", rating: 8.9, cost: 680, badges: ["Trending", "Verified"], description: "Students of a secret combat school fight cursed spirits in a gripping battle for survival.", poster: "https://images.unsplash.com/photo-1524989942937-3cb776d29cde?auto=format&fit=crop&w=900&q=80" },
  { id: 7, title: "The Matrix", type: "movie", year: 1999, genre: "Cyberpunk", rating: 8.7, cost: 520, badges: ["Legendary", "Verified"], description: "A hacker discovers the world is a simulation and must decide whether to wake up or stay asleep.", poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=900&q=80" },
  { id: 8, title: "One Piece", type: "anime", year: 2024, genre: "Adventure", rating: 9.0, cost: 710, badges: ["Epic", "Verified", "Subbed"], description: "A young pirate seeks the ultimate treasure while navigating impossible oceans and bold allies.", poster: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=900&q=80" },
  { id: 9, title: "Interstellar", type: "movie", year: 2014, genre: "Drama", rating: 8.7, cost: 640, badges: ["High Drama", "Verified"], description: "A father ventures across deep space in a race to save humanity before time runs out.", poster: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80" },
  { id: 10, title: "Fullmetal Alchemist: Brotherhood", type: "anime", year: 2024, genre: "Adventure", rating: 9.4, cost: 720, badges: ["Top Rated", "Verified", "Dubbed"], description: "Two brothers search for the Philosopher's Stone while confronting truth, sacrifice, and ambition.", poster: "https://images.unsplash.com/photo-1524989942937-3cb776d29cde?auto=format&fit=crop&w=900&q=80" },
  { id: 11, title: "Inception", type: "movie", year: 2010, genre: "Thriller", rating: 8.8, cost: 590, badges: ["Mind-Bending", "Verified"], description: "A thief who steals dreams is hired to implant an idea and must redefine reality itself.", poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80" },
  { id: 12, title: "Naruto Shippuden", type: "anime", year: 2024, genre: "Action", rating: 8.9, cost: 660, badges: ["Legacy", "Verified"], description: "An experienced ninja pushes forward through impossible battles and profound personal losses.", poster: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80" },
  { id: 13, title: "The Social Network", type: "movie", year: 2010, genre: "Drama", rating: 7.9, cost: 470, badges: ["Awarded", "Verified"], description: "A visionary startup story reveals ambition, betrayal, and the cost of revolutionary ideas.", poster: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=900&q=80" },
  { id: 14, title: "Death Note", type: "anime", year: 2023, genre: "Mystery", rating: 8.8, cost: 610, badges: ["Psychological", "Verified"], description: "A dangerous notebook gives its holder unlimited power and forces a moral crisis unlike any other.", poster: "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?auto=format&fit=crop&w=900&q=80" },
  { id: 15, title: "Mad Max: Fury Road", type: "movie", year: 2015, genre: "Action", rating: 8.2, cost: 620, badges: ["High Action", "Verified"], description: "A desperate run across the wasteland becomes a surreal, relentless chase through chaos and survival.", poster: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80" },
  { id: 16, title: "Hunter x Hunter", type: "anime", year: 2024, genre: "Adventure", rating: 9.0, cost: 650, badges: ["Critics' Pick", "Verified"], description: "A gifted boy begins a dangerous path of hunting, discovery, and powerful new rivalries.", poster: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80" },
  { id: 17, title: "Parasite", type: "movie", year: 2019, genre: "Thriller", rating: 8.5, cost: 560, badges: ["Award Winner", "Verified"], description: "Two families collide in a tense class drama that slowly turns into a deadly masterpiece.", poster: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=900&q=80" },
  { id: 18, title: "Black Clover", type: "anime", year: 2024, genre: "Fantasy", rating: 8.5, cost: 630, badges: ["Adventure", "Verified"], description: "A magical underdog emerges to challenge fate, rivalry, and the limits of what a sorcerer can become.", poster: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=900&q=80" },
  { id: 19, title: "Whiplash", type: "movie", year: 2014, genre: "Drama", rating: 8.5, cost: 500, badges: ["Awarded", "Verified"], description: "A talented drummer is pushed to his limit by a brutal mentor whose obsession consumes all else.", poster: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=900&q=80" },
  { id: 20, title: "Dragon Ball Z", type: "anime", year: 2024, genre: "Action", rating: 8.7, cost: 650, badges: ["Legendary", "Verified"], description: "Powerful fighters clash across the universe as destiny and pride push everyone beyond limits.", poster: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80" },
  { id: 21, title: "Spirited Away", type: "anime", year: 2001, genre: "Fantasy", rating: 8.6, cost: 500, badges: ["Classic", "Verified"], description: "A young girl enters a mysterious world of spirits and wonders while discovering courage inside herself.", poster: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80" },
  { id: 22, title: "The Batman", type: "movie", year: 2022, genre: "Action", rating: 8.3, cost: 620, badges: ["Neo Noir", "Verified"], description: "Batman hunts a serial killer through Gotham's rain-soaked streets while the city fractures around him.", poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=900&q=80" },
  { id: 23, title: "Bleach", type: "anime", year: 2024, genre: "Fantasy", rating: 8.4, cost: 590, badges: ["Action", "Verified"], description: "A soul reaper balances duty, friendship, and battle as he faces spirits and monstrous threats.", poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=900&q=80" },
  { id: 24, title: "Everything Everywhere All at Once", type: "movie", year: 2022, genre: "Sci-Fi", rating: 8.2, cost: 620, badges: ["Award Winner", "Verified"], description: "A laundromat owner explores infinite versions of her life while confronting love, loss, and absurdity.", poster: "https://images.unsplash.com/photo-1524989942937-3cb776d29cde?auto=format&fit=crop&w=900&q=80" }
];

const state = {
  coins: 420,
  membership: "Free",
  search: "",
  tab: "home",
  filter: "all",
  unlocked: [1, 2],
  downloads: [1],
  favorites: [2, 5],
  history: [2, 5, 8, 18],
  featuredId: 1,
};

const recommendRow = document.getElementById("recommendRow");
const catalogGrid = document.getElementById("catalogGrid");
const coinBalance = document.getElementById("coinBalance");
const memberStatus = document.getElementById("memberStatus");
const searchInput = document.getElementById("searchInput");
const heroTitle = document.getElementById("heroTitle");
const heroType = document.getElementById("heroType");
const heroYear = document.getElementById("heroYear");
const heroRating = document.getElementById("heroRating");
const heroCost = document.getElementById("heroCost");
const heroDescription = document.getElementById("heroDescription");
const heroSection = document.getElementById("heroSection");
const movieModal = document.getElementById("movieModal");
const modalPoster = document.getElementById("modalPoster");
const modalTitle = document.getElementById("modalTitle");
const modalType = document.getElementById("modalType");
const modalYear = document.getElementById("modalYear");
const modalRating = document.getElementById("modalRating");
const modalCost = document.getElementById("modalCost");
const modalDescription = document.getElementById("modalDescription");
const modalBadges = document.getElementById("modalBadges");
const modalUnlockBtn = document.getElementById("modalUnlockBtn");
const modalDownloadBtn = document.getElementById("modalDownloadBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

function getFilteredCatalog() {
  const query = state.search.trim().toLowerCase();
  return catalog.filter((item) => {
    const matchesTab =
      state.tab === "home" ||
      (state.tab === "movies" ? item.type === "movie" : false) ||
      (state.tab === "anime" ? item.type === "anime" : false) ||
      (state.tab === "trending" ? item.rating >= 8.5 : false) ||
      (state.tab === "downloads" ? state.downloads.includes(item.id) : false) ||
      (state.tab === "home" ? true : false);

    const matchesFilter =
      state.filter === "all" || item.type === state.filter || (state.filter === "trending" && item.rating >= 8.5);

    const matchesSearch =
      !query ||
      item.title.toLowerCase().includes(query) ||
      item.genre.toLowerCase().includes(query) ||
      item.type.toLowerCase().includes(query);

    return matchesTab && matchesFilter && matchesSearch;
  });
}

function getRecommendedList() {
  const watched = state.history;
  const base = catalog.filter((item) => !watched.includes(item.id));
  return [...base].sort((a, b) => b.rating - a.rating).slice(0, 4);
}

function renderFeatured() {
  const featured = catalog.find((item) => item.id === state.featuredId) || catalog[0];
  heroTitle.textContent = featured.title;
  heroType.textContent = featured.type === "movie" ? "Movie" : "Anime";
  heroYear.textContent = featured.year;
  heroRating.textContent = `★ ${featured.rating.toFixed(1)}`;
  heroCost.textContent = `${featured.cost} coins`;
  heroDescription.textContent = featured.description;
  heroSection.style.backgroundImage = `linear-gradient(90deg, rgba(7, 11, 20, 0.84), rgba(7, 11, 20, 0.3)), url('${featured.poster}')`;
  heroSection.style.backgroundSize = "cover";
  heroSection.style.backgroundPosition = "center";

  document.getElementById("heroWatchBtn").dataset.movieId = featured.id;
  document.getElementById("heroDownloadBtn").dataset.movieId = featured.id;
}

function renderRecommendations() {
  const recs = getRecommendedList();
  recommendRow.innerHTML = recs
    .map(
      (movie) => `
        <article class="card">
          <div class="card-cover">
            <img src="${movie.poster}" alt="${movie.title}" />
            <span class="card-badge">${movie.type === "movie" ? "Movie" : "Anime"}</span>
          </div>
          <div class="card-body">
            <div class="card-head">
              <h4>${movie.title}</h4>
              <button class="favorite-btn ${state.favorites.includes(movie.id) ? "active" : ""}" data-favorite-id="${movie.id}">${state.favorites.includes(movie.id) ? "♥" : "♡"}</button>
            </div>
            <div class="card-meta">
              <span>${movie.genre}</span>
              <span>${movie.year}</span>
              <span>★ ${movie.rating.toFixed(1)}</span>
            </div>
            <p class="card-copy">${movie.description}</p>
            <div class="card-actions">
              <span class="card-cost">${movie.cost} coins</span>
              <button class="card-button" data-open-id="${movie.id}">Open</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderCatalog() {
  const items = getFilteredCatalog();
  if (!items.length) {
    catalogGrid.innerHTML = '<div class="empty-state">No titles match your current filter. Try another search.</div>';
    return;
  }

  catalogGrid.innerHTML = items
    .map(
      (item) => `
        <article class="card">
          <div class="card-cover">
            <img src="${item.poster}" alt="${item.title}" />
            <span class="card-badge">${item.type === "movie" ? "Movie" : "Anime"}</span>
          </div>
          <div class="card-body">
            <div class="card-head">
              <h4>${item.title}</h4>
              <button class="favorite-btn ${state.favorites.includes(item.id) ? "active" : ""}" data-favorite-id="${item.id}">${state.favorites.includes(item.id) ? "♥" : "♡"}</button>
            </div>
            <div class="card-meta">
              <span>${item.genre}</span>
              <span>${item.year}</span>
              <span>★ ${item.rating.toFixed(1)}</span>
            </div>
            <p class="card-copy">${item.description}</p>
            <div class="card-actions">
              <span class="card-cost">${item.cost} coins</span>
              <button class="card-button ${state.unlocked.includes(item.id) ? "secondary" : ""}" data-open-id="${item.id}">${state.unlocked.includes(item.id) ? "View" : "Unlock"}</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function updateWallet() {
  coinBalance.textContent = state.coins;
  memberStatus.textContent = state.membership;
}

function getItemById(id) { return catalog.find((item) => item.id === Number(id)); }

function unlockItem(itemId) {
  const item = getItemById(itemId);
  if (!item) return;

  if (state.unlocked.includes(item.id)) {
    openModal(item.id);
    return;
  }

  if (state.coins >= item.cost) {
    state.coins -= item.cost;
    state.unlocked.push(item.id);
    updateWallet();
    renderCatalog();
    renderRecommendations();
    openModal(item.id);
    return;
  }

  alert(`Not enough DoZe Coins. You need ${item.cost - state.coins} more coins to unlock ${item.title}.`);
}

function toggleFavorite(id) {
  if (state.favorites.includes(id)) {
    state.favorites = state.favorites.filter((favId) => favId !== id);
  } else {
    state.favorites.push(id);
  }
  renderCatalog();
  renderRecommendations();
}

function toggleDownload(id) {
  if (state.downloads.includes(id)) {
    state.downloads = state.downloads.filter((downloadId) => downloadId !== id);
  } else {
    state.downloads.push(id);
  }
  renderCatalog();
  renderRecommendations();
  const modalItem = getItemById(Number(modalDownloadBtn.dataset.movieId));
  if (modalItem) {
    modalDownloadBtn.textContent = state.downloads.includes(modalItem.id) ? "Downloaded" : "Download";
  }
}

function openModal(id) {
  const item = getItemById(id);
  if (!item) return;

  modalPoster.src = item.poster;
  modalPoster.alt = `${item.title} poster`;
  modalTitle.textContent = item.title;
  modalType.textContent = item.type === "movie" ? "Movie" : "Anime";
  modalYear.textContent = item.year;
  modalRating.textContent = `★ ${item.rating.toFixed(1)}`;
  modalCost.textContent = `${item.cost} coins`;
  modalDescription.textContent = item.description;
  modalBadges.innerHTML = item.badges.map((badge) => `<span class="badge-item">${badge}</span>`).join("");
  modalUnlockBtn.dataset.movieId = item.id;
  modalDownloadBtn.dataset.movieId = item.id;
  modalDownloadBtn.textContent = state.downloads.includes(item.id) ? "Downloaded" : "Download";
  modalUnlockBtn.textContent = state.unlocked.includes(item.id) ? "Watch now" : "Unlock";

  movieModal.classList.remove("hidden");
  movieModal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  movieModal.classList.add("hidden");
  movieModal.setAttribute("aria-hidden", "true");
}

function generateDailyReward() {
  const bonus = 100;
  state.coins += bonus;
  updateWallet();
  alert(`Daily reward claimed! +${bonus} DoZe Coins.`);
}

function watchAdReward() {
  const bonus = 50;
  state.coins += bonus;
  updateWallet();
  alert(`Ad watched. +${bonus} DoZe Coins added.`);
}

function upgradeMembership() {
  state.membership = "Pro";
  updateWallet();
  alert("You upgraded to DoZe Pro for $10/month.");
}

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderCatalog();
});

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".nav-item").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.tab = button.dataset.tab;
    renderCatalog();
  });
});

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.filter = button.dataset.filter;
    renderCatalog();
  });
});

document.getElementById("watchAdBtn").addEventListener("click", watchAdReward);
document.getElementById("dailyRewardBtn").addEventListener("click", generateDailyReward);
document.getElementById("upgradeBtn").addEventListener("click", upgradeMembership);
document.getElementById("shuffleBtn").addEventListener("click", () => {
  const random = catalog[Math.floor(Math.random() * catalog.length)];
  state.featuredId = random.id;
  renderFeatured();
});

document.getElementById("heroWatchBtn").addEventListener("click", (event) => {
  unlockItem(Number(event.currentTarget.dataset.movieId));
});

document.getElementById("heroDownloadBtn").addEventListener("click", (event) => {
  toggleDownload(Number(event.currentTarget.dataset.movieId));
});

catalogGrid.addEventListener("click", (event) => {
  const favoriteButton = event.target.closest("[data-favorite-id]");
  if (favoriteButton) {
    toggleFavorite(Number(favoriteButton.dataset.favoriteId));
    return;
  }

  const openButton = event.target.closest("[data-open-id]");
  if (openButton) {
    const id = Number(openButton.dataset.openId);
    const item = getItemById(id);
    if (item) {
      if (state.unlocked.includes(id)) {
        openModal(id);
      } else {
        unlockItem(id);
      }
    }
  }
});

recommendRow.addEventListener("click", (event) => {
  const favoriteButton = event.target.closest("[data-favorite-id]");
  if (favoriteButton) {
    toggleFavorite(Number(favoriteButton.dataset.favoriteId));
    return;
  }

  const openButton = event.target.closest("[data-open-id]");
  if (openButton) {
    const id = Number(openButton.dataset.openId);
    const item = getItemById(id);
    if (item) {
      if (state.unlocked.includes(id)) {
        openModal(id);
      } else {
        unlockItem(id);
      }
    }
  }
});

modalUnlockBtn.addEventListener("click", () => {
  unlockItem(Number(modalUnlockBtn.dataset.movieId));
});

modalDownloadBtn.addEventListener("click", () => {
  toggleDownload(Number(modalDownloadBtn.dataset.movieId));
});

closeModalBtn.addEventListener("click", closeModal);
movieModal.addEventListener("click", (event) => {
  if (event.target.dataset.close === "true") {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});

updateWallet();
renderFeatured();
renderRecommendations();
renderCatalog();
