//calculate profit
function calclateprofit(sellingprice, costprice,numunitssold){
    //caculate the total revenue by multiplying the sellingprice by the number of units sold
    let totalrevenue = sellingprice * numunitssold;
    //calcute the total cost by multiplying the cost price by the numder of units
    let totalcost = costprice * numunitssold;
    //calculate the profit by subtraucting totalcost from the totalrevenue
    let profit = totalrevenue - totalcost;
    //return prfit
    return profit;
}
//call function
console.log(calclateprofit(5000,3000,100));