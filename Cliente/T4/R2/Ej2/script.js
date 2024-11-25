let fontSize = 1;
const paragraphs = document.querySelectorAll('p');

function incrementFontSize() {
    fontSize += 0.1;
    paragraphs.forEach(p => p.style.fontSize = `${fontSize}rem`);
}
function decrementFontSize() {
    fontSize -= 0.1;
    paragraphs.forEach(p => p.style.fontSize = `${fontSize}rem`);
}
function resetFontSize() {
    fontSize = 1;
    paragraphs.forEach(p => p.style.fontSize = `${fontSize}rem`);
}
function justifyText() {
    paragraphs.forEach(p => p.style.textAlign = 'justify');
}
function alignLeft() {
    paragraphs.forEach(p => p.style.textAlign = 'left');
}