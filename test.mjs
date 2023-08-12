import fs, {  } from 'fs'
import path from 'path'
import { argv } from 'process'
import { exec } from 'child_process'
import chalk from 'chalk'

const fileName = `${argv[2]}.ts`
const __dirname = path.dirname(new URL(import.meta.url).pathname)
const dirs = fs.readdirSync(path.join(__dirname, "src"))

// I will run this script from the root of the project, eg: node test.js bubbleSort
// So I want find the file in the src folder or in the subfolders
// I will use a recursive function to find the file
const findFile = (dirs, accDir = [], i = 0) => {
  for (const dir of dirs) {
    const dirPath = path.join(__dirname, "src", ...accDir, dir)
    const stats = fs.statSync(dirPath)
    if (stats.isDirectory()) {
      const filePath = findFile(fs.readdirSync(dirPath), [...accDir, dir], i + 1)
      if (filePath) {
        return filePath
      }
    } else if (dir === fileName) {
      return path.join(__dirname, "src", ...accDir, dir)
    }
  }
}

const filePath = findFile(dirs)

if (filePath) {
  console.log(`Running ${filePath}`)
  exec(`ts-node ${filePath}`, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`)
      return
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`)
      return
    }
    console.info(chalk.green(stdout))
  })
}
