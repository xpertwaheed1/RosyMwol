/* Copyright (C) 2021 DEVILSER.

Licensed under the  GPL-3.0 License;

you may not use this file except in compliance with the License.

DEVILSER

wa.me/919656459062

*/

const Neotro = require('../events');

const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');

const fs = require('fs');

const Config = require('../config')

const axios = require('axios')

const request = require('request');

const os = require('os');

var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    

var ggg = Buffer.from(clh.cd, 'base64')

var ddd = ggg.toString('utf-8')

Neotro.addCommand({pattern: 'menu', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

// send a list message!

    const rows = [


        {title: '🎯 Help', description: ".list"}

       ]

       

       const sections = [{title: "ROSYMWOL ❤️", rows: rows}]

       

       const button = {

        buttonText: 'MENU',

        description: "ROSYMWOL",

        sections: sections,

        listType: 1

       }

       

       await message.client.sendMessage(message.jid, button, MessageType.listMessage)

    

    }));
