//pseudo code
// node myFile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// New timers, tasks, operations are recorded from myFile running
myFile.runContents();

//helper function
function shouldContinue() {
	//Check one: any pending setTimeout, setInterval, setImmediate
	//Check two: any pending OS tasks? (Like server listening to a port)
	//Check three: any pending long running operations? ( Like fs module)

	return (
		pendingTimers.length || pendingOSTasks.length || pendingOperations.length
	);
}

// ENTIRE BODY EXECUTES IS ONE 'TICK'
while (shouldContinue()) {
	// 1) node looks at pendingTimers and sees if any functions are ready to be called
	//2) Node looks at pendingOSTasks and pendingOperations and call relelvant callbacks
	// 3) Node pauses execution. Continue when...
	// - a new pendingOSTask is done
	// - a new pendingOperation is done
	// - a timer is about to complete
	// 4) looks at pendingTimers. call any setImmediate
	// 5) handle any 'close' events
}

// exit back to terminal.
