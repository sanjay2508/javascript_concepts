let data = ["a", "b", "a", "c", "b", "a"];

function frequency(arr) {
    let dict = [];
    arr.forEach((e) => {
        if (dict[e]) {
            dict[e] += 1;
        }
        else {
            dict[e] = 1;
        }
    });
    console.log(dict);

    // let res = arr.reduce((allName, name) => {
    //     if (name in allName) {
    //         allName[name]++;
    //     } else {
    //         allName[name] = 1;
    //     }
    //     console.log(allName);
    //     return allName;
    // }, {})
    // console.log(res);
}

frequency(data);