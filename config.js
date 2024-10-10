//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Loukson/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://iili.io/dmKqfTP.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "22502331988";
global.owner = process.env.OWNER_NUMBER || "22502331988";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://iili.io/dmKqfTP.jpg,https://iili.io/dbuMtaa.jpg:
https://iili.io/dmKqfTP.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0hvcFB1UlJFNzg0bEV0SlhLdk1FY0tqQy9ZQTVlL0VtK3dUZzl1NFJWVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNW1SVkRsSzRuT1A2VzdUT0lqN1puNThLNmxIODl3em10MlVlOG0vMEt3Zz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrUG5qbGNoaHNGZ2lxUGtTbWRkcWhuMWFaeWZOdFB0U0I5ZFkwdUhKbjNrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrc1NHeDd6LzFKSlJKOHFBQndxZ2p3SStWd3lXM1pPT1EzMjYzT2h1dURvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFMYXlFd1RsbzlQWWl1cXNUUDd0Z0EzL25tcXB3cXRGeUZzOGdUTGxFMnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxXeGc2QjNZdXBVandJakhEYmp3SFlxQmJ5OCtER2Flek8zWERVS3o2VlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUp1SzFrMHQ5MVBWSzhZdHNIOXdIU3oxdHNxQ3V0OUIvVlVyMC92WDVXQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXcydkdXYzQxczNkMXNqVCtHMDVJaktwYlRKdEUzckIxVzZlZ2pLOHR4bz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpyOU9XSk9PN0FyclJneUxmY09oRGZFODFTN01naitETURPSEk0bFVSNGN0V0ovYzRkMEJXVkljWjFjckV4R1lQdDVpemI1bXRXaWNocjNEbVU4ZER3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgwLCJhZHZTZWNyZXRLZXkiOiI4WHdZTWxDZS8zemNxUFBlcHNUTnBjODB3WG1zc1NzTU1Fc3BWa0VDUmhRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJwS2FhTFBkZ1JQV041UkxKSDJnNjBRIiwicGhvbmVJZCI6ImIyYWRkNGYzLTNmYjItNDdmNS04MjU1LTYyNTExNGE3OGZkOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoVGo4eDV0Qml4N0wrZGgyMnpMMGRzTEU3dVE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicWF6K2QrTHZ1QjEwVVRrVGRQTXdscndYZjRJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNMTkJFQkxBIiwibWUiOnsiaWQiOiIyMjUwMjMzMTk4ODoxN0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZCL8J2ar/CdkJTwnZCK8J2QkvCdmq/wnZq0LfCdkJTwnZqt8J2QlPCdmrPwnZqr8J2QivCdmrAifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xUY3o0b0RFTXlVb2JnR0dEb2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlNxU0JJL013MUtYT3VtbW5QWWRQZmQ3K1hCSjNYcHJRSGJ4YkloeHB5WDg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkFJMHRaUEdneGVUbHdrY1Q4Q0NBejk4MDh5WXgxMVdsQWovRzVOanRCWXBOZG0veGdFelpPVVlPanp0VzFDdzlqUzRvYiswZXdZTnJGMk5uZGxBd0NnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ2S2wzSkplWVpuUmQwWXhVY1pPSGlKREovcGk3eThMZ3E4Ykk5QjU3NjZLNEZDcVJFOW9wTmZOZkQrYTNKVFFDc0tQbjlMcGt5dTB3Wk83bWt1S0NEUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIyNTAyMzMxOTg4OjE3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVxa2dTUHpNTlNsenJwcHB6MkhUMzNlL2x3U2QxNmEwQjI4V3lJY2FjbC8ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjg1OTY1NzAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRlNjIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "NARUTO-MD🍃`",
  author: process.env.PACK_AUTHER || "𝐋𝚯𝐔𝐊𝐒𝚯𝚴-𝐔𝚭𝐔𝚳𝚫𝐊𝚰",
  packname: process.env.PACK_NAME || "𝐋𝚯𝐔𝐊𝐒𝚯𝚴-𝐔𝚭𝐔𝚳𝚫𝐊𝚰",
  botname: process.env.BOT_NAME || "NARUTO-MD",
  ownername: process.env.OWNER_NAME || "𝐋𝚯𝐔𝐊𝐒𝚯𝚴-𝐔𝚭𝐔𝚳𝚫𝐊𝚰",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
