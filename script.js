function check(){
	var username = document.getElementById("username").value ;
		var password = document.getElementById("password").value ;
	
	
	if(username==password)
	{
		alert(successfull login);
	}
else{
	alert(fill all blanks);
}
}