function reverseString(str: string): string {
    let revString = '';
    for (let i = str.length - 1; i != 0; i = i - 1) {
        revString = revString + str[i];
    }
    return revString;
}

console.log(reverseString("sanjay"));