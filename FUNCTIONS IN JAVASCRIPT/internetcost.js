// calculate intercost
function calculatedatabundlecost(numbundles, bundleprice =50000){
    //calculate total cost by multiplying the number of bundles by the bundle price
    let totalcost =numbundles * bundleprice;
    //return the total cost
    return totalcost;
}
//callfunction
console.log(calculatedatabundlecost(4));
console.log(calculatedatabundlecost(5));