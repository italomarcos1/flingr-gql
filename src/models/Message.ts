import { Field, ID, ObjectType } from "type-graphql";
import { Chat } from "./Chat";
import { User } from "./User";

@ObjectType()
export class Message {
  @Field(() => ID)
  id: string

  @Field()
  content: string

  @Field(() => User)
  sender: User

  @Field(() => User)
  receiver: User

  @Field(() => Chat)
  chat: Chat

  @Field()
  createdAt: string
}