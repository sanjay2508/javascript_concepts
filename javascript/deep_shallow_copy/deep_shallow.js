var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var t = {
    name: 'sanjay',
    address: {
        state: "UP"
    }
};
var w = t;
// w.name = "Aditi";
console.log(t);
// t.name will print "Aditi"
////------Shallow Copy-----------//////
console.log("------Shallow Copy-----------");
// let obj2 = Object.assign({}, t);
var obj2 = __assign({}, t);
console.log(obj2);
obj2.address.state = "Bihar";
console.log(t);
//////------Deep Copy-----------//////
console.log("------Deep Copy-----------");
var deep = {
    name: 'sanjay',
    address: {
        state: "UP"
    }
};
var objDeep = JSON.parse(JSON.stringify(deep));
objDeep.address = "test";
console.log(deep);
console.log(objDeep);
//----------Problem with deep copy--------//
var deepFn = {
    name: 'sanjay',
    address: {
        state: "UP"
    },
    fn: function () {
        return;
    }
};
var objDeepFn = JSON.parse(JSON.stringify(deepFn));
console.log(objDeepFn);
