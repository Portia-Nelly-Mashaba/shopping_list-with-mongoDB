import "dotenv/config";
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import connectDB from "./config/database.js";
import router from "./routes/api.js"

const app = express()
const PORT = process.env.PORT || 8080

connectDB()
app.use(cors())
app.use(express.json())
app.use('/api/v1', router)


// mongoose
// .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// .then(() => console.log("Connection Successful"))
// .catch((err) => console.error(err));


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
