function validation()
{
	var firstname=document.registration.fname;
	var lastname=document.registration.lname;
	var gendername=document.registration.gname;
	var mnum=document.registration.number;

	if(allLettername(firstname))
	{
		if(allLetterlast(lname))
		{
			if(genderselect(gname))
			{
				if(Mobile(number))
					{
					}
			}
		}
	}
	return false;

}	

function allLettername(firstname)
{ 
	var letters = /^[A-Za-z]+$/;
	if(firstname.value.length==0)
	{
		alert('Please enter first name');
		firstname.focus();
		return false;
	}

	else if(firstname.value.match(letters))
	{
		return true;
		
	}
	else
	{
		alert('First name must have alphabet characters only');
		firstname.focus();
		return false;
	}
}

function allLetterlast(lname)
{ 
	var letters = /^[A-Za-z]+$/;
	if(lname.value.length==0)
	{
		alert('Please enter last name');
		lname.focus();
		return false;
	}
	else if(lname.value.match(letters))
	{
		return true;
		
	}
	else
	{
		alert('last name must have alphabet characters only');
		lname.focus();
		return false;
		
	}
}



function Mobile(number)
{ 
	var numbers = /^[0-9]+$/;
	if(number.value.length==0 )
	{
		alert('Please enter contact number');
		number.focus();
		return false;
	}
	else if(mobilenumber.value.length>10)
	{
		alert('Please enter a valid contact number');
		number.focus();
		return false;

	}
	else if(number.value.match(numbers))
	{
		alert('Form Succesfully Submitted');
		window.location.reload();
		return true;
	}
	else
	{
		alert('Please check your contact number');
		return false;
	}
}
