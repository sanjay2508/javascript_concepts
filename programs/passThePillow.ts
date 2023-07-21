function passThePillow(n: number, time: number): number {
    // let val: number = Math.floor(time / (n - 1));


    // if (val % 2 === 0) {
    //     return 1 + (time % (n - 1));
    // } else {
    //     return n - (time % (n - 1));
    // }
    if (n === 2) {
        if (time % 2 === 0)
            return 1
        else
            return 2
    }
    if (n === time + 1) {
        return n
    }

    if (time > ((n - 2) + n)) {
        time = time % ((n - 2) + n)
    }

    if (n <= time) {
        let times = n - ((time + 2) - n);
        return passThePillow(n, times)
    }
    else {
        if (n > time)
            return (time + 1)
    }
};

console.log(passThePillow(33, 218))


64

// 2
// 3   4   1
// 4   6   2
// 5   8   4
// 6   10  4
// 7   12  5
// 8   14  6