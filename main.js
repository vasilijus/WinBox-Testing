const about = document.getElementById('about')
const contact = document.getElementById('contact')
const aboutContent = document.getElementById('about-content')
const contactContent = document.getElementById('contact-content')

console.log('test')

about.addEventListener('click', () => {
     console.log('clicked about')
     const aboutBox = new WinBox({
        title: 'About Me',
        background: '#00aa00', // header background
     })
 })