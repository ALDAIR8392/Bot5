import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}};
    await conn.reply(m.chat, '𝙐𝙣 𝙈𝙤𝙢𝙚𝙣𝙩𝙤...',m, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '𝘾𝙤𝙢𝙤 𝙚𝙨𝙩𝙖𝙨?!!', body: 'bienvenido', sourceUrl: global.md, thumbnail: await (await fetch(pp)).buffer() }}})
//m.react('🗿');
    await conn.sendMessage(m.chat, { react: { text: '💖', key: m.key } })
  let txt =`┏━━━━━━━━━━━━━━━
┃ ✪ ⃟ 📋 𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒
┗━━━━━━━━━━━━━━━
┃╭──────────────
┃├⫹⫺ 𝙽𝙾𝙼𝙱𝚁𝙴 : ${𝚗𝚊𝚖𝚎}$
┃├⫹⫺ 𝙻𝙸𝙼𝙸𝚃𝙴 : ${𝚍𝚒𝚊𝚖𝚘𝚗𝚍}
┃├⫹⫺ 𝙽𝙸𝚅𝙴𝙻 : ${𝚕𝚎𝚟𝚎𝚕}
〬┃├⫹⫺ 𝚁𝙰𝙽𝙶𝙾 : ${𝚛𝚘𝚕𝚎}
┃├⫹⫺ 𝙴𝚇𝙿 : ${𝚎𝚡𝚙}
┃╰──────────────
┗━━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━
┃  ✪ ⃟📑 𝐈𝐍𝐅𝐎𝐁𝐎𝐓
┗━━━━━━━━━━━━━━━
┃╭──────────────
┃├⫹⫺ 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 : 𝐉𝐱𝐭𝐱𝐧𝟏𝟕
┃├⫹⫺ 𝙽𝚄𝙼𝙴𝚁𝙾: 𝚠𝚊.𝚖𝚎/𝟻𝟷𝟿𝟸𝟿𝟿𝟽𝟸𝟻𝟽𝟼
┃├⫹⫺ 𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${𝚞𝚙𝚝𝚒𝚖𝚎}
┃├⫹⫺ 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾𝚂 : ${𝚛𝚝𝚘𝚝𝚊𝚕𝚛𝚎𝚐} 𝐝𝐞 ${𝚝𝚘𝚝𝚊𝚕𝚛𝚎𝚐}𝐮𝐬𝐮𝐚𝐫𝐢𝐨𝐬:
┃╰────────────── 
┗━━━━━━━━━━━━━━━━━━

┏━━━━━━━━━━━━━━━━
┃ ✪ ⃟📅 𝐇𝐎𝐘
┗━━━━━━━━━━━━━━━
┃┋⫹⫺ 𝙵𝙴𝙲𝙷𝙰 : ${𝚍𝚊𝚝𝚎}
〬┗━━━━ ≪ •❈• ≫ ━━━━━┛

┏━━━━━━━━━━━━━━━━
┃  ✪ ⃟🧾 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍
┗━━━━━━━━━━━━━━━
〬┃┋ႌ〬⫹⫺ .𝚎𝚜𝚝𝚊𝚍𝚘
┃┋ႌ〬⫹⫺ .𝚘𝚠𝚗𝚎𝚛
〬┃┋ႌ〬⫹⫺ .𝚐𝚛𝚘𝚞𝚙𝚕𝚒𝚜𝚝
┃┋ႌ〬⫹⫺ .𝚍𝚘𝚗𝚊𝚛
┃┋ႌ〬⫹⫺ .𝚐𝚛𝚞𝚙𝚘𝚜
┃┋ႌ〬⫹⫺ .𝚒𝚗𝚏𝚘𝚋𝚘𝚝
〬┃┋ႌ〬⫹⫺ .𝚌𝚞𝚎𝚗𝚝𝚊𝚜
〬┃┋ႌ〬⫹⫺ .𝚛𝚎𝚙𝚘𝚛𝚝𝚎
┃┋ႌ〬⫹⫺ .𝚓𝚘𝚒𝚗
┃┋ႌ〬⫹⫺ .𝚋𝚘𝚝
┗━━━━ ≪ •❈• ≫ ━━━━┛

┏━━━━━━━━━━━━━━━━
┃ ✪ ⃟🖥 𝐉𝐀𝐃𝐈𝐁𝐎𝐓
┗━━━━━━━━━━━━━━━
┃┋ႌ〬⫹⫺ .𝚜𝚎𝚛𝚋𝚘𝚝
┃┋ႌ〬⫹⫺ .𝚓𝚊𝚍𝚒𝚋𝚘𝚝
┃┋ႌ〬⫹⫺ .𝚋𝚘𝚝𝚜
┃┋ႌ〬⫹⫺ .𝚍𝚎𝚕𝚎𝚝𝚎𝚜𝚎𝚜𝚒𝚘𝚗
┃┋ႌ〬⫹⫺ .𝚜𝚝𝚘𝚙
〬┗━━━━ ≪ •❈• ≫ ━━━━┛

┏━━━━━━━━━━━━━━━━
┃ ✪ ⃟🚀 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒
┗━━━━━━━━━━━━━━━
┃┋ႌ〬⫹⫺ .𝚙𝚕𝚊𝚢
┃┋ႌ〬⫹⫺ .𝚙𝚕𝚊𝚢𝟸
┃┋ႌ〬⫹⫺ .𝚢𝚝𝚊
┃┋ႌ〬⫹⫺ .𝚢𝚝𝚟
┃┋ႌ〬⫹⫺ .𝚏𝚊𝚌𝚎𝚋𝚘𝚘𝚔
┃┋ႌ〬⫹⫺ .𝚝𝚒𝚔𝚝𝚘𝚔
┃┋ႌ〬⫹⫺ .𝚒𝚗𝚜𝚝𝚊𝚐𝚛𝚊𝚖
┃┋ႌ〬⫹⫺ .𝚐𝚒𝚝𝚌𝚕𝚘𝚗𝚎
┃┋ႌ〬⫹⫺ .𝚙𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝
┃┋ႌ〬⫹⫺ .𝚒𝚖𝚊𝚐𝚎𝚗
┃┋ႌ〬⫹⫺ .𝚖𝚎𝚍𝚒𝚊𝚏𝚒𝚛𝚎
〬〬┗━━━━  ≪ •❈• ≫ ━━━━┛

┏━━━━━━━━━━━━━━━━
┃  ✪ ⃟🔎 𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒
┗━━━━━━━━━━━━━━━
┃┋ႌ〬⫹⫺ .𝚐𝚘𝚘𝚐𝚕𝚎
┃┋ႌ〬⫹⫺ .𝚢𝚝𝚜
〬┗━━━━ ≪ •❈• ≫ ━━━━┛

┏━━━━━━━━━━━━━━━━
┃ ✪ ⃟🛰 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒
┗━━━━━━━━━━━━━━━
┃┋ႌ〬⫹⫺ .𝚝𝚘𝚒𝚖𝚐
┃┋ႌ〬⫹⫺ .𝚝𝚘𝚖𝚙𝟹
┃┋ႌ〬⫹⫺ .𝚝𝚘𝚙𝚝𝚝
┃┋ႌ〬⫹⫺ .𝚝𝚘𝚞𝚛𝚕
┃┋ႌ〬⫹⫺ .𝚝𝚘𝚟𝚒𝚍𝚎𝚘
┃┋ႌ〬⫹⫺ .𝚝𝚝𝚜
〬┗━━━━ ≪ •❈• ≫ ━━━━┛

┏━━━━━━━━━━━━━━━━
┃ ✪ ⃟🔊 𝐀𝐔𝐃𝐈𝐎𝐒-𝐄𝐅𝐄𝐂𝐓𝐎𝐒
┗━━━━━━━━━━━━━━━
┃┋ႌ〬⫹⫺ .𝚋𝚊𝚜𝚜
┃┋ႌ〬⫹⫺ .𝚋𝚕𝚘𝚠𝚗
┃┋ႌ〬⫹⫺ .𝚍𝚎𝚎𝚙
┃┋ႌ〬⫹⫺ .𝚎𝚊𝚛𝚛𝚊𝚙𝚎
┃┋ႌ〬⫹⫺ .𝚏𝚊𝚜
┃┋ႌ〬⫹⫺ .𝚏𝚊𝚜𝚝
┃┋ႌ〬⫹⫺ .𝚗𝚒𝚐𝚑𝚝𝚌𝚘𝚛𝚎
┃┋ႌ〬⫹⫺ .𝚛𝚎𝚟𝚎𝚛𝚜𝚎
┃┋ႌ〬⫹⫺ .𝚛𝚘𝚋𝚘𝚝
┃┋ႌ〬⫹⫺ .𝚜𝚕𝚘𝚠
┃┋ႌ〬⫹⫺ .𝚜𝚖𝚘𝚘𝚝𝚑
┃┋ႌ〬⫹⫺ .𝚝𝚞𝚙𝚊𝚒
┃┋ႌ〬⫹⫺ .𝚜𝚚𝚞𝚒𝚛𝚛𝚎𝚕
┃┋ႌ〬⫹⫺ .𝚌𝚑𝚒𝚙𝚖𝚞𝚗𝚔
〬┗━━━━ ≪ •❈• ≫ ━━━━┛

┏━━━━━━━━━━━━━━━━
┃ ✪ ⃟🛠 𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒
┗━━━━━━━━━━━━━━━
┃┋ႌ〬⫹⫺ .𝚊𝚌𝚘𝚛𝚝𝚊𝚛
┃┋ႌ〬⫹⫺ .𝚚𝚛
┃┋ႌ〬⫹⫺ .𝚍𝚎𝚕𝚎𝚝𝚎
┃┋ႌ〬⫹⫺ .𝚛𝚎𝚊𝚍𝚖𝚘𝚛𝚎
┃┋ႌ〬⫹⫺ .𝚜𝚝𝚢𝚕𝚎𝚝𝚎𝚡𝚝
〬┗━━━━ ≪ •❈• ≫ ━━━━┛


┏━━━━━━━━━━━━━━━━
┃ ✪ ⃟🎪 𝐉𝐔𝐄𝐆𝐎𝐒
┗━━━━━━━━━━━━━━━ 
┃┋ႌ〬⫹⫺ .𝚖𝚊𝚝𝚎𝚜
┃┋ႌ〬⫹⫺ .𝚖𝚊𝚝𝚑
┃┋ႌ〬⫹⫺ .𝚜𝚒𝚖𝚒
┃┋ႌ〬⫹⫺ .𝚜𝚞𝚎𝚛𝚝𝚎
┃┋ႌ〬⫹⫺ .𝚙𝚙𝚝
┃┋ႌ〬⫹⫺ .𝚝𝚒𝚌𝚝𝚊𝚌𝚝𝚘𝚎
┃┋ႌ〬⫹⫺ .𝚍𝚎𝚕𝚝𝚒𝚌𝚝𝚊𝚌𝚝𝚘𝚎
┃┋ႌ〬⫹⫺ .𝚝𝚘𝚙𝚐𝚊𝚢𝚜
┃┋ႌ〬⫹⫺ .𝚝𝚘𝚙𝚘𝚝𝚊𝚔𝚞𝚜
┃┋ႌ〬⫹⫺ .𝚐𝚊𝚢
┃┋ႌ〬⫹⫺ .𝚍𝚘𝚡𝚎𝚊𝚛
┃┋ႌ〬⫹⫺ .𝚙𝚛𝚎𝚐𝚞𝚗𝚝𝚊
┃┋ႌ〬⫹⫺ .𝚊𝚙𝚘𝚜𝚝𝚊𝚛
┃┋ႌ〬⫹⫺ .𝚜𝚕𝚘𝚝
┃┋ႌ〬⫹⫺ .𝚍𝚊𝚍𝚘
┗━━━━ ≪ •❈• ≫ ━━━━┛

┏━━━━━━━━━━━━━━━━
┃ ✪ ⃟⚙️ 𝐆𝐑𝐔𝐏𝐎𝐒
┗━━━━━━━━━━━━━━━
┃┋ႌ〬⫹⫺ .𝚐𝚛𝚞𝚙𝚘
┃┋ႌ〬⫹⫺ .𝚔𝚒𝚌𝚔
┃┋ႌ〬⫹⫺ .𝚊𝚍𝚍
┃┋ႌ〬⫹⫺ .𝚋𝚊𝚗𝚌𝚑𝚊𝚝
┃┋ႌ〬⫹⫺ .𝚞𝚗𝚋𝚊𝚗𝚌𝚑𝚊𝚝
┃┋ႌ〬⫹⫺ .𝚊𝚍𝚖𝚒𝚗𝚜
┃┋ႌ〬⫹⫺ .𝚒𝚗𝚏𝚘𝚐𝚛𝚘𝚞𝚙
┃┋ႌ〬⫹⫺ .𝚙𝚛𝚘𝚖𝚘𝚝𝚛
┃┋ႌ〬⫹⫺ .𝚍𝚎𝚖𝚘𝚝𝚎
┃┋ႌ〬⫹⫺ .𝚑𝚒𝚍𝚎𝚝𝚊𝚐
┃┋ႌ〬⫹⫺ .𝚝𝚊𝚐𝚊𝚕𝚕
┃┋ႌ〬⫹⫺ .𝚕𝚒𝚗𝚔
┃┋ႌ〬⫹⫺ .𝚋𝚊𝚗𝚌𝚑𝚊𝚝
┃┋ႌ〬⫹⫺ .𝚞𝚗𝚋𝚊𝚗𝚌𝚑𝚊𝚝
〬┗━━━━ ≪ •❈• ≫ ━━━━┛

┏━━━━━━━━━━━━━━━━
┃  ✪ ⃟✅ 𝐄𝐍𝐀𝐁𝐋𝐄/𝐃𝐈𝐒𝐀𝐁𝐋𝐄
┗━━━━━━━━━━━━━━━
┃┋ႌ〬⫹⫺ .𝚎𝚗𝚊𝚋𝚕𝚎 𝚠𝚎𝚕𝚌𝚘𝚖𝚎𝚎
┃┋ႌ〬⫹⫺ .𝚍𝚒𝚜𝚊𝚋𝚕𝚎 𝚠𝚎𝚕𝚌𝚘𝚖𝚎
┃┋ႌ〬⫹⫺ .𝚎𝚗𝚊𝚋𝚕𝚎 𝚙𝚞𝚋𝚕𝚒𝚌
┃┋ႌ〬⫹⫺ .𝚍𝚒𝚜𝚊𝚋𝚕𝚎 𝚙𝚞𝚋𝚕𝚒𝚌
┃┋ႌ〬⫹⫺ .𝚎𝚗𝚊𝚋𝚕𝚎 𝚊𝚗𝚝𝚒𝚕𝚒𝚗𝚔
┃┋ႌ〬⫹⫺ .𝚍𝚒𝚜𝚊𝚋𝚕𝚎 𝚊𝚗𝚝𝚒𝚕𝚒𝚗𝚔
┃┋ႌ〬⫹⫺ .𝚎𝚗𝚊𝚋𝚕𝚎 𝚊𝚗𝚝𝚒𝚕𝚒𝚗𝚔𝟸
┃┋ႌ〬⫹⫺ .𝚍𝚒𝚜𝚊𝚋𝚕𝚎 𝚊𝚗𝚝𝚒𝚕𝚒𝚗𝚔𝟸
┃┋ႌ〬⫹⫺ .𝚎𝚗𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝
┃┋ႌ〬⫹⫺ .𝚍𝚒𝚜𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝
┃┋ႌ〬⫹⫺ .𝚎𝚗𝚊𝚋𝚕𝚎 𝚊𝚞𝚝𝚘𝚛𝚎𝚊𝚍
┃┋ႌ〬⫹⫺ .𝚍𝚒𝚜𝚊𝚋𝚕𝚎 𝚊𝚞𝚝𝚘𝚛𝚎𝚊𝚍
┃┋ႌ〬⫹⫺ .𝚎𝚗𝚊𝚋𝚕𝚎 𝚍𝚎𝚝𝚎𝚌𝚝
┃┋ႌ〬⫹⫺ .𝚍𝚒𝚜𝚊𝚋𝚕𝚎 𝚍𝚎𝚝𝚎𝚌𝚝
┃┋ႌ〬⫹⫺ .𝚎𝚗𝚊𝚋𝚕𝚎 𝚙𝚌𝚘𝚗𝚕𝚢
┃┋ႌ〬⫹⫺ .𝚍𝚒𝚜𝚊𝚋𝚕𝚎 𝚙𝚌𝚘𝚗𝚕𝚢
┃┋ႌ〬⫹⫺ .𝚎𝚗𝚊𝚋𝚕𝚎 𝚐𝚌𝚘𝚗𝚕𝚢
┃┋ႌ〬⫹⫺ .𝚍𝚒𝚜𝚊𝚋𝚕𝚎 𝚐𝚌𝚘𝚗𝚕𝚢
┗━━━━ ≪ •❈• ≫ ━━━━┛

┏━━━━━━━━━━━━━━━━
┃ ✪ ⃟🎭 𝐑𝐏𝐆
┗━━━━━━━━━━━━━━━
┃┋ႌ〬⫹⫺ .𝚖𝚒𝚗𝚊𝚛
┃┋ႌ〬⫹⫺ .𝚖𝚒𝚗𝚊𝚛𝟹
┃┋ႌ〬⫹⫺ .𝚖𝚒𝚗𝚊𝚛𝚍𝚒𝚊𝚖𝚊𝚗𝚝𝚎𝚜
┃┋ႌ〬⫹⫺ .𝚍𝚊𝚒𝚕𝚢
┃┋ႌ〬⫹⫺ .𝚠𝚘𝚛𝚔
┃┋ႌ〬⫹⫺ .𝚊𝚏𝚔
┃┋ႌ〬⫹⫺ .𝚛𝚘𝚋𝚛
┃┋ႌ〬⫹⫺ .𝚕𝚒𝚖𝚒𝚝
┃┋ႌ〬⫹⫺ .𝚛𝚎𝚐
┃┋ႌ〬⫹⫺ .𝚞𝚗𝚛𝚎𝚐
┃┋ႌ〬⫹⫺ .𝚖𝚢𝚗𝚜
┃┋ႌ〬⫹⫺ .𝚙𝚎𝚛𝚏𝚒𝚕
┃┋ႌ〬⫹⫺ .𝚕𝚎𝚟𝚎𝚕𝚞𝚙
┃┋ႌ〬⫹⫺ .𝚑𝚎𝚊𝚕
┗━━━━ ≪ •❈• ≫ ━━━━┛

┏━━━━━━━━━━━━━━━━
┃ ✪ ⃟🛸 𝐒𝐓𝐈𝐂𝐊𝐄𝐑
┗━━━━━━━━━━━━━━━
┃┋ႌ〬⫹⫺ .𝚜
┃┋ႌ〬⫹⫺ .𝚠𝚖
〬┗━━━━ ≪ •❈• ≫ ━━━━┛

┏━━━━━━━━━━━━━━━━
┃ ✪ ⃟💎 𝐎𝐖𝐍𝐄𝐑
┗━━━━━━━━━━━━━━━
┃┋ႌ〬⫹⫺ .𝚞𝚙𝚍𝚊𝚝𝚎
┃┋ႌ〬⫹⫺ .𝚛𝚎𝚜𝚝𝚊𝚛𝚝
┃┋ႌ〬⫹⫺ .𝚊𝚞𝚝𝚘𝚊𝚍𝚖𝚒𝚗
┃┋ႌ〬⫹⫺ .𝚕𝚎𝚊𝚟𝚎
┃┋ႌ〬⫹⫺ .𝚜𝚊𝚕𝚒𝚛
┃┋ႌ〬⫹⫺ .𝚌𝚕𝚎𝚊𝚛𝚝𝚙𝚖
┃┋ႌ〬⫹⫺ .𝚋𝚌
┃┋ႌ〬⫹⫺ .𝚋𝚌𝚚𝚌
┃┋ႌ〬⫹⫺ .𝚋𝚌𝚌
┃┋ႌ〬⫹⫺ .𝚋𝚊𝚗𝚞𝚜𝚎𝚛
┃┋ႌ〬⫹⫺ .𝚞𝚗𝚋𝚊𝚗𝚞𝚜𝚎𝚛
┃┋ႌ〬⫹⫺ .𝚓𝚘𝚒𝚗
┃┋ႌ〬⫹⫺ .𝚛𝚎𝚗𝚊𝚖𝚎𝚙𝚕𝚞𝚐
┃┋ႌ〬⫹⫺ .𝚍𝚎𝚕𝚎𝚝𝚎𝚙𝚕𝚞𝚐𝚒𝚗
┃┋ႌ〬⫹⫺ .𝚞𝚗𝚋𝚊𝚗𝚞𝚜𝚎𝚛
┃┋ႌ〬⫹⫺ .𝚜𝚎𝚝𝚋𝚘𝚝𝚗𝚊𝚖𝚎
〬┗━━━━ ≪ •❈• ≫ ━━━━┛`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": '☆ 𝘽𝘼𝙄𝙇𝙀𝙔 - 𝗕𝗢𝗧 - 𝗠𝗗 ☆', "containsAutoReply": true, "mediaType": 1, "thumbnail": [imagen6,imagen1,imagen4].getRandom(), "mediaUrl": global.gp1, "sourceUrl": global.gp1}}}, {quoted: fkon});
 // m.react('🗿');
  } catch {
    conn.reply(m.chat, '[❗𝐈𝐍𝐅𝐎❗] El menú tiene un error, reportalo al creador..', m);
  }
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menu|menú|COMANDOS|comandos)$/i;
handler.register = true
export default handler;