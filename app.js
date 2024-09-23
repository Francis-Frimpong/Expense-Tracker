const addButton = document.querySelector(".add-btn");
const displayMessage = document.querySelector(".display-message");

// let data = document.querySelector('.data');



function add(e) {
  e.preventDefault();
  
  let nameField = document.getElementById("name").value;
  let amountField = document.getElementById("amount").value;
  let dateField = document.getElementById("date").value;
  
  if(!nameField || !amountField || !dateField) return;

  const tableRow = document.createElement('tr');
  tableRow.classList.add('data')
  
  const td = document.createElement('td');
  td.textContent = nameField;
  const td2 = document.createElement('td');
  td2.textContent = dateField;
  const td3 = document.createElement('td');
  td3.textContent = amountField;
  
  const td4 = document.createElement('td')
  td4.classList.add('delete-btn');
  const button = document.createElement('button')
  button.classList.add('delete');
  button.textContent = 'delete';

  td4.appendChild(button);

  tableRow.appendChild(td);
  tableRow.appendChild(td2);
  tableRow.appendChild(td3);
  tableRow.appendChild(td4);

  document.querySelector('.list-item').appendChild(tableRow);
}


function deleteItem (e) {
  if (e.target.classList.contains('delete')){
    e.target.parentElement.parentElement.remove()
  }
}


//Creating a clickable button functionality
addButton.addEventListener("click", add);

let clearField = () => formField.reset();

document.querySelector('.list-item').addEventListener('click', deleteItem)