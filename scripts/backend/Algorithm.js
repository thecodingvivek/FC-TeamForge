const positions= {
    'Goalkeeper': ['GK'],
    'Defender': ['RB', 'LB', 'CB'],
    'Midfielder': ['CDM', 'RM', 'LM', 'CM', 'CAM'],
    'Attacker': ['RW', 'LW', 'CF', 'ST']
    }

function assignPlayersToFormation(players, formation) {
    const assignedPlayers = [];
    const remainingPlayers = [...players];
    const remainingFormation = [...formation];

    // Loop through each position in the formation
    for (const position of formation) {
        // Find a player who has the exact position
        const exactPositionPlayer = remainingPlayers.find(player => player.position === position);

        if (exactPositionPlayer) {
            exactPositionPlayer["assignedPosition"] = position;
            assignedPlayers.push(exactPositionPlayer);

            // Remove the player from the remaining players and the position from the formation
            remainingPlayers.splice(remainingPlayers.indexOf(exactPositionPlayer), 1);
            remainingFormation.splice(remainingFormation.indexOf(position), 1);
        }
    }

    // Loop through each position category in the remaining formation
    for (const position of remainingFormation) {
        // Find a player whose category includes the position
        const positionCategoryPlayer = remainingPlayers.find(player => positions[player.positionCategory].includes(position));

        if (positionCategoryPlayer) {
            positionCategoryPlayer["assignedPosition"] = position;
            assignedPlayers.push(positionCategoryPlayer);

            // Remove the player from the remaining players and the position from the formation
            remainingPlayers.splice(remainingPlayers.indexOf(positionCategoryPlayer), 1);
            remainingFormation.splice(remainingFormation.indexOf(position), 1);
        }
    }

    // Loop through any remaining positions and assign unassigned players
    for (const position of remainingFormation) {
        const unassignedPlayers = remainingPlayers.filter(player => !player.assignedPosition);

        if (unassignedPlayers.length > 0) {
            const anyPlayer = unassignedPlayers.shift(); // Take the first unassigned player
            anyPlayer["assignedPosition"] = position;
            assignedPlayers.push(anyPlayer);
        }
    }

    console.log(assignedPlayers);
    return assignedPlayers;
}

let l = assignPlayersToFormation([
    {
        "name": "Aravind",
        "position": "LW",
        "positioncategory": "Attacker"
    },
    {
        "name": "Athithya",
        "position": "LB",
        "positioncategory": "Defender"
    },
    {
        "name": "Midhru",
        "position": "CDM",
        "positioncategory": "Midfielder"
    },
    {
        "name": "Sriram",
        "position": "ST",
        "positioncategory": "Attacker"
    },
    {
        "name": "Thanus",
        "position": "RB",
        "positioncategory": "Defender"
    },
    {
        "name": "Tharun",
        "position": "GK",
        "positioncategory": "Goalkeeper"
    },
    {
        "name": "Thilak",
        "position": "CAM",
        "positioncategory": "Midfielder"
    }
],['GK', 'RB', 'LB', 'CB', 'CM', 'ST', 'ST'])
console.log(l)
//module.exports = (assignPlayersToFormation)
