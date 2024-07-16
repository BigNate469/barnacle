let parseBarnacle = function(text) {
  let output = {};
  let currentKey = "";
  let currentValue = "";
  let currentMode = "key";
  for (let i = 0; i < text.length; i++) {
    let i2 = i - 1;
    if (text.at(i) === ";" && !(text.at(i2) === "|")) {
      output[currentKey] = currentValue;
      currentMode = "key";
      currentValue = "";
      currentKey = "";
    } else if (text.at(i) === " " && !(text.at(i2) === "|")) {
      currentMode = "value";
    } else if (currentMode === "key" && !(text.at(i2) === "|")) {
      currentKey = currentKey + text.at(i);
    } else if (currentMode === "value" && !(text.at(i2) === "|")) {
      currentValue = currentValue + text.at(i);
    };
  };
  return output;
};
