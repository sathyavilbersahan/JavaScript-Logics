const arr  = [5, 2, 9, 1, 7];

// const max = Math.max(...numbers);
// const min = Math.min(...numbers);

// console.log(`${max}`)
// console.log(`${min}`)


const numbers = findmaxandmin(arr)

function findmaxandmin(array)

{
    let max =array[0]

    for(let i =1;i<array.length;i++)
        {
           if (array[i] > max)
            {
            max =array[i]
            }
        }
        return  max  
}
console.log(numbers)





