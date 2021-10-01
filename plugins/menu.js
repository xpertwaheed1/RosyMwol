//codded by devil-ser



const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')


 Asena.addCommand({ pattern: 'menu ?(.*)', fromMe: false, desc: 'Test button and list Message' }, (async (message, match) => {

    const button = {
        buttonText: 'Click Here!',
        description: "menu test",
        sections: sections,
        listType: 1
    }
    await message.client.sendMessage(message.jid, button, MessageType.listMessage)
  }))
