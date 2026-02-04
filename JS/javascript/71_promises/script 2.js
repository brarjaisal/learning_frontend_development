const resolveBtn = document.getElementById("resolveBtn");
const rejectBtn = document.getElementById("rejectBtn");

const p = new Promise((resolve, reject) => {
    resolveBtn.addEventListener("click", () => {
        resolve("Promise resolved!");
    });

    rejectBtn.addEventListener("click", () => {
        reject("Promise rejected!");
    });
});

p.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})

setTimeout(() => {
    console.log("This is from setTimeout");
}, 0);


// note: To test, click the "Resolve Button" to see the resolved message in the console, or click the "Reject Button" to see the rejected message.
// This demonstrates how Promises can handle asynchronous events based on user interactions.
// You can open the browser console to see the output when you click the buttons.
// resolveBtn and rejectBtn are buttons added to the HTML to trigger the resolve and reject functions of the Promise.
// This example shows how Promises can be used to manage asynchronous operations in JavaScript, particularly in response to user actions.
// The Promise will either resolve or reject based on which button is clicked.
// The .then() method is used to handle the resolved state, while the .catch() method handles the rejected state.
// This pattern is useful for managing asynchronous code in a more readable and maintainable way compared to traditional callback functions.
// In this example, the Promise does not execute immediately; instead, it waits for user interaction to determine its outcome.
// This approach is particularly useful in web development, where user actions often dictate the flow of the application.
// The use of Promises helps to avoid "callback hell" and makes the code cleaner and easier to understand.
// The event listeners on the buttons ensure that the Promise's state is determined by user actions, demonstrating the flexibility of Promises in handling asynchronous events.
// This example can be expanded further by adding more complex logic within the resolve and reject handlers, such as updating the UI or making additional asynchronous calls based on the outcome of the Promise.

// microtask queue: The .then() and .catch() handlers are added to the microtask queue, ensuring they execute after the current synchronous code completes but before any macrotasks/callback queue (like setTimeout) are processed.
// This ensures that the Promise's resolution or rejection is handled promptly after the event that triggered it.
// microtasks have higher priority than macrotasks, so they will execute before any pending setTimeout or other macrotask callbacks.
// This behavior is crucial for maintaining the responsiveness of web applications, as it allows for immediate handling of Promise outcomes without unnecessary delays.
// Understanding the event loop and the distinction between microtasks and macrotasks is essential for effective asynchronous programming in JavaScript.
// By leveraging Promises and their associated microtask handling, developers can create more efficient and user-friendly web applications.
// This example serves as a foundational demonstration of how Promises operate within the JavaScript event loop, highlighting their role in managing asynchronous code execution.
// The event loop continuously checks the call stack and the task queues (microtask and macrotask) to determine what code to execute next.
// When a Promise is resolved or rejected, its associated handlers (.then() or .catch()) are queued in the microtask queue.
// Once the current synchronous code execution completes, the event loop processes the microtask queue before moving on to any macrotasks.
// This ensures that Promise handlers are executed as soon as possible, maintaining a smooth and responsive user experience.
// In this example, clicking either button triggers the corresponding Promise state change, demonstrating how user interactions can drive asynchronous behavior in JavaScript applications. 

