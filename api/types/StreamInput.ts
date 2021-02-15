import { Stream } from './../entity/Stream'
import { ObjectId } from 'mongodb'
import { InputType, Field } from 'type-graphql'

@InputType()
export class StreamInput implements Partial<Stream> {
  @Field({ nullable: true })
  id?: ObjectId

  @Field()
  title: string

  @Field({ nullable: true })
  description?: string

  @Field()
  url: string
}
