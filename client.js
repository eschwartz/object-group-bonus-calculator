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


// Loop through employees array
for (let employee of employees) {
  console.log('Looping....', employee);
  let result = bonusCalculation(employee);
  console.log('result is', result);
}

// THE MEGA FUNCTION
function bonusCalculation(employee) {
  // Calculate the bonus
  let bonus;
  if (employee.reviewRating <= 2) {
    bonus = 0;
  }
  else if (employee.reviewRating === 3) {
    bonus = 4
  }
  else if (employee.reviewRating === 4) {
    bonus = 6
  }
  else if (employee.reviewRating === 5) {
    bonus = 10
  }
  else {
    console.log("WARNING WARNING unexpected reviewRating", employee)
  }

  console.log('bonus based on rating', employee.name, employee.reviewRating, bonus);

  // Extra bonus if employee number is 4 digits long
  if (employee.employeeNumber.length === 4) {
    bonus += 5;
    console.log(employee.name, " has seniority, +5%", bonus);
  }

  // Deduct 1% for top earners
  if (employee.annualSalary > 65000) {
    bonus -= 1;
    console.log(employee.name, " makes too much, -1%", bonus);
  }

  // Min / max bonus (13%/0%)
  if (bonus > 13) {
    bonus = 13;
    console.log("reset to 13", bonus);
  }
  if (bonus < 0) {
    bonus = 0;
    console.log("reset to 0", bonus);
  }


  // PLACEHOLDER
  // "STUB"
  return {
    name: null,               // TODO
    bonusPercentage: null,    // TODO
    totalCompensation: null,  // TODO
    totalBonus: null          // TODO
  }; /// TODO
}