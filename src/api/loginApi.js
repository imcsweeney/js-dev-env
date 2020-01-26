import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

const form = document.querySelector('form');
export function login(){
  return fetch(baseUrl, {
      method: 'POST',
      body: new FormData(form)
  })
  .then(onSuccess, onError);
}

function onSuccess(response){
  return response.json();
}

function onError(error){
  console.log(error); //eslint-disable-line no-console
}
