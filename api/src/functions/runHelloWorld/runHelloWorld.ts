import type { APIGatewayEvent, Context } from 'aws-lambda'

import helloWorld from 'src/jobs/defer/helloWorld'
import { logger } from 'src/lib/logger'

export const handler = async (event: APIGatewayEvent, _context: Context) => {
  logger.info(`${event.httpMethod} ${event.path}: runHelloWorld function`)

  await helloWorld(event.queryStringParameters['name'] || 'World')

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ok: true,
    }),
  }
}
