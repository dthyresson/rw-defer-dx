// the `defer()` helper will be used to define a background function
import { defer } from 'src/lib/defer'
import { logger } from 'src/lib/logger'

// a background function must be `async`
async function helloWorld(name: string) {
  return new Promise((resolve) => {
    setTimeout(() => {
      logger.info(`Hello ${name}!`)
      resolve('done')
    }, 5000)
  })
}

// the function must be wrapped with `defer()` and exported as default
export default defer(helloWorld)
