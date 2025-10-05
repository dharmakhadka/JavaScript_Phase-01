const btn = document.getElementById('themeToggleBtn');
    btn.addEventListener('click', () => {
      if (document.body.classList.contains('light')) {
        document.body.classList.replace('light', 'dark');
        btn.textContent = 'Switch to Light Mode';
      } else {
        document.body.classList.replace('dark', 'light');
        btn.textContent = 'Switch to Dark Mode';
      }
    });