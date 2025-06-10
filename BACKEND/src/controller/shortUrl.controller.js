import { generateNanoId } from "../utils/helper.js";
import { getShortUrl } from "../dao/shortUrl.js";
import { createShortUrlWithoutUser } from "../services/shortUrl.service.js";
import wrapAsync from "../utils/tryCatchWrapper.js";

export const createShorUrl = wrapAsync(async(req,res,next)=>{
    const {url} = req.body;
    const shortUrl = await createShortUrlWithoutUser(url);
    res.send(process.env.APP_URL + shortUrl);
});

export const redirectFromShortUrl = wrapAsync(async(req,res)=>{
    const {id} = req.params;
    const url = await getShortUrl(id);
    if(!url) throw new Error("URL not found");
    res.redirect(url.full_url);
});