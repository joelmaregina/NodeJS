# Regular Expressions - POSIX

## 01. The Basic Set:

| Symbol | What does it represent? |
|------------|--------------|
| <h2>*</h2> | <b>Zero</b> or more occurrences of the character that precedes this asterisk| 
| <h2> . </h2>| A wildcard that represents any character|
| <h2>.*</h2> | Zero or more occurences of wildcard, which means zero or more occurences of any character|
| <h3>\s</h3> | Represents whitespace|
| \s*| Zero or more occurences of whitespace|
|<h3>[pqr]</h3>| A single character which can be either a 'p', 'q' or an 'r'|
|<h3>[a-d]</h3>| A single character that falls in the range 'a-d', i.e. one of 'a', 'b', 'c' or 'd'
|<h3>[ˆpq]</h3>| A single character that is neither 'p' nor 'q'. <h5> ^ is negation when inside of  the '[ ]'</h5> |
| <h3>ˆpattern</h3> | ^ is an anchor that represents the beginning of the line |
| <h3>pattern$</h3>| $ is an anchor tag that represents the end of the line |
| \ | Backlash (Escape character) : Must be used with the characters ˆ$*.[()\ when these special characters are going to be used as literal, since these characters have special meaning otherwise|


## 02. The Extended Set:

| Symbol | What does it represent? |
------------|--------------
|<h2>+</h2>| <b>One</b> or more occurences of the character that precedes this + symbol |
|<h3>?</h3>| <b>Zero</b> or <b>one</b> occurence of the character that precedes this question mark |
|<h3>pat1\|pat2</h3>| Matches either the pattern pat1 or the pat2 |
|<h3>()</h3>| Divides patterns into groups |
|<h3>{m}</h3>| Exaclty 'm' occurrences of whatever precedes|
|<h3>{m,n}</h3>| At least m and at most n occurences of whatever precedes. Only one of m, n is mandatory. Other can be left blank |

## 03. Control Characters


| Symbol | What does it represent? |
------------|--------------
| \t | Tab|
| \v | Vertical Tab|
| \n | Newline |
| \r | Carriage Return|