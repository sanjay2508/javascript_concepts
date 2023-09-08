function removeDuplicate(arr) {
    let element = [];
    let dict = {};
    arr.forEach((e) => {
        if (dict[e] === undefined) {
            element.push(e);
            dict[e.toString()] = e;
        }
    })
    return element;
}

console.log(removeDuplicate([1, 2, 3, 4, 3, 2, 6, 8, 3, 9, 1]))