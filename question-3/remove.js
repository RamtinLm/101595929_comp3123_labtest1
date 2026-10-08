const fs = require('fs')
const path = require('path')


// build the Logs path from the current working directory
const logsDir = path.join(process.cwd(), 'Logs')


// only run if the "Logs" folder exists
if (fs.existsSync(logsDir)) {
  // get all files inside Logs
  const files = fs.readdirSync(logsDir)

  // print each file name, then delete it
  files.forEach((file) => {
    console.log(`delete files...${file}`)
    fs.unlinkSync(path.join(logsDir, file))
  })

  // remove the empty Logs folder
  fs.rmdirSync(logsDir);
} else {
  console.log('Logs directory does not exist!!');
}