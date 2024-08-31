
const colorsBox = {
    red: 'red',
    green: 'green',
    yellow: 'yellow',
    orange: 'orange',
    gray: 'gray',
    purple: 'purple',
    blue: 'blue',
    brown: 'brown'
};

const colorsUp = document.querySelectorAll('.colorsUp .colors_item');
const colorsDown = document.querySelectorAll('.colorsDown .colors_item');
const items = document.querySelectorAll('.item');
const resetButtonUp = document.querySelectorAll('.reset-btn-up');
const resetButtonDown = document.querySelectorAll('.reset-btn-dwn');

colorsUp.forEach((up) => {
    up.addEventListener('click', () => {
        const colorClass = up.classList[1]
        const colors = colorsBox[colorClass]
        items.forEach((item) => {
         item.style.background = colors
        })
    })
})

colorsDown.forEach(color => {
    color.addEventListener('click', () => {
        const colorClass = color.classList[1]
        const colors = colorsBox[colorClass]
        document.body.style.background = colors
    })
})

resetButtonUp.forEach(button => {
    button.addEventListener('click', () => {
        items.forEach(item => {
            item.style.background = '' 
        });
        document.body.style.background = ''
    })
})

resetButtonDown.forEach(button => {
    button.addEventListener('click', () => {
        items.forEach(item => {
            document.body.style.background = ''
        });
    })
})
