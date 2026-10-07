* {
  box-sizing: border-box;
}

:root {
  --bg: #070b14;
  --bg-alt: #0f172a;
  --panel: rgba(15, 23, 42, 0.9);
  --panel-light: rgba(30, 41, 59, 0.9);
  --line: rgba(148, 163, 184, 0.16);
  --text: #ebf1ff;
  --muted: #a7b5cf;
  --primary: #ff8a2a;
  --primary-dark: #ff5d2c;
  --secondary: #8748ff;
  --success: #35d39a;
  --warning: #ffc857;
  --danger: #ff5c7a;
  --shadow: 0 20px 45px rgba(2, 6, 23, 0.6);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background:
    radial-gradient(circle at top left, rgba(255, 138, 42, 0.12), transparent 18%),
    radial-gradient(circle at bottom right, rgba(135, 72, 255, 0.1), transparent 20%),
    var(--bg);
  color: var(--text);
}

button,
input {
  font: inherit;
}

button {
  cursor: pointer;
  border: none;
}

img {
  max-width: 100%;
  display: block;
}

.app-shell {
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr);
  min-height: 100vh;
}

.sidebar {
  padding: 24px 16px 22px;
  border-right: 1px solid var(--line);
  background: rgba(9, 14, 24, 0.82);
  backdrop-filter: blur(12px);
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 28px;
}

.brand-logo {
  width: 48px;
  height: 48px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  font-size: 1.4rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  box-shadow: var(--shadow);
}

h1,
h2,
h3,
p {
  margin: 0;
}

h1 {
  font-size: 1.7rem;
}

.mini-label {
  font-size: 0.7rem;
  letter-spacing: 0.12rem;
  text-transform: uppercase;
  color: var(--muted);
}

.nav {
  display: grid;
  gap: 10px;
  margin-bottom: 24px;
}

.nav-item,
.filter {
  border: 1px solid transparent;
  background: transparent;
  color: var(--muted);
  border-radius: 12px;
  padding: 12px 14px;
  text-align: left;
  font-weight: 600;
  transition: all 0.2s ease;
}

.nav-item:hover,
.filter:hover {
  background: rgba(148, 163, 184, 0.06);
  color: var(--text);
}

.nav-item.active,
.filter.active {
  background: rgba(255, 138, 42, 0.12);
  border-color: rgba(255, 138, 42, 0.22);
  color: #ffd9b9;
}

.wallet-box {
  border: 1px solid var(--line);
  background: rgba(15, 23, 42, 0.9);
  border-radius: 18px;
  padding: 16px 14px;
  margin-bottom: 22px;
}

.wallet-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
  color: var(--text);
}

.wallet-row.muted {
  color: var(--muted);
}

.sidebar-actions {
  display: grid;
  gap: 10px;
}

.action-btn,
.primary,
.secondary,
.ghost,
.premium,
.text-link {
  border-radius: 12px;
  font-weight: 700;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.action-btn:hover,
.primary:hover,
.secondary:hover,
.ghost:hover,
.premium:hover,
.text-link:hover {
  transform: translateY(-1px);
}

.primary,
.premium {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: white;
  padding: 12px 16px;
  box-shadow: 0 16px 30px rgba(255, 116, 52, 0.3);
}

.secondary {
  background: rgba(148, 163, 184, 0.1);
  color: var(--text);
  border: 1px solid var(--line);
  padding: 12px 16px;
}

.ghost {
  background: rgba(15, 23, 42, 0.75);
  color: var(--text);
  border: 1px solid var(--line);
  padding: 12px 16px;
}

.premium {
  background: linear-gradient(135deg, var(--secondary), #7dd3fc);
}

.content {
  padding: 24px 26px 40px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 22px;
}

.search-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(15, 23, 42, 0.85);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 12px 16px;
  width: min(620px, 100%);
}

.search-wrap input {
  flex: 1;
  background: transparent;
  border: none;
  color: var(--text);
  font-size: 1rem;
  outline: none;
}

.search-wrap input::placeholder {
  color: var(--muted);
}

.search-icon {
  color: var(--muted);
  font-size: 1.2rem;
}

.profile-pill {
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid var(--line);
  background: rgba(15, 23, 42, 0.8);
  border-radius: 16px;
  padding: 10px 14px;
}

.avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #24c6dc, var(--secondary));
  font-weight: 800;
}

.hero {
  position: relative;
  min-height: 360px;
  border-radius: 28px;
  overflow: hidden;
  padding: 28px;
  display: flex;
  align-items: flex-end;
  background-image: linear-gradient(90deg, rgba(7, 11, 20, 0.84), rgba(7, 11, 20, 0.3)), url("https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1600&q=80");
  background-size: cover;
  background-position: center;
  box-shadow: var(--shadow);
  border: 1px solid var(--line);
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 620px;
}

.hero-tag {
  color: #ffc78f;
  text-transform: uppercase;
  letter-spacing: 0.12rem;
  font-size: 0.72rem;
  margin-bottom: 10px;
}

.hero h2 {
  font-size: clamp(2.1rem, 5vw, 4rem);
  margin-bottom: 14px;
}

