// import the gql tagged template function
const { gql } = require('apollo-server-express');

const typeDefs =gql`
type User {
    _id: ID
    username: String
    email: String
    savedBooks: [Book]
    bookCount: Int

}

type Book {
    _id: ID
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
}

type Query {
    me: User
}

input SavedBookInput {
  authors: [String]
  description: String
  bookId: String
  image: String
  link: String
  title: String
}

type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: SavedBookInput): User
    deleteBook(bookId: ID!): User
  }

`;



module.exports = typeDefs;