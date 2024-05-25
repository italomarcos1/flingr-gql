import "reflect-metadata"
import path from "path"
import http from "http"
import { buildSchema } from "type-graphql"
import { createYoga } from "graphql-yoga"

import { UserResolver } from './resolvers/UserResolver'
import { LikeResolver } from './resolvers/LikeResolver'
import { MatchResolver } from './resolvers/MatchResolver'

import { pubSub } from "./pubsub"


(async () => {
  const schema = await buildSchema({
    resolvers: [UserResolver, LikeResolver, MatchResolver],
    emitSchemaFile: path.resolve(__dirname, "schema.graphql"),
    pubSub
  })

  const yoga = createYoga({
    schema,
    graphqlEndpoint: "/graphql"
  })

  const httpServer = http.createServer(yoga)

  httpServer.listen(4000, () => console.log("[FLINGR] - online"))

})()