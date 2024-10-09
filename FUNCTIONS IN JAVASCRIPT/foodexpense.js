//calculate food expense
function calculatefoodexpense(nummeals,costpermeal){
//calclate the total food expense by multiplying number of meals by cost oer meal.
    let totalexpense = nummeals * costpermeal;
//Return the total food expense.
return totalexpense
}
//call function
console .log(calculatefoodexpense(2,4000))