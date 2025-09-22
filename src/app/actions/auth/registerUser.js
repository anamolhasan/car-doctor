'use server'
import bcrypt from 'bcrypt'
import dbConnect, { collectionNameObj } from "@/lib/dbConnect"

export const registerUser = async(payload) => {
    console.log(payload)
    const userCollection = dbConnect(collectionNameObj.userCollection)

    // validation
    const {email, password} = payload
    if(!email || !password) return null
    const user = await userCollection.findOne({email: payload.email})

    if(!user){
        const hashedPassword = await bcrypt.hash(password, 10)
        payload.password = hashedPassword
         const result = await userCollection.insertOne(payload)
         // ObjectId কে string এ রূপান্তর করো
        return {
            acknowledged: result.acknowledged,
            insertedId: result.insertedId.toString(),
        }
    }

    return null;
}