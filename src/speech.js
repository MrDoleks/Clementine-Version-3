const sdk = require("microsoft-cognitiveservices-speech-sdk");
const key = "d9d29a9f8fcb4e4899c6af85d2b288bc";
const region = "eastus";
const speechConfig = sdk.SpeechConfig.fromSubscription(key, region);
speechConfig.speechSynthesisVoiceName = "en-US-SaraNeural"; 
const synthesizer = new sdk.SpeechSynthesizer(speechConfig);
async function speech(text){
    return new Promise((resolve,reject)=>{
        synthesizer.speakTextAsync(text,
            (result)=>{
                resolve(result.privAudioData)
            },
            (error) =>{
                reject(error)
            }
            );
    }); 
}
module.exports=  {
    speech,
}