//#region vars
const normalLink = document.getElementById('normal');
const minimalistLink = document.getElementById('minimalista');
const body = document.body;
const main = document.querySelector('main');
const header = document.querySelector('header');
const paragraphs = document.querySelectorAll('p');
const frame = document.querySelector('.marco');
const hiddenSpan = document.querySelector('span')

//#region domcontentloaded
document.addEventListener('DOMContentLoaded', () => {
    applyStyles(); //load the styles

    //add the 2 event listeners
    normalLink.addEventListener('click', (e) => {
        e.preventDefault();
        applyStyles();
    });
    minimalistLink.addEventListener('click', (e) => {
        e.preventDefault();
        removeStyles();
    });
});

//#region apply styles
function applyStyles() {
    // general styles for the body
    body.style.margin = '0';
    body.style.marginLeft = '6rem';
    body.style.background = 'aqua'

    // styles for the main
    main.style.padding = '1rem';
    main.style.background = 'lightyellow';
    main.style.height = '100vh'

    // styles for the header
    header.style.border = '1px solid grey';
    header.style.background = 'lightgray';
    header.style.padding = '0.5rem'

    // styles for the frame
    frame.style.background = 'yellow';
    frame.style.border = '1px solid black';
    frame.style.padding = '0.5rem'

    // styles for the span
    hiddenSpan.style.display = 'block !important';
}

//#region remove styles
function removeStyles() {
    //remove body styles
    body.style = '';

    //for each child remove the styles
    const allElements = body.querySelectorAll('*');
    allElements.forEach(element => {
        element.style = '';
    });

    //save the styles of the span before removing it
    const styles = hiddenSpan.style.cssText;
    hiddenSpan.style.display = 'none'

    //when normal is clicked again, restore the styles
    normalLink.addEventListener('click', () => {
        hiddenSpan.style.cssText = styles;
    });
}

