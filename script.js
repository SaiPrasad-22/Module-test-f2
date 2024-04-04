const employeeForm = document.getElementById('employee-form');
const nameInput = document.getElementById('name');
const professionInput = document.getElementById('profession');
const ageInput = document.getElementById('age');
const employeesDiv = document.getElementById('employees');
const messagesDiv = document.getElementById('messages');

let employees = [];

function addEmployee(event) {
  event.preventDefault();

  if (!nameInput.value || !professionInput.value || !ageInput.value) {
    messagesDiv.innerHTML = '<p class="error">Please fill in all the fields.</p>';
    return;
  }

  const id = Date.now();
  const employee = { id, name: nameInput.value, profession: professionInput.value, age: parseInt(ageInput.value) };
  employees.push(employee);

  messagesDiv.innerHTML = '<p class="success">Employee added successfully.</p>';
  renderEmployees();

  nameInput.value = '';
  professionInput.value = '';
  ageInput.value = '';
}

function deleteEmployee(id) {
  employees = employees.filter(employee => employee.id!== id);
  renderEmployees();
}

function renderEmployees() {
  employeesDiv.innerHTML = '';

  for (const employee of employees) {
    const employeeDiv = document.createElement('div');
    employeeDiv.classList.add('employee');
    employeeDiv.innerHTML = `
      <p>Name: ${employee.name}</p>
      <p>Profession: ${employee.profession}</p>
      <p>Age: ${employee.age}</p>
      <button onclick="deleteEmployee(${employee.id})">Delete</button>
    `;
    employeesDiv.appendChild(employeeDiv);
  }
}

employeeForm.addEventListener('submit', addEmployee);