let parseBarnacle = function(text) {
  let output = {};
  let currentKey = "";
  let currentValue = "";
  let currentMode = "key";
  for (let i = 0; i < text.length; i++) {
    if (text.at(i) === ";" && !(text.at(i - 1) === "\\")) {
      output.[currentKey] = currentValue;
      currentMode = "key";
      currentValue = "";
      currentKey = "";
    } else if (text.at(i) === " " && !(text.at(i - 1) === "\\")) {
      currentMode = "value";
    } else if (currentMode === "key" && !(text.at(i - 1) === "\\")) {
      currentKey = currentKey + text.at(i);
    } else if (currentMode === "value" && !(text.at(i - 1) === "\\")) {
      currentValue = currentValue + text.at(i);
    };
  };
  return output;
};
