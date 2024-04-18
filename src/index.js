import { app } from "./app.js";
import { connectDB } from "./db/connectDB.js";
import dotenv from 'dotenv'

dotenv.config()

connectDB()
.then(() => {
    const port = process.env.PORT || 5000
    app.listen(port, () => {
        console.log(`The Server is Running on port: ${port}`);
    })
}).catch((error) => {
    console.log(`Unable to run the server: ${error}`);
})