const handler = async (m, { conn }) => { 
     const user = global.db.data.users[m.sender]; 
         conn.sendMessage(m.chat, {text: `[🍬] @${m.sender.split('@')[0]} 𝙔𝙖 𝙣𝙤𝙩𝙚𝙣𝙙𝙧𝙖𝙨𝙡𝙞𝙢𝙞𝙩𝙚𝙨𝙢𝙞𝙘𝙧𝙚𝙖𝙙𝙤𝙧.`, mentions: [m.sender]}, {quoted: m}); 
       global.db.data.users[m.sender].money = Infinity; 
     global.db.data.users[m.sender].limit = Infinity; 
   global.db.data.users[m.sender].level = Infinity; 
  global.db.data.users[m.sender].exp = Infinity; 
 }; 
 handler.help = ['cheat']; 
 handler.tags = ['owner']; 
 handler.command = /^(infinito|chetar)$/i; 
 handler.rowner = true; 
 handler.fail = null; 
 export default handler;
