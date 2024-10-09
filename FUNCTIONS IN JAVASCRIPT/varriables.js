//difference between local and global varriables
//global variable
let populationofuganda = 45000000;
//function to caculate population of kampala
function caculatepopulationofkampala(){
    //local varriable
    let populationofkampala =1500000;
    //out put popula of Kampala
    console.log(`The population of Kampala:${populationofkampala}`);
    //output population of Uganda
    console.log(`The population of Uganda:${populationofuganda}`);
}
//call function
caculatepopulationofkampala();
// try accessing local variable besides Kampala
console.log(`The population Kampala outside function:${populationofkampala}`);