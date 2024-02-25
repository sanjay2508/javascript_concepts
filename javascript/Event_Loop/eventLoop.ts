console.log("start")

console.log(a)
let a = 10;

setTimeout(() => {
    console.log("inside settimeout")
});
setTimeout(() => {
    console.log("inside 2nd settimeout")
});

console.log("end")