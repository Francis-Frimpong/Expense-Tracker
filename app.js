const formField = document.querySelector("#form-field");
const addButton = document.querySelector(".add-btn");
const displayMessage = document.querySelector(".display-message");
let displayData = document.querySelector(".display-data");
let cut = document.querySelector(".delete-btn");
let data = document.querySelector(".data");

let nameField = document.querySelector("#name");
let amountField = document.querySelector("#amount");
let dateField = document.querySelector("#date");

//Creating a clickable button functionality
addButton.addEventListener("click", (e) => {
  e.preventDefault(formField);
  value.tableList();
  clearField();
});

let deleteBtn = document.querySelector(".delete");
let tBody = document.querySelector(".list-item");

let list = [];

let value = {
  nameField: nameField.value,
  dateField: dateField.value,
  amountField: +amountField.value,
  tableList: function () {
    displayData.innerHTML += `
     <tr class = "data">
                 <td>${value.nameField}</td>
                 <td>${value.dateField}</td>
                 <td>${value.amountField}</td>
                <td class="del-btn"><button class="delete">delete</button></td>


             </tr>

             <br/>
             `;
    list.push(value);

    console.log(list);
  },
};

let clearField = () => formField.reset();
