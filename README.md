# _Pig Latin_

#### _A website to translate to Pig Latin, October 24, 2018_

#### By _Phil Mass and Ngan Nguyen_

## Description

_It takes a string and turns it into Pig Latin_

## Setup/Installation Requirements

* Clone from the repository
* Open index.html in a browser

## Known Bugs

No known bugs

## Support and contact details

_Email me at philrmass@gmail.com_

## Behavioral Specs
* If it's not a letter, do nothing
  * Input: 3
  * Output: 3
  
* If a word begins with a vowel, add "way" to the end
  * Input: eat
  * Output: eatway
* If a word begins with one or more consonants, move all first consonants to the end, and add "ay"
  * Input: then
  * Output: enthay
* If a word's first consonants include "qu", move "qu" to the end.
  * Input1: quick
  * Output1: ickquay
  * Input2: squeal
  * Output2: ealsquay
* If a word begins with "y", treat "y" as a consonant
  * yes
  * esyay

## Technologies Used

_jQuery, Bootstrap, JavaScript, and CSS_

### License

*MIT License*

Copyright (c) 2018 **_Phil Mass, Ngan Nguyen_**
