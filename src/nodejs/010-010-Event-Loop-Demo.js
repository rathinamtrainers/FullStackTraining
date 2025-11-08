const fs = require('fs');
const net = require('net')

console.log('-----Event Loop Demonstration----')

function demonstrateCallStack() {
    function first() {
        console.log('   -> In first()')
        second()
        console.log('   <- Leaving first()')
    }

    function second() {
        console.log('   -> In second()')
        third()
        console.log('   <- Leaving second()')
    }

    function third() {
        console.log('   -> In third()')
        console.log('   <- Leaving third()')
    }

    console.log('CALL STACK Demonstration:')
    console.log('-------------------------')
    first()
    console.log('=========================')
}

function demonstrateEventLoop() {
    console.log('Event Loop Demonstration:')
    console.log('-------------------------')
    setImmediate(() => {
       console.log('   -> setImmediate (Check phase)')
    });

    setTimeout(() => {
        console.log('   -> setTimeout 0ms (Timers phase)')
    }, 0);

    process.nextTick(() => {
        console.log('   -> process.nextTick (Priority queue)')
    });

    Promise.resolve().then(() => {
        console.log('   -> promise.resolve (Microtask queue)')
    });

    fs.readFile(__filename, 'utf8', (err, data) => {
        if (err) throw err;
        console.log('   -> fs.readFile callback (Poll Phase)')
        // schedule things inside an I/O Callback.
        setTimeout(() => console.log('  -> nested Timeout after I/O (Timers)'), 0);
        setImmediate(() => console.log('  -> nested setImmediate after I/O (Check)'))
    })
    console.log('=========================')
}

function checkServerHealth() {
    console.log("--------------------------------------")
    // Check a server health.
    const now = new Date()
    console.log(`${now.toString()}: Checking server health...`)
    console.log("Server Healthy :)")
    console.log("======================================")

    setTimeout(checkServerHealth, 5000)
}

function demonstratePendingCallbackPhase() {
    console.log("Callback Phase Demo: ")
    console.log("---------------------")
    const server = net.createServer(socket => {
        console.log("Got new client connection: ", socket)
        socket.on('data', data =>{
            console.log("Received: ", data.toString())
        });
    });
    server.listen(9005)
    console.log("=====================")
}

// Demo Area
demonstrateCallStack()
demonstrateEventLoop()
// checkServerHealth()
demonstratePendingCallbackPhase()