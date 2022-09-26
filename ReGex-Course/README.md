# Regular Expressions - POSIX

## 01. The Basic Set:

| <h3><b>Symbol</b></h3> |<h3><b>What does it represent?</b> </h3>|
|------------|--------------|
| <h2><b>*</b></h2> | <b>Zero or more</b>  occurrences of the character that precedes this asterisk| 
| <h2><b>.</b></h2>| A wildcard that represents any character|
| <h2><b>.*</b></h2> | Zero or more occurences of wildcard, which means zero or more occurences of any character|
| <h3><b>\s</b></h3> | Represents whitespace|
| <h2><b>\s*</b></h2>| Zero or more occurences of whitespace|
|<h3><b>[pqr]</b></h3>| A single character which can be either a 'p', 'q' or an 'r'|
|<h3><b>[a-d]</b></h3>| A single character that falls in the range 'a-d', i.e. one of 'a', 'b', 'c' or 'd'
|<h3><b>[ˆpq]</b></h3>| A single character that is neither 'p' nor 'q'. <h5> ^ is negation when inside of  the '[ ]'</h5> |
| <h3><b>ˆpattern</b></h3> | ^ is an anchor that represents the beginning of the line |
| <h3><b>pattern$</b></h3>| $ is an anchor tag that represents the end of the line |
| <h3><b>\<b></h3> | Backlash (Escape character) : Must be used with the characters ˆ$*.[()\ when these special characters are going to be used as literal, since these characters have special meaning otherwise|
<br>

## 02. The Extended Set:

| <h3><b>Symbol</b></h3> | <h3><b>What does it represent?</b> </h3>|
------------|--------------
|<h2><b>+</b></h2>| <b>One or more</b>  occurences of the character that precedes this + symbol |
|<h3><b>?</b></h3>| <b>Zero</b> or <b>one</b> occurence of the character that precedes this question mark |
|<h3><b>pat1\|pat2</b></h3>| Matches either the pattern pat1 or the pat2 |
|<h3><b>()</b></h3>| Divides patterns into groups (Capturing groups) |
|<h3><b>(?: pattern)</b></h3>| It makes the group as a non-capturing group|
|<h3><b>(pattern)\1 </b></h3>| It checks if the captured characters repeat (not the pattern)|
|<h3><b>(?: pattern)</b></h3>| It makes the group as a non-capturing group|
|<h3><b>(?<tagName>pattern)</b></h3>| It checks if the captured characters repeat (not the pattern)|
|<h3><b>(?<tagName>pattern)\k<tagName> </b></h3>| It checks if the captured named group repeat (not the pattern)|
|<h3><b>{m}</b></h3>| Exaclty 'm' occurrences of whatever precedes|
|<h3><b>{m,n}</b></h3>| At least m and at most n occurences of whatever precedes. Only one of m, n is mandatory. Other can be left blank |
<br>

## 03. Control Characters

| <h3><b>Symbol</b> </h3>| <h3><b>What does it represent?</b></h3> |
------------|--------------
| <h3><b>\t</b></h3> | Tab|
| <h3><b>\v</b></h3> | Vertical Tab|
| <h3><b>\n</b></h3> | Newline |
| <h3><b>\r</b></h3> | Carriage Return|
<br>

## 04. Character Set Shorthand

| <h3><b>Symbol</b></h3> |<b></h3> What does it represent?<b></h3> |
------------|--------------
| <h3><b>\d</b></h3> | It represents [0-9] digits|
| <h3><b>\w</b></h3> | It represents [a-zA-Z0-9_] characters|
| <h3><b>\s</b></h3> | It represents [\t\r\n] (a blank space, a tab, a carriage return or a new line) |
| <h3><b>\D</b></h3> | It represents all characters <b>EXCEPT</b> [0-9] digits|
| <h3><b>\W</b></h3> | It represents all characters <b>EXCEPT</b> [a-zA-Z0-9_] characters|
| <h3><b>\S</b></h3> | It represents all characters <b>EXCEPT</b> [\t\r\n] (a blank space, a tab, a carriage return or a new line) |
<br>

## 05. Word Boudary Metacharacters:
 
| <h3><b>Symbol</b></h3> | <h3><b>What does it represent?<b></h3> |
------------|--------------
| <h3><b>\b</b></h3>| Pattern bounded by a <b>non-word</b> character (at left or right of the pattern- depending on where its)|
| <h3><b>\B</b></h3>| Pattern bounded by a <b>word</b> character (at left or right of the pattern- depending on where its)|
<br>

## 06. Extra (Javascript):
 
| <h3><b>Symbol</b></h3> | <h3><b>What does it represent?<b></h3> |
------------|--------------
| <h3><b>pattern/g</b></h3>  at the end of ReGex| It looks for for all repeats of the pattern used (not just the first one)|
| <h3><b>pattern/i</b></h3>  at the end of ReGex| It makes the search case insensitive|
| <h3><b>ˆpattern/m</b> <br> <b>pattern$/m</b></h3>  at the end of ReGex| It makes the search happen in the beginning and/or at the end of all the lines (multiple lines)|
| <h3><b>pattern1 \| pattern2 </b></h3>| It separates 2 options of expressions. Works like the 'OR' sign in JS |