const { buildSchema } = require('graphql');

module.exports = buildSchema(
  `
        type Post {
            id: ID!
            title: String!
            description: String!
        }

        input PostInput {
            title: String
            description: String
        }

        type ServerMessage {
            message: String!
        }

        type Query {
            posts: [Post!]!
            post(id: ID!): Post!
        }

        type Mutation {
            createPost(post: PostInput!): ServerMessage!
            updatePost(id: ID!, post: PostInput): ServerMessage!
            deletePost(id: ID!): ServerMessage!
        }
    `
);
