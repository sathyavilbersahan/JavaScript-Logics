var arr = [1,2,2,3,3,4,5]
var repeated = []
var NotRepeated = []
for(let i = 0; i<arr.length; i++)
{
 if(arr[i] !== 2 && arr[i] !== 3){
     repeated.push(arr[i])
 }
 else{
     NotRepeated.push(arr[i])
 }
}
console.log(repeated)
console.log(NotRepeated)