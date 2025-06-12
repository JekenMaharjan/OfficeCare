import mongoose from 'mongoose'

async function connect() {
    const res = await mongoose.connect('mongodb://localhost:27017/OfficeCareDB')
    if (res) console.log("Successfully Connected to MongoDB!!");
}

export default connect;