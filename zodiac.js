function show(){
var zod_signs = ["Capricorn" , "Aquarius", "Pisces", "Aries",
"Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio",
"Sagittarius"];
var day = document.calc.day.value;
var month = document.calc.month.value;
var zodiacsign;


    if(document.calc.Name.value == "" )
    {
        alert("Please fill the name !");
        return false;
    } 
	
	
	    if(document.calc.day.value == "" )
    {
        alert("Please fill the valid day !");
        return false;
    } 
	
	    if(document.calc.month.value == "" )
    {
        alert("Please fill the valid month !");
        return false;
    } 

switch(month)
{
	case '1': {//January
			 if(day < 20)
		 		zodiacsign = zod_signs[0];
			 else
		 		zodiacsign = zod_signs[1];
		    }break;
	case '2': {//February
			 if(day < 19)
		 		zodiacsign = zod_signs[1];
			 else
		 		zodiacsign = zod_signs[2];
			}break;
	case '3': {//March
			 if(day < 21)
			 	zodiacsign = zod_signs[2];
			 else
			 	zodiacsign = zod_signs[3];
			}break;
	case '4': {//April
			 if(day < 20)
		 		zodiacsign = zod_signs[3];
			 else
		 		zodiacsign = zod_signs[4];
			}break;
	case '5': {//May
			 if(day < 21)
		 		zodiacsign = zod_signs[4];
			 else
		 		zodiacsign = zod_signs[5];
			}break;
	case '6': {//June
			 if(day < 21)
		 		zodiacsign = zod_signs[5];
			 else
		 		zodiacsign = zod_signs[6];
			}break;
	case '7': {//July
			 if(day < 23)
		 		zodiacsign = zod_signs[6];
			 else
		 		zodiacsign = zod_signs[7];
			}break;
 	case '8': {//August
			 if(day < 23)
		 		zodiacsign = zod_signs[7];
			 else
		 		zodiacsign = zod_signs[8];
			}break;
	case '9': {//September
			 if(day < 23)
		 		zodiacsign = zod_signs[8];
			 else
		 		zodiacsign = zod_signs[9];
			}break;
	case '10': {//October
			 if(day < 23)
		 		zodiacsign = zod_signs[9];
			 else
		 		zodiacsign= zod_signs[10];
			}break;
	case '11': {//November
			 if(day < 22)
		 		zodiacsign = zod_signs[10];
			 else
		 		zodiacsign = zod_signs[11];
			}break;
	case '12': {//December
			 if(day < 22)
		 		zodiacsign = zod_signs[11];
			 else
		 		zodiacsign= zod_signs[0];
			}break;
 }
 
 document.calc.zodiac.value=zodiacsign;
 
 }
 
 
 function clearForm(){
document.getElementById("ROW").reset();
 }