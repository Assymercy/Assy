// countdown
function countdown(num){
    //if num is 0, stop the recursion
    if (num == 0){
        console.log(num);
    } else {
        //print current number and call the function num -1
        console.log(num);
        countdown(num -1);
    }
}
//call function
countdown(15);