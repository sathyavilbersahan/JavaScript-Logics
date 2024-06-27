// Remove duplicate array

const duplicate = [1,2,3,4,2,3,4,5,6]

const removeDuplicate = duplicate.filter((item , index)=>{
    return duplicate.indexOf(item)=== index
})
console .log(removeDuplicate)



//Find duplicate array


var arr = [1,2,3,4,5,6,3,2,5]
var array = []
for(let i = 0 ; i < arr.length ; i++)
{
    for(let j= i+1; j < arr.length; j++ )
{
    if(arr[j] == arr[i] && !array.includes(arr[j]))
    {
        array.push(arr[j])
    }
}
}
console.log(array)
  



