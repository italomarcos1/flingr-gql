import { Field, ID, ObjectType } from "type-graphql";
import { Match } from "./Match";
import { Message } from "./Message";

@ObjectType()
export class Chat {
  @Field(() => ID)
  id: string

  @Field(() => Match)
  match: Match

  @Field(() => [Message])
  messages: Message[]
}