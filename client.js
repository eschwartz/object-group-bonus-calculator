const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

$(document).ready(onReady);


function onReady() {
  // Loop through employees array
  for (let employee of employees) {
    console.log('Looping....', employee);
    let result = calculateBonus(employee);
    console.log('result is', result);

    // Find employeeList <ul> element
    let employeeList = $('#employeeList');
    console.log(employeeList);

    // Render employee info in <li>
    let employeeHtml = '<li>' + employee.name + ', ' + employee.annualSalary + ', ' + result.totalBonus + '</li>';
    // add <li> to DOM
    employeeList.append(employeeHtml);
  }
}



// THE MEGA FUNCTION
function calculateBonus(employee) {
  // Calculate the bonus
  let bonusPercentage;
  if (employee.reviewRating <= 2) {
    bonusPercentage = 0;
  }
  else if (employee.reviewRating === 3) {
    bonusPercentage = 4
  }
  else if (employee.reviewRating === 4) {
    bonusPercentage = 6
  }
  else if (employee.reviewRating === 5) {
    bonusPercentage = 10
  }
  else {
    console.log("WARNING WARNING unexpected reviewRating", employee)
  }

  console.log('bonus based on rating', employee.name, employee.reviewRating, bonusPercentage);

  // Extra bonus if employee number is 4 digits long
  if (employee.employeeNumber.length === 4) {
    bonusPercentage += 5;
    console.log(employee.name, " has seniority, +5%", bonusPercentage);
  }

  // Deduct 1% for top earners
  if (employee.annualSalary > 65000) {
    bonusPercentage -= 1;
    console.log(employee.name, " makes too much, -1%", bonusPercentage);
  }

  // Min / max bonus (13%/0%)
  if (bonusPercentage > 13) {
    bonusPercentage = 13;
    console.log("reset to 13", bonusPercentage);
  }
  if (bonusPercentage < 0) {
    bonusPercentage = 0;
    console.log("reset to 0", bonusPercentage);
  }

  // Calculate bonus dollar amount
  let totalBonus = employee.annualSalary * (bonusPercentage / 100);
  console.log('total bonus', totalBonus);

  // Calculate total compensation
  let totalCompensation = totalBonus + Number(employee.annualSalary);
  console.log('total comp', totalCompensation);


  // Return bonus information
  return {
    name: employee.name,              
    bonusPercentage: bonusPercentage, 
    totalCompensation: totalCompensation,
    totalBonus: totalBonus          
  }; 
}