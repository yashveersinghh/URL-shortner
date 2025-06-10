import { generateNanoId } from "../utils/helper.js";
import { saveShortUrl } from "../dao/shortUrl.js";
import urlSchema from "../models/shortUrl.model.js";

export const createShortUrlWithoutUser = async(url) => {
    const shortUrl = await generateNanoId(7);
    if(!shortUrl) throw new Error("Short URL not generated")
    await saveShortUrl(shortUrl, url);
    return shortUrl
}
export const createShortUrlWithUser = async(url,userId) => {
    const shortUrl = await generateNanoId(7);
    await saveShortUrl(shortUrl, url, userId);
    return shortUrl
}