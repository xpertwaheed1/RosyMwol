const Asena = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');

const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');
const ffmpeg = require('fluent-ffmpeg');
const Config = require('../config')

const FIND_DESC = "Find the song."

if (Config.WORKTYPE == 'private') {

Asena.addCommand({pattern: 'find', fromMe: true, desc: FIND_DESC }, (async (message, match) => {
    if (message.reply_message === false) return await message.client.sendMessage(message.jid, '*Reply to audio to search*', MessageType.text);
    var filePath = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });
    var form = new FormData();
    ffmpeg(filePath).format('mp3').save('music.mp3').on('end', async () => {
        form.append('api_token', '822e72c7422a16f94025b1416ce36cc0');
        form.append('file', fs.createReadStream('./music.mp3'));
        form.append('return', 'apple_music, spotify');
        var configs = {
            headers: {
                ...form.getHeaders()
            }
        }
        await axios.post('https://api.audd.io/', form, configs).then(async (response) => {
            var res = response.data
            if (res === 'success') {
                await message.client.sendMessage(message.jid, `Title: ${res.title}\nArtist: ${res.artist}`, MessageType.text);
            } else {
                await message.client.sendMessage(message.jid, '*Song not found ...*', MessageType.text);
            }
        }).catch((error) =>  {
            console.log(error);
        });
    });

}));
}

else if (Config.WORKTYPE == 'public') {
    
    Asena.addCommand({pattern: 'find', fromMe: false, desc: FIND_DESC }, (async (message, match) => {
    if (message.reply_message === false) return await message.client.sendMessage(message.jid, '*Reply to mp3 audio to search *', MessageType.text);
    var filePath = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });
    var form = new FormData();
    ffmpeg(filePath).format('mp3').save('music.mp3').on('end', async () => {
        form.append('api_token', '822e72c7422a16f94025b1416ce36cc0');
        form.append('file', fs.createReadStream('./music.mp3'));
        form.append('return', 'apple_music, spotify');
        var configs = {
            headers: {
                ...form.getHeaders()
            }
        }
        await axios.post('https://api.audd.io/', form, configs).then(async (response) => {
            var res = response.data
            if (res === 'success') {
                await message.client.sendMessage(message.jid, `Title: ${res.title}\nArtist: ${res.artist}`, MessageType.text);
            } else {
                await message.client.sendMessage(message.jid, '*Song not found ...*', MessageType.text);
            }
        }).catch((error) =>  {
            console.log(error);
        });
    });

}));
}
