import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on('connected', () => console.log("Database connected"))
    await mongoose.connect(`${process.env.MONGODB_URL}/medico`)
}

export default connectDB