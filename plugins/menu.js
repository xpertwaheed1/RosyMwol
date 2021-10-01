//codded by devil-ser



const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')


 Asena.addCommand({ pattern: 'newb ?(.*)', fromMe: true, desc: 'Test button and list Message' }, (async (message, match) => {

    const rows = [
        { title: 'Menu Test', description: "kali pulla test", rowId: "rowid1" },
        { title: 'no', description: "sugam alla", rowId: "rowid2" }
    ]
    const sections = [{ title: "Section 1", rows: rows }]

    const button = {
        buttonText: 'Click Here!',
        description: "Test Version",
        sections: sections,
        listType: 1
    }
    await message.client.sendMessage(message.jid, button, MessageType.listMessage)
  }))
