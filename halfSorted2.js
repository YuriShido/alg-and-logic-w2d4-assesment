// Write a function that takes in an array, and sorts the first
// half of the array in ascending order, and the second half 
// of the array in descending order

// you may use methods for this. 

let arr1 = [4, 78, 54, 34, 2, 8, 45, 77, 99, 23, 567, 6, 7]

let arr2 = [56, 98, 65, 3, 4, 58, 68, 90, 12, 34, 45]


const halfSorted = function(arr) {
//  let halfIndex = Math.floor(arr[(arr[0] + arr[arr.length -1]) / 2]);
  let halfIndex = Math.floor((arr.length - 1) / 2)
    // console.log(halfIndex)
  let ascendingArr = arr.slice(0, halfIndex);
    // console.log(ascendingArr);
  let descendingArr = arr.slice(halfIndex, arr.lengh);
    // console.log(descendingArr);
  // let resultArr =''  
    ascendingArr = ascendingArr.sort((a,b) => {return a - b})
    //  console.log(ascendingArr);

    descendingArr = descendingArr.sort((a,b) => {return b - a})
    //  console.log(descendingArr);
    
     let resultArr = ascendingArr.concat(descendingArr);
        
    return resultArr;
   
};
 

console.log(halfSorted(arr1));

//results --> [2, 4, 8, 34, 54, 78, 567, 99, 77, 45, 23, 7, 6]

console.log(halfSorted(arr2));

//results --> [3, 4, 56, 58, 65, 98, 90, 68, 45, 34, 12]

// make half array declar valuable
//for loop each line 
//put together in the end