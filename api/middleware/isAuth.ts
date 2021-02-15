import { MyContext } from '../types/MyContext'
import { MiddlewareFn } from 'type-graphql'
import jwt from 'jsonwebtoken'

const APP_SECRET = process.env.SESSION_SECRET || 'unicorn'

export const isAuth: MiddlewareFn<MyContext> = async ({ context }, next) => {
  const authorization = context.req.headers['authorization']
  try {
    const token = authorization?.replace('Bearer ', '')
    const user = jwt.verify(token!, APP_SECRET) as any
    context.res.locals.userId = user.id
    return next()
  } catch (error) {
    throw new Error(error.message)
  }
}
