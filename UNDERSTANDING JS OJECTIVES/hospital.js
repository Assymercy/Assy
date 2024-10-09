function Hospital(name, location, numberOfBeds, numberOfWards, bedsPerWard) {
    this.name = name;                  // Name of the hospital
    this.location = location;          // Location of the hospital
    this.numberOfBeds = numberOfBeds;  // Total number of beds available
    this.numberOfWards = numberOfWards; // Total number of wards in the hospital
    this.bedsPerWard = bedsPerWard;    // Number of beds per ward

    // Method to calculate total capacity
    this.calculateTotalCapacity = function() {
        return this.numberOfWards * this.bedsPerWard; // Total capacity
    };
}

// Create a new Hospital object
const mulagoHospital = new Hospital("Mulago Hospital", "Kampala", 1000, 10, 20);

// Calculate and log the total capacity
const totalCapacity = mulagoHospital.calculateTotalCapacity();
console.log(`Total Capacity of ${mulagoHospital.name} is: ${totalCapacity} beds`); // Output: Total Capacity of Mulago Hospital is: 200 beds