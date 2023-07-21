function firstPromise() {
    const prom = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Sanjay");
        }, 5000)
    });
    return prom;
}
function secondPromise() {
    const promSecond = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Gangwar");
        }, 6000)
    });
    return promSecond;
}

function initPromise() {
    Promise.all([firstPromise(), secondPromise()])
        .then((x) => {
            console.log(x);
        })
        .catch((err) => {
            console.log(err);
        })
}

async function initAsync() {
    try {
        let a = await firstPromise();
        let b = await secondPromise();
        console.log(a + b);
    }
    catch (err) {
        console.log("error occurred");
    };
}

// initPromise();
initAsync();