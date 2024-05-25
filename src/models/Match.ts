import { Field, ID, ObjectType } from "type-graphql";
import { User } from "./User";
import { Chat } from "./Chat";

@ObjectType()
export class Match {
  @Field(() => ID)
  id: string;

  @Field(() => User)
  user1: User
  
  @Field(() => User)
  user2: User
  
  @Field(() => Chat)
  chat: Chat

  @Field()
  createdAt: string
}