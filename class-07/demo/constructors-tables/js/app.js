// goal: dynamical render a table to the DOM

// select the parent element
var parentElement = document.getElementById('table');

// Make the first row

// create a tr
var tableRow = document.createElement('tr');


var array=['Name', 'Type', 'Color', 'Age'];

for(var i=0; i<array.length; i++){

  // put 'color' on the table
  tableHeader = document.createElement('th');
  tableHeader.textContent = array[i];
  tableRow.appendChild(tableHeader);
  
}
// append the tr to the parent element
parentElement.appendChild(tableRow);

// Make the Second Row

var fluffy = ['fluffy', 'cat', 'white', 1];

// create a tr
tableRow = document.createElement('tr');

for(var i=0; i<fluffy.length; i++){
  // create the element
  var tableData = document.createElement('td');
  // give it content
  tableData.textContent = fluffy[i];
  // append it
  tableRow.appendChild(tableData);
}

// append table row to the parent
parentElement.appendChild(tableRow);