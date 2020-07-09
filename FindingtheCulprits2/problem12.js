var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]]
let mystr = "";

for(let i=numsArr.length-1;i>=0;i--){
    let inner_array = numsArr[i]
    for(let j=inner_array.length-1;j>=0;j--){
        mystr+= " "+inner_array[j]
    }
}
console.log(mystr)
