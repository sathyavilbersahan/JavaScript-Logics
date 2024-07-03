// using loop operator

let arr = [1,2,3,4,5,6,7,8]
let SmallestElement = arr[0]

for(let i=0; i < arr.length; i++)
    {
        if(arr[i]< SmallestElement)
            {
                SmallestElement = arr[i]
            }
    }
    console.log(SmallestElement)


// reduce

let smallest = [1,2,3,4,5,6,7,8]
let array = [0]
let data = smallest.reduce((current, min)=> current < min ? current : min,smallest[0])
console.log(data)