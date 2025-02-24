const regTrans = document.querySelector('.regTrans')
const sideContainer = document.querySelector('.side-container')
const sideContent = document.querySelector('.side-content')

setTimeout(()=>{
    sideContent.style.opacity = '1'
    },10)
    

regTrans.addEventListener('click', () => {
    sideContainer.style.maxWidth = '100%'
    sideContent.style.opacity = '0'
    setTimeout(() => {
        sideContainer.style.maxWidth = ''
        sideContainer.style.marginLeft = 'auto'
        setTimeout(() => {
            window.location.href = 'register.html'
        }, 500)
    }, 500)
})