import { formatRFC7231, parseISO } from 'date-fns'

import { defer } from 'src/lib/defer'
import { logger } from 'src/lib/logger'

async function delayedTime(sentAt: string) {
  const now = formatRFC7231(new Date())
  const received = parseISO(sentAt)
  const receivedAt = formatRFC7231(received || new Date())

  logger.info(`It's now ${now}! (but, I received this job at ${receivedAt})`)
}

// the function must be wrapped with `defer()` and exported as default
export default defer(delayedTime)
