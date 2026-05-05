function showPage(pageId) {
    // 1. On récupère toutes les sections avec la classe "page"
    const pages = document.querySelectorAll('.page');
    
    // 2. On les cache toutes
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // 3. On affiche uniquement celle qui a été cliquée
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
}
