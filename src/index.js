import './index.css';

import {getUsers, deleteUser} from './api/userApi';

// populate table of users via API call
getUsers().then(result => {
  let usersBody = "";
  //in real life we'd uses a framework - eg REACT
  result.forEach(user => {
    usersBody += `
      <tr>
        <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
      </tr>
    `
  });
  global.document.getElementById('users').innerHTML = usersBody;

  const deleteLinks = global.document.getElementsByClassName('deleteUser');

  //must use array.from to create a real array from a dom collection
  //getElementsByClassName only returns an "array-like" object

  Array.from(deleteLinks, link => {
    link.onclick = function(event){
        const element = event.target;
        event.preventDefault(); //prevents the click from making a change to the url
        deleteUser(element.attributes["data-id"].value); //delete the user using the api
        const row = element.parentNode.parentNode; 
        row.parentNode.removeChild(row); //delete the row on the ui
    };
  });
});



