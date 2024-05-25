import crypto from "crypto";
import { Arg, FieldResolver, Mutation, Query, Root } from "type-graphql";
import { Like } from "../models/Like";
import { User } from "../models/User";

export class LikeResolver {
  private likes: Like[] = [];
  
  @Query(() => [Like])
  async index(): Promise<Like[]> {
    return this.likes;
  }

  @Mutation(() => Like)
  async sendLike(
    @Arg("senderId") senderId: string,
    @Arg("receiverId") receiverId: string,
  ): Promise<Like> {
    const like = Object.assign(new Like(), {
      id: crypto.randomUUID(),
      senderId,
      receiverId,
      createdAt: new Date().toISOString()
    })

    this.likes.push(like)

    return like;
  }

  // @FieldResolver(() => User)
  // async getSender(@Root() like: Like): Promise<User> {
  //   return new User()
  // }
}