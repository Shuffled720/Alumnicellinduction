import Express  from "express";
import mongoose from "mongoose";
import cors from 'cors';
import bodyParser from 'body-parser';




import Router from './routes/router.js'
import Connection from "./database/db.js";

const app=Express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router)


const PORT=process.env.PORT || 8000;


mongoose.set("strictQuery", false);

Connection();

app.listen(PORT, ()=>console.log(`Server is running successfully on port ${PORT}`));