const abb = "Sathya Vilber Sahan"
const abberviate = abb.split(' ').reduce((abbr, word)=> abbr + word[0],' ');
console.log(abberviate)

function findLetters(words){
    return words.split(' ').map(word => word[0]).join('');
}
const words = 'vilber Mano ravi';
const result = findLetters(words);
console.log(result)