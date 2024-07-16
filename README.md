# Barnacle
A data storage language designed for small size and human readablility. Please note that this is a work in progress.
## specification & guide
New values are declared by simply entering a name, space, and a value. Example:
```
newvalue Hello World;
```
The parser only cares about the first space, after that, it considers the rest to be one value until a semicolin. Semicolins end values.

Array/list declration is done by specifying data type immedately after the name:
```
anarray (a) some value, some other value, value 3;
```
Values are seperated by commas. When the parser reaches the semicolin, it stops.

Object declration is achived through a similar method to how arrays are declared:
```
someobject (o)
  - firstvalue blah
  - secondvalue (a) a value, a second value
;
```
The semicolin can come at the end of the last value. In fact, the parser doesn't pay attention to newline characters- everything can be written inline.

You can use whatever file extension and MIME type you want- however I recomend using a MIME type of text/plain and a unique file extnsion so that you can tell these files apart from others.

The parser that I have provided does not support objects; make your own if you want that. Currently working on arrays.

### Escaping characters
Characters are escaped using the | character (known as a pipe or absolute value sign), not the backslash.

Currently, characters that must be escaped are:
- spaces
- semicolins

## Please note that none of this is final and all of it is subject to change.
