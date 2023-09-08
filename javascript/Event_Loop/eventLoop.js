console.log("start");
console.log(a);
var a = 10;
setTimeout(function () {
    console.log("1st settimeout");
}, 10);
setTimeout(function () {
    console.log("2nd settimeout");
});
console.log("end");
