const axios = require("axios")

const baseUrl = 'https://www.botlibre.com/rest/json/chat';

let conversationId = null;

async function botlibreApiRequest(getData) {
    const requestBody = {
        application: "1113494541749873390",
        instance: "43124108", // May Lin bot
        message: getData,
    };

    if (conversationId) {
        requestBody.conversation = conversationId;
    }

    const response = await axios.post(baseUrl, requestBody);
    const { data } = response;

    conversationId = data.converstation;

    return data; // botlibre api response
}

module.exports = {
    botlibreApiRequest,
}

/*
{
    "message": "Okay, I will remember that I am doing swell.",
    "conversation": "6114459598014036796",
    "emote": "LOVE",
    "avatar": "media/a22503805-0.mp4",
    "avatarType": "video/mp4",
    "avatarTalk": "media/a22225234-0.mp4",
    "avatarTalkType": "video/mp4",
    "avatarBackground": "media/a22225227-0.png"
}
*/
