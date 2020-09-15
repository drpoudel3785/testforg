function singUp(){
//alert("Form Submitted");
var uname = document.signup.username.value;
var upass = document.signup.password.value;
var uemail = document.signup.email.value;
var filter = /^([a-zA-Z])+$/;
var validuname = uname.match(filter);
var passfilter = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
var validpassword = upass.match(passfilter);
var emailfilter = /^\w+[\w-+\.]*\@\w+([-\.]\w+)*\.[a-zA-Z]{2,}$/ ;
//var posat = indexOf("@", uemail);
//var posdot = lastIndexOf(".", uemail)
var validuemail= uemail.match(emailfilter);
if(uname == "" && upass == "" && uemail == "")
{
    document.getElementById("signUpError").innerHTML = "All Fields are required";
    document.signup.username.focus();
    return false;
}
else if(uname == "" || validuname ==  null)
{
    document.getElementById("signUpError").innerHTML = "Username is Required and its must be Characters only";
    document.signup.username.focus();
    return false; 
}
else if(upass == ""  || validpassword == null)
{
    document.getElementById("signUpError").innerHTML = "Password is Required and it must Contain Complex Password between 6 to 16 Character";
    document.signup.password.focus();
    return false;
}
else if(uemail == "" ||  validuemail == null)
{
    document.getElementById("signUpError").innerHTML = "Email is Required it must be email format";
    document.signup.email.focus();
    return false;
}
else {
    document.getElementById("signUpError").innerHTML = "Everything is okay";
    return false;
}

    return true;
}