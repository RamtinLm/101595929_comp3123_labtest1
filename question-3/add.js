const fs = require('fs')
const path = require('path')

// Build the Logs path from the current working directory
const logsDir = path.join(process.cwd(), 'Logs')

// create the Logs folder if it does not exist
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir)
}


// move the process into the Logs folder
process.chdir(logsDir)

// create 10 log files, write some text, print the name
for (let i = 0; i < 10; i++) {
  const fileName = `log${i}.txt`
  fs.writeFileSync(fileName, `This is log file number ${i}`);
  console.log(fileName);

}