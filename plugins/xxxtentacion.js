/* Copyright (C) 2021 DEVILSER.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DEVILSER - devil-ser
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'tentacion', fromMe: true, desc: 'random tentacion images'}, (async (message, match) => {

    var r_text = new Array ();

r_text[0] = "http://m.gettywallpapers.com/wp-content/uploads/2020/01/XXXTentacion-Wallpaper-HD.png";
r_text[1] = "http://m.gettywallpapers.com/wp-content/uploads/2020/01/Wallpaper-XxxTentacion.jpg";
r_text[2] = "http://m.gettywallpapers.com/wp-content/uploads/2020/01/Wallpapers-XxxTentacion.jpg";
r_text[3] = "http://m.gettywallpapers.com/wp-content/uploads/2020/01/XxxTentacion-Wallpaper-Download.jpg";
r_text[4] = "http://m.gettywallpapers.com/wp-content/uploads/2020/01/XxxTentacion-HD-Backgrounds.jpg";
r_text[5] = "http://m.gettywallpapers.com/wp-content/uploads/2020/01/XxxTentacion-Wallpaper.jpg";

var i = Math.floor(201*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'Made by ROSYMWOL'})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'tentacion', fromMe: false, desc:'random tentacion images '}, (async (message, match) => {

    var r_text = new Array ();

r_text[0] = "http://m.gettywallpapers.com/wp-content/uploads/2020/01/XXXTentacion-Wallpaper-HD.png";
r_text[1] = "http://m.gettywallpapers.com/wp-content/uploads/2020/01/Wallpaper-XxxTentacion.jpg";
r_text[2] = "http://m.gettywallpapers.com/wp-content/uploads/2020/01/Wallpapers-XxxTentacion.jpg";
r_text[3] = "http://m.gettywallpapers.com/wp-content/uploads/2020/01/XxxTentacion-Wallpaper-Download.jpg";
r_text[4] = "http://m.gettywallpapers.com/wp-content/uploads/2020/01/XxxTentacion-HD-Backgrounds.jpg";
r_text[5] = "http://m.gettywallpapers.com/wp-content/uploads/2020/01/XxxTentacion-Wallpaper.jpg";


    var i = Math.floor(201*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'Made by ROSYMWOL'})

    }));
}
