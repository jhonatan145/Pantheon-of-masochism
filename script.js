function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  menu.style.width = menu.style.width === "250px" ? "0" : "250px";
} 
// --- Imagen ampliada (zoom al hacer clic) ---
const modal = document.createElement('div');
modal.id = 'imgModal';
modal.innerHTML = `
  <span id="closeModal">&times;</span>
  <img id="modalImg" src="">
`;
document.body.appendChild(modal);

const zoomableImages = document.querySelectorAll('.zoomable');
const modalImg = document.getElementById('modalImg');
const closeModal = document.getElementById('closeModal');

zoomableImages.forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = img.src;
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});