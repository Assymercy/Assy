//calculate average water usage
function callculateaveragewaterusage(waterusagedata){
// initialisze varriable to store total water usage and number of days
let totalwaterusage =0;
let numdays = 0;
//loop through the water usage data for each day of the week.
for (let day of waterusagedata){
    //add the water usage for the current day to total water usage
    totalwaterusage += day.waterusage;
    numdays++;
}
//calculate the average daily water usage
let averagewaterusage=totalwaterusage / numdays;
//return average daily water usage
return averagewaterusage;
}
//call function
const waterusagedata =[
    {waterusage: 50},
    {waterusage: 60},
    {waterusage: 70},
    {waterusage: 80},
    {waterusage: 50},
    {waterusage: 40},
    {waterusage: 30}
];
//out put
console.log(callculateaveragewaterusage(waterusagedata));