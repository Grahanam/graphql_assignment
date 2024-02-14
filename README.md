# GraphQL CRUD operations


## Getting Started

Follow these steps to get started with the project:

### Setup project

- First Clone this Repository

- Edit and Rename example.env file to .env 
```bash
url=mongodb_database_url
```

- Install Node Packages
```bash
npm install 
```

- Run the server
```bash
npm run start
```

### Done !!

Access the GraphQL playground (http://localhost:3000/) to perform CRUD operation:

-Query 
 To get all users
 ```bash
 {
  getUsers{
    name,
    age,
    email
  }
}
```
-Mutation
To create new user
```bash
mutation{
  createUser(
    name:"Luna"
    email:"luna5221@gmail.com"
    age:21
  ){
    id
  }
}

```
To delete user by Id
```bash
  mutation{
  deleteUser(
    id:"65ccbfc6b052ac8df2c1724f"
  ){
    id
  }
}
```


## Contact 

For any inquiries or questions,please react out: 
- [Gmail](mailto:lunasuthar5221@gmail.com)
- [Linkedin](https://www.linkedin.com/in/lunaramsuthar/)