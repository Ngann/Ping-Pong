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
* If a word begins with a vowel, add "way" to the end
  * Expect piglatin("a") === "away"
* If a word begins with a consonant, move it to the end and add "ay"
  * Expect piglatin("hello") === "ellohay"
* If a word begins with multiple consonants, move them to the end and add "ay"
  * Expect piglatin("start") === "artstay"
* If a word's first consonants are "qu", always move "qu" to the end, then add "ay"
  * Expect piglatin("quick") === "ickquay"
* If a word's consonants include "qu" not at the start, move all consonants including "qu" to the end, thn add "ay"
  * Expect piglatin("squeal") === "ealsquay"

## Technologies Used

_jQuery, Bootstrap, JavaScript, and CSS_

### License

*MIT License*

Copyright (c) 2018 **_Phil Mass, Ngan Nguyen_**
