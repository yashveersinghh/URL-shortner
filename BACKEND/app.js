import express from 'express';
import {nanoid} from "nanoid";
import dotenv from 'dotenv';
import connectDB from "./src/config/mongo.config.js";
import urlSchema from "./src/models/shortUrl.model.js";
import shortUrl from "./src/routes/shortUrl.route.js";
import { redirectFromShortUrl } from './src/controller/shortUrl.controller.js';

dotenv.config("./.env");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/create",shortUrl)

app.get("/:id",redirectFromShortUrl)

connectDB().then(() => {
  app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
  });
})