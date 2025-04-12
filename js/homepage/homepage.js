const tabs = document.querySelectorAll('.tab');
const slides = document.querySelectorAll('.slide');

function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('show');
}


tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {

        tabs.forEach(tab => tab.classList.remove('active'));

        tab.classList.add('active');

        slides.forEach(slide => slide.classList.remove('active'));

        slides[index].classList.add('active');
    });
});

const dots = document.querySelectorAll('.dot');

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[index].classList.add('active');
    dot.classList.add('active');
  });
});
