const bodaBodaRider = {
    name: "John Doe",
    location: "Nairobi",
    bodaType: "Motorcycle",
    farePerKilometer: 30, // Fare per kilometer in local currency
    distanceTraveled: 50,  // Distance traveled in kilometers in a day

    // Method to calculate daily income
    calculateDailyIncome: function() {
        return this.farePerKilometer * this.distanceTraveled; // Calculate income
    }
};

// Calculate and log the daily income
const dailyIncome = bodaBodaRider.calculateDailyIncome();
console.log(`Daily Income for ${bodaBodaRider.name}: $${dailyIncome.toFixed(2)}`); // Output: Daily Income for John Doe: $1500.00