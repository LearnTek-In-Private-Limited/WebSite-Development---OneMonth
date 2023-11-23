const form=document.getElementById(" forms");
const username=document.getElementById(" username");
const email=document.getElementById(" email");
const password=document.getElementById("Password ");
const confirmpassword=document.getElementById("confirmpassword");


form.addEventListener('submit',e =>{
   e.preventDefault;
   checkInput();
});

function checkInput(){
    const usernameValue=username.value.trim();
    const emailValue= email.value.trim();
const passwordValue=Password.value.trim() ;
const confirmpasswordValue=confirmpassword.value.trim();

   /*  condition */
   if(usernameValue === ''){
   setError(username,'cannot be empty');
   }
   else{
    setSucess(username);
   }

   if(emailValue === ''){
   setError(email,'Email cannot be empty');

   }
   else if(!isEmail(emailValue)) {
    setError(email,'Not a valid Email');
   }
   else{
    setSucess(email);
   }


   if(passwordValue === ''){
    setError(password,'password cannot be empty');
    }
    else{
     setSucess(password);
    }
    
    if(confirmpasswordValue === ''){
        setError(confirmpassword,'confirmpassword cannot be empty');
        }
    else if(confirmpasswordValue !== passwordValue){
            setError(confirmpassword,'confirmpassword does not match');
            }
    else{
         setSucess(confirmpassword);
        }
        

}
function setError(input,message){
const formcontrol=input.parentElement;
const small=formcontrol.querySelector('small');
formcontrol.ClassName='formcontrol error';
small.innerText=message;

}
function isEmail(){
    return     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

}