.meta-strip {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-bottom: 14px;
}

.meta-strip span {
  padding: 7px 10px;
  background: rgba(15, 23, 42, 0.45);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 999px;
  font-size: 0.75rem;
  color: #dfeaff;
}

.hero-description,
.hero p {
  color: rgba(235, 241, 255, 0.82);
  line-height: 1.7;
  max-width: 560px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}

.panel-block {
  margin-top: 28px;
}

.section-head {
  display: flex;
  justify-content: space-between;
  gap: 18px;
  align-items: center;
  margin-bottom: 18px;
}

.section-head h3 {
  font-size: 1.5rem;
}

.filter-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.filter {
  background: rgba(15, 23, 42, 0.7);
  color: var(--muted);
  border: 1px solid var(--line);
  padding: 10px 15px;
}

.text-link {
  background: transparent;
  color: #fbc695;
  padding: 0;
}

.recommend-row,
.catalog-grid {
  display: grid;
  gap: 18px;
}

.recommend-row {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.catalog-grid {
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}

.card {
  background: rgba(15, 23, 42, 0.82);
  border: 1px solid var(--line);
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 138, 42, 0.28);
}

.card-cover {
  position: relative;
  height: 260px;
  overflow: hidden;
}

.card-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(7, 11, 20, 0.8);
  border: 1px solid rgba(255,255,255,0.1);
  padding: 6px 9px;
  border-radius: 999px;
  font-size: 0.68rem;
  font-weight: 700;
  color: #ffdca8;
}

.card-body {
  padding: 16px 14px 18px;
}

.card-head {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: start;
  margin-bottom: 8px;
}

.card-head h4 {
  font-size: 1.02rem;
  line-height: 1.3;
}

.favorite-btn {
  min-width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(148, 163, 184, 0.08);
  border: 1px solid rgba(255,255,255,0.08);
  color: var(--text);
  font-size: 1.1rem;
}

.favorite-btn.active {
  background: rgba(255, 138, 42, 0.14);
  color: #ffd8a8;
  border-color: rgba(255, 138, 42, 0.24);
}

.card-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 10px;
  color: var(--muted);
  font-size: 0.72rem;
}

.card-copy {
  color: rgba(235, 241, 255, 0.9);
  line-height: 1.5;
  margin-bottom: 14px;
  font-size: 0.88rem;
}

.card-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.card-cost {
  font-size: 0.8rem;
  color: #f9d39d;
  font-weight: 700;
}

.card-button {
  background: rgba(255, 138, 42, 0.12);
  color: #f9d39d;
  border: 1px solid rgba(255, 138, 42, 0.2);
  border-radius: 10px;
  padding: 8px 12px;
  font-weight: 700;
}

.card-button.secondary {
  background: rgba(135, 72, 255, 0.12);
  color: #d2beff;
  border-color: rgba(135, 72, 255, 0.24);
}

.badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 14px 0;
}

.badge-item {
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.08);
  color: var(--muted);
  border: 1px solid var(--line);
  font-size: 0.72rem;
}

.modal {
  position: fixed;
  inset: 0;
  z-index: 50;
  display: grid;
  place-items: center;
}

.modal.hidden {
  display: none;
}

.modal-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(2, 6, 23, 0.72);
  backdrop-filter: blur(4px);
}

.modal-panel {
  position: relative;
  z-index: 1;
  width: min(850px, calc(100% - 24px));
  background: rgba(10, 15, 26, 0.98);
  border: 1px solid var(--line);
  border-radius: 28px;
  overflow: hidden;
  display: grid;
  grid-template-columns: minmax(220px, 300px) 1fr;
  box-shadow: 0 30px 70px rgba(2, 6, 23, 0.7);
}

.modal-cover-wrap {
  min-height: 100%;
}

.modal-cover-wrap img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.modal-copy {
  padding: 28px 24px;
}

.modal-copy h3 {
  font-size: clamp(2rem, 3.2vw, 3rem);
  margin: 8px 0 12px;
}

.modal-meta {
  margin-bottom: 8px;
}

.modal-copy p {
  color: rgba(235, 241, 255, 0.88);
  line-height: 1.7;
}

.modal-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
}

.modal-close {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(15, 23, 42, 0.85);
  color: var(--text);
  font-size: 1.5rem;
  border: 1px solid var(--line);
  z-index: 2;
}

.empty-state {
  border: 1px dashed rgba(255,255,255,0.18);
  background: rgba(15, 23, 42, 0.35);
  color: var(--muted);
  border-radius: 18px;
  padding: 40px 20px;
  text-align: center;
  grid-column: 1 / -1;
}

@media (max-width: 980px) {
  .app-shell {
    grid-template-columns: 1fr;
  }

  .sidebar {
    border-right: none;
    border-bottom: 1px solid var(--line);
  }
}

@media (max-width: 640px) {
  .content {
    padding: 18px 16px 32px;
  }

  .topbar,
  .section-head {
    flex-direction: column;
    align-items: stretch;
  }

  .search-wrap {
    width: 100%;
  }

  .modal-panel {
    grid-template-columns: 1fr;
  }

  .modal-cover-wrap {
    height: 220px;
  }
}
