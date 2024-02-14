require('dotenv').config()
const express=require('express')
const {graphqlHTTP}=require('express-graphql')
const mongoose=require('mongoose')
const schema=require('./graphql/schema')
const resolvers=require('./graphql/resolver')
const mongodburl=process.env.url
const app=express()

//graphql setup
app.use(
    "/",
    graphqlHTTP({
      schema,
      rootValue: resolvers,
      graphiql: true,
    })
  );

//mongoDB database connect
mongoose.connect(mongodburl, {
});
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

//Starting server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000/");
  });