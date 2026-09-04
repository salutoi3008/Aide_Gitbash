/* ============================================================
   MÉMO GIT — script.js
   Gestion du mode sombre
   ============================================================ */

const btn = document.getElementById('darkToggle');

function toggleDark() {
  const isDark = document.body.classList.toggle('dark');
  btn.textContent = isDark ? '☀️ Mode clair' : '🌙 Mode sombre';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

/* Mémoriser le choix au rechargement de la page */
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  btn.textContent = '☀️ Mode clair';
}
