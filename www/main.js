const boton = document.getElementById('db-click');

const hexColor = () => Math.floor(Math.random() * 16777215).toString(16);

boton.addEventListener('dblclick', () => {
    boton.style.background = `#${hexColor()}`;
});