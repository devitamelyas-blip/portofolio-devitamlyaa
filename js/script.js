function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
}

function toggleLanguage() {
    const enElements = document.querySelectorAll('.lang-en');
    const idElements = document.querySelectorAll('.lang-id');
    enElements.forEach(el => el.classList.toggle('hidden'));
    idElements.forEach(el => el.classList.toggle('hidden'));
}

function toggleModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.toggle('hidden');
}

function openCaseStudyModal(e) {
    if (e) e.preventDefault();
    const modal = document.getElementById('case-study-modal');
    if (!modal) return;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    modal.scrollTop = 0;
}

function closeCaseStudyModal() {
    const modal = document.getElementById('case-study-modal');
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function handleBackdropClick(e) {
    if (e.target && e.target.id === 'case-study-modal') {
        closeCaseStudyModal();
    }
}
