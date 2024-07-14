# A data storage language designed for small size and human readablility
## specification
New values are declared by simply entering a name, space, and a value. Example:
```
newvalue Hello World;
```
The parser only cares about the first space, after that, it considers the rest to be one value until a semicolin. Semicolins end values.

Array/list declration is done by specifying data type immedately after the name:
```
anarray (array) some value, some other value, value 3;
```
Values are seperated by commas. When the parser reaches the semicolin, it stops.

Object declration is achived through a similar method to how arrays are declared:
```
someobject (object)
  - firstvalue blah
  - secondvalue (array) a value, a second value
;
```
