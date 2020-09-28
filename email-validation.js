function emailValidation(){

	var email = document.myForm.email.value;
	
		var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
		if (email.match(pattern)) {
				
		}
		else{
		
		alert("Enter Valid Email");
		return false;
		}

	return true;	
	}