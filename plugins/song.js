const Asena = require("../Utilis/events");
const { MessageType, Mimetype } = require("@adiwajshing/baileys");
const translatte = require("translatte");
const config = require("../config");
//============================== TTS ==================================================
const fs = require("fs");
const { getBuffer } = require("../Utilis/download");
const { SpeachToText, generateListMessage } = require("../Utilis/Misc");
//=====================================================================================
//============================== YOUTUBE ==============================================
const ytdl = require("ytdl-core");
const yts = require("yt-search");
const ytid =
  /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
//=====================================================================================
const Language = require("../language");
const Lang = Language.getString("scrapers");
const wiki = require("wikijs").default;
const gis = require("g-i-s");
const { song } = require("../Utilis/fFmpeg");
let fm = true;

Asena.addCommand(
  { pattern: "isong ?(.*)", fromMe: true, desc: Lang.SONG_DESC },
  async (message, match) => {
    match = !message.reply_message ? match : message.reply_message.text;
    if (match === "")
      return await message.sendMessage(Lang.NEED_TEXT_SONG, {
        quoted: message.data,
      });
    if (!ytid.test(match)) {
      let arama = await yts(match);
      arama = arama.all;
      if (arama.length < 1)
        return await message.sendMessage(
          "```" + `${match} not found.` + "```",
          { quoted: message.data }
        );
      let msg = await generateListMessage(arama);
      return await message.sendMessage(msg, {}, MessageType.listMessage);
    }
    let bit = 192;
    if (
      (matched = match.match(
        "\\{((320)|(3[0-1][0-9]{1})|([1-2][0-9]{2})|([4-9][0-9]{1})|(3[2-9]))\\}"
      ))
    ) {
      bit = parseInt(matched[1]);
      match = match.replace(matched[0], "").trim();
    }
    try {
      let vid = ytid.exec(match)[1];
      await message.sendMessage(Lang.DOWNLOADING_SONG);
      let stream = ytdl(vid, {
        quality: "highestaudio",
      });
      let songname = new Date().getTime() + ".mp3";
      let buffer = await song(songname, stream, bit);
      if (!buffer) return await message.sendMessage('*Downloading failed*\n```Restart BOT```')
      return await message.sendMessage(
        buffer,
        {
          mimetype: Mimetype.mp4Audio,
          quoted: message.data,
          ptt: false,
        },
        MessageType.audio
      );
    } catch (error) {
      return await message.sendMessage("```" + `Downloading failed.` + "```", {
        quoted: message.data,
      });
    }
  }
);
