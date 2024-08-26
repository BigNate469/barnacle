let endValues;
const parseBarnacle = function(text) {
  const lines = text.split(";");
  endValues = {};
  for (let i = 0; i < lines.length; i++) {
    let value = lines[i].split(" ");
    endValues[value[0]] = value.slice(1);
  }
  return endValues;
}
