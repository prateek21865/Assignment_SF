"use strict";
var _a, _b;
class User {
    constructor(firstName, email, role, createdOn, phoneNumber, middleName, lastName, address, modifiedOn) {
        this.firstName = firstName;
        this.email = email;
        this.role = role;
        this.createdOn = createdOn;
        this.phoneNumber = phoneNumber;
        this.middleName = middleName;
        this.lastName = lastName;
        this.address = address;
        this.modifiedOn = modifiedOn;
    }
}
const users = [
    new User("Prateek", "prateek.singh@sourcefuse.com", "Intern", new Date('2024-07-12'), "9625366966", "", "Singh", "Noida"),
    new User("Abhi", "abhi21865@gmail.com", "Sr. Software Engineer", new Date('2024-07-12'), "95986673669", "Pratap", "Singh", "Mohali"),
];
(_a = document.getElementById('load-data-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    const table = document.getElementById('user-table');
    const loadButton = document.getElementById('load-data-btn');
    const addButton = document.getElementById('add-data-btn');
    table.style.display = 'table';
    addButton.style.display = 'inline-block';
    loadButton.textContent = 'Refresh data';
    populateTable();
});
(_b = document.getElementById('add-data-btn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
    addNewRow();
});
function populateTable() {
    const tbody = document.querySelector('#user-table tbody');
    tbody.innerHTML = '';
    users.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.firstName}</td>
            <td>${user.middleName || ''}</td>
            <td>${user.lastName || ''}</td>
            <td>${user.email}</td>
            <td>${user.phoneNumber}</td>
            <td>${user.role}</td>
            <td>${user.address || ''}</td>
            <td>${user.createdOn.toLocaleDateString()}</td>
            <td>${user.modifiedOn ? user.modifiedOn.toLocaleDateString() : ''}</td>
            <td>
                <button onclick="editRow(${index})">Edit</button>
                <button onclick="deleteRow(${index})">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}
window.editRow = (index) => {
    const tbody = document.querySelector('#user-table tbody');
    const row = tbody.children[index];
    row.innerHTML = `
        <td><input type="text" value="${users[index].firstName}" id="firstName-${index}" required></td>
        <td><input type="text" value="${users[index].middleName || ''}" id="middleName-${index}"></td>
        <td><input type="text" value="${users[index].lastName || ''}" id="lastName-${index}"></td>
        <td><input type="email" value="${users[index].email}" id="email-${index}" required></td>
        <td><input type="text" value="${users[index].phoneNumber}" id="phoneNumber-${index}" required></td>
        <td><input type="text" value="${users[index].role}" id="role-${index}" required></td>
        <td><input type="text" value="${users[index].address || ''}" id="address-${index}"></td>
        <td>${users[index].createdOn.toLocaleDateString()}</td>
        <td>${users[index].modifiedOn ? users[index].modifiedOn.toLocaleDateString() : ''}</td>
        <td>
            <button onclick="saveRow(${index})">Save</button>
            <button onclick="cancelEdit(${index})">Cancel</button>
        </td>
    `;
};
window.saveRow = (index) => {
    const firstName = document.getElementById(`firstName-${index}`).value;
    const middleName = document.getElementById(`middleName-${index}`).value;
    const lastName = document.getElementById(`lastName-${index}`).value;
    const email = document.getElementById(`email-${index}`).value;
    const phoneNumber = document.getElementById(`phoneNumber-${index}`).value;
    const role = document.getElementById(`role-${index}`).value;
    const address = document.getElementById(`address-${index}`).value;
    users[index] = new User(firstName, email, role, users[index].createdOn, middleName, lastName, phoneNumber, address, new Date());
    populateTable();
};
window.cancelEdit = (index) => {
    populateTable();
};
window.deleteRow = (index) => {
    users.splice(index, 1);
    populateTable();
};
function addNewRow() {
    const tbody = document.querySelector('#user-table tbody');
    const row = document.createElement('tr');
    const index = users.length;
    row.innerHTML = `
        <td><input type="text" id="new-firstName" required></td>
        <td><input type="text" id="new-middleName"></td>
        <td><input type="text" id="new-lastName"></td>
        <td><input type="email" id="new-email" required></td>
        <td><input type="text" id="new-phoneNumber" required></td>
        <td><input type="text" id="new-role" required></td>
        <td><input type="text" id="new-address"></td>
        <td>${new Date().toLocaleDateString()}</td>
        <td></td>
        <td>
            <button onclick="saveNewRow()">Save</button>
            <button onclick="cancelNewRow()">Cancel</button>
        </td>
    `;
    tbody.appendChild(row);
}
window.saveNewRow = () => {
    const firstName = document.getElementById('new-firstName').value;
    const middleName = document.getElementById('new-middleName').value;
    const lastName = document.getElementById('new-lastName').value;
    const email = document.getElementById('new-email').value;
    const phoneNumber = document.getElementById('new-phoneNumber').value;
    const role = document.getElementById('new-role').value;
    const address = document.getElementById('new-address').value;
    users.push(new User(firstName, email, role, new Date(), middleName, lastName, phoneNumber, address));
    populateTable();
};
window.cancelNewRow = () => {
    populateTable();
};
