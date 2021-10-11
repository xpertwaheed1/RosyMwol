const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'menu', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://github.com/DEVILSER/Media/raw/main/image/logo.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓

            ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ

┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛

🌹ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅs🌹

┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
┣𝕾⃝🌹 ᴀᴅᴅ
┣𝕾⃝🌹 ᴋɪᴄᴋ
┣𝕾⃝🌹 ᴍᴜᴛᴇ
┣𝕾⃝🌹 ᴜɴᴍᴜᴛᴇ
┣𝕾⃝🌹 ᴘʀᴏᴍᴏᴛᴇ
┣𝕾⃝🌹 ᴅᴇᴍᴏᴛᴇ
┣𝕾⃝🌹 ɪɴᴠɪᴛᴇ
┣𝕾⃝🌹 ʀᴇᴠᴏᴋᴇ
┣𝕾⃝🌹 ᴊᴏɪɴ
┣𝕾⃝🌹 ᴡᴇʟᴄᴏᴍᴇ
┣𝕾⃝🌹 ɢᴏᴏᴅʙʏᴇ
┣𝕾⃝🌹 ʙᴀɴʙʏᴇ
┣𝕾⃝🌹 ʟᴇғᴛ
┣𝕾⃝🌹 ᴡᴀʀɴ
┣𝕾⃝🌹 ᴠᴏᴛᴇ
┣𝕾⃝🌹 ᴛᴀɢ
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍

🎥 ᴅᴏᴡɴʟᴏᴅ ᴄᴏᴍᴍᴀɴᴅs🎥

┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
┣𝕾⃝🎥 ʏᴛᴠ
┣𝕾⃝🎥 ʏᴛs
┣𝕾⃝🎥 sᴏɴɢ
┣𝕾⃝🎥 ᴠɪᴅᴇᴏ
┣𝕾⃝🎥 ɪɴsᴛᴀ
┣𝕾⃝🎥 sᴛᴏʀʏ
┣𝕾⃝🎥 ғʙ
┣𝕾⃝🎥 ɪᴍɢ
┣𝕾⃝🎥 ᴡɪᴋɪ
┣𝕾⃝🎥 ᴛɪᴋᴛᴏᴋ
┣𝕾⃝🎥 ᴛᴡɪᴛᴛᴇʀ
┣𝕾⃝🎥 ᴘɪɴᴛʀᴇsᴛ
┣𝕾⃝🎥 ᴍᴇᴅɪᴀғɪʀᴇ
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍

🌺 ᴍɪsᴄ ᴄᴏᴍᴍᴀɴᴅs🌺

┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
┣𝕾⃝🌺 ᴡᴀsᴛᴇᴅ
┣𝕾⃝🌺 ᴛʀɪɢɢᴇᴅ
┣𝕾⃝🌺 ʜɪsᴛᴏ
┣𝕾⃝🌺 ᴠᴇᴄᴛᴏʀ
┣𝕾⃝🌺 ᴀᴠᴇᴄ
┣𝕾⃝🌺 ᴍᴘ3
┣𝕾⃝🌺 sᴛɪᴄᴋᴇʀ
┣𝕾⃝🌺 ᴘʜᴏᴛᴏ
┣𝕾⃝🌺 ʀᴇᴠᴇʀᴄᴇ
┣𝕾⃝🌺 ᴄᴜᴛ
┣𝕾⃝🌺 ᴛʀɪᴍ
┣𝕾⃝🌺 ʀᴏᴛᴀᴛᴇ
┣𝕾⃝🌺 ᴍᴇʀɢᴇ
┣𝕾⃝🌺 ᴄᴏᴍᴘʀᴇss
┣𝕾⃝🌺 ʙᴀss
┣𝕾⃝🌺 ᴛʀᴇʙʟᴇ
┣𝕾⃝🌺 ᴘɪᴛᴄʜ
┣𝕾⃝🌺 ʟᴏᴡ
┣𝕾⃝🌺 ᴛᴛs
┣𝕾⃝🌺 ᴜɴᴠᴏɪᴄᴇ
┣𝕾⃝🌺 ᴠᴏɪᴄᴇ
┣𝕾⃝🌺 ʀᴇᴍᴏᴠᴇʙɢ
┣𝕾⃝🌺 ᴀᴛᴛᴘ
┣𝕾⃝🌺 ᴇᴍᴏᴊɪ
┣𝕾⃝🌺 ғɪɴᴅ
┣𝕾⃝🌺 ᴛʀᴛ
┣𝕾⃝🌺 ᴘʟᴜɢɪɴ
┣𝕾⃝🌺 ᴘʟᴜɢɪɴ ʟɪsᴛ
┣𝕾⃝🌺 ʀᴇᴍᴏᴠᴇ
┣𝕾⃝🌺 ғɪʟᴛᴇʀ
┣𝕾⃝🌺 ᴊɪᴅ
┣𝕾⃝🌺 ʙʟᴏᴄᴋ
┣𝕾⃝🌺 ᴜɴʙʟᴏᴄᴋ
┣𝕾⃝🌺 sᴇᴛᴀʙᴏᴜᴛ
┣𝕾⃝🌺 sᴇᴛsᴛᴀᴛᴜs
┣𝕾⃝🌺 ᴛᴀᴋᴇ
┣𝕾⃝🌺 ʙʀᴏᴀᴅᴄᴀsᴛ
┣𝕾⃝🌺 ᴜʀʟ
┣𝕾⃝🌺 ᴡʜᴏɪs
┣𝕾⃝🌺 sʜᴇᴅᴜʟᴇ
┣𝕾⃝🌺 ᴘɪɴɢ
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍

🎀 ʜᴇʀᴏᴋᴜ ᴄᴏᴍᴍᴀɴᴅs🎀

┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
┣𝕾⃝🎀 ʀᴇsᴛᴀʀᴛ
┣𝕾⃝🎀 sʜᴜᴛᴅᴏᴡɴ
┣𝕾⃝🎀 sᴇᴛᴠᴀʀ
┣𝕾⃝🎀 ɢᴇᴛᴠᴀʀ
┣𝕾⃝🎀 ᴀʟʟᴠᴀʀ
┣𝕾⃝🎀 ᴜᴘᴅᴀᴛᴇ
┣𝕾⃝🎀 ᴜᴘᴅᴀᴛᴇ ɴᴏᴡ
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍

  key: {

    fromMe: false,

    participant: "0@s.whatsapp.net",

    remoteJid: "status@broadcast"

  },

  message: {

    "extendedTextMessage": {

      "text": "ROSYMWOL"

    }

`}) 

}));
