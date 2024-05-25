import crypto from "crypto";
import { Arg,  Mutation, Query, Resolver } from "type-graphql";
import { User } from "../models/User";

@Resolver()
export class UserResolver {
  private users: User[] = [];

  @Query(() => String)
  async healthCheck(): Promise<string> {
    return "alive and kickin'"
  }

  @Query(() => [User])
  async index(): Promise<User[]> {
    return this.users;
  }

  @Mutation(() => User)
  async createUser(
    @Arg("name") name: string,
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Arg("bio") bio: string,
    @Arg("age") age: number,
    @Arg("gender") gender: string,
  ): Promise<User> {
    const user = {
      id: crypto.randomUUID(),
      name,
      email,
      password,
      bio,
      age,
      gender
    }

    this.users.push(user);

    return user;
  }
}