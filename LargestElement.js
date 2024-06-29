// using loop 

let arr = [1,2,3,4,5,6,7,8]
let largestElement = arr[0];

for(let i=0; i<arr.length;i++)
    {
        if(arr[i]>largestElement)
            {
                largestElement = arr[i]
            }
    }
    console.log(largestElement)


    // reduce

let array = [1,2,3,4,5,6,7,8]
let largest = array.reduce((max , current)=> current > max ? current : max, array[0])
console.log(largest)

// using spread operator


let arrays = [1,2,3,4,5,6,7,8]
let largests= Math.max(...arrays)
console.log(largests)