'use strict';

// // box event listener

// var boxEl = document.getElementById('box');
// boxEl.addEventListener('click', handleBoxClick);

// function handleBoxClick(event){
//   console.log('the event', event);
//   console.log('the event.target is ', event.target);
//   console.log('the event.target.textContent ', event.target.textContent);
//   console.log('the event.target.id is ', event.target.id)
// }

// // simple form event listener

// var formEl = document.getElementById('form');
// formEl.addEventListener('submit', handleClick);

// function handleClick(event){
//   // MUST do this if your event is submit
//   event.preventDefault();
  
//   if(event.target.username){
//     console.log('the event.target is ', event.target);
//     console.log('the event.target.username is ', event.target.username);
//     console.log('the event.target.textContent is ', event.target.textContent);
//     console.log('the event.target.username.value is ', event.target.username.value);
//   }
// }

// contact form event listener

var contactFormEl = document.getElementById('contact-form');
contactFormEl.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event){
  event.preventDefault();
  if(event.target){
    console.log('the event.target is ', event.target);
    console.log('the event.target.username is ', event.target.username);
    console.log('the event.target.username.value is ', event.target.username.value);
    console.log('the event.target.pets is ', event.target.pets);
    console.log('the event.target.pets.value is', event.target.pets.value);
    var username = event.target.username.value;
  }
}

