var request=require('request');
const forecast=(data,callback)=>
{
	const url='https://api.darksky.net/forecast/bcd8555dafcf54e340fd8b6830ebeec2/'+data.latitude +','+data.longitude+'?units=si';
	request({url:url,json:true},(error,response)=>
		   {
		if(error)
			{
				callback('unable to connect to weather service',undefined);
			}
		else if(response.body.error)
			{
				callback('unable to find location',undefined);
			}
		else{
			callback(undefined,response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature +  ' degress out. There is a ' + response.body.currently.precipProbability*100 + '% chance of rain.');
		}
	});
	
};
module.exports=forecast;