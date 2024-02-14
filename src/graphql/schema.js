const {buildSchema}=require('graphql')

const schema=buildSchema(
    `type User{
        id:ID!
        name:String!
        email:String!
        age:Int!
    }
    type Query{
        getUsers:[User]
    }
    type Mutation{
        createUser(name:String!,email:String!,age:Int!):User
        deleteUser(id:ID!):User
    }
    `
)


module.exports=schema