let isValid = visaRegExp.test(cardNumber);
//console.log(isValid); // true

function validateCreditCard(cardNumber) {
    // Define regular expressions for different card types
    let visaRegExp = new RegExp(/^4[0-9]{12}(?:[0-9]{3})?$/);

    /*
	To validate a visa card, I made sure of the following:
	1. I made sure that the string being passed in should not contain any special characters, alphabets or whitespaces.
	2. I made sure that the string should start with IIN of 4
	3. I made sure that the number of characters must be equal to 13 or 16, because the old visa cards have 13 characters and the new ones
	have 16 characters.
		*If the number of characters is equal to 13, the last 12 digits must be a number between 0 to 9.
		*If the number of characters is equal to 16, the last 15 digits must be a number between 0 to 9.

	This regex uses the following patterns:

	^ : Start of string anchor
	4 : Matches the first digit of a Visa card, which always starts with "4"
	[0-9]{12} : Matches the next 12 digits of the card, which can be any numerical digit
	(?:) : Non-capturing group, which allows for multiple patterns to be matched without capturing the matched text
	[0-9]{3} : Optional matches the next three digits, which can be any numerical digit
	? : Makes the preceding group optional
	$ : End of the string anchor
In this regex, the ^ and $ anchors ensures that the entire string is matched by the pattern, and not just a part of it, the [0-9]{12} matches the first 12 digits of Visa card number, the (?:) followed by [0-9]{3} is optional group that matches the last three digits of Visa card number and the ? after the group makes the group optional.
	 */

    let mcRegExp = new RegExp(
        /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/
    );

    /*
	To validate a mastercard, I made sure of the following:
	1. I made sure that the string being passed in shouldn't contain any special characters, alphabets or whitespaces, so I didn't include any word character, whitespace or special characters pattern in my regex.
	2. I made sure that the number of characters must be equal to 16.
	3. I made sure that the string should start with IIN ranges of either a 2-digit number range(ranging from 51 to 55) or a 4 digit number range(ranging from 2221 to 2720)
		*If the string starts with a 2-digit number range (ranging from 51 to 55), the next 14 digits must be a number between 0 and 9.
		*If the string starts with a 4-digit number range (ranging from 2221 to 2720), the next 12 digits must be a number between 0 to 9.

		To do all these, I used the carat character "^" which is an anchor specifying what begins the string to divide my search patterns into two major categories, one to search for either a string that starts with
		a 2 digit-number (ranging from 51 to 55), followed by 14 digits, which are different numbers between 0 and 9. And the second category to search for a string that starts with a 4-digit number (ranging from 2221 - 2720).
		Now this second category to search for credible numbers that satisfy this range (2221-2720) was sectionalized into a group
		containing 5 different patterns that could possibly match this category. The different patterns that I used to create these different patterns here were anchors "^" which are used to match the start of a string or line,
		range indicator "-" which is used to match a range of characters, range brackets "[]" which are used to indicate a set of characters that are acceptable in a match, groups "()" which are  used to group multiple characters 
		together and create a capture group. The captured groups allowed me to extract specific parts of the match as separate pieces of information,
		curly brackets quantifier "{}" to specify the amount of times the character class should be matched", alternation or logical OR operator "|" it is used to match one of several possible patterns.
	 
		This regex uses the following patterns:

^ : Start of string anchor
( : Start of a capturing group
5[1-5] : Matches the first digit of a Mastercard, which always starts with "5" and the second digit is between 1-5
[0-9]{14} : Matches the next 14 digits of the card, which can be any numerical digit
| : Alternation operator, which allows for multiple patterns to be matched
2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}) : Matches a second pattern of Mastercard that starts with "22" and the following digits are between 1 and 9 and the remaining 12 digits are any numerical digits and also matches other patterns starting with "2" and "3-6" or "7" or "720"
) : End of the capturing group
$ : End of the string anchor
In this regex, the ^ and $ anchors ensures that the entire string is matched by the pattern, and not just a part of it, the alternation operator | allows to match any of the two pattern (5[1-5] and 2(22[1-9],2[3-9],[3-6],7[0-1],720)) and the remaining [0-9]{14} matches the remaining digits in the card number that can be any numerical digit.




		
		*/

    let amexRegExp = new RegExp(/^3[47][0-9]{13}$/);
    /*
	To validate an american express card, I made sure of the following:
	1. I made sure that the string being passed should not contain any special characters, alphabets or whitespaces.
	2. I made sure that the number of characters must be equal to 15.
	3. I made sure that the string being passed should start with IIN of 34 or 37.
	4. I made sure that the last 13 digits must be a number between 0 to 9.

	This regex uses the following patterns:

^ : Start of string anchor
3 : Matches the first digit of an American Express card, which always starts with "3"
[47] : Matches the second digit of an American Express card, which can be either "4" or "7"
[0-9]{13} : Matches the next 13 digits of the card, which can be any numerical digit
$ : End of the string anchor
In this regex, the ^ and $ anchors ensures that the entire string is matched by the pattern, and not just a part of it, the 3[47] matches the first two digits of American Express card number, the [0-9]{13} matches the remaining 13 digits of the card number that can be any numerical digit
	*/

    let discoverRegExp = new RegExp(
        /^(6011[0-9]{12}|(64[4-9][0-9]{13})|(65[0-9]{14}))$/
    );
    /*
	To validate a discover card, I made sure of the following:
	1. I made sure that the string being passed should not contain any special characters, alphabets or whitespaces.
	2. I made sure that the number of characters must be equal to 16.
	3. I made sure that the string being passed should start with IIN of 6011.


	This regex uses the following patterns:

^ : Start of string anchor
( : Start of a capturing group
6011 : Matches the first four digits of a Discover card, which always start with "6011"
[0-9]{12} : Matches the next 12 digits of the card, which can be any numerical digit
| : Alternation operator, which allows for multiple patterns to be matched
(64[4-9][0-9]{13}) : Matches a second pattern of Discover cards that start with "644" through "649"
(65[0-9]{14}) : Matches a third pattern of Discover cards that start with "65"
) : End of the capturing group
$ : End of the string anchor
In this regex, the ^ and $ anchors ensures that the entire string is matched by the pattern, and not just a part of it, the alternation operator | allows to match any of the three pattern (6011, 644-649 and 65) and the remaining [0-9]{12/13/14} matches the remaining digits in the card number that can be any numerical digit.





	*/

    //Test card number against regular expressions for different card types
    if (visaRegExp.test(cardNumber)) {
        return "Visa";
    } else if (mcRegExp.test(cardNumber)) {
        return "MasterCard";
    } else if (amexRegExp.test(cardNumber)) {
        return "American Express";
    } else if (discoverRegExp.test(cardNumber)) {
        return "Discover";
    } else {
        return "Invalid card number";
    }
}

console.log(validateCreditCard("4111111111111111"));
console.log(validateCreditCard("5300000000000000"));
console.log(validateCreditCard("378282246310005"));
console.log(validateCreditCard("2267237072042696"));
