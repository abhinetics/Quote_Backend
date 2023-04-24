import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import userRoutes from "./routes/users.js";
const app = express()
const port =5500;

app.use(bodyParser.json());
app.use(cors());

app.use('/',userRoutes);
app.get('/',(req,res)=> {
    res.send('Hello to Quote API')
})
app.all("*", (req, res) => {
    res.status(404).json({ message: "Route not found" });
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})
