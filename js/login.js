const password = document.querySelector('.input-password')
const icon = document.querySelector('.olho_ligado')

icon.addEventListener('click',showHide)

function showHide(){
    if(password.type === 'password'){
        password.setAttribute('type','text')
        icon.classList.add('hide')
        icon.setAttribute('src', '../eyeOff.png')
    }
    else{
        password.setAttribute('type','password')
        icon.classList.remove('hide')
        icon.setAttribute('src', '../eyeOn.png')
    }
}