const formulario = document.getElementsByClassName("formulario");
const enviar = document.getElementById("botao");
const descricao = document.querySelectorAll(".descricao");

enviar.addEventListener("click",(even) => {


nome = even.target.form[0].value
ultimoNome = even.target.form[1].value
email = even.target.form[2].value
Password = even.target.form[3].value


if (nome === ''){descricao1.innerHTML = "First Name cannot be empty"}else{descricao1.innerHTML = ""};
if (ultimoNome === ''){descricao2.innerHTML = "Last Name cannot be empty"}else{descricao2.innerHTML = ""};
if (email === ''){descricao3.innerHTML = "Looks like this is not an email"}else{descricao3.innerHTML = ""};
if (Password === ''){descricao4.innerHTML = "Password cannot be empty"}else{descricao4.innerHTML = ""};


})











