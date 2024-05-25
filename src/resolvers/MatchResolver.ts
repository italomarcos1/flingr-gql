import { Query, Resolver } from "type-graphql";
import { Match } from "../models/Match";

@Resolver()
export class MatchResolver {
  private matches: Match[] = [];

  @Query(() => [Match])
  async index(): Promise<Match[]> {
    return this.matches
  }

  
}