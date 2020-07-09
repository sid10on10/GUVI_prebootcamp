let numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];

for (let i = 0; i < numsArr.length; i++){
 let inner_array = numsArr[i]
 for(var j = 0 ; j < inner_array.length;j++ ){
     if(j%2===0){
         inner_array[j] = "even"
     }
}
}
console.log(numsArr);
