import type { QueryResolvers } from 'types/graphql'

import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'

export const characters: QueryResolvers['characters'] = async () => {
  const result = await db.character.findMany()
  logger.debug(result, 'So many characters')

  return result
}

export const character: QueryResolvers['character'] = ({ id }) => {
  return db.character.findUnique({
    where: { id },
  })
}
