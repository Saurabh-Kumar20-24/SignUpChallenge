let email=document.getElementById("Email")
let password=document.getElementById("Password")
let isValidEmail=false;
let isValidPass=false;

email.addEventListener("input",()=>{
    let val=email.value;
    let length=val.length;
    if(val===""){
        errorMessage("","clear");
    }else
    if((!val.includes("@")) || (!val.includes(".")) || length<3){
       errorMessage("Make sure email is more than 3 characters and has @ and a .","danger");          
    }else{
        errorMessage("","clear")
    }

    showSuccess();
})
function errorMessage(text,type){
    let emailErr=document.getElementById("emailError");
    if(type=="clear"){
        emailErr.textContent="";
        isValidEmail=true;
    }else{
        emailErr.textContent=text;
        emailErr.className="text-"+type;
        isValidEmail=false;
    }
}


password.addEventListener("input",()=>{
    let pass=password.value;
    if(pass===""){
        passErr("","clear");
    }else
    if(pass.length<8){
        passErr("Make sure that password should be greater than 8","danger");
    }else{
        passErr("","clear")
    }

    showSuccess();
})
function passErr(text,type){
    let passErr=document.getElementById("passError");
    if(type=="clear"){
        passErr.textContent="";
        isValidPass=true;
    }else{
        passErr.textContent=text;
        passErr.className="text-"+type;
        isValidPass=false;
    }
}

function showSuccess(){
    if(isValidPass && isValidEmail){
        document.getElementById("clearDiv").textContent="All good to go!"
    }else{
        document.getElementById("clearDiv").textContent=""
    }
}

function handleSubmit(){
    let confirmMsg= confirm("Are you sure you want to submit?")
    if(confirmMsg){
        alert("Successfully submitted!");
    }else{
        email.textContent="";
        password.textContent="";
    }
}
