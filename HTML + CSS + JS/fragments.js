var standings = [
	{
		name: "New England Patriots",
		wins: 12,
		losses: 4,
		ties: 0
	},
	{
		name: "New York Jets",
		wins: 8,
		losses: 8,
		ties: 0
	},
	{
		name: "Miami Dolphins",
		wins: 8,
		losses: 8,
		ties: 0
	},
	{
		name: "Buffalo Bills",
		wins: 6,
		losses: 10,
		ties: 0
	}
];

var fragment = new DocumentFragment();

for (let i = 0; i < standings.length; i++) {
	var team = standings[i];

	var heading = document.createElement("h2");
	fragment.appendChild(heading);
	heading.textContent = team.name;

	var wins = document.createElement("p");
	fragment.appendChild(wins);
	wins.textContent = "Wins: " + team.wins;

	var losses = document.createElement("p");
	fragment.appendChild(losses);
	losses.textContent = "Losses: " + team.losses;
	
	var ties = document.createElement("p");
	fragment.appendChild(ties);
	ties.textContent = "Ties: " + team.ties;
}

document.body.appendChild(fragment);