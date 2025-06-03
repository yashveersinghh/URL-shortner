import { generateNanoId } from "../utils/helper.js";
import { getShortUrl } from "../dao/shortUrl.js";
import { createShortUrlWithoutUser } from "../services/shortUrl.service.js";

export const createShorUrl = async(req,res)=>{
    const {url} = req.body;
    const shortUrl = await createShortUrlWithoutUser(url);
    res.send(process.env.APP_URL + shortUrl);
}

export const redirectFromShortUrl = async(req,res)=>{
    const {id} = req.params;
    const url = await getShortUrl(id);
    if(url){
        res.redirect(url.full_url);
    }else{
        res.status(404).send("URL not found");
    }
}