// Dark Mode toggle
function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
}

// Bahasa toggle
function toggleLanguage() {
    const enElements = document.querySelectorAll('.lang-en');
    const idElements = document.querySelectorAll('.lang-id');
    enElements.forEach(el => el.classList.toggle('hidden'));
    idElements.forEach(el => el.classList.toggle('hidden'));
}

// Modal toggle
function toggleModal(id) {
    const modal = document.getElementById(id);
    modal.classList.toggle('hidden');
}
