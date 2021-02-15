import { GraphQLScalarType, Kind } from 'graphql'
import { ObjectId } from 'mongodb'

export const ObjectIdScalar = new GraphQLScalarType({
  name: 'objectid',
  description: 'Mongo id scalar type',
  parseValue(value: string) {
    return new ObjectId(value) // input type from client
  },
  serialize(value: ObjectId) {
    return value.toHexString() // send to client
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      // from user query
      return new ObjectId(ast.value)
    }
    return null
  },
})
