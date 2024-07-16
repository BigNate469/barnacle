# Barnacle
A data storage language designed for small size and human readablility. Please note that this is a work in progress.
## specification & guide
New values are declared by simply entering a name, space, and a value. Example:
```
newvalue HelloWorld;
```
Spaces must be escaped using a |. For example:
```
something my| value| is| 5;
```
Semicolins end values.

Array/list declration is done by specifying data type immedately after the name:
```
anarray |a some value, some other value, value 3;
```
Values are seperated by commas. When the parser reaches the semicolin, it stops.

Object declration is achived through a similar method to how arrays are declared:
```
someobject |o
  - firstvalue blah
  - secondvalue (a) a value, a second value
;
```
The semicolin can come at the end of the last value. In fact, the parser doesn't pay attention to newline characters- everything can be written inline.

You can use whatever file extension and MIME type you want- however I recomend using a MIME type of text/plain and a unique file extnsion so that you can tell these files apart from others.

The parser that I have provided does not support objects (yet); make your own if you want that. Currently working on arrays.

### Escaping characters
Characters are escaped using the | character (known as a pipe or absolute value sign), not the backslash.

Currently, characters that must be escaped are:
- spaces
- semicolins
## FAQ
### Why do I have to escape my spaces (and where's the = sign?)

In Barnacle, a space takes the place of the equals sign or colin as the assignment operator. This reduces overall file size. However, if you're building a minifier for barnacle, you do have to keep this in mind.

### Where's the quotes, and why are all the outputs strings?

Barnacle assumes that all values are a string, or an array of strings. Objects can hold either of these. The programing language you use likely has a built-in function to turn strings into integers, floating-point numbers, or doubles- use that. Your programing language also has a way to turn numbers into strings- in a lot of languages, this can be achived through string concaction:
```
stringFromNumber = "" + 5
```
## Please note that none of this is final and all of it is subject to change.
