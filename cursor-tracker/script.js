const bee = document.querySelector('.bee');
document.body.addEventListener('mousemove', e => {
    bee.style.left = `${e.clientX}px`;
    bee.style.top = `${e.clientY}px`;
});