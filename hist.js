var fs = require('fs');
var words = fs.readFileSync('words.txt','utf8');
console.log(words);
const str = "hello world hello how are you hello world i want world hey";
const chars = {};
const arr=str.split(' ');
for(let word of arr) {
    if(!chars[word]) {
        chars[word]=1;
    }else {
        chars[word]++;
    }
}
console.log(chars);