import fs from "fs"
let handler = async (m, { conn, command }) => {
let estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: {orderMessage: { itemCount : 2023, status: 1, surface : 1, message: 'By Jxtxn ©', orderTitle: 'Bang', thumbnail: fs.readFileSync('./storage/logos/Menu2.jpg'), sellerJid: '0@s.whatsapp.net'}}}
let foto = './storage/imagenes/grupos.jpg'
let texto = `𝘽𝙞𝙚𝙣𝙫𝙚𝙣𝙞𝙙𝙤 𝙖 𝙡𝙤𝙨 𝙜𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 𝙙𝙚 ${global.wm} 𝙏𝙚𝙣𝙜𝙖 𝘽𝙪𝙚𝙣 𝙙𝙞́𝙖!
╍╍╍╍╍╍╍╍╍╍┅
*${nn}*
╍╍╍╍╍╍╍╍╍╍╍╍
*${nnn}*
╍╍╍╍╍╍╍╍╍╍╍╍
*${channel}*
╍╍╍╍╍╍╍╍╍╍╍╍

𝙏𝙖𝙢𝙗𝙞𝙚́𝙣 𝙥𝙪𝙚𝙙𝙚𝙨 𝙪𝙣𝙞𝙧𝙩𝙚 𝙖 𝙤𝙩𝙧𝙤𝙨 𝙜𝙧𝙪𝙥𝙤𝙨 𝙘𝙤𝙢𝙤
╍╍╍╍╍╍╍╍╍╍╍
*${Curiosity}
╍╍╍╍╍┅╍╍╍┅╍`
await conn.sendFile(m.chat, foto, 'Curiosity.jpg', texto, estilo)}

handler.tags = ['main']
handler.command = /^gruposcb|grupos|groups$/i
handler.exp = 35
handler.register = true
export default handler
