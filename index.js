// Initialize a unique identifier for each row
let id = 0;

// Retrieve the table element from the HTML
let table = document.getElementById('table');

// Add an event listener to the 'New Employee' button
document.getElementById('new-employee').addEventListener('click', (event) => {
  event.preventDefault()
  // Retrieve input values for new employee
  let firstName = document.getElementById('first-name').value;
  let lastName = document.getElementById('last-name').value;
  let zipCode = document.getElementById('zip-code').value;

  // Insert a new row at index 1 (below the header row)
  let row = table.insertRow(1); // Start inserting rows from index 1 to keep header row at 0

  // Set a unique identifier as the row's id attribute
  row.setAttribute('id', `item-${id}`);

  // Populate the new row with cells containing employee information
  row.insertCell(0).innerHTML = firstName; // First cell: First Name
  row.insertCell(1).innerHTML = lastName; // Second cell: Last Name
  row.insertCell(2).innerHTML = zipCode; // Third cell: Zip Code

  // Increment the id for the next row
  id++;

  // Clear input fields after adding an employee
  document.getElementById('first-name').value = '';
  document.getElementById('last-name').value = '';
  document.getElementById('zip-code').value = '';
});

// Append the table to the end of the document body
document.body.append(table);

