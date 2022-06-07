// Remember, we're gonna use strict mode in all scripts now!

/*
const t1 = [3, -2, -6, -1, 'error'];
const t2 = [9, 13, 17, 14, 9, 5];

 Problem: Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes
there might be a sensor error.

1. Understanding the problem
What is temp amplitude? Answer. Difference between highest and lowest temp
How to compute max and min temps?
What is a sensor error? and what do we do with it?

2. Breaking problem into sub-problems
How to ignore errors;
Find max value in temp array
Fin min value in temp array
subtract min from max(amplitude)
return value


consBug = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(min, max);
  return max - min;
};

const amplitudeNewBug = (t1, t2);
console.log(amplitudeNew);

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    //value: Number(prompt('Degrees celsuius:')),
    value: 10,
  };
  //console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(min, max);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 'error'], [9, 4, 5]);
console.log(amplitudeBug);
*/
