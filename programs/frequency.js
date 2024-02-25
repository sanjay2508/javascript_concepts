var data = ["a", "b", "a", "c", "b", "a"];
function frequency(arr) {
    var dict = [];
    arr.forEach(function (e) {
        if (dict[e]) {
            dict[e] += 1;
        }
        else {
            dict[e] = 1;
        }
    });
    console.log(dict);
    var res = arr.reduce(function (allName, name) {
        if (name in allName) {
            allName[name]++;
        }
        else {
            allName[name] = 1;
        }
        console.log(allName);
        return allName;
    }, {});
    console.log(res);
}
frequency(data);
