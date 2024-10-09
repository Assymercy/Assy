const footballTeam = {
    teamName: "Uganda Cranes",
    players: [
        { name: "Player 1", position: "Forward", goalsScored: 10 },
        { name: "Player 2", position: "Midfielder", goalsScored: 5 },
        { name: "Player 3", position: "Defender", goalsScored: 2 },
        { name: "Player 4", position: "Goalkeeper", goalsScored: 0 },
        { name: "Player 5", position: "Forward", goalsScored: 8 }
    ],

    // Method to calculate total goals scored by all players
    calculateTotalGoals: function() {
        let totalGoals = 0;
        for (const player of this.players) {
            totalGoals += player.goalsScored; // Add each player's goals to total
        }
        return totalGoals; // Return the total goals
    }
};

// Calculate and log the total goals scored by the team
const totalGoals = footballTeam.calculateTotalGoals();
console.log(`Total Goals Scored by ${footballTeam.teamName}: ${totalGoals}`); // Output: Total Goals Scored by Uganda Cranes: 25