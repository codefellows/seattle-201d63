'use strict';

// Goal: make it so that I can create people object instance from a form

// global array to store all object instances

// constructor function
  // name
  // story
  // freetime
  // push into array

// listen for when the form is submitted - LISTENER
// function that will handle the submit - HANDLER
  // get all the information from the form
    // name
    // story

  // use that information to make a new object instance

////////////////////////////////////////////////////////

// select the element that I am listening on
var form = document.getElementById('form');
var allPeople = [];

function Person(name, story){
  this.name = name;
  this.story = story;

  allPeople.push(this);
}

// set up event handler
function handleFormSubmit(event){
  event.preventDefault();

  var name = event.target.bananas.value;
  var story = event.target.story.value;
  
  new Person(name, story);
}

// set up my event listenter
  // element.addEventListener('event', callbackFunction)
  // addEventListener takes 2 parameters
    //1. the event
    //2. the function that we want to run when we hear the event
form.addEventListener('submit', handleFormSubmit);