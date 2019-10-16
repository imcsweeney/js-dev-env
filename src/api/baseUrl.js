/*
contains logic that points the api to either our mock api or the real api that's getting serve by express
*/
export default function getBaseUrl(){
  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : 'https://shielded-journey-57118.herokuapp.com/';
}

//http://localhost:3000/?useMockApi=true
//TODO earier ways to get this done using jQuery
function getQueryStringParameterByName(name, url){
  if(!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if(!results) return null;
  if(!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
