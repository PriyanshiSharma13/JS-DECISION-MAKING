// Get Value
// You are provided with a table containing some characters and their corresponding values. Your task will be to find the value from the table corresponding to an input character and return it.

// | P or p 	- PrepBytes      	|
// | Z or z 	- Zenith         	|
// | E or e 	- Expert Coder   	|
// | D or d 	- Data Structure 	|

// Note: You have to complete getValue function. No need to take any input.

const getValue = (C) => {
    switch(true){
      case (C === "P" || C === "p"):
        return 'PrepBytes';
      case (C === "Z" || C === "z"):
        return 'Zenith';
      case (C === "E" || C === "e"):
        return 'Expert Coder';
      case (C === "D" || C === "d"):
        return 'Data Structure';
      default:
        return 'Check the data again !';
    }
};
console.log(getValue(E));