let t = {
    name: 'sanjay',
    address: {
        state: "UP"
    }
}

let w = t;
// w.name = "Aditi";

console.log(t);
// t.name will print "Aditi"

////------Shallow Copy-----------//////
console.log("------Shallow Copy-----------");
// let obj2 = Object.assign({}, t);
let obj2 = { ...t };
console.log(obj2);
obj2.address.state = "Bihar";
console.log(t);

//////------Deep Copy-----------//////
console.log("------Deep Copy-----------");
let deep = {
    name: 'sanjay',
    address: {
        state: "UP"
    }
}

let objDeep = JSON.parse(JSON.stringify(deep));
objDeep.address = "test";
console.log(deep);
console.log(objDeep);

//----------Problem with deep copy--------//
let deepFn = {
    name: 'sanjay',
    address: {
        state: "UP"
    },
    fn: function () {
        return;
    }
}

let objDeepFn = JSON.parse(JSON.stringify(deepFn));
console.log(objDeepFn);