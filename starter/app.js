function getBookmarks() {
    const data = localStorage.getItem('bookmarks');
    return data ? JSON.parse(data) : [];
}
function saveBookmarks(bookmarks) {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}
 
function renderBookmarks() {
    const list = document.getElementById('bookmarkList');
    list.innerHTML = '';

    const bookmarks = getBookmarks();

    bookmarks.forEach((bookmark, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <a href="${bookmark.url}" target="_blank">${bookmark.title}</a>
          
        `;
        list.appendChild(li);
        

    });
}
document.getElementById('bookmarkForm').addEventListener('submit', e => {
    e.preventDefault();
    const title = document.getElementById('title').value.trim();
   

    if (!title || !url) return;

    const bookmarks = getBookmarks();
    bookmarks.push({ title, url });
    saveBookmarks(bookmarks);
    renderBookmarks();
    e.target.reset();
});

renderBookmarks();
