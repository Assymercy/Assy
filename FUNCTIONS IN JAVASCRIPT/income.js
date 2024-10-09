//calculating income
function caculateincome(kilometers, time){
    const rateperkilometer = 2000;
    let totalincome =kilometers*rateperkilometer;
    //rush hour bonus calculation
    if (rushhour(time)){
        //20% bonus during rush hour
        totalincome*= 1.2;
    }
    //returning total income
    return totalincome;
}
//define function to check if its the rush hour
function rushhour(time){
    const rushhourstart=7;
    const rushhourend=9;
    const hour = time.gethours();
    return (hour>= rushhourstart && hour < rushhourend)||( hour >=16 && hour <18);
}
//example
//50 kilometers traved in a day
const kilometerstraveled =50;
//trip time
const triptime = new Date('2024-09-15T08:30:00');
const totalincome =caculateincome(kilometerstraveled,triptime);
//out put
console.log(`total income for the day :UGX ${totalincome}`);