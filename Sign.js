function signup(){
    const form=document.getElementById("form");
    const username=document.getElementById("username");
    const email=document.getElementById("email");
    var small=document.getElementById("small") ;
  small.innerHTML="please enter your full name";
  small1.innerHTML="please enter your email address";
  small.style.color="red";
  small1.style.color="red";
  username.style.border=" 1px solid red";
  email.style.border="1px solid red";
}


//  form.addEventListener("submit", (event) {
//      event.preventDefault();
//     Validate();

// })
// function Validate(){
//     const usernameValue = username.value.trim();
//     const emailValue = email.value.trim();
// if( usernameValue==""){

//     setErrorFor(username,"username can't be blank");
// }

// }