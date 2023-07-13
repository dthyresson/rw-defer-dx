import { formatRFC7231 } from 'date-fns'

import { defer } from 'src/lib/defer'
import { logger } from 'src/lib/logger'
import { resend } from 'src/lib/resend'

const emailMeEveryHour = async () => {
  const now = formatRFC7231(new Date())
  const message = `It's now ${now}! And am going to send an email.`
  logger.info(message)

  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [process.env.SEND_TO_EMAIL],
      subject: 'Hello World',
      html: `<strong>It works! ${message}</strong>`,
    })

    logger.debug(data, 'Sent email')
  } catch (error) {
    logger.error(error, 'Failed to send email')
  }
}

// “At minute 0 past every hour from 10 through 23 on every day-of-week from Monday through Friday.”
// UTC: 0 10-23 * * 1-5
export default defer.cron(emailMeEveryHour, '0 10-23 * * 1-5')
