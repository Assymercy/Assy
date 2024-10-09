//calculating age of the school
let school ={
    name: 'Malik high school',
    location: 'Plot 24 Ggaba road',
    studentscount: 2000,
    establishedyear: 1997,
    schooltype:'Secondary',
  calculateschoolage: function(currentyear){
  return currentyear - estsblishedyear;
    }
};
let currentyear = 2024;
let schoolage = school.calculateschoolage(currentyear);
console.log(`The school age is: ${schoolage} years`);