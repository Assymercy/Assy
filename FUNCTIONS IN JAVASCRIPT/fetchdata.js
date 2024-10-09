//Higher-order function with a callback
function fetchdata(data,callback){
    console.log(`Some sample data from server ${data} `);
    callback();
}
function fetchdatasuccess(){
    console.log('Data sucessfuly retrieved from the servser');
}
fetchdata(2000,fetchdatasuccess);