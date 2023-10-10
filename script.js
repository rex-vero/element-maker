const form = document.getElementById('form');
const element = document.getElementById('element');
const text = document.getElementById('text');
const eColor = document.getElementById('eColor');
const tColor = document.getElementById('tColor');
const height = document.getElementById('height');
const width = document.getElementById('width');
const font = document.getElementById('font');
const btn = document.getElementById('btn');
const maker = document.getElementById('maker');
const rBtn = document.getElementById('rbtn');
const card = document.getElementById('card');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    form.style.display = 'none';
    card.style.display = 'flex';
    if (element.value === 'a') {
        const link = document.createElement('a');
        link.setAttribute('href', '#')
        link.innerText = `${text.value}`
        link.classList.add('center');
        link.style.backgroundColor = `${eColor.value}`
        link.style.color = `${tColor.value}`
        link.style.fontSize = `${font.value}px`
        link.style.height = `${height.value}px`
        link.style.width = `${width.value}px`
        maker.appendChild(link)
    } else {
        const newElement = document.createElement(element.value);
        newElement.innerText = `${text.value}`
        newElement.classList.add('center');
        newElement.style.backgroundColor = `${eColor.value}`
        newElement.style.color = `${tColor.value}`
        newElement.style.fontSize = `${font.value}px`
        newElement.style.height = `${height.value}px`
        newElement.style.width = `${width.value}px`
        maker.appendChild(newElement)
    }
})
rBtn.addEventListener('click', () => {
    location.reload();
})