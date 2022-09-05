const readline = require("readline");
const request = require(`request`)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
var i = 0;
rl.question("Github Camoo Link: ", function (answer) {
    setInterval(() => {
        request(answer)
        i = i+1
        console.log(`Successfully requested. Request Number: ${i}`);
    }, 2000);
});