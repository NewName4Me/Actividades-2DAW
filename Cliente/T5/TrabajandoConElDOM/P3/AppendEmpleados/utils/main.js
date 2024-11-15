//#region Imports
import { Empleado, arrEmpleados } from './Empleados.mjs';

//#region Vars
const employeesContainer = document.querySelector('section');
const employeeForm = document.forms.employeeForm;

//#region DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
    loadListOfEmployees();
    employeeForm.addEventListener('submit', addEmployeeToList);
});

//#region Event Add Employee
function addEmployeeToList(e) {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const tlf = e.target.tlf.value.trim();
    const cod = e.target.cod.value.trim();

    if (!validateEmptyInputs([name, tlf, cod])) {
        console.error('Algun apartado esta vacio');
        return;
    }

    const newEmployee = new Empleado(cod, name, tlf);
    arrEmpleados.push(newEmployee);

    loadListOfEmployees();

    employeeForm.reset();
};


//#region Load Employees
/**
 * @returns {HTMLCollection}
*/
function loadListOfEmployees() {
    employeesContainer.innerHTML = ''; // Borro todos los hijos

    arrEmpleados.forEach(employee => {
        const { cod, nombre, tlf } = employee;
        
        const employeeContainer = document.createElement('DIV');
        
        const employeeName = document.createElement('h1');
        const employeeTlf = document.createElement('h3');
        const employeeCod = document.createElement('h3');
        
        employeeName.textContent = nombre;
        employeeTlf.textContent = tlf;
        employeeCod.textContent = cod;
        
        employeeContainer.appendChild(employeeName);
        employeeContainer.appendChild(employeeTlf);
        employeeContainer.appendChild(employeeCod);
        
        employeesContainer.appendChild(employeeContainer);
    });
}


//#region Validate Empty
/**
 * comprueba que todos los datos del formulario esten llenos
 * @param {Array} inputs - lista de datos del formulario 
 * @returns  - true : todos llenos / false: alguno vacio
 */
const validateEmptyInputs = (inputs = []) => inputs.every(input => input !== '');