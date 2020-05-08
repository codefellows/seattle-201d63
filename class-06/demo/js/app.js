// Goal: add details about the pets to the DOM via the js file


// make an object literal for each animal with details
var cookie = {
  name: 'Cookie',
  hairColor: 'brown',
  sheds: true,
  render: function(){

    // select a DOM parent element
    var parent = document.getElementById('cookie');

    // create a DOM li element
    var listItem = document.createElement('li');

    // give that DOM element content
    listItem.textContent = this.name;

    // append it to the parent element
    parent.appendChild(listItem);

  }
};

var tangerine = {
  name: 'Tangerine',
  hairColor: ['orange', 'white'],
  sheds: true,
  render: function(){
    var parent = document.getElementById('tangerine');
    var listItem = document.createElement('li');
    listItem.textContent = this.name;
    parent.appendChild(listItem);
  }
};

var malaki = {
  name: 'Malaki',
  hairColor: ['orange', 'white'],
  sheds: false,
  render: function(){
    
  }
};

cookie.render();
tangerine.render();
