<script>
let warmUp = {sets: [{reps: 12, percent: .4}, {reps: 5, percent: .6}, {reps: 3, percent: .75}, {reps: 2, percent: .9}], round: 10, prompt: "Working Weight"}
let pyramidSet = {sets: [{reps: 12, percent: .7}, {reps: 10, percent: .75}, {reps: 8, percent: .8}, {reps: 6, percent: .85}, {reps: 4, percent: .90}], round: 5, prompt: "One Rep Max"} 
let dropSet = {sets: [{reps: "AMAP", percent: 1}, {reps: "AMAP", percent: .8}, {reps: "AMAP", percent: .6}, {reps: "AMAP", percent: .4}], round: 5, prompt: "Working Weight"}
let sequence = warmUp;
let workingWeight = 135;

function plateRound(number, round) {
  let roundedNumber = number + 5;
  // Round the number to the nearest 10.
  roundedNumber = Math.round(roundedNumber / round) * round;
  // Subtract 5 from the rounded number.
  roundedNumber -= 5;
  return roundedNumber;
}

function plateMath(weight) {
	let output = "";
	let equipment = {
		barbellWeight: 45,
		platesAvailable: [
			{ weight: 45, count: 1, holeSize: 2, used: 0 },
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

function selectText(event) {
  event.target.setSelectionRange(0, event.target.value.length);
}
</script>

<main>
  <select
    bind:value={sequence}
    class="sequenceSelector"
  >
    <option value={warmUp}>Warm Up</option>
    <option value={dropSet}>Drop Set</option>
    <option value={pyramidSet}>Pyramid Set</option>
  </select>
  <table class="table">
    <tr>
      <th>Reps</th>
      <th>Weight</th>
      <th>Plate Math</th>
    </tr>
    {#each sequence.sets as row}
    <tr>
       <td> {row.reps} </td>
       <td> {plateRound(workingWeight*row.percent, sequence.round)} </td>
       <td> {plateMath(plateRound(workingWeight*row.percent, sequence.round))} </td>
     </tr>
    {/each}
    <tr>
      <td></td>
      <td>{workingWeight}</td>
      <td>{plateMath(workingWeight)}</td>
    </tr>
  </table>
  <p>{sequence.prompt}</p>
  <input
    bind:value={workingWeight}
    class="textField"
    inputmode="numeric"
    maxlength="3"
    on:focus={selectText}
  >
</main>

<style>
.sequenceSelector {
  margin: auto;
  display: flex;
}

.table {
  margin: auto;
  font-size: 20px;
}

.textField {
  margin: auto;
  display: flex;
  font-size: 20px;
}
</style>
