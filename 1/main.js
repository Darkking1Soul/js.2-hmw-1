const message = document.getElementById("message");

function ValidMail() {
  var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;        
  var myMail = document.getElementById("email").value;
  var valid = re.test(myMail);

  if (valid) {
    alert("Вы успешно зарегистрировались");             
    message.style.display = "none";
    document.getElementById("email").style.borderColor = "";
  } else {
    message.innerText = "Не корректный формат почты";
    message.style.display = "block";
    document.getElementById("email").style.borderColor = "red";
    return valid;
  }
}