import mongose from "mongoose";

export default async function connectDB() {
    try {
        mongose.connection.on('connected',()=>{console.log('Database Connected Successfully')})
        await mongose.connect(`${process.env.MONGODB_URL}`)
    } catch (error) {
        console.log(error.message);
    }
}