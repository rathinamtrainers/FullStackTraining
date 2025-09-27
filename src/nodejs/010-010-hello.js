console.log("Hello, I love Node.js programming!!!")

console.log("First cmd line arg: ", process.argv[0])
console.log("Second cmd line arg: ", process.argv[1])
console.log("Third cmd line arg: ", process.argv[2])

console.log("Argv: ", process.argv)
console.log("Env: ", process.env)

console.log("Env: Path Variable => ", process.env.Path)
console.log("Env: USER Variable => ", process.env.USER)
console.log("Env: Node.js Env Variable => ", process.env.NODE_ENV)

const name = process.argv[2];
console.log("Hello ", name, " 😍")
console.log(`Hello, ${name} 😍`)
console.log("Hello %s 😍", name)

console.log("Node.js version: ", process.version)
console.log("Current working directory: ", process.cwd())

console.info("ℹ️ Login successful. Enjoy the system.")
console.warn("⚠️ This value is deprecated. Don't use it in future version.")
console.error("❌ ☠️ Error occurred while accessing cloud database. Please check network connectivity.")


const user = {
    name: "Rajan",
    age: 46,
    city: "Coimbatore",
    country: "India"
}

const skills = [
    "AI",
    "Cloud",
    "Programming",
    "OS",
    "Hacking"
]
console.log(`User object: ${user}`)
console.log(`User object: ${JSON.stringify(user, null,  2)}`)
console.log("User object: ", user)
console.log(`Skills: ${skills}`)

console.log("User: ", user, "Skills: ", skills)
console.log(`User: ${JSON.stringify(user)}  => Skills: ${skills}`)

console.log("User: ")
console.dir(user)

const util = require("util")
console.log("User: ", util.inspect(user))


const product = "Laptop"; const price =  999.99;
console.log(`Product: ${product}, Price: ${price}`)
console.log("Product: %s, Price: %f", product, price)

const employees = [
    {name: "Prince", dept: "Engineering", salary: 200000},
    {name: "Khalil", dept: "Marketing", salary: 100000},
    {name: "Rajan", dept: "Sales", salary: 40000}
]

console.table(employees)

for (let i = 0; i < 5; i++) {
    console.log(`Loop Iteration: ${i + 1}`)
}

console.time("Operation Timer")
let sum = 0
for (let i = 0; i < 1000000; i++) {
    sum = sum + i
}
console.log(`Sum = ${sum}`)
console.timeEnd("Operation Timer")

process.exit(0)

