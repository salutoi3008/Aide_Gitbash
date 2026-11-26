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

/* ================
     Bouton copier
==================*/

document.querySelectorAll('.cmd').forEach(cmd => {
  const btn = document.createElement('button');
  btn.className = 'copy-btn';
  btn.textContent = '📋 Copier';
  btn.addEventListener('click', () => {
    navigator.clipboard.writeText(cmd.textContent.trim());
    btn.textContent = '✅ Copié';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = '📋 Copier'; btn.classList.remove('copied'); }, 1500);
  });
  cmd.after(btn);
});