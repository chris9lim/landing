/* =============================================
   Christopher Lim — Landing Page Scripts
   ============================================= */

// ---- HEADSHOT UPLOADER ----

const zone = document.getElementById('headshotZone');
const input = document.getElementById('headshotInput');

zone.addEventListener('click', () => input.click());

input.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (ev) => {
    // Clear zone and inject image
    zone.innerHTML = '';

    const img = document.createElement('img');
    img.src = ev.target.result;
    img.alt = 'Christopher Lim headshot';
    zone.appendChild(img);

    // Hover overlay to re-upload
    const overlay = document.createElement('div');
    overlay.className = 'headshot-overlay';
    overlay.textContent = 'Change photo';
    Object.assign(overlay.style, {
      position: 'absolute',
      inset: '0',
      borderRadius: '50%',
      background: 'rgba(0,0,0,0)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '13px',
      fontWeight: '500',
      color: 'transparent',
      transition: 'background 0.2s, color 0.2s',
      cursor: 'pointer',
    });
    zone.appendChild(overlay);

    zone.addEventListener('mouseenter', () => {
      overlay.style.background = 'rgba(0,0,0,0.35)';
      overlay.style.color = '#fff';
    });
    zone.addEventListener('mouseleave', () => {
      overlay.style.background = 'rgba(0,0,0,0)';
      overlay.style.color = 'transparent';
    });

    // New hidden input for re-upload
    const newInput = document.createElement('input');
    newInput.type = 'file';
    newInput.accept = 'image/*';
    newInput.style.display = 'none';
    newInput.addEventListener('change', (e2) => {
      const r2 = new FileReader();
      r2.onload = (e3) => { img.src = e3.target.result; };
      r2.readAsDataURL(e2.target.files[0]);
    });
    zone.appendChild(newInput);

    zone.onclick = (ev) => {
      ev.stopPropagation();
      newInput.click();
    };
  };
  reader.readAsDataURL(file);
});

// ---- SCROLL REVEAL ----

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.reveal').forEach((el) => {
  revealObserver.observe(el);
});
