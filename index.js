const header = document.querySelector('header');

document.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    });




    //Script Contato Abaixo
    const form = document.getElementById("form");
const username = document.getElementById("username")
const email = document.getElementById("email")
const msgtxt = document.getElementById("msgtxt")

const toggleMenu = () => {
  menu = document.querySelector('.menuMobile');
  menu?.classList.toggle("close")
}

const closeMenu = () => {
  menu = document.querySelector('.menuMobile');
  menu?.classList.add("close")
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkForm();
})

email.addEventListener("blur", () => {
  checkInputEmail();
})


username.addEventListener("blur", () => {
  checkInputUsername();
})

msgtxt.addEventListener("blur", () => {
  checkInputmsgtxt();
})

function checkInputUsername(){
  const usernameValue = username.value;

  if(usernameValue === ""){
    errorInput(username, "Preencha o campo de nome!")
  }else{
    const formItem = username.parentElement;
    formItem.className = "form-content"
  }

}

function checkInputEmail(){
  const emailValue = email.value;

  if(emailValue === ""){
    errorInput(email, "O email é obrigatório.")
  }else{
    const formItem = email.parentElement;
    formItem.className = "form-content"
  }


}

function checkInputmsgtxt(){
  const msgtxtValue = msgtxt.value;

  if(msgtxtValue === ""){
    errorInput(msgtxt, "Escreva a mensagem.")
  }else{
    const formItem = msgtxt.parentElement;
    formItem.className = "form-content"
  }


}


function checkForm(){
  checkInputUsername();
  checkInputEmail();
  checkInputmsgtxt();

  const formItems = form.querySelectorAll(".form-content")

  const isValid = [...formItems].every( (item) => {
    return item.className === "form-content"
  });

  if(isValid){
    alert("EMAIL ENVIADO COM SUCESSO!")
  }

}


function errorInput(input, message){
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a")

  textMessage.innerText = message;

  formItem.className = "form-content error"

}