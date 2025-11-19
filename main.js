fetch('vault.json')
  .then(r => r.json())
  .then(entries => {
    const list = document.getElementById('list');
    const content = document.querySelector('#content .entry');

    entries.forEach((entry, i) => {
      const btn = document.createElement('button');
      btn.textContent = entry.title;
      btn.onclick = () => {
        document.querySelectorAll('button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        fetch(entry.file)
          .then(r => r.text())
          .then(md => {
            // Super simple Markdown → HTML (good enough for 10,000 years)
            let html = md
              .replace(/^### (.*$)/gm, '<h3>$1</h3>')
              .replace(/^## (.*$)/gm, '<h2>$1</h2>')
              .replace(/^# (.*$)/gm, '<h1>$1</h1>')
              .replace(/\*\*(.*)\*\*/g, '<strong>$1</strong>')
              .replace(/\*(.*)\*/g, '<em>$1</em>')
              .replace(/\n/g, '<br>');
            content.innerHTML = `<h2>${entry.title}</h2><p><em>by ${entry.author} — ${entry.date}</em></p>${html}`;
          });
      };
      if (i === 0) btn.click(); // auto-load first
      list.appendChild(btn);
    });
  });
