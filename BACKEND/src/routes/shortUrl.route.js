import express from "express";
import { createShorUrl } from "../controller/shortUrl.controller.js";
const router = express.Router();

router.post("/", createShorUrl)

export default router;