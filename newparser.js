let parseBarnacle = function(text) {
  let output = {};
  let tempKeys = [];
  let tempValues = [];
  let currentKey = "";
  let currentValue = "";
  let currentMode = "key";
  for (let i = 0; i < text.length; i++) {
    let i2 = i - 1;
    if (text.at(i) === ";" && !(text.at(i2) === "|")) {
      tempKeys.push(currentKey);
      tempValues.push(currentValue);
      currentMode = "key";
      currentValue = "";
      currentKey = "";
    } else if (text.at(i) === " " && !(text.at(i2) === "|")) {
      currentMode = "value";
    } else if (currentMode === "key" && !(text.at(i) === "|")) {
      currentKey = currentKey + text.at(i);
    } else if (currentMode === "value" && !(text.at(i) === "|")) {
      currentValue = currentValue + text.at(i);
    };
  };
  for (let i = 0; i < tempKeys.length; i++) {
    let temp = tempValues[i];
    if(temp.includes("|a")) {
      for (let i2 = 3; i2 < temp.length; i2++) { // Starts at the fourth character because this is where the array should acually start
        //TODO: parse arrays.
      };
    };
  };
  return output;
};
