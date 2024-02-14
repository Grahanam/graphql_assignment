
const User=require('../model/userModel')

const resolvers={
    // query to get all users
    getUsers:async({id})=>{
        try{
            const users=await User.find()
            return users

        }catch(err){
            throw new Error("Error retreiving user")
        }
    },

    // mutation to create user
    createUser:async({name,email,age})=>{
        try{
            const user=new User({
                name:name,
                email:email,
                age:age
            })

            await user.save()
            return user
        }catch(err){
            throw new Error("Error creating user")
        }
    },

    //mutation to delete user by Id
    deleteUser:async({id})=>{
        try{
            const user=await User.findByIdAndDelete(id)
            return user
        }catch(err){
            throw new Error("Error deleting user")
        }
    }
}

module.exports=resolvers

