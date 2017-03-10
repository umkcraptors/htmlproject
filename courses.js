
function saveForm()
{
	var ground1 = {name:"rama", course:"html", day:"15", tc :"WEB", radioCompleted:"yes"};
	x=document.calc.name.value;
	y=document.calc.course.value;
	z=document.calc.day.value;
	p=document.calc.tc.options[1].selected;
	q=document.calc.radioCompleted[0].checked;

if( ground1[0] == x && ground1[1] == y && ground1[2] == z && ground1[3] == p && ground1[4] == q  )
	{
		var text="";
		
		
	for (var  k in ground1)
		{
			text += ground1[k];
			document.getElementById("output").value=text;
		alert (text);
		}
		
		alert("Please enter correct details");
	
}
}

function clearForm() {
	document.getElementById("ROW").reset();
}