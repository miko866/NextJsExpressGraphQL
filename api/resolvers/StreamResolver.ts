import { StreamModel } from './../entity/Stream'
import { isAuth } from './../middleware/isAuth'
import { Stream, StreamInput } from './../types/StreamInput'
import { ObjectIdScalar } from './../schema/object-id.scalar'
import { User, UserModel } from './../entity/User'
import { MyContext } from './../types/MyContext'
import { ObjectId } from 'mongodb'
import {
  Resolver,
  Query,
  Mutation,
  FieldResolver,
  Ctx,
  Arg,
  Root,
  UseMiddleware,
} from 'type-graphql'

@Resolver(() => Stream)
export class StreamResolver {
  @Query(() => Stream, { nullable: true })
  stream(@Arg('streamId', () => ObjectIdScalar) streamId: ObjectId) {
    return StreamModel.findById(streamId)
  }
}
