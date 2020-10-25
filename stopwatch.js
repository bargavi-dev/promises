// #Stopwatch
// Create a simple stopwatch app that starts the timer and shows the stopped time.

// Start the stopwatch with a promise
// End the stopwatch on a random time between 1-10 seconds
// When the stopwatch stops, display the time it took



new Promise((resolve, reject) => {
    resolve(42);
})  .then(val => {
    console.log(val)
})











// new Promise((resolve, reject) => {
//     const randNum = Math.floor(Math.random() * 500);
//     setTimeout(() => {
//         resolve(randNum)
//     }, randNum)
// })
//     .then((number) => {
//         const title = document.createElement('h1')
//         title.textContent = number
//         document.body.appendChild(title);
// })