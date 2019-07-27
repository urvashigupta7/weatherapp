var request=require('request');
const url="https://api.darksky.net/forecast/bcd8555dafcf54e340fd8b6830ebeec2/37.8267,-122.4233";
const geocode=require("./utils/geocode");
const forecast=require("./utils/forecast");
const express=require('express');
const app=express();
const ejs=require('ejs');
app.use(express.static('public'));

app.get('/',(req,res)=>
	   {
	res.render('index.ejs');
});
app.get('/weather',(req,res)=>
	   {
	if(!req.query.address)
		{
			return res.send({error:"You must provide an address"});
		}
	geocode(req.query.address,(error,data)=>
	   {
	if(error){
	return res.send({error});
	}
	forecast(data,(error,forecastdata)=>
			{
		if(error)
			{
		   return   res.send({error});
			}
		res.send({forecastdata:forecastdata,location:data.location});
		
		
	});
});
	
});
app.listen(process.env.PORT||3000,process.env.IP,()=>{
	console.log('server has started');
});