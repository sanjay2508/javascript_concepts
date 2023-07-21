console.log("start");
console.log(a);
var a = 10;
setTimeout(function () {
    console.log("inside settimeout");
}, 1);
setTimeout(function () {
    console.log("inside 2nd settimeout");
});
console.log("end");
