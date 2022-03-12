function getNameFromCommandLine() {
    // Write you code here, name should be taken as args in process.argv
    // console.log(process)
    // console.log(process.argv)
    return process.argv[5];
}

function getNameFromEnv() {
    // Write your code here
    //   Process.env.name_node="asdfghjk";
    //   console.log(process.env)
    return process.env.name;


 }

function getNameFromReadLine() {
    // Write your code here
//     
      const readline = require("readline");
      const rl = readline.createInterface({
          input:process.stdin,
          output:process.stdout
      })
    //   rl.question('What is your age? ', (age) => {
    //     console.log('Your age is: ' + age);
    // });
  

 }
// getNameFromCommandLine()
// getNameFromEnv()
getNameFromReadLine()

module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}