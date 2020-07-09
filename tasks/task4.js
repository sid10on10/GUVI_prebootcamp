let myobject = {
    1:"one",
    11:1,
    "name":"arun"
};

// console.log(myobject.11); error
console.log(myobject[11])
console.log(myobject.name);

myobject["ten"] = "ten";

console.log(myobject);
