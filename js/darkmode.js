let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDM = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode' , 'active')
}

const disableDM = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode' , null)
}

if(darkmode ==="active") enableDM()

themeSwitch.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDM() : disableDM()
})