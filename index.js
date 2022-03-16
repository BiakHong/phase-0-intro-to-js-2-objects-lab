// Write your solution in this file!
const employee = {
    name: "value1",
    address: "value2",
  };
  function updateEmployeeWithKeyAndValue(employee, key, value){
    const updatedEmployee = {...employee};
    updatedEmployee[key] = value;
    return updatedEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
  //const dUpdated = {...employee};
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key){
  const dltedEmployee = {...employee};
  delete dltedEmployee[key];
   return dltedEmployee;

}
function destructivelyDeleteFromEmployeeByKey(employee, key){
  delete employee[key];
  return employee;

}