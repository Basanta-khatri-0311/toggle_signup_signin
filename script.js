const container = document.getElementById('container')
const registerBtn = document.getElementById('register')
const logIn = document.getElementById('login')


registerBtn.addEventListener('click',()=>{
    container.classList.add("active")
})

logIn.addEventListener('click',()=>{
    container.classList.remove("active")
})