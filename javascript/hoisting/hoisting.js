function a() {
    // console.log(name);
    var name = "sanjay";
    b();
    function b() {
        console.log(name);
    }
}
a();
// console.log(name);
