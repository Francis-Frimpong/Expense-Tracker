const formField = document.querySelector("#form-field");
const addButton = document.querySelector(".add-btn");
const displayMessage = document.querySelector(".display-message");
let displayData = document.querySelector(".display-data");
let cut = document.querySelector(".delete-btn");
let data = document.querySelector(".data");

let nameField = document.querySelector("#name");
let amountField = document.querySelector("#amount");
let dateField = document.querySelector("#date");

// let value = {
//   nameField: nameField.value,
//   dateField: dateField.value,
//   amountField: amountField.value,
//};

// let list = [];
// list.push(value);
// console.log(list);
//Creating a clickable button functionality
addButton.addEventListener("click", () => {
  tableList();
});

// cut.addEventListener("click", () => {
//   //   deleteList();
//   console.log("clicked");
// });

function tableList() {
  displayData.innerHTML += `
        <tr class = "data">
            <td>${nameField.value}</td>
            <td>${dateField.value}</td>
            <td>${amountField.value}</td>
            
        </tr>
            
        <br/>
        `;
}
