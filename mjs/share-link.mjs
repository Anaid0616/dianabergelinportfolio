const btn = document.getElementById('copyLink');
if (btn) {
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      const prev = btn.textContent;
      btn.textContent = 'Link copied!';
      setTimeout(() => (btn.textContent = prev), 1800);
    } catch (e) {
      console.error(e);
      alert('Could not copy. Please copy the URL from the address bar.');
    }
  });
}
