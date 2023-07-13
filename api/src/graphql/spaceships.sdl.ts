export const schema = gql`
  type Spaceship {
    id: Int!
    name: String!
    appearsIn: [Episode]!
  }

  enum Episode {
    NEW_HOPE
    EMPIRE_STRIKES_BACK
    RETURN_OF_THE_JEDI
    ROGUE_ONE
    PHANTOM_MENACE
    ATTACK_OF_THE_CLONES
    REVENGE_OF_THE_SITH
    THE_FORCE_AWAKENS
    THE_LAST_JEDI
    THE_RISE_OF_SKYWALKER
  }

  type Query {
    spaceships: [Spaceship!]! @requireAuth
    spaceship(id: Int!): Spaceship @requireAuth
  }
`
