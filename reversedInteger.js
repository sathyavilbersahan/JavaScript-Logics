
function reversedNumber (arr)
{
    let reverse = " ";
    for(let i = arr.length-1; i>=0; i--)
        {
            reverse += arr[i];
        }
        return reverse
}
console.log(reversedNumber("vilber"))
//shortcut

function reverseelement(str){
    return str.split("").reverse().join("")
}
console.log(reverseelement("sathya"))


// reverse an array

var arr = [1,2,3,4,5]
var array = ''

for( let i = arr.length - 1; i >= 0; i-- )
{
    array = arr[i]
    console.log(array)
}

const data = arr.reverse()
console.log(data)