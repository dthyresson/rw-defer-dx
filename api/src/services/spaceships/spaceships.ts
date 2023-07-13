import type { QueryResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const spaceships: QueryResolvers['spaceships'] = () => {
  return db.spaceship.findMany()
}

export const spaceship: QueryResolvers['spaceship'] = ({ id }) => {
  return db.spaceship.findUnique({
    where: { id },
  })
}
