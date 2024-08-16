const parseBarnacle = function(text) {
  const lines = text.split(";");
  for (let i = 0; i < lines.length; i++) {
    let value = lines[i].split(/(?<!|) /);
    return value;
  }
}
