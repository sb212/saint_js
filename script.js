function firstfocus()
{
    document.getElementById("userid").focus();
}
function userid_validation(x,y){
	if (document.getElementById("userid").value.length == 0) {
	console.log ("User ID should not be empty") 
	}
}

function passid_validation(x,y) {
	if (document.getElementById("passid").value.length == 0) {
		console.log ("User password should not be empty!") 
	}
}

function allLetter() {

   var letters = /^[A-Za-z]+$/;  
   var skrilla = document.getElementById("username").value;
   if(skrilla.match(letters))
   {
      return true;  
   }  
   else 
   {  
     console.log ("User’s name should have alphabet characters only!");  
     return false;  
    }  
  }  
  function ValidateEmail(){

  	var email = /\S+@\S+\.\S+/;
  	var personsemail = document.getElementById("email").value;
  	if (personsemail.match(email))
  	{
  		return true
  	}
  	else
  	{
  		console.log("You have entered an invalid email format!");
  		return false;
  	}
  }
