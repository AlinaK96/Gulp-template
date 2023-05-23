//смена темы на светлую / тёмную

const text = document.querySelector('.ThemeInfo')

document.querySelector('.themetoggle').addEventListener('click', (event) => {
    event.preventDefault();
    if (localStorage.getItem('theme') === 'light') {
        localStorage.removeItem('theme');
        }
        else {
        localStorage.setItem('theme', 'light')
        }
        addlightClassToHTML()
    });
    
function addlightClassToHTML() {
    try {
    if (localStorage.getItem('theme') === 'light') {
        document.querySelector('html').classList.add('light');
        text.innerText = 'тёмная тема'
    }
    else {
        document.querySelector('html').classList.remove('light');
        text.innerText = 'светлая тема'

    }
    } catch (err) { }
}
    
addlightClassToHTML();