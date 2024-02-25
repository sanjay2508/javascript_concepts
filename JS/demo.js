const items = [
    { name: 'Pencil', price: '2.284' },
    { name: 'Rubber', price: '3.234' },
    { name: 'Books', price: '4.254' },
    { name: 'Bags', price: '5.294' },
    { name: 'Shoes', price: '6.274' }
]

function increasePrice(items) {
    let res = items.map((item) => (
        ((parseInt(item.price) * 1.1))
    ))
    console.log(res);
}

increasePrice(items)