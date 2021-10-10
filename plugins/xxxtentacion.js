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

r_text[0] = "https://i.ibb.co/Lpbn4yn/024eb6b7ed350a59d7c69cc2d20c628f.jpg";
r_text[1] = "https://i.ibb.co/yBk8hwY/04ea393be2184b0a570f21623fe61ad5.jpg";
r_text[2] = "https://i.ibb.co/gRqPLNZ/32d036804e12b96c0c01c15fde4d4afd.jpg";
r_text[3] = "https://i.ibb.co/BNHMyMR/20200319-100444-Copy-Copy-Copy-Copy.jpg";
r_text[4] = "https://i.ibb.co/ckHytNP/20200402-201324-Copy-Copy-Copy.jpg";
r_text[5] = "https://i.ibb.co/PT42NYJ/78354966c6869622f5a4b87eeba23686.jpg";

var i = Math.floor(201*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'Made by ROSYMWOL'})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'tentacion', fromMe: false, desc:'random tentacion images '}, (async (message, match) => {

    var r_text = new Array ();

r_text[0] = "https://i.ibb.co/Lpbn4yn/024eb6b7ed350a59d7c69cc2d20c628f.jpg";
r_text[1] = "https://i.ibb.co/yBk8hwY/04ea393be2184b0a570f21623fe61ad5.jpg";
r_text[2] = "https://i.ibb.co/gRqPLNZ/32d036804e12b96c0c01c15fde4d4afd.jpg";
r_text[3] = "https://i.ibb.co/BNHMyMR/20200319-100444-Copy-Copy-Copy-Copy.jpg";
r_text[4] = "https://i.ibb.co/ckHytNP/20200402-201324-Copy-Copy-Copy.jpg";
r_text[5] = "https://i.ibb.co/PT42NYJ/78354966c6869622f5a4b87eeba23686.jpg";


    var i = Math.floor(201*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'Made by ROSYMWOL'})

    }));
}
