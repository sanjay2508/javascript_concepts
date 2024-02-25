function counter(initialValue = 0) {
    let count = initialValue;
    {
        let glo = 20;
    }
    console.log(glo);
    const increment = () => {
        count++;
        return count;
    }

    const decrement = () => {
        return count--;
    }

    return {
        increment,
        decrement
    }
}

let count = counter();
console.log(count.increment())
console.log(count.increment())