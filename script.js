const gridMenu = document.querySelector('.grid-menu');

// 24 mysterious menu options (change or rename freely)
const options = [
  "Access Log", "Decode", "The Vault", "Incoming Signal",
  "Echo Trace", "Sector 7", "Log 401", "Project Red",
  "Phantom Node", "Ghost Comm", "Archive", "Data Lock",
  "Sequence", "Pulse", "Echo Chamber", "Core Drop",
  "Dark Entry", "Null Drive", "Key Fragment", "Orbital Sync",
  "Pathfinder", "Signal Lost", "Scrambler", "Terminal"
];

// Generate grid items dynamically
options.forEach((optionText) => {
  const div = document.createElement('div');
  div.className = 'grid-item';
  div.innerText = optionText;

  // Placeholder click event
  div.addEventListener('click', () => {
    alert(`You selected: ${optionText}`);
    // Later: window.location.href = "/somepage.html";
  });

  gridMenu.appendChild(div);
});