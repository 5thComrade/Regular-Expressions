// let re;
// re = /hello/i; 
// i = case insensitive g = global search
// console.log(re);
// console.log(re.source);

//exec() - Return result in an array or null
// const result = re.exec('hello world');
// console.log(result);

// console.log(result.input);

//test() -Returns true or false
// const result = re.test('HEllo');

// console.log(result);

//match() - Return result array or null
// const str = 'Hello There';
// const result = str.match(re);
// console.log(result);

//search() - Returns index of the first match if not found returns -1
// const str = 'Hell There';
// const result = str.search(re);

// console.log(result);

//replace() - Return a new string with some or all matches of a pattern

// const str = 'Hello There';
// const newStr = str.replace(re, 'Hi');
// console.log(newStr);

let re;
//Literal Characters
re = /hello/;
re = /hello/i;

//Metacharacter Symbols
re = /^h/i;   //Must start with
re = /world$/i;   //Must end with
re = /^hello$/i;   //Must begin and end with
re = /^h.llo$/i;   //Matches any one character
re = /h*llo/i;   //Matches any number of characters
re = /gre?a?y/i;   //grey can be spelled with an a or an e
re = /gre?a?y\?/i;   //Escape character

//Brackets [] - Character Sets
re = /gr[ae]y/i; //Must be an a or e
re = /[GF]rey/; //Must be an upper case G or F
re = /[^GF]rey/; //Match anythinf except G or F
re = /[A-Z]rey/; //Match any uppercase letter
re = /[a-z]rey/; //Match any lowercase letter
re = /[A-Za-z]rey/; //Match any case letter
re = /[0-9]rey/; //Match any number in the range
re = /[0-9][0-9]rey/; //Match any number in the range

//Braces{} -Quantifiers
re = /Hel{2}o/i; //l must occuer exactly 2 times
re = /Hel{2,4}o/i; //l must can ocuur 2-4 times
re = /Hel{2,}o/i; //l must can ocuur atleast 2 times

//Parenthesis() -Grouping
re = /^([0-9]x){3}$/i

//short hand character classes
re = /\w/;  //Word Character -alphanumeric or _
re = /\w+/;  //+ looks for one or more
re = /\W/;  //non-word characters
re = /\d+/;  //match any digit 0 or more times
re = /\D/; //match non-digit
re = /\s/; //match white space
re = /\S/;// match nonwhite space
re = /Hell\b/i;//word boundary

//Assertions
re = /x(?=y)/;//match x only if fallowed by y
re = /x(?!y)/;//match x only if not fallowed by y

const str = 'xmas';
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if(re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does not match ${re.source}`);
    }
}

reTest(re, str);