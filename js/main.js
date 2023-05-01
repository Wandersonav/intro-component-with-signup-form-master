const formulario = document.getElementsByClassName("formulario");
const enviar = document.getElementById("botao");
const descricao = document.querySelectorAll(".descricao");
const input = document.querySelector('input[name="name"]');

enviar.addEventListener("click",(even) => {
   // let el = document.querySelector('.control');

nome = even.target.form[0].value
ultimoNome = even.target.form[1].value
email = even.target.form[2].value
Password = even.target.form[3].value

let btn = document.getElementById("control1");
let btn2 = document.getElementById("control2");
let btn3 = document.getElementById("control3");
let btn4 = document.getElementById("control4");

if (nome === ''){descricao1.innerHTML = "First Name cannot be empty",btn.classList.add("erro")}else{descricao1.innerHTML = ""};
if (ultimoNome === ''){descricao2.innerHTML = "Last Name cannot be empty",btn2.classList.add("erro")}else{descricao2.innerHTML = ""};
if (email === ''){descricao3.innerHTML = "Looks like this is not an email",btn3.classList.add("erro")}else{descricao3.innerHTML = ""};
if (Password === ''){descricao4.innerHTML = "Password cannot be empty",btn4.classList.add("erro")}else{descricao4.innerHTML = ""};








})

enviar.addEventListener('submit',(e) =>{
e.preventDefault()
console.log("teste")
//formulario.classList.add('teste')})


})



