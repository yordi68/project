const sidebar = document.getElementById('sidebar');
const closeMenuBtn = document.getElementById('close-menu');
const menuToggle = document.getElementById('menu-toggle');

closeMenuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
});

menuToggle.addEventListener('click', () => {
    console.log("clicked")
    sidebar.classList.toggle('hidden');

});