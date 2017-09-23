function load_checks()
{
	var humidity=document.getElementById("humidity").innerHTML;
	var temperature=document.getElementById("temperature").innerHTML;
	

	humidity=humidity.substring(0,2);
	temperature=temperature.substring(0,2);
	//DI = Tα – 0,55 (1 – 0,01 RH) (Tα – 14,5) 
	var distress=temperature-0.55*(1-0.01*humidity)*(temperature-14.5);
	//console.log(humidity);
	if(distress<21)
	{
		document.getElementById("hum_text").innerHTML="No distress";
	}
	else if(distress>=21 && distress<24)
	{
		//console.log(humidity);
		document.getElementById("hum_text").innerHTML="> 50% of population feels distress";
	}
	else if(distress>=24 && distress<27)
	{
		//console.log(humidity);
		document.getElementById("hum_text").innerHTML="< 50% of population feels distress";
	}
	else if(distress>=27 && distress<29)
	{
		//console.log(humidity);
		document.getElementById("hum_text").innerHTML="The major part of population feels distress";
	}
	else if(distress>=29 && distress<32)
	{
		//console.log(humidity);
		document.getElementById("hum_text").innerHTML="Everyone feels distress";
	}
	else if(distress>=32)
	{
		document.getElementById("hum_text").innerHTML="Increased awareness in hospitals ";	
	}
	if(humidity>=85)		
	{
		//console.log(humidity);
		document.getElementById("temp_text").innerHTML="The humidity is not recommmended for astro-observation";
	}
	else
	{
		document.getElementById("temp_text").innerHTML="The sky is clear, you can have some astro-observation tonight";
	}
}
