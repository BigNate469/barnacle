let barnacle = {
  parse: function(text) {
    let output = {};
    let current = "key"
    let currentKeyName = "";
    let currentValue = "";
    let currentArray = [];
    for (let i = 0; i < text.length; i++) {
      if (text.at(i) === ";") {
        if (current === "arrayValue") {
          currentValue = currentArray;
        };
        current = "key";
        Object.defineProperty(output, currentKeyName, {value: currentValue});
        currentValue = "";
        currentArray = [];
      if (current === "key") {
        if (text.at(i) === " ") {
          current = "find";
        } else {
          currentKeyName = currenKeyName + text.at(i);
        };
      } else if (current === "find") {
        if(!(text.at(i) === "(")) {
          current = "value";
          currentValue = text.at(i);
        } else if (text.at(i + 1) === "a") {
          current = "arrayValue";
          i++;
        };
      } else if (current === "value") {
        currentValue = currentValue + text.at(i);
      } else if (current === "arrayValue") {
        if (text.at(i) === "," && !(text.at(i - 1) === "\\")) {
          currentArray.push(currentValue);
        } else {
          currentValue = currentValue + text.at(i);
        }
      };
    };
    return output;
  }
}
