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

    Asena.addCommand({pattern: 'rashmika', fromMe: true, desc: 'random rashmika images'}, (async (message, match) => {

    var r_text = new Array ();

r_text[0] = "https://raw.githubusercontent.com/devil-ser/devil-ser/main/Photos/xxxtentacion/IMG-20211009-WA0093.jpg";
r_text[1] = "https://raw.githubusercontent.com/devil-ser/devil-ser/main/Photos/xxxtentacion/IMG-20211009-WA0094.jpg";
r_text[2] = "https://raw.githubusercontent.com/devil-ser/devil-ser/main/Photos/xxxtentacion/IMG-20211009-WA0103.jpg";
r_text[3] = "https://raw.githubusercontent.com/devil-ser/devil-ser/main/Photos/xxxtentacion/IMG-20211010-WA0188.jpg";
r_text[4] = "https://raw.githubusercontent.com/devil-ser/devil-ser/main/Photos/xxxtentacion/IMG-20211010-WA0189.jpg";
r_text[5] = "https://raw.githubusercontent.com/devil-ser/devil-ser/main/Photos/xxxtentacion/IMG_20211010_175947.jpg";

var i = Math.floor(201*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'Made by ROSYMWOL'})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'rashmika', fromMe: false, desc:'random rashmika images '}, (async (message, match) => {

    var r_text = new Array ();

r_text[0] = "https://raw.githubusercontent.com/devil-ser/devil-ser/main/Photos/xxxtentacion/IMG-20211009-WA0093.jpg";
r_text[1] = "https://raw.githubusercontent.com/devil-ser/devil-ser/main/Photos/xxxtentacion/IMG-20211009-WA0094.jpg";
r_text[2] = "https://raw.githubusercontent.com/devil-ser/devil-ser/main/Photos/xxxtentacion/IMG-20211009-WA0103.jpg";
r_text[3] = "https://raw.githubusercontent.com/devil-ser/devil-ser/main/Photos/xxxtentacion/IMG-20211010-WA0188.jpg";
r_text[4] = "https://raw.githubusercontent.com/devil-ser/devil-ser/main/Photos/xxxtentacion/IMG-20211010-WA0189.jpg";
r_text[5] = "https://raw.githubusercontent.com/devil-ser/devil-ser/main/Photos/xxxtentacion/IMG_20211010_175947.jpg";


    var i = Math.floor(201*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'Made by ROSYMWOL'})

    }));
}
