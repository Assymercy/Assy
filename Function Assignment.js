
function computation(num1,num2,operation){
    if (operation ="add"){
        console.log(`The result of ${num1} + ${num2} is ${num1 +num2}`);
    }else if (operation ="subtract"){
        console.log(`The result of ${num1} - ${num2} is ${num1 -num2}`);
    }else if (operation = "multiply"){
        console.log(`The result of ${num1} * ${num2} is ${num1 * num2}`);
    }else if (operation = "divide"){
        if (num2 = 0){
            console.log(`The result of ${num1} / ${num2} is ${num1/num2}`);
        }else {
            console.log("Error: Division by zero is not allowed");
        }
    }else{
        console.log("Invalid operation. please choose from add,subtract,multiply,or divide.");
    }
}

// Call the function with the variables
computation(10,0,"add");
computation(10,3,"subtruct");
