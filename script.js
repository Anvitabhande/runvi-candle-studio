const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');

menuToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  menuToggle.textContent = isOpen ? '✕' : '☰';
});

siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    menuToggle.textContent = '☰';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

// Product links take visitors to the contact section and prefill the selected product in the page hash.
document.querySelectorAll('[data-product]').forEach((link) => {
  link.addEventListener('click', () => {
    const product = link.dataset.product;
    sessionStorage.setItem('runviSelectedProduct', product);
  });
});

// SETUP: Add your Instagram profile URL in index.html. For WhatsApp, replace the placeholder number in the code below.
const whatsappButton = document.getElementById('whatsappButton');
const whatsappNumber = '91XXXXXXXXXX'; // Replace with your number, including country code, with no + or spaces.
if (/^\d{10,15}$/.test(whatsappNumber)) {
  whatsappButton.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi Runvi Candle Studio! I would like to know more about your candles.')}`;
  whatsappButton.textContent = 'Order on WhatsApp ↗';
  whatsappButton.removeAttribute('data-whatsapp-placeholder');
} else {
  whatsappButton.addEventListener('click', (event) => {
    event.preventDefault();
    alert('To enable WhatsApp orders, open script.js and replace 91XXXXXXXXXX with your WhatsApp number including country code.');
  });
}
