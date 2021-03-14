// Takes in the target number and the area to be searched
// and returns the index of the target number
// in the array.
const binaryChop = (target, array) => {
  let index = -1;
  let pointer = Math.floor(array.length / 2);
  let move = pointer;
  let tries = 20;
  while (tries > 0) {
    console.log(
      `TARGET: ${target}, POINTER: ${pointer}, CURRENT: ${array[pointer]}`
    );
    if (array[pointer] === target) {
      index = pointer;
      break;
    } else if (array[pointer] > target) {
      move = Math.round(move / 2) || 1;
      console.log("MOVE DOWN", move);
      pointer = pointer - move;
    } else if (array[pointer] < target) {
      move = Math.round(move / 2) || 1;
      console.log("MOVE UP", move);
      pointer = pointer + move;
    }
    tries--;
  }
  return {
    target: target,
    index: index,
  };
};

const chop = () => {
  let array = [];

  for (x = 0; x < 100; x++) {
    array.push(x + 1);
  }

  let result = binaryChop(
    Math.floor(Math.random() * 100),
    array.sort((a, b) => a - b)
  );

  console.log("RESULT", result);

  if (result.index == -1) {
    console.log(`Target number ${result.target} not found.`);
  } else if (result.index >= 0) {
    console.log(
      `Target number ${result.target} was found at index ${result.index}.`
    );
  } else {
    console.log("ERROR: Index not found.");
  }
};

console.log("* * * * * FIRST * * * * *");
chop();
console.log("* * * * * SECOND * * * * *");
chop();
console.log("* * * * * THIRD * * * * *");
chop();
