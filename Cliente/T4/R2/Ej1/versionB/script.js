//#region get elements
const normalLink = document.getElementById('normal');
const minimalistaLink = document.getElementById('minimalista');
let currentTheme = null;

//#region load style
// function to load a css file
function loadStyle(fileName) {
    // if there is already a theme loaded, remove it
    if (currentTheme) {
        currentTheme.remove();
    }

    // create a new <link> for the theme
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `${fileName}.css`;
    document.head.appendChild(link);

    // update the reference to the current theme
    currentTheme = link;
}

//#region event listeners
// event listeners for the links
normalLink.addEventListener('click', (e) => {
    e.preventDefault(); // prevent the default behavior of the link
    loadStyle('normal'); // load normal.css
});

minimalistaLink.addEventListener('click', (e) => {
    e.preventDefault(); // prevent the default behavior of the link
    loadStyle('minimalista'); // load minimalista.css
});

//#region load default
// load the normal theme by default when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadStyle('normal');
});

