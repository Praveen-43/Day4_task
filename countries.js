var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload = function(){
var data=JSON.parse(request.response);
console.log(data);
for (var i=0; i<data.length; i++)
{
    
    console.log(`flag: ${data[i].flag}`);
    console.log(`country:${data[i].name}, region:${data[i].region}, subregion:${data[i].subregion}, population:${data[i].population}`)

}
}
// console.log(data[0].capital);
//console.log(data[1].currencies);
// {console.log("country:"+data[i].name +" "+ "capital:"+ data[i].capital); }
//console.log(`name:${data[i].name} lat:${data[i].latlng[0]} lon:${data[i].latlng[1]}`);


