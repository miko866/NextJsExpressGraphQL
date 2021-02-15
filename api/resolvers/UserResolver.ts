import { ObjectIdScalar } from './../schema/object-id.scalar'
import { MyContext } from './../types/MyContext'
import { Resolver, Query, UseMiddleware, Arg, Ctx } from 'type-graphql'
import { ObjectId } from 'mongodb'
import { isAuth } from '../middleware/isAuth'
import { User, UserModel } from '../entity/User'

@Resolver(() => User)
export class UserResolver {
  @Query(() => User, { nullable: true })
  async user(@Arg('userId', () => ObjectIdScalar) userId: ObjectId) {
    return await UserModel.findById(userId)
  }

  @Query(() => User, { nullable: true })
  @UseMiddleware(isAuth)
  async currentUser(@Ctx() ctx: MyContext): Promise<User | null> {
    return await UserModel.findById(ctx.res.locals.userId)
  }
}
