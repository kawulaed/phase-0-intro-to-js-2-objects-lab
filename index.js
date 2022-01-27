// Write your solution in this file!
const employee = {
    name: "Evan",
    streetAddress: "216 cherry st"
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newobj = {...employee}
    newobj[key]  = value;
    return newobj
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
    const employeecp = {...employee};
    delete employeecp[key]
    return employeecp
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee
}