import { Field, ID, ObjectType } from "type-graphql";
import { User } from "./User";

@ObjectType()
export class Like {
  @Field(() => ID)
  id: string;

  @Field()
  senderId: string;
  
  @Field()
  receiverId: string;

  @Field(() => User)
  sender: User;
  
  @Field(() => User)
  receiver: User;
  
  @Field()
  createdAt: string;
}