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
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 560px;
  text-align: center;
}

.sequenceSelector,
.textField {
  font-size: 18px;
  padding: 10px 14px;
  color: var(--text);
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  outline: none;
  text-align: center;
  transition: border-color 0.15s, box-shadow 0.15s;
}

.sequenceSelector {
  cursor: pointer;
  min-width: 200px;
}

.textField {
  width: 120px;
  font-weight: 600;
}

.sequenceSelector:focus,
.textField:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(94, 182, 255, 0.25);
}

.table {
  width: 100%;
  font-size: 18px;
  border-collapse: separate;
  border-spacing: 0;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
}

.table :global(th) {
  padding: 12px 10px;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
  background: var(--surface-alt);
}

.table :global(td) {
  padding: 12px 10px;
  border-top: 1px solid var(--border);
}

.table :global(tr:last-child td) {
  font-weight: 700;
  color: var(--accent);
  background: var(--surface-alt);
}

p {
  margin: 0;
  font-size: 14px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
}
</style>
