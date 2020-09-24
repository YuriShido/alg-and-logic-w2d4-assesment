// write a insertion sort algorithm based on the video shown in class.
// should take in an array, and sort it into ascending order using 
// insertion sorting logic

let arr1 = [4, 78, 54, 34, 2, 8, 45, 77, 99, 23, 567, 6, 7];

let arr2 = [56, 98, 65, 3, 4, 58, 68, 90, 12, 34, 45];


const insertionSort = function(arr) {
  // let arrLeft = arr.slice(0, j - 1)
 for(i = 0; i < arr.length; i++) {
  //  console.log(arr[i])
   for(j = 0; j < i ; j++) {
    //  console.log(arr[j])
    if(arr[i] < arr[j]) {
      console.log(arr[i] + 'smaller than' + arr[j])
      let stole = arr[j];
      arr[j] = arr[i];
      arr[i] = stole;
      // arr.splice(j, 1, arr[i]);
      // if()
      // let stole = 
      console.log('newArray' + arr)
    } else { console.log('No ' +  arr[i] + ' bigger than' + arr[j])

      }
    } 
 } return arr;
};

console.log(insertionSort(arr1));

// console.log(insertionSort(arr2));

//arrを左側のと比べておく場所のArrayを保管して間に入れる
//交換でなく間に入れる入れ方…