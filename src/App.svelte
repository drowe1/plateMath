<script>
let warmUp = [{reps: 12, percent: .4}, {reps: 5, percent: .6}, {reps: 3, percent: .75}, {reps: 2, percent: .9}]
let sequence = warmUp;
let workingWeight = 135;

function plateRound(number) {
	let roundedNumber = number + 5;
	// Round the number to the nearest 10.
	roundedNumber = Math.round(roundedNumber / 10) * 10;
	// Subtract 5 from the rounded number.
	roundedNumber -= 5;
	return roundedNumber;
}

function plateMath(weight) {
	let output = "";
	let equipment = {
		barbellWeight: 45,
		platesAvailable: [
			{ weight: 45, count: 20, holeSize: 2, used: 0 },
			{ weight: 25, count: 1, holeSize: 2, used: 0 },
			{ weight: 10, count: 1, holeSize: 2, used: 0 },
			{ weight: 5, count: 2, holeSize: 2, used: 0 },
			{ weight: 2.5, count: 1, holeSize: 2, used: 0 },
		],
	};
	let side;
	//nieve approach, assuming if the weight is >=45 it's a barbell. Will change in future
	if (weight >= 45) {
		side = (weight - equipment.barbellWeight) / 2;
	} else {
		side = (weight - 2.5) / 2;
	}
	if (side == 0) {
		return 0;
	}
	while (side > 0) {
		for (let index = 0; index < equipment.platesAvailable.length; index++) {
			let plateWeight = equipment.platesAvailable[index].weight;
			if (
				side >= plateWeight &&
				equipment.platesAvailable[index].used < equipment.platesAvailable[index].count
			) {
				side -= plateWeight;
				equipment.platesAvailable[index].used++;
				break;
			} else if (index == equipment.platesAvailable.length - 1) {
				output += "[" + side + " short]";
				side = 0;
			}
		}
	}
	for (let index = 0; index < equipment.platesAvailable.length; index++) {
		const plateType = equipment.platesAvailable[index];
		if (plateType.used >= 3) {
			output += plateType.weight + " x " + plateType.used + ", ";
		} else if (plateType.used > 0) {
			for (let j = 0; j < plateType.used; j++) {
				output += plateType.weight + ", ";
			}
		}
	}
	output = output.substring(0, output.length - 2); //removes the last ", "
	return output;
}
</script>

<main>
	<table id="table">
		<tr>
			<th>Set</th>
			<th>Reps</th>
			<th>Weight</th>
			<th>Plate Math</th>
		</tr>
		{#each sequence as row, id}
			 <tr>
				<td> {id+1} </td>
				<td> {row.reps} </td>
				<td> {plateRound(workingWeight*row.percent)} </td>
				<td> {plateMath(plateRound(workingWeight*row.percent))} </td>
			 </tr>
		{/each}
		<tr>
			<td></td>
			<td></td>
			<td>{workingWeight}</td>
			<td>{plateMath(workingWeight)}</td>
		</tr>
	</table>
	<input type="number" inputmode="numeric" bind:value={workingWeight} maxlength="4">
</main>

<style>
.table {
	margin: auto;
}
</style>
