function a() {
    // console.log(name);
    let name = "sanjay";
    b();
    function b() {
        console.log(name);
    }
}

a()
// console.log(name);