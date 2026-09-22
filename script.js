// ==========================================================================
// 2. LIGHTBOX POP-UP CLICK LOGIC
// ==========================================================================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const galleryItems = document.querySelectorAll('.gallery-item');

if (lightbox && lightboxImg) {
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            if (img) {
                lightbox.style.display = 'flex';
                lightboxImg.src = img.src;
            }
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });
}

// ==========================================================================
// 3. AUTOMATICALLY SET THE CURRENT CALENDAR YEAR
// ==========================================================================
const yearElement = document.getElementById('year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
