import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getUsers(){ //the only public function
  return get('users');
}

export function deleteUser(id){
  return del(`users/${id}`);
}

function get(url){
  return fetch(baseUrl + url).then(onSuccess, onError);
}

//cannot call this delete, as it is a reserved string in java script
function del(url){
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  });
  return fetch(request).then(onSuccess, onError);
}

function onSuccess(response){
  return response.json();
}

function onError(error){
  console.log(error); //eslint-disable-line no-console
}
