var form=document.querySelector('form');
var message1=document.querySelector('#message1');
var message2=document.querySelector('#message2');

form.addEventListener('submit',(e)=>
					   {
	e.preventDefault();
	var search=document.querySelector('.search');
var val=search.value;
	message1.textContent='Loading...';
	message2.textContent='';
	fetch("/weather?address="+val).then((response)=>{
		response.json().then((data)=>
		{
			if(data.error)
				{
					message1.textContent=data.error;
				}
			else
				{
					message2.textContent=data.forecastdata;
					message1.textContent=data.location;
					
					console.log(data.forecastdata);
					console.log(data.location);
				}
		});
	});
	
	
	
});