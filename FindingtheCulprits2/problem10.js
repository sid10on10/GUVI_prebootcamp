let numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
let str_all="";
for (let i = 0; i < numsArr.length; i++){
 let inner_array = numsArr[i]
 for(var j = 0 ; j < inner_array.length;j++ ){
     str_all +=inner_array[j]
}
}
console.log(str_all);
