function mostrarSenha(){
    var inputPass = document.getElementById('senha')
    var btnShowPass = document.getElementById('btn-senha')

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type','text')
        btnShowPass.classList.replace('olho_ligado','fa fa-eye-slash')
    }
    else{
        inputPass.setAttribute('type','password')
        btnShowPass.classList.replace('fa fa-eye-slash','olho_ligado')
    }
}