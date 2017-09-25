function load_checks()
{
	var humidity=document.getElementById("humidity").innerHTML;
	var temperature=document.getElementById("temperature").innerHTML;
	

	humidity=humidity.substring(0,2);
	temperature=temperature.substring(0,2);
	//DI = Tα – 0,55 (1 – 0,01 RH) (Tα – 14,5) 
	//These checks are taken from http://www.airlab.edu.gr/index.php?option=com_content&view=article&id=73&Itemid=107&lang=en
	var distress=temperature-0.55*(1-0.01*humidity)*(temperature-14.5);
	//console.log(humidity);
	if(distress<21)
	{
		document.getElementById("hum_text").innerHTML="Κανένα πρόβλημα";
	}
	else if(distress>=21 && distress<24)
	{
		//console.log(humidity);
		document.getElementById("hum_text").innerHTML="> 50% του πληθυσμού αισθάνεται δυσφορία";
	}
	else if(distress>=24 && distress<27)
	{
		//console.log(humidity);
		document.getElementById("hum_text").innerHTML="< 50% του πληθυσμού αισθάνεται δυσφορία";
	}
	else if(distress>=27 && distress<29)
	{
		//console.log(humidity);
		document.getElementById("hum_text").innerHTML="Το μεγαλύτερο μέρος του πληθυσμού αισθάνεται δυσφορία";
	}
	else if(distress>=29 && distress<32)
	{
		//console.log(humidity);
		document.getElementById("hum_text").innerHTML="Όλοι αισθάνονται δυσφορία";
	}
	else if(distress>=32)
	{
		document.getElementById("hum_text").innerHTML="Αυξημένη ευαισθητοποίηση στα νοσοκομεία";	
	}
	if(humidity>=85)		
	{
		//console.log(humidity);
		document.getElementById("temp_text").innerHTML="Η υγρασία δεν συνιστάται για αστροπαρατήρηση";
	}
	else
	{
		document.getElementById("temp_text").innerHTML="Ο ουρανός είναι καθαρός, μπορείτε να κανέτε αστρο-παρατήρηση απόψε";
	}
}
