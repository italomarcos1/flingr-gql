import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;
  
  @Field()
  email: string;
  
  @Field()
  password: string;
  
  @Field()
  profilePicture?: string;
  
  @Field()
  bio: string;
  
  @Field()
  age: number;
  
  @Field()
  gender: string;
}