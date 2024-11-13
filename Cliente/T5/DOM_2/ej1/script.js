const btnIncrement = document.querySelector('button');

btnIncrement.addEventListener('click', () => {
    const num = Number(document.querySelector('.num').textContent) + 1;

    const p = document.querySelector('.num');
    p.textContent = num;
});