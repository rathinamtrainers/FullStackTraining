function processOrder(order) {
    console.log(`Order ID: ${order.id}`)

    const LARGE_ORDER_LIMIT = 100;

    console.group("Order Items:")
    let total = 0
    order.items.forEach((item, index) => {
        console.log(`${index + 1 }. ${item.name} - ${item.price} x ${item.quantity}`)
        total += item.price * item.quantity
    });
    console.groupEnd()

    if (total > LARGE_ORDER_LIMIT) {
        console.warn("⚠️ Large order detected. Premium Customer! Apply discount...")
        // TODO: Apply discount here
    }

    return total;
}


const sampleOrder = {
    id: "ORD=001",
    items: [
        { name: 'Laptop', price: 999.999, quantity: 1},
        { name: 'Mouse', price: 150.234, quantity: 2},
        { name: 'Keyboard', price: 200.555, quantity: 1}
    ]
};

let total = processOrder(sampleOrder)
console.log(`Total: ${total.toFixed(2)}`)

// Console Assert
console.log("➡️ Console Assert")
total = -10
console.assert(total >= 0, "Invalid total, it can't be allowed")
console.log("Am I executed?")

// Assert module
console.log("➡️ Assert Module")
const assert = require("assert")
try {
    assert(total >= 0, "Invalid total, it can't be allowed")
    console.log("Am I executed?")
} catch (err) {
    console.log("❌ Assertion Failed: ", err.message)
}

