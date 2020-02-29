//Put libraries above of your own code
import axios from 'axios';

const accessKey = "34d3ec4f6587b987fb88b62179ec2ec122b66cfc7b14f6504d8d2aed365bd675";
const secret = "04827ee32ff3c67c9b4093b9e0f2e26afdab80be654b1de179f7cf3d4a3f7f46";
const baseUnsplash = "https://api.unsplash.com/"
//search/photos";

export default axios.create({
    baseURL:baseUnsplash,
    headers: {
        Authorization: "Client-ID " + accessKey,
      }
})